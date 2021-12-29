import {useReducer} from 'react'
import mailReducer   from '../reducers/mail_reducer';
import { MailGetInbox,MailGetInboxFiltered,
        MailGetOutbox,MailGetOutboxFiltered,
        MailGetMsgChainById,MailGetMsgAttachChainById,
        MailSendMsg } from '../api/mail_api';
import {FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET} from '../api/types'         

//=============================================================================
// useMailInbox (hook for getting mail inbox and managing state)
//=============================================================================
export const useMailInbox = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(mailReducer,InitialState)
 
       // get mail data
    const DataMailGetInbox = (portal_user_id,patient_id) => {
        MailGetInbox(dispatch,portal_user_id,patient_id)
    }
 
    // get filtered mail data
    const DataMailGetInboxFiltered = (portal_user_id,patient_id,filterData) => {
        MailGetInboxFiltered(dispatch,portal_user_id,patient_id,filterData)
    }
    
   return ([state,DataMailGetInbox,DataMailGetInboxFiltered])
}
//=============================================================================
// useMailOutbox (hook for getting mail outbox and managing state)
//=============================================================================
export const useMailOutbox = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(mailReducer,InitialState)
 
       // get mail data
    const DataMailGetOutbox = (portal_user_id,patient_id) => {
          MailGetOutbox(dispatch,portal_user_id,patient_id)
    }
 
    // get filtered mail data
    const DataMailGetOutboxFiltered = (portal_user_id,patient_id,filterData) => {
          MailGetOutboxFiltered(dispatch,portal_user_id,patient_id,filterData)
    }
    
   return ([state,DataMailGetOutbox,DataMailGetOutboxFiltered])
}
//=============================================================================
// useMailDisplayChain (hook for displaying mail messages anaging state)
//=============================================================================
export const useMailDisplayChain = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(mailReducer,InitialState)
 
    const initialAttachState = { loading:true, error:'', data:{} }
    const [stateAttach,dispatchAttach] = useReducer(mailReducer,initialAttachState)

       // get mail data
    const DataMailGetMsgChainById = (msg_id) => {
        MailGetMsgChainById(dispatch,msg_id)
        MailGetMsgAttachChainById(dispatchAttach,msg_id)
    }
     
   return ([state,stateAttach,DataMailGetMsgChainById])
}
//=============================================================================
// useMessageForm (hook for sending mail message form  and managing state)
//=============================================================================
export const useMessageForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(mailReducer,InitialState)
    
    // send mail message
    const DataMailSendMsg = (dataToSubmit) => {
        MailSendMsg(dispatch,dataToSubmit)
    }
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,DataMailSendMsg,DataValidationFailure,DataValidationReset])
}

//=============================================================================