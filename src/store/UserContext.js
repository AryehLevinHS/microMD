import React from 'react'
import axios from 'axios'
import { USER_SERVER} from '../store/api/server_route'

//=============================================================================
// UserContext  - user metadata 
// not std use -probably need to change
//=============================================================================
export const UserContext = React.createContext({
    token: 'xx',
    baseURL:'',
    portal_user_id: '1',
    portal_user_name: 'Danny Lee Smith',
    login_name: 'danny',
    patient_id:'1000001',
    patient_name:  'Danny Lee Smith',
    is_admin:'Y',
    is_authenticated:'N',
    reset_password:'N',
    consent_touse:'Y',
    authError: '',
    idleTimeActivate: 2*60*1000,  /* 2 Minutes */
    sessionTimeOut:   5*60*1000,  /* 5 Minutes */
 //=============================================================================
 // home screen counts
 //=============================================================================
    unread_messages: 3,
    unread_documents: 4,
    action_items: 2,
    notices:4,
 //=============================================================================
 // clinic info (for header footer etc)
 //=============================================================================
    practice_id:1,
    practice_header:'Main St',
    clinic_id: 1,
    clinic_name: 'Main St Medical',
    clinic_address: '12 Canfield Rd, Boadman',
    clinic_phone:'(330) 758-8832',
    clinic_hours:'Mon-Fri 9am-5pm',
    clinic_email:'support@mainstmedical.com',

//=============================================================================
// Filering
//=============================================================================
     appt_filter: '',
     mail_outbox_filter_open: false,
     mail_outbox_filter:{read:false,date_range:'all',from_date:'',to_date:''},
     mail_inbox_filter_open: false,
     mail_inbox_filter:{read:false,date_range:'all',from_date:'',to_date:''},
//=============================================================================
// Local Storage
//=============================================================================
     localStorage: {
        labresult_id: 0,
        labresultcat_id: 0,
        note_id:0,
        msg_id:0,
        authentication_id:13,
        contact_id:0,
        insurance_id:0,
        immunization_id:0,
        careplan_id:0,
        careplan_name:''
     }
})
//=============================================================================
// Functions for the context
//=============================================================================

//=============================================================================
// UserDataReset - resets the data 
//=============================================================================
export const UserDataReset = (user) => {
  
   user.token            = ''
   user.portal_user_id   = ''
   user.portal_user_name = ''
   user.login_name       = ''
   user.patient_id       = '' 
   user.patient_name     = ''

   user.is_admin         = 'N'
   user.is_authenticated = 'Y'
   user.reset_password   = 'N'
   user.consent_touse    = 'Y'
  
   user.unread_messages  = 0
   user.unread_documents = 0
   user.action_items     = 0
   user.notices          = 0 
   
   user.clinic_id        = 1
   user.clinic_name      = ''
   user.clinic_address   = ''
   user.clinic_phone     = ''
   user.clinic_hours     = ''
   user.clinic_email     = ''
}
//=============================================================================
// UserSetLoginData - sets the user Data when loggin in
//=============================================================================
export const UserSetLoginData = (user,userData) => {
  
   user.token            = userData.token
   user.portal_user_id   = userData.portal_user_id
   user.portal_user_name = userData.portal_user_name
   user.patient_id       = userData.patient_id
   user.patient_name     = userData.patient_name
   user.is_admin         = userData.is_admin
   user.is_authenticated = 'Y'
   user.reset_password   = userData.password_reset
   user.consent_touse    = userData.consent_touse

}
//=============================================================================
// UserSetCounts - sets the counts
//=============================================================================
export const UserSetCounts = (user,counts) => {
  
   user.unread_messages  = counts.mail_messages
   user.action_items     = counts.action_items
   user.unread_documents = counts.documents
   user.notices          = counts.notices

}
//=============================================================================
// UserSetClinicData - sets the clinical data
//=============================================================================
export const UserSetClinicData = (user,clinicData) => {
  
   user.practice_id      = clinicData.practice_id
   user.practice_header  = clinicData.practice_header
   user.clinic_id        = clinicData.clinic_id
   user.clinic_name      = clinicData.clinic_name
   user.clinic_address   = clinicData.address
   user.clinic_phone     = clinicData.phone
   user.clinic_hours     = clinicData.working_hours
   user.clinic_email     = clinicData.email
}
//=============================================================================
// UserChangePatientData - sets only the patient data when patient has changed
//=============================================================================
export const UserChangePatientData = (user,patientData) => {
  
   user.patient_id       = patientData.patient_id
   user.patient_name     = patientData.patient_name

}
//=============================================================================
// UserLogout - user logout 
//=============================================================================
export const UserLogout = (user) =>{
    user.is_authenticated = 'N'
    user.token  = ''
   let queryString = `${USER_SERVER}/logout?portal_user_id=${user.portal_user_id}`
    axios.post(queryString)
    .then(response=>{
      UserDataReset(user)
    })
    .catch(error => {
      UserDataReset(user)
    })
}
//=============================================================================
// UserChangePatient - change patient for this user
//=============================================================================
export const UserChangePatient = (user,ref,setPatientSet) =>{
  
   let queryString = `${USER_SERVER}/patient_getprofile?portal_user_id=${user.portal_user_id}&patient_id=${user.patient_id}`
   axios.get(queryString)
    .then(response=>{
         let data =  response.data
         if (data.counts.recordset) {
            UserSetCounts(user,data.counts.recordset[0])
         }
         if (data.profiledata.recordset) {
            UserChangePatientData(user,data.profiledata.recordset[0])
         }
         if (data.providerdata.recordset) {
            let providerList=[]
            data.providerdata.recordset.forEach(item=>{
                providerList.push({key:item.provider_id,value:item.provider_name}) 
             })
             ref.providerList = providerList
         }
         setPatientSet(true)
     })
    .catch(error => {
     // UserDataReset(user)
    })
}
//=============================================================================


