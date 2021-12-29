import axios from 'axios'
import { USER_SERVER} from './server_route'
import {LOGIN_USER, LOGIN_CONFIRM, USER_CONFIRMCODE_VALIDATE,USER_CONFIRMCODE_SEND,
        USER_PROFILE,USER_PROXY,USER_PROXYLIST,USER_CONSENT_ADD,USER_NOTELIST,USER_NOTEUPDATE,
        USER_AUTHNUMBER_LIST,USER_AUTHNUMBER_GET,USER_AUTHNUMBER_UPDATE,USER_NOTE,
        USER_PASSWORD_CHANGE,LOGIN_FAILURE,LOGIN_SETUP,USER_HOMEPAGECOUNTS,USER_CONFIRMCODE_FAILURE,
        RETREIVE_FAILURE,SEND_FAILURE,SAVE_FAILURE} from './types'

//=============================================================================
// set token
//=============================================================================
//axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
   
//=============================================================================
// loginUser = logs into the user account
//=============================================================================
export const loginUser = (dispatch,dataToSubmit) => {

    axios.post(`${USER_SERVER}/login`,dataToSubmit)
    .then(response=>{
      if(response.data.loginSuccess)
         dispatch({type: LOGIN_USER,payload:response.data}) 
      else
        dispatch({type: LOGIN_FAILURE,payload:response.data}) 
     })
     .catch(error => {
        dispatch({type:SEND_FAILURE,payload:error})
     })
}
//=============================================================================
// loginConfirm = confirm user using 2FA
//=============================================================================
export const loginConfirm = (dispatch,dataToSubmit) => {

   axios.post(`${USER_SERVER}/login_confirm`,dataToSubmit)
   .then(response=>{
     if(response.data.loginSuccess)
        dispatch({type: LOGIN_CONFIRM,payload:response.data}) 
     })
    .catch(error => {
       dispatch({type:SEND_FAILURE,payload:error})
    })
}
//=============================================================================
// ConfirmCodeSend = sends a confirmaiton code to the user
//=============================================================================
export const ConfirmCodeSend = (dispatch,dataToSubmit) =>{

   axios.post(`${USER_SERVER}/confirm_code_send`,dataToSubmit)
   .then(response=>{
     if(response.data.success)
        dispatch({type: USER_CONFIRMCODE_SEND,payload:response.data}) 
     })
    .catch(error => {
       dispatch({type:SEND_FAILURE,payload:error})
    })
}
//=============================================================================
// ConfirmCodeValidate = validates the confirmation code put in by the user
//=============================================================================
export const ConfirmCodeValidate = (dispatch,dataToSubmit) =>{

   axios.post(`${USER_SERVER}/confirm_code_validate`,dataToSubmit)
   .then(response=>{
       dispatch({type: USER_CONFIRMCODE_VALIDATE,payload:response.data}) 
     })
    .catch(error => {
       dispatch({type:USER_CONFIRMCODE_FAILURE,payload:error})
    })
}
//=============================================================================
// Set user Consent
//=============================================================================
export const ConsentAdd = (dispatch,dataToSubmit) =>{

   axios.post(`${USER_SERVER}/consent_add`,dataToSubmit)
   .then(response=>{
       dispatch({type: USER_CONSENT_ADD,payload:response.data}) 
     })
    .catch(error => {
       dispatch({type:SEND_FAILURE,payload:error})
    })
}
//=============================================================================
// sets login data (after login need to setup stores)
// eg no of mail messages, list of providers
//=============================================================================
export const loginSetStores = (dispatch,patient_id,portal_user_id) => {

   let queryString = `${USER_SERVER}/login_setstore?patient_id=${patient_id}&portal_user_id=${portal_user_id}`
   axios.get(queryString) 
   .then(response=>{
        dispatch({type: LOGIN_SETUP,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:SEND_FAILURE,payload:error})
    })
}
//=============================================================================
// Userlogout - user logout - now done in UserContext
//=============================================================================
// export const Userlogout = (dispatch,portal_user_id) =>{
  
//    let queryString = `${USER_SERVER}/logout?portal_user_id=${portal_user_id}`
//     axios.post(queryString)
//     .then(response=>{
//      //  dispatch({type: USER_LOGOUT,payload:response.data}) 
//     })
//     .catch(error => {
//      //  dispatch({type:USER_LOGOUT,payload:error})
//     })
// }
//=============================================================================
// getHomepageCounts = gets the counts for the home page
//=============================================================================
export const getHomepageCounts = (dispatch,portal_user_id,patient_id) => {

   let queryString = `${USER_SERVER}/homepagecounts?portal_user_id=${portal_user_id}&patient_id=${patient_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_HOMEPAGECOUNTS,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// getProfile = gets the users profile
//=============================================================================
export const getProfile = (dispatch,portal_user_id) => {

   let queryString = `${USER_SERVER}/profile_get?portal_user_id=${portal_user_id}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_PROFILE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// proxyUserGet = get all patients that the user is proxyfor
//=============================================================================
export const proxyUserGet = (dispatch,portal_user_id) => {
   
   let queryString = `${USER_SERVER}/proxyfor_get?portal_user_id=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_PROXY,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// proxyDelete - deletes a proxy user
//=============================================================================
export const proxyDelete = (dispatch,portal_user_id,proxy_user_id,deleted_by) => {
 
   let queryString = `${USER_SERVER}/proxyfor_delete?portal_user_id=${portal_user_id}&proxy_user_id=${proxy_user_id}&deleted_by=${deleted_by}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_PROXY,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// proxylistGet - gets proxylist for a user (includes current patient)
//=============================================================================
export const proxylistGet = (dispatch,portal_user_id) => {
 
   let queryString = `${USER_SERVER}/proxy_getlist?portal_user_id=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_PROXYLIST,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,error:error})
   })
}
//=============================================================================
// noteGetList - gets list of user notes
//=============================================================================
export const noteGetList = (dispatch,portal_user_id) => {
 
   let queryString = `${USER_SERVER}/note_getlist?portal_user_id=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_NOTELIST,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,error:error})
   })
}
//=============================================================================
// noteGetDetails - gets a single note
//=============================================================================
export const noteGetDetails = (dispatch,portal_user_id,note_id) => {
 
   let queryString = `${USER_SERVER}/note_get?portal_user_id=${portal_user_id}&note_id=${note_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_NOTE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,error:error})
   })
}
//=============================================================================
// noteDelete - deletes a user note (and reretrieves the data)
//=============================================================================
export const noteDelete = (dispatch,portal_user_id,note_id) => {
 
   let queryString = `${USER_SERVER}/note_delete?portal_user_id=${portal_user_id}&note_id=${note_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_NOTELIST,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// noteUpdate = update note information
//=============================================================================
export const noteUpdate = (dispatch,dataToSubmit) => {
  
   let queryString = `${USER_SERVER}/note_update`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
         dispatch({type:USER_NOTEUPDATE,payload:response.data})
     })
   .catch(error => {
      dispatch({type:SEND_FAILURE,error:error })
    })
}
//=============================================================================
// AuthenticationNumberGetListAll - gets the list of authentication numbers 
// (including mobile and home phone)
//=============================================================================
export const AuthenticationNumberGetListAll = (dispatch,portal_user_id) => {
 
   let queryString = `${USER_SERVER}/user_authenticationno_getlistAll?portal_user_id=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_AUTHNUMBER_LIST,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,error:error})
   })
}
//=============================================================================
// AuthenticationNumberGetList - gets the list of authentication numbers
//=============================================================================
export const AuthenticationNumberGetList = (dispatch,portal_user_id) => {
 
   let queryString = `${USER_SERVER}/user_authenticationno_getlist?portal_user_id=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_AUTHNUMBER_LIST,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,error:error})
   })
}
//=============================================================================
// AuthenticationNumberDelete - deletes the authentication number
//=============================================================================
export const AuthenticationNumberDelete = (dispatch,portal_user_id,authentication_id) => {
 
   let queryString = `${USER_SERVER}/user_authenticationno_delete?portal_user_id=${portal_user_id}&authentication_id=${authentication_id}&deleted_by=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_AUTHNUMBER_LIST,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// AuthenticationGetDetails - gets a single authentication number (for edit)
//=============================================================================
export const AuthenticationGetDetails = (dispatch,portal_user_id,authentication_id) => {
 
   let queryString = `${USER_SERVER}/user_authenticationno_getsingle?portal_user_id=${portal_user_id}&authentication_id=${authentication_id}&deleted_by=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: USER_AUTHNUMBER_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// AuthenticationUpdate - updates the authentication number
//=============================================================================
export const  AuthenticationUpdate = (dispatch,dataToSubmit) => {

   let queryString = `${USER_SERVER}/user_authenticationno_update`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
      dispatch({type: USER_AUTHNUMBER_UPDATE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SEND_FAILURE,error:error})
   })
}
//=============================================================================
// change password 
//=============================================================================
export const changePassword = (dispatch,dataToSubmit) => {

   let queryString = `${USER_SERVER}/change_password`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
      dispatch({type: USER_PASSWORD_CHANGE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SEND_FAILURE,error:error})
   })
}
//=============================================================================