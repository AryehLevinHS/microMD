import {PRACTICE_INFO_GET,PRACTICE_INFO_UPDATE,
        PRACTICE_NEWS_GET,PRACTICE_NEWS_UPDATE,
        PRACTICE_PREFS_UPDATE, PRACTICE_PREFS_GET,
        PRACTICE_RESOURCES_UPDATE,PRACTICE_RESOURCES_GET,
        PRACTICE_CLINICLIST_GET,PRACTICE_EDUCATION_GET,
        RETREIVE_FAILURE, SAVE_FAILURE,
        FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET,FORM_DATA_RETRIEVE_FAILURE
       } from '../api/types'

//=============================================================================
// practice reducer
//=============================================================================
export default function(state={},action){
    switch(action.type){
        case PRACTICE_INFO_GET: 
        case PRACTICE_RESOURCES_GET: 
        case PRACTICE_NEWS_GET: 
        case PRACTICE_PREFS_GET: 
        case PRACTICE_CLINICLIST_GET:
        case PRACTICE_EDUCATION_GET:     
             return {...state, data: action.payload, error:'',loading:false}   
        case PRACTICE_INFO_UPDATE: 
        case PRACTICE_NEWS_UPDATE: 
        case PRACTICE_RESOURCES_UPDATE: 
        case PRACTICE_PREFS_UPDATE: 
             return {...state, sendSuccess: true, error:'',isError:false}     
        case RETREIVE_FAILURE: 
             return {...state, data: {}, error:'Unable to retrieve the data',loading:false}           
        case SAVE_FAILURE: 
             return {...state,sendSuccess:false, error:'Unable to save the data',isError:true}        
        case FORM_VALIDATION_RESET: 
             return {...state,sendSuccess:false, error:'',isError:false}        
        case FORM_VALIDATION_FAILURE: 
             return {...state,sendSuccess:false, error:action.error,isError:true}        
        case FORM_DATA_RETRIEVE_FAILURE:
             return {...state,sendSuccess:false, error:action.error,isError:true}  
        default : 
             return state
    }
}
//=============================================================================