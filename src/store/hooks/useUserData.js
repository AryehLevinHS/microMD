import {useReducer} from 'react'
import userReducer   from '../reducers/user_reducer';
import { getProfile ,proxyUserGet,proxyDelete,
        loginUser,loginSetStores,
        ConfirmCodeSend, ConfirmCodeValidate,
        AuthenticationNumberGetList,AuthenticationNumberDelete,
        AuthenticationUpdate,AuthenticationGetDetails,
        noteGetList,noteDelete,noteUpdate,noteGetDetails,
        ConsentAdd,
        changePassword,
        getHomepageCounts } from '../api/user_api';
import {FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET} from '../api/types'  
//=============================================================================
// useLoginForm (hook for logging user and managing state)
//=============================================================================
export const useLoginForm = () => {
    const initialState = { loginSuccess:false, error:'',isError:false,data:{}}
    const [state,dispatch] = useReducer(userReducer,initialState)
    
    const InitialState = { loading:true, error:'', data:{} }
    const [stateStore,dispatchStore] = useReducer(userReducer,InitialState)
    
   // logs user in
   const DataLoginUser = (dataToSubmit) => {
        loginUser(dispatch,dataToSubmit)
   }
   // sets the login stores
   const DataLoginSetStores = (patient_id,portal_user_id) => {
        loginSetStores(dispatchStore,patient_id,portal_user_id)
   }

   const DataValidationFailure = (error) => {
    dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
   
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,stateStore,DataLoginUser,DataLoginSetStores,
            DataValidationFailure,DataValidationReset]) 
}   
//=============================================================================
// useUserProfile (hook for displaying user profile and managing state)
//=============================================================================
export const useUserProfile = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    
   // get user profile
   const DataUserProfileGet = (portal_user_id) => {
        getProfile(dispatch,portal_user_id)
   }
  
   return ([state,DataUserProfileGet]) 
}
//=============================================================================
// useHomePage (hook for gettting data for the home page and managing state)
//=============================================================================
export const useHomePage = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    
   // get homepage counts
   const DataGetHomepageCounts = (portal_user_id,patient_id) => {
        getHomepageCounts(dispatch,portal_user_id,patient_id)
   }
  
   return ([state,DataGetHomepageCounts]) 
}
//=============================================================================
// usePasswordChange (hook for changing the password and managing state)
//=============================================================================
export const usePasswordChange = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    
   // change password
   const DataPasswordChange = (dataToSubmit) => {
    changePassword(dispatch,dataToSubmit)
   }

   const DataValidationFailure = (error) => {
    dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
   
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,DataPasswordChange,DataValidationFailure,DataValidationReset]) 
}
//=============================================================================
// useConfirmationForm (hook for getting confirmation so that the use can 
//                      change the password  or register and managing state)
//=============================================================================
export const useConfirmationForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{},success:false }
    const [stateRequest,dispatchRequest] = useReducer(userReducer,InitialState)
    const [stateValidate,dispatchValidate] = useReducer(userReducer,InitialState)
    
   // send confirmation code
   const DataConfirmCodeSend = (dataToSubmit) => {
         ConfirmCodeSend(dispatchRequest,dataToSubmit)
   }
   // validate confirmation code
   const DataConfirmCodeValidate = (dataToSubmit) => {
        ConfirmCodeValidate(dispatchValidate,dataToSubmit)
   } 

   const DataValidationFailure = (error) => {
         dispatchRequest({type: FORM_VALIDATION_FAILURE,error})
    }
   
    const DataValidationReset = () => {
        dispatchRequest({type: FORM_VALIDATION_RESET})
    }

   return ([stateRequest,stateValidate,DataConfirmCodeSend,DataConfirmCodeValidate,
             DataValidationFailure,DataValidationReset]) 
}
//=============================================================================
// useAuthenticationNumbers (hook for displaying authentication numbers and managing state)
//=============================================================================
export const useAuthenticationNumbers = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    
   // get authentication numbers
   const DataAuthNumberGetList = (portal_user_id) => {
          AuthenticationNumberGetList(dispatch,portal_user_id)
   }
   // delete authentication numbers
   const DataAuthNumberDelete = (portal_user_id,authentication_id) => {
          AuthenticationNumberDelete(dispatch,portal_user_id,authentication_id)
   }
  
   return ([state,DataAuthNumberGetList,DataAuthNumberDelete]) 
}
//=============================================================================
// useAuthenicationForm (hook for authentication numbrs form  and managing state)
//=============================================================================
export const useAuthenicationForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    const initialLoadinglState = { loading:true, error:'', data:{} }
    const [loadingState,dispatchLoading] = useReducer(userReducer,initialLoadinglState)
   

    // gets the authentication number details
    const DataAuthenticationGetDetails = (portal_user_id,authentication_id) => {
        AuthenticationGetDetails(dispatchLoading,portal_user_id,authentication_id)
    }

    // send authentication number
    const DataAuthenticationUpdate = (dataToSubmit) => {
        AuthenticationUpdate(dispatch,dataToSubmit)
    }

    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,loadingState,DataAuthenticationUpdate,DataAuthenticationGetDetails,
                               DataValidationFailure,DataValidationReset])
}
//=============================================================================
// useUserProxyList (hook for displaying adding and deleting contacts and managing state)
//=============================================================================
export const useUserProxyList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    
   // get user proxy list
   const DataProxyUserGetList = (portal_user_id) => {
        proxyUserGet(dispatch,portal_user_id)
    }

    // delete proxy
    const DataProxyPatientDelete = (portal_user_id,proxy_user_id,deleted_by) => {
        proxyDelete(dispatch,portal_user_id,proxy_user_id,deleted_by)
        // should do refresh here?
        proxyUserGet(dispatch,portal_user_id)
    }
    

   return ([state,DataProxyUserGetList,DataProxyPatientDelete]) 
}
//=============================================================================
// useUserNoteList (hook for displaying adding and deleting user notes and managing state)
//=============================================================================
export const useUserNoteList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    
   // get user note list
   const DataUserNoteGetList = (portal_user_id) => {
        noteGetList(dispatch,portal_user_id)
    }

    // delete note
    const DataUserNoteDelete = (portal_user_id,note_id) => {
        noteDelete(dispatch,portal_user_id,note_id)
        // should do refresh here?
        //noteGetList(dispatch,portal_user_id)
    }
    

   return ([state,DataUserNoteGetList,DataUserNoteDelete]) 
}
//=============================================================================
// useUserNoteEditForm (hook for editing notes and managing state)
//=============================================================================
export const useUserNoteEditForm = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
    const initialLoadinglState = { loading:true, error:'', data:{} }
    const [loadingState,dispatchLoading] = useReducer(userReducer,initialLoadinglState)
   
    // get note details
    const DataNoteGetDetails = (portal_user_id,note_id) => {
        noteGetDetails(dispatchLoading,portal_user_id,note_id)
    }

    // update note
    const DataNoteUpdate = (dataToSubmit) => {
        noteUpdate(dispatch,dataToSubmit)
    }
    
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,loadingState,DataNoteGetDetails,DataNoteUpdate,
                               DataValidationFailure,DataValidationReset])
}
//=============================================================================
// useTermsofUse (hook for sunbmitting terms of use and managing state)
//=============================================================================
export const useTermsofUse = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(userReducer,InitialState)
   
    // update terms of use
    const DataConsentAdd = (dataToSubmit) => {
        ConsentAdd(dispatch,dataToSubmit)
    }
    
   return ([state,DataConsentAdd])
}
//=============================================================================