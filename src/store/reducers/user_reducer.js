
//import {b64toBlob} from  '../../components/utils/document_tools'
import {LOGIN_USER, USER_REGISTER, AUTH_USER, USER_LOGOUT,LOGIN_FAILURE,
        USER_PASSWORD_CHANGE,USER_PROFILE,USER_PROXY,USER_HOMEPAGECOUNTS,USER_PROXYLIST,USER_LOGINNAME_VERIFY,
        USER_AUTHNUMBER_LIST,USER_AUTHNUMBER_GET,USER_AUTHNUMBER_UPDATE,USER_CONSENT_ADD,USER_NOTE,USER_NOTEUPDATE,USER_NOTELIST,
        LOGIN_SETUP,LOGIN_CONFIRM, PATIENT_PHOTO, USER_CONFIRMCODE_VALIDATE,USER_CONFIRMCODE_SEND,USER_CONFIRMCODE_FAILURE,
        SAVE_FAILURE,RETREIVE_FAILURE,SEND_FAILURE,FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET,FORM_ERROR
        } from '../api/types'

//=============================================================================
// userreducer
//=============================================================================
export default function(state={},action){
    switch(action.type){
        /* standard retrieve data */
        case USER_AUTHNUMBER_GET: 
        case USER_PROFILE:
        case USER_PROXY:
        case USER_PROXYLIST: 
        case USER_AUTHNUMBER_LIST: 
        case USER_HOMEPAGECOUNTS: 
        case USER_NOTELIST:
        case USER_NOTE:     
             return {...state, data: action.payload, error:'',loading: false}    
        /* standard send data */
        case USER_AUTHNUMBER_UPDATE: 
        case USER_NOTEUPDATE:
        case USER_CONSENT_ADD:
        case USER_CONFIRMCODE_SEND: 
        case USER_PASSWORD_CHANGE:
             return {...state, data: action.payload, error:'',iserror:false, sendSuccess:true }
        case LOGIN_USER: 
            return {...state,loginSuccess:true, error:'',isError:false,data:action.payload}    
        case LOGIN_CONFIRM: 
        case LOGIN_SETUP: 
            return {...state,loading:false,error:'',data:action.payload,success:true}  
        case USER_CONFIRMCODE_VALIDATE: 
             let validated = action.payload.success
             // FOR TESTING 
              validated = true
             // FOR TESTING
             return {...state,success:validated, error:'',isError:!validated,data:action.payload}   
        case USER_CONFIRMCODE_FAILURE: 
            return {...state,success:false, error:'Unable to Confirm Code',isError:true,data:action.payload}  
        case LOGIN_FAILURE: 
             return {...state,loginSuccess:false, error:action.payload.message,isError:true,data:action.payload}     
        case USER_REGISTER: 
             return {...state, registerSuccess: action.payload}   
        case AUTH_USER: 
             return {...state, userdata: action.payload}   
        case USER_LOGOUT: 
            return state
        case PATIENT_PHOTO:
  /*            let photoBlob = {}
              let photoUrl = ''
               if (action.payload && action.payload.recordset && action.payload.recordset.length > 0){
                   photoBlob = b64toBlob(action.payload.recordset[0].doc_binary) // base64 to blob
                   photoUrl  = URL.createObjectURL(photoBlob);     // blob to url     
               }
               return {...state, data: action.payload,loading:false ,error:'',photo:photoUrl}     
    */
   return {...state} 
        case RETREIVE_FAILURE: 
             return {...state, data: {}, error:'Unable to retrieve the data',loading:false} 
        case FORM_VALIDATION_RESET: 
             return {...state,sendSuccess:false, error:'',isError:false}            
        case FORM_ERROR: 
             return {...state,sendSuccess:false, error:action.payload,isError:true}  
        case FORM_VALIDATION_FAILURE:
             return {...state,sendSuccess:false, error:action.error || action.payload,isError:true}        
        case SAVE_FAILURE: 
             return {...state,sendSuccess:false, error:'Unable to save the data',isError:true}
        case SEND_FAILURE: 
             return {...state,sendSuccess:false, error:'Failed to send the Message',isError:true}                              
        default : 
           return state;
    }
}
//=============================================================================