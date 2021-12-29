import {DOCUMENT_UPLOAD,DOCUMENT_DOWNLOAD,DOCUMENT_DELETE,DOCUMENT_SENDING,
       SAVE_FAILURE,RETREIVE_FAILURE
       } from '../api/types'


//=============================================================================
// docserver- for document handling
//=============================================================================
export default function(state={},action){
    switch(action.type){
        case DOCUMENT_DOWNLOAD: 
            return {...state, data: action.payload, error:'',loading:false}   
        case DOCUMENT_UPLOAD: 
           // let doc_id = action.payload.recordset[0].doc_id
            return {...state,sending:false, sendSuccess: true, error:'',isError:false, data:action.payload}      
        case DOCUMENT_SENDING: 
             return {...state,sending:true, sendSuccess: false, error:'',isError:false}      
        case DOCUMENT_DELETE: 
            return {...state, sendSuccess: true, error:'',isError:false}      
        case RETREIVE_FAILURE: 
             return {...state, data: action.payload, error:'Unable to retrieve the data',loading:false}           
        case SAVE_FAILURE: 
            return {...state,sendSuccess:false, error:'Unable to save the data',isError:true}        
        default : 
           return state;
    }
}
//=============================================================================