//import React,{ useContext} from 'react';
import axios from 'axios'
import { APPOINTMENT_SERVER } from './server_route' 
import {APPOINTMENTS_GET, APPOINTMENTS_GET_PAST,APPOINTMENT_REQUEST,
        APPOINTMENT_CREATE,APPOINTMENT_FINDSLOT,
      // APPOINTMENT_CANCEL,APPOINTMENT_CONFIRM,APPOINTMENT_CHECKIN,
       RETREIVE_FAILURE,SEND_FAILURE} from './types'

//=============================================================================
// ApptGetPast = gets the past appointments
//=============================================================================
export const ApptGetPast = (dispatch,patientId) => {
    
    let queryString = `${APPOINTMENT_SERVER}/appt_getpast?patient_id=${patientId}`
     axios.get(queryString)
     .then(response=>{
          dispatch({type: APPOINTMENTS_GET_PAST,payload:response.data}) 
       })
     .catch(error => {
          dispatch({type:RETREIVE_FAILURE,payload:error})
       })
}
//=============================================================================
// apptRequest = submits the appointment request
//=============================================================================
export const ApptRequest = (dispatch,dataToSubmit) =>{
    
    axios.post(`${APPOINTMENT_SERVER}/appt_request`,dataToSubmit)
    .then(response=>{
       dispatch({type: APPOINTMENT_REQUEST,payload:response.data}) 
     })
    .catch(error => {
      dispatch({type:SEND_FAILURE,payload:error})
    })
}
//=============================================================================
// ApptFindSlot = Finds an appointment slot for a provider
//=============================================================================
export const ApptFindSlot = (dispatch,dataToSubmit) =>{
    
  axios.post(`${APPOINTMENT_SERVER}/appt_findslot`,dataToSubmit)
  .then(response=>{
    dispatch({type: APPOINTMENT_FINDSLOT,payload:response.data}) 
   })
  .catch(error => {
    dispatch({type:SEND_FAILURE,payload:error})
  })
}
//=============================================================================
// ApptCreate = creates an appointment
//=============================================================================
export const ApptCreate = (dispatch,dataToSubmit) =>{
    
  axios.post(`${APPOINTMENT_SERVER}/appt_create`,dataToSubmit)
  .then(response=>{
     dispatch({type: APPOINTMENT_CREATE,payload:response.data}) 
   })
  .catch(error => {
    dispatch({type:SEND_FAILURE,payload:error})
  })
}
//=============================================================================
// ApptGetCurrent = gets the appointments
//=============================================================================
export const ApptGetCurrent = (dispatch,patientId) => {
  let queryString = `${APPOINTMENT_SERVER}/appt_getcurrent?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
          dispatch({type: APPOINTMENTS_GET,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}
//=============================================================================
// apptConfirm = confirms the appointment 
//=============================================================================
export const ApptConfirm = (dispatch,dataToSubmit) => {
       axios.post(`${APPOINTMENT_SERVER}/appt_confirm`,dataToSubmit)
       .then(response=>{
           ApptGetCurrent(dispatch,dataToSubmit.patient_id)
         // dispatch({type: APPOINTMENT_CONFIRM,payload:response.data}) 
        })
       .catch(error => {
         dispatch({type:SEND_FAILURE,payload:error})
       })
}
//=============================================================================
// appt checkin = confirmsthe appointment request
//=============================================================================
export const ApptCheckIn = (dispatch,dataToSubmit) => {
       
       axios.post(`${APPOINTMENT_SERVER}/appt_checkin`,dataToSubmit)
       .then(response=>{
          // refresh appointments
          ApptGetCurrent(dispatch,dataToSubmit.patient_id)
        //dispatch({type: APPOINTMENT_CHECKIN,payload:response.data}) 
        })
       .catch(error => {
         dispatch({type:SEND_FAILURE,payload:error})
       })
}
//=============================================================================
// appt cancel = cancels an appointment
// contain reason for cancel and if want to rescedule
//=============================================================================
export const ApptCancel = (dispatch,dataToSubmit) =>{
      
       axios.post(`${APPOINTMENT_SERVER}/appt_cancel`,dataToSubmit)
       .then(response=>{
           // refresh appointments
           ApptGetCurrent(dispatch,dataToSubmit.patient_id)
         // dispatch({type: APPOINTMENT_CANCEL,payload:response.data}) 
        })
       .catch(error => {
         dispatch({type:SEND_FAILURE,payload:error})
        })
}
//=============================================================================