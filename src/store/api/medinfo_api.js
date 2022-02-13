import axios from 'axios'
import { MEDINFO_SERVER } from './server_route'
import {ACTIONITEM_GET,ACTIONITEM_UPDATE,ALLERGIES_GET,ALERTS_GET,
        CAREPLAN_GET,CAREPLAN_DETAIL_GET,CAREPLAN_PROGRESS, //CAREPLAN_STATUSSET,
        DASHBOARD_CARDS, 
        ENCOUNTER_GET_SUMMARY,ENCOUNTERS_GET,
        HOSPITALIZATIONS_GET,IMMUNIZATIONS_GET,IMMUNIZATIONDETAIL_GET,
        LABRESULTS_GET,LABTESTS_GET,LABRESULT_GETGRAPH,
        MEDICATIONS_GET,MEDICATION_REPORT_GET,REFILL_MEDS_GET,REFILL_REQUEST_SEND,
        MED_DOCS_GET,MED_DOC_GET,
        MED_FORM_GETLIST,MED_FORM_SEND,MED_FORM_GETTEMPLATE,MED_FORM_GET,
        NOTICES_GET,
        REFERRALS_GET,REFERRAL_REQUEST,
        VITALSIGNS_GET,VITALSIGN_SINGLE_GET,VITALSIGNS_SEND,
        SEND_FAILURE,RETREIVE_FAILURE,SAVE_FAILURE} from './types'

//=============================================================================
// DashboardGetCards = gets the dashboard cards
//=============================================================================
export const DashboardGetCards = (dispatch,patient_id,portal_user_id) => {

   let queryString = `${MEDINFO_SERVER}/dashboard/cards?patient_id=${patient_id}&portal_user_id=${portal_user_id}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: DASHBOARD_CARDS,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// NoticeGetList = gets the dashboard notices
//=============================================================================
export const NoticeGetList = (dispatch,patientId) => {

   let queryString = `${MEDINFO_SERVER}/notice/get?patient_id=${patientId}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: NOTICES_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// SetNoticeStatus = updates the notice status
//=============================================================================
export const NoticeSetStatus = (dispatch,dataToSubmit) => {
   
   axios.post(`${MEDINFO_SERVER}/notice/statusupdate`,dataToSubmit)
   .then(response=>{
      dispatch({type: NOTICES_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// ActionItemGetlist = gets the action items
//=============================================================================
export const ActionItemGetlist = (dispatch,patientId) => {
   
   let queryString = `${MEDINFO_SERVER}/actionitem/getlist?patient_id=${patientId}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: ACTIONITEM_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// ActionItemUpdate = updates the action Items
//=============================================================================
export const ActionItemUpdate = (dispatch,dataToSubmit) => {
   
   axios.post(`${MEDINFO_SERVER}/actionitem/update`,dataToSubmit)
   .then(response=>{
      dispatch({type: ACTIONITEM_UPDATE,payload:response}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// ActionItemSetStatus = updates the action Item status
//=============================================================================
export const ActionItemSetStatus = (dispatch,dataToSubmit) => {
 
   axios.post(`${MEDINFO_SERVER}/actionitem/status`,dataToSubmit)
   .then(response=>{
      dispatch({type: ACTIONITEM_UPDATE,payload:response}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// ActionItemSetProgress = updates the action Item status
//=============================================================================
export const ActionItemSetProgress = (dispatch,dataToSubmit) => {
   
   axios.post(`${MEDINFO_SERVER}/actionitem/progress`,dataToSubmit)
   .then(response=>{
      dispatch({type: ACTIONITEM_UPDATE,payload:response}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// AllergiesGetList = gets the allergies
//=============================================================================
export const AllergiesGetList = (dispatch,patientId) => {

   let queryString = `${MEDINFO_SERVER}/allergies?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: ALLERGIES_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// CareplanGetList = gets the careplans
//=============================================================================
export const CareplanGetList = (dispatch,patientId) => {

   let queryString = `${MEDINFO_SERVER}/careplan?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: CAREPLAN_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// CareplanStatusSet = sets the careplan status
//=============================================================================
export const CareplanSetStatus = (dispatch,patient_id,careplan_id,status) => {
 
 let queryString = `${MEDINFO_SERVER}/careplan_status?patient_id=${patient_id}&careplan_id=${careplan_id}&status=${status}`
  axios.post(queryString)
  .then(response=>{
     CareplanGetList(dispatch,patient_id)
    // dispatch({type: CAREPLAN_STATUSSET,payload:response.data}) 
  })
  .catch(error => {
     dispatch({type:RETREIVE_FAILURE,payload:error})
  })
}
//=============================================================================
// CarePlanGetbyId = gets the careplan (for progress)
//=============================================================================
export const CarePlanGetbyId = (dispatch,patientId,careplanId) => {    

   let queryString = `${MEDINFO_SERVER}/careplan/careplan_by_id?patient_id=${patientId}&careplan_id=${careplanId}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: CAREPLAN_DETAIL_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// CarePlanSendProgress = sends the careplan progress
//=============================================================================
export const CarePlanSendProgress = (dispatch,dataToSubmit) =>{
  
     axios.post(`${MEDINFO_SERVER}/careplan/progress`,dataToSubmit)
     .then(response=>{
        dispatch({type: CAREPLAN_PROGRESS,payload:response}) 
     })
     .catch(error => {
        dispatch({type:SAVE_FAILURE,payload:error})
     })
}


//=============================================================================
// MedicationListGet = gets the medications (note post as need to send in filter data)
//=============================================================================
export const MedicationListGet = (dispatch,patientId,dataToSubmit) => {

    let queryString = `${MEDINFO_SERVER}/medications?patient_id=${patientId}`
    axios.post(queryString,dataToSubmit)
   // axios.get(queryString)
    .then(response=>{
       dispatch({type: MEDICATIONS_GET,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}

//=============================================================================
// MedicationsGetForRefill = gets the medications for refills
//=============================================================================
export const MedicationsGetForRefill = (dispatch,patient_id) => {

    let queryString = `${MEDINFO_SERVER}/medications_for_refill?patient_id=${patient_id}`
    axios.get(queryString)
    .then(response=>{
       dispatch({type: REFILL_MEDS_GET,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// getMedicationReport = gets the medication report
//=============================================================================
export const getMedicationReport = (dispatch,patientId,report_id) => {

   let queryString = `${MEDINFO_SERVER}/medications/report?patient_id=${patientId}$report_id=${report_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: MEDICATION_REPORT_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// MedicationRefillRequestSend = sends the refill requests
//=============================================================================
export const MedicationRefillRequestSend = (dispatch,dataToSubmit) =>{

   let queryString = `${MEDINFO_SERVER}/medications/refill_request`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
      dispatch({type: REFILL_REQUEST_SEND,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SEND_FAILURE,payload:error})
   })
}
//=============================================================================
// EncounterGetList = gets the encounters
//=============================================================================
export const EncounterGetList = (dispatch,patientId) => {

    let queryString = `${MEDINFO_SERVER}/encounters?patient_id=${patientId}`
     axios.get(queryString)
    .then(response=>{
       dispatch({type: ENCOUNTERS_GET,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// EncounterGetSummary = gets the encounter summary
//=============================================================================
export const EncounterGetSummary = (dispatch,patientId,encounterId) => {
    
   let queryString = `${MEDINFO_SERVER}/encounters/encounter_by_id?patient_id=${patientId}&encounter_id=+${encounterId}`
    axios.get(queryString)
    .then(response=>{
       dispatch({type: ENCOUNTER_GET_SUMMARY,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// FormGetList = gets medical forms
//=============================================================================
export const FormGetList = (dispatch,patientId) => {

   let queryString = `${MEDINFO_SERVER}/forms/getformlist?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: MED_FORM_GETLIST,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// FormGetById = gets the medical form
//=============================================================================
export const FormGetById = (dispatch,patient_id,form_id) =>{

   let queryString = `${MEDINFO_SERVER}/forms/form_by_id?patient_id=${patient_id}&form_id=${form_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: MED_FORM_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// FormsTemplateGet = gets medical form template
//=============================================================================
export const FormTemplateGet = (dispatch,form_code) => {

   let queryString = `${MEDINFO_SERVER}/forms/getFormTemplate?form_code=${form_code}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: MED_FORM_GETTEMPLATE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// FormSend = sends the medical forms
//=============================================================================
export const FormSend = (dispatch,dataToSubmit) => {
   
   let queryString = `${MEDINFO_SERVER}/forms/form_send`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
      dispatch({type: MED_FORM_SEND,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// ImmunizationGetList = gets the immunizations
//=============================================================================
export const ImmunizationGetList = (dispatch,patientId) => {

   let queryString = `${MEDINFO_SERVER}/immunizations?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: IMMUNIZATIONS_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// ImmunizationGetDetail = gets the immunization detail
//=============================================================================
export const ImmunizationGetDetail = (dispatch,patientId) => {

  let queryString = `${MEDINFO_SERVER}/immunizationdetail?patient_id=${patientId}`
  axios.get(queryString)
  .then(response=>{
     dispatch({type: IMMUNIZATIONDETAIL_GET,payload:response.data}) 
  })
  .catch(error => {
     dispatch({type:RETREIVE_FAILURE,payload:error})
  })
}

//=============================================================================
// LabresultListGet = gets the labresults
//=============================================================================
export const LabresultListGet = (dispatch,patientId) => {

    let queryString = `${MEDINFO_SERVER}/labresults?patient_id=${patientId}`
    axios.get(queryString)
    .then(response=>{
       dispatch({type: LABRESULTS_GET,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// LabResultTests = gets the labresult tests
//=============================================================================
export const LabResultTests = (dispatch,patientId,labresultcat_id) => {

  let queryString = `${MEDINFO_SERVER}/labresults/test?patient_id=${patientId}&labresultcat_id=${labresultcat_id}`
   axios.get(queryString)
  .then(response=>{
      dispatch({type: LABTESTS_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// LabResultGraphGet = gets the data for lab result graphing
//=============================================================================
export const LabResultGraphGet = (dispatch,patientId,labresult_id) => {
  
   let queryString = `${MEDINFO_SERVER}/labresults/graph?patient_id=${patientId}&labresult_id=${labresult_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: LABRESULT_GETGRAPH,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// MedicalDocsGetList = gets the medical documents (publshed docs)
//=============================================================================
export const MedicalDocsGetList = (dispatch,patientId) => {

   let queryString = `${MEDINFO_SERVER}/documents?patient_id=${patientId}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: MED_DOCS_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// MedicalDocsGetFiltered = gets the medical documents (publshed docs)
//=============================================================================
export const MedicalDocsGetFiltered = (dispatch,patientId,filterData) => {

  let queryString = `${MEDINFO_SERVER}/documents_filtered?patient_id=${patientId}`
  axios.post(queryString,filterData)
  .then(response=>{
     dispatch({type: MED_DOCS_GET,payload:response.data}) 
  })
  .catch(error => {
     dispatch({type:RETREIVE_FAILURE,payload:error})
  })
}
//=============================================================================
// MedicalDocGetById = gets the medical documents (by Id)
//=============================================================================
export const MedicalDocGetById = (dispatch,patientId,documentId) => {

  let queryString = `${MEDINFO_SERVER}/document_by_id?patient_id=${patientId}&document_id=${documentId}`
  axios.get(queryString)
  .then(response=>{
     dispatch({type: MED_DOC_GET,payload:response.data}) 
  })
  .catch(error => {
     dispatch({type:RETREIVE_FAILURE,payload:error})
  })
}
//=============================================================================
// ReferralGetList = gets the referrals
//=============================================================================
export const ReferralGetList = (dispatch,patientId) => {

    let queryString = `${MEDINFO_SERVER}/referrals?patient_id=${patientId}`
    axios.get(queryString)
    .then(response=>{
       dispatch({type: REFERRALS_GET,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// sendReferrals = sends the referral request
//=============================================================================
export const ReferralSend = (dispatch,dataToSubmit) => {
 
    const request = axios.post(`${MEDINFO_SERVER}/referrals/send`,dataToSubmit)
    .then(response=>{
       dispatch({type: REFERRAL_REQUEST,payload:response}) 
    })
    .catch(error => {
       dispatch({type:SAVE_FAILURE,payload:error})
    })
 }
//=============================================================================
// getAlerts = gets the alerts
//=============================================================================
export const getAlerts = (dispatch,patientId) => {

   let queryString = `${MEDINFO_SERVER}/alerts?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: ALERTS_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// getHospitalizations = gets the hospitalizations
//=============================================================================
export const getHospitalizations = (dispatch,patientId) => {

    let queryString = `${MEDINFO_SERVER}/hospitalizations?patient_id=${patientId}`
     axios.get(queryString)
    .then(response=>{
       dispatch({type: HOSPITALIZATIONS_GET,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}

//=============================================================================
// VitalsignGetList = gets the vitalsign list for a patient
//=============================================================================
export const VitalsignGetList = (dispatch,patientId) => {
   let queryString = `${MEDINFO_SERVER}/vitalsigns?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: VITALSIGNS_GET,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// VitalsignsGetForGraph = gets the vitalsigns for graphing
//=============================================================================
export const VitalsignsGetForGraph = (dispatch,patientId) => {

  let queryString = `${MEDINFO_SERVER}/vitalsigns/graph?patient_id=${patientId}`
   axios.get(queryString)
  .then(response=>{
     dispatch({type: VITALSIGNS_GET,payload:response.data}) 
  })
  .catch(error => {
     dispatch({type:RETREIVE_FAILURE,payload:error})
  })
}

//=============================================================================
// VitalsignGetById = gets the vitalsigns
//=============================================================================
export const VitalsignGetById = (dispatch,patientId,vitalsignId) => {

  let queryString = `${MEDINFO_SERVER}/vitalsigns/by_id?patient_id=${patientId}&vitalsign_id=${vitalsignId}`
   axios.get(queryString)
  .then(response=>{
     dispatch({type: VITALSIGN_SINGLE_GET,payload:response.data}) 
  })
  .catch(error => {
     dispatch({type:RETREIVE_FAILURE,payload:error})
  })
}

//=============================================================================
// VitalsignSend = sends the vitalsigns
//=============================================================================
export const VitalsignSend = (dispatch,dataToSubmit) => {
  
   let queryString = `${MEDINFO_SERVER}/vitalsigns/send`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
      dispatch({type: VITALSIGNS_SEND,payload:response}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}

//=============================================================================

