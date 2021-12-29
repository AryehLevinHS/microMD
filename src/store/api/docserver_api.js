import axios from 'axios'
import { DOCUMENT_SERVER } from './server_route'
import {DOCUMENT_UPLOAD,DOCUMENT_DOWNLOAD, DOCUMENT_DELETE, RETREIVE_FAILURE,
       SAVE_FAILURE } from './types'

//=============================================================================
// set token
//=============================================================================
////axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

//=============================================================================
// getDMSDocument - gets the document
//=============================================================================
export const getDMSDocument = (dispatch,docId)=>{
  let queryString = `${DOCUMENT_SERVER}/doc_get?doc_id=${docId}`
   axios.get(queryString)
   .then(response=>{
          dispatch({type: DOCUMENT_DOWNLOAD,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}  
//=============================================================================
// saveDMSDocument - saves the document to DMS
//=============================================================================
export const saveDMSDocument = (dispatch,dataToSubmit,file)=>{
  let doc_id     = dataToSubmit.doc_id
  let patient_id = dataToSubmit.patient_id
  let doc_folder = dataToSubmit.doc_folder
  let doc_name   = dataToSubmit.doc_name
  let queryString = `${DOCUMENT_SERVER}/doc_add?doc_id=${doc_id}&patient_id=${patient_id}&doc_folder=${doc_folder}&doc_name=${doc_name}`
  
  // create form and attach the file to the form
  // server uses multer and ?formidable
  const config = {
    header: {'content-type':'multipart/form-data'}
  }
   let formData = new FormData();
   formData.append("file",file);

   axios.post(queryString,formData,config)
   .then(response=>{
        dispatch({type: DOCUMENT_UPLOAD,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
     })
} 
//=============================================================================
// deleteDMSDocument - removes the document from DMS 
//=============================================================================
export const deleteDMSDocument = (dispatch,docId)=>{
  let queryString = `${DOCUMENT_SERVER}/doc_delete?doc_id=${docId}`
   axios.post(queryString)
   .then(response=>{
          dispatch({type: DOCUMENT_DELETE,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
     })
} 
//=============================================================================
// getDocument - gets the document (Cloudinary) - not necessary as link to it in app
//=============================================================================
export const getDocument = (dispatch,docId)=>{
  let queryString = `${DOCUMENT_SERVER}/downloadfile?doc_id=${docId}`
   axios.get(queryString)
   .then(response=>{
          dispatch({type: DOCUMENT_DOWNLOAD,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:RETREIVE_FAILURE,payload:error})
     })
}
//=============================================================================
// saveDocument - saves the document (Clounindary)
//=============================================================================
export const saveDocument = (dispatch,formData,config)=>{
    let queryString = `${DOCUMENT_SERVER}/uploadfile`
    axios.post(queryString,formData,config)
   .then(response=>{
       dispatch({type: DOCUMENT_UPLOAD,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
     })
}
//=============================================================================
// deleteDocument - removes the document (cloudinary)
//=============================================================================
export const deleteDocument = (dispatch,docId)=>{
  let queryString = `${DOCUMENT_SERVER}/deletefile?doc_id=${docId}`
   axios.post(queryString)
   .then(response=>{
          dispatch({type: DOCUMENT_DELETE,payload:response.data}) 
     })
   .catch(error => {
      dispatch({type:SAVE_FAILURE,payload:error})
     })
}
//=============================================================================