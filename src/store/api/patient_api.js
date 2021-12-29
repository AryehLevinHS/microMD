
import axios from 'axios'
import { PATIENT_SERVER,USER_SERVER,FINANCE_SERVER} from './server_route'
import { PATIENT_DEMOGRAPHIC_UPDATE,PATIENT_PROFILE,PATIENT_PROVIDERWORKPLACE,
        PATIENT_PERSONALDATA,PATIENT_PROVIDERTDATA,PATIENT_BILLING,
        FINANCE_BALANCE,FINANCE_CHARGES,
        PATIENT_INSURANCE,PATIENT_INSURANCEUPDATE,PATIENT_PHARMACIES,
        PATIENT_CONTACTS,PATIENT_CONTACTUPDATE,PATIENT_PHOTO,PATIENT_PROXY,
        PATIENT_REGISTERDATA,PATIENT_REGISTERUPDATE,PATIENT_REGISTER_LOGINNAME_VERIFY,
        RETREIVE_FAILURE,SEND_FAILURE,SAVE_FAILURE} from './types'

//=============================================================================
// patientprofileGet = gets the users profile
//=============================================================================
export const patientprofileGet = (dispatch,portal_user_id) => {

   let queryString = `${PATIENT_SERVER}/profile_get?portal_user_id=${portal_user_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PROFILE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// patientphotoGet = gets the patient photo
//=============================================================================
export const patientphotoGet = (dispatch,patient_id) => {
   
   let queryString = `${PATIENT_SERVER}/photo_get?patient_id=${patient_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PHOTO,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// PatientRegisterGetDetails - gets the personal details (for display)
//=============================================================================
export const PatientRegisterGetDetails = (dispatch,patient_id) => {
   
    let queryString = `${PATIENT_SERVER}/patient_register_getdetails?patient_id=${patient_id}`
     axios.get(queryString)
    .then(response=>{
       dispatch({type: PATIENT_REGISTERDATA,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// PatientRegister - registeres the patient
//=============================================================================
export const PatientRegister = (dispatch,dataToSubmit) => {

   let queryString = `${PATIENT_SERVER}/patient_register`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
      dispatch({type: PATIENT_REGISTERUPDATE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SEND_FAILURE,payload:error})
   }) 
}
//=============================================================================
// PatientRegisterLoginNameVerify
//=============================================================================
export const PatientRegisterLoginNameVerify = (dispatch,loginName) => {

   let queryString = `${USER_SERVER}/user_checklogininame?login_name=${loginName}`
   axios.post(queryString)
   .then(response=>{
      dispatch({type: PATIENT_REGISTER_LOGINNAME_VERIFY,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SEND_FAILURE,payload:error})
   })
}
//=============================================================================
// personaldetailGet - gets the personal details (for display)
//=============================================================================
export const personaldetailGet = (dispatch,patientId) => {
   
    let queryString = `${PATIENT_SERVER}/demographic_details?patient_id=${patientId}`
     axios.get(queryString)
    .then(response=>{
       dispatch({type: PATIENT_PERSONALDATA,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// demographicsGetDetails = gets the personal details (for editing)
//=============================================================================
export const demographicsGetDetails = (dispatch,patientId) => {
 
   let queryString = `${PATIENT_SERVER}/demographic_details?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PERSONALDATA,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// update demographic data
//=============================================================================
export const demographicsUpdate = (dispatch,dataToSubmit) => {

   let queryString = `${PATIENT_SERVER}/demographic_update`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
      dispatch({type: PATIENT_DEMOGRAPHIC_UPDATE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SEND_FAILURE,payload:error})
   }) 
}
//=============================================================================
// contactGetList = gets the patient contact list
//=============================================================================
export const contactGetList = (dispatch,patientId) => {
   
   let queryString = `${PATIENT_SERVER}/contact_list?patient_id=${patientId}`
   axios.get(queryString)
    .then(response=>{
       dispatch({type: PATIENT_CONTACTS,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// contactGetDetails = gets the contact details
//=============================================================================
export const contactGetDetails = (dispatch,patient_id,patcontact_id) => {
  
   let queryString = `${PATIENT_SERVER}/contact_details?patient_id=${patient_id}&patcontact_id=${patcontact_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_CONTACTS,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// contactUpdate = update contact information
//=============================================================================
export const contactUpdate = (dispatch,dataToSubmit) => {
  
   let queryString = `${PATIENT_SERVER}/contact_update`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
       let checkerror = response.data
       if (checkerror.name === 'RequestError'){
          dispatch({type:SEND_FAILURE,payload:response.data})
       }
       else
         dispatch({type: PATIENT_CONTACTUPDATE,payload:response.data}) 
    })
   .catch(error => {
      dispatch({type:SEND_FAILURE,payload:error })
    })
}
//=============================================================================
// contactDelete = deletes a contact
//=============================================================================
export const contactDelete = (dispatch,patientId,patcontactId) => {

   let queryString = `${PATIENT_SERVER}/contact_delete?patient_id=${patientId}&patcontact_id=${patcontactId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_CONTACTS,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// insuranceGetList = gets the patient insurance list
//=============================================================================
export const insuranceGetList = (dispatch,patientId) => {

   let queryString = `${PATIENT_SERVER}/insurance_list?patient_id=${patientId}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_INSURANCE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// insurancetDelete = deletes insurance
//=============================================================================
export const insurancetDelete = (dispatch,patientId,insurance_id) => {

   let queryString = `${PATIENT_SERVER}/insurance_delete?patient_id=${patientId}&insurance_id=${insurance_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_INSURANCE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// insuranceGetDetails = gets the insurance details
//=============================================================================
export const insuranceGetDetails = (dispatch,patient_id,insurance_id) => {
  
   let queryString = `${PATIENT_SERVER}/insurance_details?patient_id=${patient_id}&insurance_id=${insurance_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_INSURANCE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// insuranceUpdate = update patient insurance
//=============================================================================
export const insuranceUpdate = (dispatch,dataToSubmit) => {
  
   let queryString = `${PATIENT_SERVER}/insurance_update`
   axios.post(queryString,dataToSubmit)
   .then(response=>{
       let checkerror = response.data
       if (checkerror.name === 'RequestError'){
          dispatch({type:SEND_FAILURE,payload:response.data})
       }
       else
         dispatch({type: PATIENT_INSURANCEUPDATE,payload:response.data}) 
    })
   .catch(error => {
      dispatch({type:SEND_FAILURE,payload:error })
    })
}
//=============================================================================
// pharmacyGetList = gets the pharmacy list
//=============================================================================
export const pharmacyGetList = (dispatch,patientId) =>{

   let queryString = `${PATIENT_SERVER}/pharmacy_list?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PHARMACIES,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// pharmacyDelete = deletes a pharmacy
//=============================================================================
export const pharmacyDelete = (dispatch,patient_id,pharmacy_id) => {

   let queryString = `${PATIENT_SERVER}/pharmacy_delete?patient_id=${patient_id}&pharmacy_id=${pharmacy_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PHARMACIES,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// pharmacyAdd = adds a pharmacy
//=============================================================================
export const pharmacyAdd = (dispatch,patientId,pharmacyId) => {

   let queryString = `${PATIENT_SERVER}/pharmacy_add?patient_id=${patientId}&pharmacy_id=${pharmacyId}`
   axios.post(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PHARMACIES,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// proxyPatientGet = get users that have proxy rights for this patient
//=============================================================================
export const proxyPatientGet = (dispatch,patient_id) => {
   
   let queryString = `${PATIENT_SERVER}/proxy_get?patient_id=${patient_id}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PROXY,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// proxyDelete - deletes a proxy user
//=============================================================================
export const proxyPatientDelete = (dispatch,patient_id,proxy_user_id,deleted_by) => {
 
   let queryString = `${PATIENT_SERVER}/proxy_delete?patient_id=${patient_id}&proxy_user_id=${proxy_user_id}&deleted_by=${deleted_by}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PROXY,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
   })
}
//=============================================================================
// providersGetList = gets the patient providers
//=============================================================================
export const providersGetList = (dispatch,patientId) =>{

   let queryString = `${PATIENT_SERVER}/provider_list?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PROVIDERTDATA,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// providersGetWorkplace = gets the patient provider workplace
//=============================================================================
export const providersGetWorkplace = (dispatch,patientId) =>{

   let queryString = `${PATIENT_SERVER}/provider_workplace?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_PROVIDERWORKPLACE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// financeGetBalance = gets the patients balance
//=============================================================================
export const financeGetBalance = (dispatch,patientId) => {

   let queryString = `${FINANCE_SERVER}/balance_get?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: FINANCE_BALANCE,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// financeGetCharges = gets the patients unpaid bills
//=============================================================================
export const financeGetCharges = (dispatch,patientId) => {

   let queryString = `${FINANCE_SERVER}/charges_get?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: FINANCE_CHARGES,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// financeGetStatements = gets the patients unpaid bills
//=============================================================================
export const financeGetStatements = (dispatch,patientId) => {

   let queryString = `${FINANCE_SERVER}/statements_get?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_BILLING,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// financeGetStatements = gets the patients unpaid bills
//=============================================================================
export const financeGetPayments = (dispatch,patientId) => {

   let queryString = `${FINANCE_SERVER}/payments_get?patient_id=${patientId}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: PATIENT_BILLING,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================