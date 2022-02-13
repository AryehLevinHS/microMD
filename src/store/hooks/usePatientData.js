import {useReducer} from 'react'
import patientReducer   from '../reducers/patient_reducer';
import { insuranceGetList,insurancetDelete,insuranceUpdate,insuranceGetDetails, 
         pharmacyGetList,pharmacyDelete,pharmacyAdd,
         providersGetList,providersGetWorkplace,
         contactGetList,contactDelete,contactUpdate,contactGetDetails,
         proxyPatientGet,proxyPatientDelete,
         demographicsGetDetails,demographicsUpdate,
         PatientRegisterGetDetails,PatientRegister,PatientRegisterLoginNameVerify,
         personaldetailGet  } from '../api/patient_api';
import {FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET} from '../api/types'     
         
//=============================================================================
// usePersonaleDetails (hook for displaying patient personal detalis and managing state)
//=============================================================================
export const usePersonaleDetails = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)
    
    // get patient demographics data
    const DataPersonalInfoGetDetails = (patient_id) => {
        personaldetailGet(dispatch,patient_id)
    }
   
   return ([state,DataPersonalInfoGetDetails]) 
}
//=============================================================================
// usePersonalForm (hook for updating demograohic(personal) data form  and managing state)
//=============================================================================
export const usePersonalForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)

    const initialLoadinglState = { loading:true, error:'', data:{} }
    const [loadingState,dispatchLoading] = useReducer(patientReducer,initialLoadinglState)
   

    // gets the demographic data
    const DataDemographicsGetDetails = (patient_id) => {
        demographicsGetDetails(dispatchLoading,patient_id)
    }

    // update demograhic data
    const DataDemographicsUpdate = (dataToSubmit) => {
        demographicsUpdate(dispatch,dataToSubmit)
    }

    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,loadingState,DataDemographicsGetDetails,DataDemographicsUpdate,
                               DataValidationFailure,DataValidationReset])
}
//=============================================================================
// usePatientRegister (hook for registering patient and managing state)
//=============================================================================
export const usePatientRegister = () => {

    // for registering the patient
    const initialState = { success:false, error:'',isError:false,data:{},loginNameChecked:false,loginNameVerified:false}
    const [stateRegister,dispatchRegister] = useReducer(patientReducer,initialState)
   
    // for the patient details
    const InitialState = { loading:true, error:'', data:{} }
    const [statePatient,dispatchPatient] = useReducer(patientReducer,InitialState)
   
    // register the patient
    const DataPatientRegister = (dataToSubmit) => {
        PatientRegister(dispatchRegister,dataToSubmit)
    } 
   
    // register patient get details
    const DataPatientRegisterGetDetails = (patient_id) => {
        PatientRegisterGetDetails(dispatchPatient,patient_id)
    }
    
    // register patient check login name
    const DataPatientRegisterLoginNameVerify = (loginName) => {
        PatientRegisterLoginNameVerify(dispatchRegister,loginName)
    }
    const DataValidationFailure = (error) => {
        dispatchRegister({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatchRegister({type: FORM_VALIDATION_RESET})
    }
  
   return ([stateRegister,statePatient,DataPatientRegister,DataPatientRegisterGetDetails,
            DataPatientRegisterLoginNameVerify, DataValidationFailure,DataValidationReset]) 
}
//=============================================================================
// useProviderList (hook for displaying patient providers and managing state)
//=============================================================================
export const useProviderList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)
    const [stateWorkplace,dispatchWorkplace] = useReducer(patientReducer,InitialState)
    
    // get provider list and workplace
    const DataProviderGetList = (patient_id) => {
        providersGetList(dispatch,patient_id)
        providersGetWorkplace(dispatchWorkplace,patient_id)
    }
   
    // get provider workplace
    const DataProviderGetWorkplace = (patient_id) => {
        providersGetWorkplace(dispatchWorkplace,patient_id)
    }
    
   return ([state,stateWorkplace,DataProviderGetList,DataProviderGetWorkplace]) 
}
//=============================================================================
// useContactList (hook for displaying adding and deleting contacts and managing state)
//=============================================================================
export const useContactList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)
    
    // get contact list
    const DataContactGetList = (patient_id) => {
        contactGetList(dispatch,patient_id)
    }
   
    // delete contact
    const DataContactDelete = (patient_id,patcontact_id) => {
        contactDelete(dispatch,patient_id,patcontact_id)
        // should do refresh here?
    }   

   return ([state,DataContactGetList,DataContactDelete]) 
} 
//=============================================================================
// useContactForm (hook for updating patient contact data form  and managing state)
//=============================================================================
export const useContactForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)

    const initialLoadinglState = { loading:true, error:'', data:{} }
    const [loadingState,dispatchLoading] = useReducer(patientReducer,initialLoadinglState)
   
    // gets the contact details
    const DataContactGetDetails = (patient_id,contact_id) => {
        contactGetDetails(dispatchLoading,patient_id,contact_id)
    }

    // update contact data
    const DataContactUpdate = (dataToSubmit) => {
        contactUpdate(dispatch,dataToSubmit)
    }

    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,loadingState,DataContactGetDetails,DataContactUpdate,
                               DataValidationFailure,DataValidationReset])
}        
//=============================================================================
// useInsuranceList (hook for displaying adding and deleting insurance and managing state)
//=============================================================================
export const useInsuranceList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)
    
    // get insurance list
    const DataInsuranceGetList = (patient_id) => {
        insuranceGetList(dispatch,patient_id)
    }
   
    // delete insurance
    const DataInsurancetDelete = (patient_id,insurance_id) => {
        insurancetDelete(dispatch,patient_id,insurance_id)
        // should do refresh here?
    }
    
   return ([state,DataInsuranceGetList,DataInsurancetDelete]) 
}
//=============================================================================
// useInsuranceForm (hook for updating patient insurance data form  and managing state)
//=============================================================================
export const useInsuranceForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)

    const initialLoadinglState = { loading:true, error:'', data:{} }
    const [loadingState,dispatchLoading] = useReducer(patientReducer,initialLoadinglState)
   
    // gets the insurance details
    const DataInsuranceGetDetails = (patient_id,insurance_id) => {
        insuranceGetDetails(dispatchLoading,patient_id,insurance_id)
    }

    // update insurance data
    const DataInsuranceUpdate = (dataToSubmit) => {
        insuranceUpdate(dispatch,dataToSubmit)
    }

    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,loadingState,DataInsuranceGetDetails,DataInsuranceUpdate,
                               DataValidationFailure,DataValidationReset])
}        
//=============================================================================
// usePharmacyList (hook for displaying adding and deleting pharmacies and managing state)
//=============================================================================
export const usePharmacyList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)
    
    // get pharmcyList
    const DataPharmacyGetList = (patient_id) => {
        pharmacyGetList(dispatch,patient_id)
    }
    // add pharmacy
    const DataPharmacyAdd = (patient_id,pharmacy_id) => {
        pharmacyAdd(dispatch,patient_id,pharmacy_id)
    }
    // delete pharmacy
    const DataPharmacyDelete = (patient_id,pharmacy_id) => {
        pharmacyDelete(dispatch,patient_id,pharmacy_id)
    }
    
   return ([state,DataPharmacyGetList,DataPharmacyAdd,DataPharmacyDelete]) 
}
//=============================================================================
// usePatientProxyList (hook for displaying adding and deleting proxy and managing state)
// NOT USED AS USING USER PROXY INSTEAD - COULD BE NEED BOTH
//=============================================================================
export const usePatientProxyList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(patientReducer,InitialState)
    
   // get contact list
   const DataProxyPatientGet = (patient_id) => {
        proxyPatientGet(dispatch,patient_id)
    }

    // delete proxy
    const DataProxyPatientDelete = (patient_id,proxy_user_id,deleted_by) => {
        proxyPatientDelete(dispatch,patient_id,proxy_user_id,deleted_by)
        // should do refresh here?
        proxyPatientGet(dispatch,patient_id)
    }
    

   return ([state,DataProxyPatientGet,DataProxyPatientDelete]) 
}
//=============================================================================