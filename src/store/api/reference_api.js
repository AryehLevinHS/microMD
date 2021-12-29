import axios from 'axios'
import { REFERENCE_SERVER } from './server_route'
import {LOOKUP_PHARMACY,LOOKUP_SEARCH,RETREIVE_FAILURE} from './types'

//=============================================================================
// lookupPharmacy =looksup the pharmacy
//=============================================================================
export const lookupPharmacy = (dispatch,searchString) => {

    let queryString = `${REFERENCE_SERVER}/lookup_pharmacy?search_string=${searchString}`
    axios.get(queryString)
    .then(response=>{
       dispatch({type: LOOKUP_PHARMACY,payload:response.data}) 
    })
    .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}
//=============================================================================
// lookupProviders =looksup the providers
//=============================================================================
export const lookupProviders = (dispatch,searchString) => {

   let queryString = `${REFERENCE_SERVER}/lookup_providers?search_string=${searchString}`
    axios.get(queryString)
   .then(response=>{
      dispatch({type: LOOKUP_SEARCH,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================
// lookupApptBooks =looksup apptbooks
//=============================================================================
export const lookupApptBooks = (dispatch,searchString) => {

   let queryString = `${REFERENCE_SERVER}/lookup_apptbooks?search_string=${searchString}`
   axios.get(queryString)
   .then(response=>{
      dispatch({type: LOOKUP_SEARCH,payload:response.data}) 
   })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
   })
}
//=============================================================================