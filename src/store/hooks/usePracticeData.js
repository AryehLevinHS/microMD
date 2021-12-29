import {useReducer} from 'react'
import practiceReducer   from '../reducers/practice_reducer';
import { PracticeInfoGet,PracticeResourcesGet,
         ClinicGetList,EducationGetList,
         NewsGetList,NewsGetById } from '../api/practice_api';

//=============================================================================
// usePracticeInfo (hook for getting practice news and managing state)
//=============================================================================
export const usePracticeInfo = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(practiceReducer,InitialState)
    
    // get practice info
    const DataPracticeInfoGet = (practice_id) => {
        PracticeInfoGet(dispatch,practice_id)
    }
    
   return ([state,DataPracticeInfoGet])
}
//=============================================================================
// useClinicList (hook for getting clinics and managing state)
//=============================================================================
export const useClinicList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(practiceReducer,InitialState)
    
    // get clist list
    const DataClinicGetList = (practice_id) => {
        ClinicGetList(dispatch,practice_id)
    }
    
   return ([state,DataClinicGetList]) 
}
//=============================================================================
// useNewsList (hook for getting practice news and managing state)
//=============================================================================
export const useNewsList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(practiceReducer,InitialState)
    
    // get practice news
    const DataNewsGetList = (practice_id) => {
        NewsGetList(dispatch,practice_id)
    }
    
   return ([state,DataNewsGetList])
}
//=============================================================================
// useNewsById (hook for getting practice news and managing state)
//=============================================================================
export const useNewsById = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(practiceReducer,InitialState)
    
    // get practice news
    const DataNewsGetById = (news_id) => {
        NewsGetById(dispatch,news_id)
    }
    
   return ([state,DataNewsGetById])
}
//=============================================================================
// useResourceList (hook for getting practice resources and managing state)
//=============================================================================
export const useResourceList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(practiceReducer,InitialState)
    
    // get practice news
    const DataPracticeResourcesGet = (practice_id) => {
        PracticeResourcesGet(dispatch,practice_id)
    }
    
   return ([state,DataPracticeResourcesGet])
}
//=============================================================================
// usePatEdList (hook for getting patient education and managing state)
//=============================================================================
export const usePatEdList = () => {
    const InitialState = { loading:false, error:'', data:{} }
    const [state,dispatch] = useReducer(practiceReducer,InitialState)
    
    // get patient education
    const DataEducationGetList = (practice_id,searchString) => {
        EducationGetList(dispatch,practice_id,searchString)
    }
    

   return ([state,DataEducationGetList]) // not sure if will need dispatch or use dispatch for actions 
}
//=============================================================================