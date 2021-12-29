import {GET_PROVIDERS, LOOKUP_PHARMACY,LOOKUP_SEARCH,
        RETREIVE_FAILURE
       } from '../api/types'

//=============================================================================
// ref reducer- for reference data
//=============================================================================
export default function(state={},action){
    switch(action.type){
        case GET_PROVIDERS: 
        case LOOKUP_SEARCH: 
        case LOOKUP_PHARMACY: 
             return {...state, data: action.payload, error:'',loading:false}  
        case RETREIVE_FAILURE: 
             return {...state, data: {}, error:'Unable to retrieve the data',loading:false}                
        default : 
           return state;
    }
}
//=============================================================================