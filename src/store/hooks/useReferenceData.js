import {useReducer} from 'react'
import refReducer   from '../reducers/ref_reducer';
import { lookupPharmacy,lookupProviders,lookupApptBooks } from '../api/reference_api';
//import {FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET} from '../api/types'   

//=============================================================================
// useLookup (hook for data from lookups and managing state)
//=============================================================================
export const useLookup = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(refReducer,InitialState)
    
    // get pharmacy
    const DataLookupPharmacy = (searchString) => {
        lookupPharmacy(dispatch,searchString)
    }
    // get providers
    const DataLookupProvider = (searchString) => {
        lookupProviders(dispatch,searchString)
    }

    // get providers
    const DataLookupApptBooks = (searchString) => {
        lookupApptBooks(dispatch,searchString)
    }
    
   return ([state,DataLookupPharmacy,DataLookupProvider,DataLookupApptBooks]) 
}
//=============================================================================