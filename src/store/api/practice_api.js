import axios from 'axios'
import { PRACTICE_SERVER } from './server_route'
import {PRACTICE_INFO_GET,
        PRACTICE_NEWS_GET,
        PRACTICE_PREFS_GET,
        PRACTICE_EDUCATION_GET,
        PRACTICE_RESOURCES_GET, 
        PRACTICE_CLINICLIST_GET,
        RETREIVE_FAILURE } from './types'


        
 //=============================================================================
// PracticeInfoGet - gets the practice preferences
//=============================================================================
export const PracticeInfoGet = (dispatch,practice_id)=>{

  let queryString = `${PRACTICE_SERVER}/practice_info_get?practice_id=${practice_id}`
  axios.get(queryString)
  .then(response=>{
       dispatch({type: PRACTICE_INFO_GET,payload:response.data}) 
    })
  .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
    })
}       
//=============================================================================
// PracticeprefsGet - gets the practice preferences
//=============================================================================
export const PracticeprefsGet = (dispatch,practice_id)=>{

   let queryString = `${PRACTICE_SERVER}/practice_prefs_get?practice_id=${practice_id}`
   axios.get(queryString)
   .then(response=>{
        dispatch({type: PRACTICE_PREFS_GET,payload:response.data}) 
     })
   .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}
//=============================================================================
// NewsGetList - gets the practice news
//=============================================================================
export const NewsGetList = (dispatch,practice_id)=>{
    let queryString = `${PRACTICE_SERVER}/news?practice_id=${practice_id}`
     axios.get(queryString)
     .then(response=>{
            dispatch({type: PRACTICE_NEWS_GET,payload:response.data}) 
       })
     .catch(error => {
        dispatch({type:RETREIVE_FAILURE,payload:error})
       })
  }
//=============================================================================
// NewsGetById - gets the practice news
//=============================================================================
export const NewsGetById = (dispatch,newsId)=>{

  let queryString = `${PRACTICE_SERVER}/news/news_by_id?&news_id=${newsId}`
 
   axios.get(queryString)
   .then(response=>{
        dispatch({type: PRACTICE_NEWS_GET,payload:response.data}) 
     })
   .catch(error => {
       dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}
//=============================================================================
// EducationGet - gets the patient education material
//=============================================================================
export const EducationGetList = (dispatch,practice_id,searchString)=>{
   
   let queryString = `${PRACTICE_SERVER}/education?practice_id=${practice_id}&searchString=${searchString}`
   axios.get(queryString)
   .then(response=>{
        dispatch({type: PRACTICE_EDUCATION_GET,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}   
//=============================================================================
// PracticeResourcesGet = gets the practice resources
//=============================================================================
  export const PracticeResourcesGet = (dispatch,practice_id)=>{
    let queryString = `${PRACTICE_SERVER}/resource_getdisplay?practice_id=${practice_id}`
     axios.get(queryString)
     .then(response=>{
            dispatch({type: PRACTICE_RESOURCES_GET,payload:response.data}) 
       })
     .catch(error => {
        dispatch({type:RETREIVE_FAILURE,payload:error})
       })
  }
//=============================================================================
// ClinicGetList = gets the clinic list
//=============================================================================
export const ClinicGetList = (dispatch,practice_id)=>{
  let queryString = `${PRACTICE_SERVER}/clinic_list_get?practice_id=${practice_id}`
   axios.get(queryString)
   .then(response=>{
          dispatch({type: PRACTICE_CLINICLIST_GET,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}
//=============================================================================