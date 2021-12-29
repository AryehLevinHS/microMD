import {useReducer} from 'react'
import medinfoReducer   from '../reducers/medinfo_reducer';
import { ActionItemGetlist,ActionItemSetStatus,
         AllergiesGetList,
         CareplanGetList,CareplanSetStatus,CarePlanSendProgress,CarePlanGetbyId,
         DashboardGetCards,
         EncounterGetList,EncounterGetSummary,
         FormGetList,FormGetById,
         ImmunizationGetList,ImmunizationGetDetail,
         LabresultListGet,LabResultGraphGet,LabResultTests,
         MedicationListGet,MedicationsGetForRefill,MedicationRefillRequestSend,
         MedicalDocGetById,MedicalDocsGetList,MedicalDocsGetFiltered,
         NoticeGetList,NoticeSetStatus,
         ReferralGetList,ReferralSend,
         VitalsignGetList,VitalsignsGetForGraph,VitalsignSend } from '../api/medinfo_api';
import {FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET} from '../api/types'            

//=============================================================================
// useActionItemList (hook for getting actionItems and managing state)
//=============================================================================
export const useActionItemList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // gets the user action items 
    const DataActionItemGetlist = (patient_id) => {
        ActionItemGetlist(dispatch,patient_id)
    }
    const DataActionItemSetStatus = (patient_id,statusData) => {
        ActionItemSetStatus(dispatch,statusData)
        // refresh list
        ActionItemGetlist(dispatch,patient_id)
    }
 
   return ([state,DataActionItemGetlist,DataActionItemSetStatus])
}
//=============================================================================
// useAllergyList (hook for getting allergies and managing state)
//=============================================================================
export const useAllergyList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // gets the user allergies 
    const DataAllergyGetList = (patient_id) => {
        AllergiesGetList(dispatch,patient_id)
    }

   return ([state,DataAllergyGetList])
}
//=============================================================================
// useCareplanList (hook for getting careplans and managing state)
//=============================================================================
export const useCareplanList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // gets the user care plans
    const DataCareplanGetList = (patient_id) => {
        CareplanGetList(dispatch,patient_id)
    }
    const DataCareplanSetStatus = (patient_id,careplan_id,status) => {
        CareplanSetStatus(dispatch,patient_id,careplan_id,status)
        // refresh list - done in action file
        //CareplanGetList(dispatch,patient_id)
    }
    
   return ([state,DataCareplanGetList,DataCareplanSetStatus])
}
//=============================================================================
// useCareplanForm (hook for sending careplan progress form  and managing state)
//=============================================================================
export const useCareplanForm = () => {
    // fpr sending the data
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    // for loading the data
    const initialLoadinglState = { loading:true, error:'', data:{} }
    const [loadingState,dispatchLoading] = useReducer(medinfoReducer,initialLoadinglState)

    // get careplan header
    const DataCarePlanGetbyId = (patient_id,careplan_id) => {
        CarePlanGetbyId(dispatchLoading,patient_id,careplan_id)
    }
    // send careplan form 
    const DataCarePlanSendProgress = (dataToSubmit) => {
        CarePlanSendProgress(dispatch,dataToSubmit)
    }
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([loadingState,state,DataCarePlanSendProgress,DataCarePlanGetbyId,
            DataValidationFailure,DataValidationReset])
}
//=============================================================================
// useDashboard (hook for getting dashboard stuff and managing state)
//=============================================================================
export const useDashboard = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // gets the dashboard cards
    const DataDashboardGetCards = (patient_id,portal_user_id) => {
        DashboardGetCards(dispatch,patient_id,portal_user_id)
    }

   return ([state,DataDashboardGetCards])
}
//=============================================================================
// useEncounterList (hook for getting encounters and managing state)
//=============================================================================
export const useEncounterList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
   
    // gets the encounters  
    const DataEncounterGetList = (patient_id) => {
        EncounterGetList(dispatch,patient_id)
    }
 
   return ([state,DataEncounterGetList])
}

//=============================================================================
// useEncounterSummary (hook for getting encounter summary and managing state)
//=============================================================================
export const useEncounterSummary = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
  
   // gets the encounter summary  
   const DataEncounterSummaryGet = (patient_id,encounter_id) => {
      EncounterGetSummary(dispatch,patient_id,encounter_id)
   }

   return ([state,DataEncounterSummaryGet])
}
//=============================================================================
// useFormList (hook for getting medical forms list and managing state)
//=============================================================================
export const useFormList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // gets the medical form list 
    const DataFormGetList = (patient_id) => {
        FormGetList(dispatch,patient_id)
    }

   return ([state,DataFormGetList])
}
//=============================================================================
// useFormDetail (hook for getting form details and managing state)
//=============================================================================
export const useFormDetail = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
  
   // gets the form details
   const DataFormGetById = (patient_id,form_id) => {
    FormGetById(dispatch,patient_id,form_id)
   }

   return ([state,DataFormGetById])
}
//=============================================================================
// useImmunizationList (hook for getting immunization list and managing state)
//=============================================================================
export const useImmunizationList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    const [stateDetail,dispatchDetail] = useReducer(medinfoReducer,InitialState)
    
    // gets the immmunizations (list and detail)
    const DataImmunizationlistGet = (patient_id) => {
        ImmunizationGetList(dispatch,patient_id)
        ImmunizationGetDetail(dispatchDetail,patient_id)
    }

   return ([state,stateDetail,DataImmunizationlistGet])
}
//=============================================================================
// useLabResultList (hook for getting labersults and managing state)
//=============================================================================
export const useLabResultList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
   
    // gets the lab results  
    const DataLabresultListGet = (patient_id) => {
        LabresultListGet(dispatch,patient_id)
    }
 
   return ([state,DataLabresultListGet])
}
//=============================================================================
// useLabResultTests (hook for getting data for lab results graph and managing state)
//=============================================================================
export const useLabResultTests = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
  
   // gets the lab result graph
   const DataLabResultTestsGet = (patient_id,labresult_id) => {
        LabResultTests(dispatch,patient_id,labresult_id)
   }

   return ([state,DataLabResultTestsGet])
}
//=============================================================================
// useLabResultGraph (hook for getting data for lab results graph and managing state)
//=============================================================================
export const useLabResultGraph = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
  
   // gets the lab result graph
   const DataLabResultGraphGet = (patient_id,labresult_id) => {
        LabResultGraphGet(dispatch,patient_id,labresult_id)
   }

   return ([state,DataLabResultGraphGet])
}
//=============================================================================
// useMedicationList (hook for getting medications and managing state)
//=============================================================================
export const useMedicationList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
   
    // gets the medication list  
    const DataMedicationGetList = (patientId,newFilterData) => {
        MedicationListGet(dispatch,patientId,newFilterData)
    }
 
   return ([state,DataMedicationGetList])
}
//=============================================================================
// useMedicationRefill (hook for getting medications for refills and managing state)
//=============================================================================
export const useMedicationRefill = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
  
   // gets medication for refills
   const DataMedicationsGetForRefill = (patient_id) => {
        MedicationsGetForRefill(dispatch,patient_id)
   }

   return ([state,DataMedicationsGetForRefill])
}
//=============================================================================
// useMedicationRefillForm (hook for sending refill requests form  and managing state)
//=============================================================================
export const useMedicationRefillForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // send refill request
    const DataMedicationRefillRequestSend = (dataToSubmit) => {
        MedicationRefillRequestSend(dispatch,dataToSubmit)
    }
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,DataMedicationRefillRequestSend,DataValidationFailure,DataValidationReset])
}

//=============================================================================
// useMedicalDocList (hook for getting medical documents and managing state)
//=============================================================================
export const useMedicalDocList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)

    // get medical documents
    const DataMedicalDocsGetList = (patient_id) => {
        MedicalDocsGetList(dispatch,patient_id)
    }
    // sget medical documents filtered
    const DataMedicalDocsGetFiltered = (filterData) => {
        MedicalDocsGetFiltered(dispatch,filterData)
    }
    
   return ([state,DataMedicalDocsGetList,DataMedicalDocsGetFiltered]) // not sure if will need dispatch or use dispatch for actions 
}
//=============================================================================
// useMedicalDoc (hook for getting  a medical document and managing state)
//=============================================================================
export const useMedicalDoc = () => {
    const InitialState = { loading:true, error:'', data:{},docId:''}
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)

    // get medical documents
    const DataMedicalDocsGetById = (patient_id,document_id) => {
        MedicalDocGetById(dispatch,patient_id,document_id)
    }
  
   return ([state,DataMedicalDocsGetById]) // not sure if will need dispatch or use dispatch for actions 
}
//=============================================================================
// useNotices (hook for getting notices and managing state)
//=============================================================================
export const useNotices = () => {
    const InitialState = { loading:true, error:'', data:{},sendSuccess:false }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    // get notices
    const DataNoticelistGet = (patient_id) => {
        NoticeGetList(dispatch,patient_id)
    }
    // set notice status
    const DataNoticeSetStatus = (newStatusData) => {
        NoticeSetStatus(dispatch,newStatusData)
    }
    

   return ([state,DataNoticelistGet,DataNoticeSetStatus]) 
}
//=============================================================================
// UseReferrals (hook for getting referrals and managing state)
//=============================================================================
export const useReferrals = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)

    const DataReferralGetList = (patient_id) => {
        ReferralGetList(dispatch,patient_id)
    }

   return ([state,DataReferralGetList]) 
}
//=============================================================================
// UseReferrals (hook for send referral requests and managing state)
//=============================================================================
export const useReferralForm = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)

    const DataReferralSend = (patient_id) => {
        ReferralSend(dispatch,patient_id)
    }
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,DataReferralSend,DataValidationFailure,DataValidationReset])
}
//=============================================================================
// useVitalsignList (hook for getting vitalsign list and managing state)
//=============================================================================
export const useVitalsignList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // gets the vitalsigns
    const DataVitalsignlistGet = (patient_id) => {
        VitalsignGetList(dispatch,patient_id)
    }

   return ([state,DataVitalsignlistGet])
}
//=============================================================================
// useVitalsignList (hook for getting vitalsign list and managing state)
//=============================================================================
export const useVitalsignGraph = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // gets the vitalsigns for graphing
    const DataVitalsignsGetForGraph = (patient_id) => {
        VitalsignsGetForGraph(dispatch,patient_id)
    }

   return ([state,DataVitalsignsGetForGraph])
}

//=============================================================================
// useVitalsignForm (hook for sending vitalsign form  and managing state)
//=============================================================================
export const useVitalsignForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(medinfoReducer,InitialState)
    
    // send vitalsigns form
    const DataVitalsignSend = (dataToSubmit) => {
        VitalsignSend(dispatch,dataToSubmit)
    }
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,DataVitalsignSend,DataValidationFailure,DataValidationReset])
}

//=============================================================================
//=============================================================================