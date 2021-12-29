
import {PATIENT_PERSONALDATA,PATIENT_DEMOGRAPHIC_UPDATE,PATIENT_INSURANCE,PATIENT_INSURANCEUPDATE,
        PATIENT_PROVIDERTDATA,PATIENT_CONTACTS,PATIENT_CONTACTUPDATE,
        PATIENT_PHARMACIES,PATIENT_PROFILE,PATIENT_BILLING,
        FINANCE_BALANCE,FINANCE_CHARGES,
        PATIENT_REGISTERUPDATE,PATIENT_REGISTERDATA,PATIENT_REGISTER_LOGINNAME_VERIFY,
        PATIENT_PROVIDERWORKPLACE,PATIENT_PHOTO,PATIENT_PROXY,
        SAVE_FAILURE,RETREIVE_FAILURE,SEND_FAILURE,FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET,FORM_ERROR
        } from '../api/types'
import {b64toBlob} from  '../../components/utils/document_tools'

//=============================================================================
// userreducer
//=============================================================================
export default function(state={},action){
    switch(action.type){
        case PATIENT_PERSONALDATA:
        case PATIENT_PROFILE:
        case PATIENT_PROXY:
        case PATIENT_CONTACTS:
        case PATIENT_REGISTERDATA:
        case PATIENT_INSURANCE:
        case PATIENT_PROVIDERTDATA:
        case PATIENT_PROVIDERWORKPLACE:
        case PATIENT_BILLING:
        case PATIENT_PHARMACIES:
        case FINANCE_BALANCE: 
        case FINANCE_CHARGES: 
                return {...state, data: action.payload,loading:false ,error:''}        
        case PATIENT_REGISTERUPDATE: 
             return {...state, data: action.payload, error:'', sendSuccess: true,success: true}
        case PATIENT_DEMOGRAPHIC_UPDATE:
        case PATIENT_CONTACTUPDATE: 
        case PATIENT_INSURANCEUPDATE: 
             return {...state, data: action.payload, error:'',loading:false, sendSuccess: true}
        case PATIENT_PHOTO:
              let photoBlob = {}
              let photoUrl = ''
               if (action.payload && action.payload.recordset && action.payload.recordset.length > 0){
                   photoBlob = b64toBlob(action.payload.recordset[0].doc_binary) // base64 to blob
                   photoUrl  = URL.createObjectURL(photoBlob);     // blob to url     
               }
               return {...state, data: action.payload,loading:false ,error:'',photo:photoUrl}     
        case PATIENT_REGISTER_LOGINNAME_VERIFY:
             let verified = false
             if (action.payload && action.payload.recordset && action.payload.recordset.length > 0) {
                verified = (action.payload.recordset[0].isvalid > 0)
             }
             return {...state,loginNameChecked:true,loginNameVerified:verified}        
        case RETREIVE_FAILURE: 
             return {...state, data: {}, error:'Unable to retrieve the data',loading:false} 
        case FORM_VALIDATION_RESET: 
             return {...state,sendSuccess:false, error:'',isError:false}            
        case FORM_ERROR: 
             return {...state,sendSuccess:false, error:action.payload,isError:true}  
        case FORM_VALIDATION_FAILURE: 
             return {...state,sendSuccess:false, error:action.error,isError:true}        
        case SAVE_FAILURE: 
             return {...state,sendSuccess:false, error:'Unable to save the data',isError:true}
        case SEND_FAILURE: 
             return {...state,sendSuccess:false, error:'Failed to send the Message',isError:true}                              
        default : 
           return state;
    }
}
//=============================================================================