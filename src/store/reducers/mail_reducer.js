import {MAIL_GET_INBOX,
        MAIL_GET_OUTBOX,
        MAIL_SEND_MESSAGE,MAIL_MESSAGECHAIN_BYID,MAIL_ATTACHMENTCHAIN_BYID,
        MAIL_GET_MESSAGETYPES,RETREIVE_FAILURE,SEND_FAILURE,
        FORM_VALIDATION_RESET,FORM_VALIDATION_FAILURE
       } from '../api/types'

//=============================================================================
// mail reducer
//=============================================================================
export default function(state={},action){
    switch(action.type){
        case MAIL_MESSAGECHAIN_BYID: 
        case MAIL_ATTACHMENTCHAIN_BYID: 
        case MAIL_GET_INBOX: 
        case MAIL_GET_OUTBOX: 
             return {...state, data: action.payload, error:'',loading:false} 
        case MAIL_SEND_MESSAGE: 
             return {...state,sendSuccess:true, message: action.payload}   
        case MAIL_GET_MESSAGETYPES: 
             return {...state, message: action.payload}   
        case RETREIVE_FAILURE: 
             return {...state, data: {}, error:'Unable to retrieve the data',loading:false}        
        case SEND_FAILURE: 
             return {...state, isError:true, error:'Send error. please contact your practice',sendSuccess:false,message:action.payload}        
        case FORM_VALIDATION_RESET: 
             return {...state,sendSuccess:false, error:'',isError:false}            
        case FORM_VALIDATION_FAILURE: 
             return {...state,sendSuccess:false, error:action.error,isError:true}        
        default : 
             return state;
    }
}
//=============================================================================

