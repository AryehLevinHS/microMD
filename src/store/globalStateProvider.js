//note - this file has a small case at the beginning 
// as we just export a plain function 
//NOTE reusable context function - lecture 137 reactNative
import React, {useReducer,createContext} from 'react';

//============================================================================= 
// authReducer and init state
//============================================================================= 
const authInitState = {
   isloggedIn : false,
   error      : '',
   isError    : false
}

const authReducer = (state,{type,payload}) => {
    switch (type) {
        case 'LOGIN':
           // console.log('reducer',payload)
            return  {...state, isloggedIn: true, error:'',isError:false}  
        default:
            return state
    }
}

export const GlobalContext = createContext({authInitState})

//============================================================================= 
// GlobalProvider 
//============================================================================= 
export const GlobalProvider = ({children}) => {
   const [authState,authDispatch] = useReducer(authReducer,authInitState)

    return ( 
        <GlobalContext.Provider 
            value={{authState,authDispatch}}>
            {children}
        </GlobalContext.Provider>   
    )
}
//============================================================================= 
