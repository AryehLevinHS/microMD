import {APPOINTMENTS_GET, APPOINTMENTS_GET_PAST,APPOINTMENT_CREATE,APPOINTMENT_REQUEST,
        APPOINTMENT_CANCEL,APPOINTMENT_CONFIRM,APPOINTMENT_CHECKIN,APPOINTMENT_FINDSLOT,
        RETREIVE_FAILURE,SEND_FAILURE, FORM_VALIDATION_RESET,FORM_VALIDATION_FAILURE
       } from '../api/types'

//=============================================================================
// appointment reducer
//=============================================================================
export default function(state={},action){
    switch(action.type){
        case APPOINTMENTS_GET: 
        case APPOINTMENTS_GET_PAST: 
        case APPOINTMENT_FINDSLOT: 
             return {...state, data: action.payload, error:'',loading:false} 
        case APPOINTMENT_CANCEL: 
        case APPOINTMENT_CONFIRM: 
        case APPOINTMENT_CHECKIN: 
             return {...state, success:action.payload.success}  
        case APPOINTMENT_REQUEST: 
        case APPOINTMENT_CREATE: 
            return {...state,sendSuccess:true, data: action.payload}   
        case RETREIVE_FAILURE: 
            return {...state, data: {}, error:'Unable to retrieve the data',loading:false}        
        case SEND_FAILURE: 
            return {...state, isError:true, error:'Send error. Please contact your Practice',sendSuccess:false,data:action.payload}        
        case FORM_VALIDATION_RESET: 
            return {...state,sendSuccess:false, error:'',isError:false}            
        case FORM_VALIDATION_FAILURE: 
            return {...state,sendSuccess:false, error:action.error,isError:true}   
       default : 
          return state;
   }
}

       
     
//=============================================================================
