import axios from 'axios'
import { MAIL_SERVER } from './server_route'
import {MAIL_GET_INBOX, MAIL_GET_OUTBOX, MAIL_SEND_MESSAGE,
        MAIL_MESSAGECHAIN_BYID, MAIL_ATTACHMENTCHAIN_BYID,
        MAIL_GET_MESSAGETYPES,RETREIVE_FAILURE,SEND_FAILURE} from './types'
  
//=============================================================================
// set token (should be getting it from userContext) - now set in login_form
//=============================================================================
//import {UserContext} from '../store/UserContext'       
//import {useContext} from 'react'
////axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');       
//axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}      
//axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} }) 
//=============================================================================
// MailGetMsgChainById = gets the mail message
//=============================================================================
export const MailGetMsgChainById = (dispatch,msgId)=>{

     let queryString = `${MAIL_SERVER}/message_getchain?msg_id=${msgId}`
     axios.get(queryString)
     .then(response=>{
             dispatch({type: MAIL_MESSAGECHAIN_BYID,payload:response.data}) 
        })
     .catch(error => {
         dispatch({type:RETREIVE_FAILURE,payload:error})
        })
   }
//=============================================================================
// MailGetMsgAttachChainById = gets the mail attachments
//=============================================================================
export const MailGetMsgAttachChainById = (dispatch,msgId)=>{
     
     let queryString = `${MAIL_SERVER}/message_attachment_chain_by_id?msg_id=${msgId}`
     axios.get(queryString)
     .then(response=>{
             dispatch({type: MAIL_ATTACHMENTCHAIN_BYID,payload:response.data}) 
        })
     .catch(error => {
         dispatch({type:RETREIVE_FAILURE,payload:error})
        })
   }   
//=============================================================================
// MailGetOutbox = gets the mail outbox
//=============================================================================
export const MailGetOutbox = (dispatch,portal_user_id,patient_id)=>{
    
    let queryString = `${MAIL_SERVER}/outbox?patient_id=${patient_id}&portal_user_id=${portal_user_id}`
    axios.get(queryString)
    .then(response=>{
            dispatch({type: MAIL_GET_OUTBOX,payload:response.data}) 
       })
    .catch(error => {
        dispatch({type:RETREIVE_FAILURE,payload:error})
       })
  }
//=============================================================================
// MailGetOutboxFiltered = gets the mail outbox
//=============================================================================
export const MailGetOutboxFiltered = (dispatch,portal_user_id,patient_id,dataToSubmit)=>{
  
  let queryString = `${MAIL_SERVER}/outbox_filtered?patient_id=${patient_id}&portal_user_id=${portal_user_id}`
  axios.post(queryString,dataToSubmit)
  .then(response=>{
          dispatch({type: MAIL_GET_OUTBOX,payload:response.data}) 
     })
  .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}
//=============================================================================
// MailGetInbox = gets the mail inbox
//=============================================================================
export const MailGetInbox = (dispatch,portal_user_id,patient_id)=>{
 
    let queryString = `${MAIL_SERVER}/inbox?patient_id=${patient_id}&portal_user_id=${portal_user_id}`
    axios.get(queryString)
    .then(response=>{
            dispatch({type: MAIL_GET_INBOX,payload:response.data}) 
       })
    .catch(error => {
        dispatch({type:RETREIVE_FAILURE,payload:error})
       })
}
//=============================================================================
// MailGetInboxFiltered = gets the mail inbox filtered
//=============================================================================
export const MailGetInboxFiltered = (dispatch,portal_user_id,patient_id,dataToSubmit)=>{

  let queryString = `${MAIL_SERVER}/inbox_filtered?patient_id=${patient_id}&portal_user_id=${portal_user_id}`
  axios.post(queryString,dataToSubmit)
  .then(response=>{
          dispatch({type: MAIL_GET_INBOX,payload:response.data}) 
     })
  .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}
//=============================================================================
// MailSendMsg = sends the mail message
//=============================================================================
export const MailSendMsg = (dispatch,dataToSubmit) => {
 
    let queryString = `${MAIL_SERVER}/mail_message`
    axios.post(queryString,dataToSubmit)
    .then(response=>{
        let checkerror = response.data
        if (checkerror.name === 'RequestError'){
           dispatch({type:SEND_FAILURE,payload:response.data})
        }
        else
          dispatch({type: MAIL_SEND_MESSAGE,payload:response.data}) 
     })
    .catch(error => {
       dispatch({type:SEND_FAILURE,payload:error })
     })
}
//=============================================================================
// getMessageType - gets the message types
//=============================================================================
export const getMessageType = (practiceId) => {

    const request = axios.get(`${MAIL_SERVER}/messageType?practice_id=${practiceId}`)
    .then(response => response.data )
    return{type: MAIL_GET_MESSAGETYPES,
           payload:request}
}
//=============================================================================