import {ALLERGIES_GET, ALERTS_GET,
        ACTIONITEM_GET,ACTIONITEM_UPDATE,  
        CAREPLAN_DETAIL_GET, CAREPLAN_GET, CAREPLAN_PROGRESS,
        DASHBOARD_CARDS, ENCOUNTERS_GET, ENCOUNTER_GET_SUMMARY , 
        HOSPITALIZATIONS_GET,IMMUNIZATIONS_GET,IMMUNIZATIONDETAIL_GET,
        LABRESULTS_GET,LABTESTS_GET,LABRESULT_GETGRAPH,
        MED_DOCS_GET,MED_DOC_GET,
        MED_FORM_GETTEMPLATE,MED_FORM_SEND,MED_FORM_GETLIST,MED_FORM_GET,
        MEDICATION_REPORT_GET,
        NOTICES_GET,NOTICE_STATUS_UPDATE,
        REFERRALS_GET,REFERRAL_REQUEST,
        REFILL_REQUEST_SEND,MEDICATIONS_GET, REFILL_MEDS_GET,
        VITALSIGN_SINGLE_GET,VITALSIGNS_GET, VITALSIGNS_SEND,
        RETREIVE_FAILURE, SAVE_FAILURE,SEND_FAILURE,
        FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET,FORM_DATA_RETRIEVE_FAILURE,RETRIEVE_RESET
       } from '../api/types'

//=============================================================================
// medinforeducer
//=============================================================================
const medinforeducer = (state={},action) =>{
        let docId = '' 
     
        switch(action.type){
            /* for retrieving */
            case ALERTS_GET: 
            case ACTIONITEM_GET: 
            case ALLERGIES_GET: 
            case CAREPLAN_GET: 
            case CAREPLAN_DETAIL_GET: 
            case DASHBOARD_CARDS: 
            case ENCOUNTERS_GET: 
            case ENCOUNTER_GET_SUMMARY: 
            case MED_FORM_GETTEMPLATE: 
            case MED_FORM_GETLIST: 
            case IMMUNIZATIONS_GET: 
            case IMMUNIZATIONDETAIL_GET:    
            case LABRESULTS_GET: 
            case LABTESTS_GET: 
            case LABRESULT_GETGRAPH: 
            case NOTICES_GET: 
            case MEDICATIONS_GET: 
            case MEDICATION_REPORT_GET: 
            case MED_DOCS_GET: 
            case REFERRALS_GET: 
            case REFILL_MEDS_GET: 
            case HOSPITALIZATIONS_GET: 
            case VITALSIGNS_GET: 
            case VITALSIGN_SINGLE_GET:
                 return {...state, data: action.payload, error:'',loading:false}
            /* for updating */
            case ACTIONITEM_UPDATE: 
            case CAREPLAN_PROGRESS:
            case MED_FORM_SEND: 
            case REFILL_REQUEST_SEND: 
            case REFERRAL_REQUEST: 
            case VITALSIGNS_SEND: 
                 return {...state, sendSuccess: true, error:'',isError:false}     
               
            case MED_FORM_GET: 
                if(action.payload.recordset) {
                  docId = action.payload.recordset[0].doc_id 
                }
                return {...state, data: action.payload, error:'',loading:false,docId:docId}   
             /* for retrieving and updating */
            case NOTICE_STATUS_UPDATE: 
                return {...state, data: action.payload, error:'',loading:false, sendSuccess: true}
            case MED_DOC_GET:
                if(action.payload.recordset) {
                  docId = action.payload.recordset[0].doc_id 
                }
                return {...state, data: action.payload, error:'',loading:false,docId:docId}    
            case RETREIVE_FAILURE: 
                 // if err 401 then log the person out 
                 let errmsg = ''
                    if (action.payload && action.payload.response && action.payload.response.data) {
                         errmsg = ': ('+action.payload.response.data.error+')'
                    }
                 return {...state, data: {}, error:'Unable to retrieve the data.'+errmsg,loading:false}        
            case SAVE_FAILURE: 
                 return {...state,sendSuccess:false, error:'Unable to save the data',isError:true}        
            case SEND_FAILURE: 
                 return {...state,sendSuccess:false, error:'Failed to send the Message',isError:true}        
            case FORM_VALIDATION_RESET: 
                return {...state,sendSuccess:false, error:'',isError:false}        
            case FORM_VALIDATION_FAILURE: 
                 return {...state,sendSuccess:false, error:action.error,isError:true}        
            case FORM_DATA_RETRIEVE_FAILURE:
                 return {...state,sendSuccess:false, error:action.error,isError:true}        
            case RETRIEVE_RESET:
                return {...state, error:'',loading:true}          
            default : 
                return state;
        }
}
export default medinforeducer
//=============================================================================