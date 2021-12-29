import {useReducer} from 'react'
import docserverReducer   from '../reducers/docserver_reducer';
import { saveDMSDocument,deleteDMSDocument } from '../api/docserver_api';
//import {FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET} from '../api/types'   

//=============================================================================
// useDocManage (uploads document to the document server and managing state)
//=============================================================================
export const useDocManage = () => {
    const InitialState = {sending:false, sendSuccess:false, error:'',data:{},doc_id:'',idx:0}
    const [state,dispatch] = useReducer(docserverReducer,InitialState)
    
    // save document
    const DataSaveDMSDocument = (dataToSubmit,file) => {
        saveDMSDocument(dispatch,dataToSubmit,file)
    }
    // delete document
    const DataDeleteDMSDocument = (doc_id) => {
        deleteDMSDocument(dispatch,doc_id)
    }
    
   return ([state,DataSaveDMSDocument,DataDeleteDMSDocument]) 
}
//=============================================================================