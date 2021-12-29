import {useReducer} from 'react'
import appointmentReducer   from '../reducers/appointment_reducer';
import { ApptGetPast, ApptConfirm,ApptCancel,ApptCheckIn,
        ApptGetCurrent,ApptCreate,ApptRequest,
        ApptFindSlot } from '../api/appointment_api';
import {FORM_VALIDATION_FAILURE,FORM_VALIDATION_RESET} from '../api/types'         

//=============================================================================
// useApptCurentList (hook for getting current appointments and managing state)
//=============================================================================
export const useApptCurentList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(appointmentReducer,InitialState)
    
    // gets the current appointments
    const DataApptGetCurrent = (patient_id) => {
        ApptGetCurrent(dispatch,patient_id)
    }
    // confirm currrent appointment
    const DataApptConfirm = (dataToSubmit) => {
        ApptConfirm(dispatch,dataToSubmit)
    }
     // cancel currrent appointment
     const DataApptCancel = (dataToSubmit) => {
        ApptCancel(dispatch,dataToSubmit)
    }
     // checkin currrent appointment
     const DataApptCheckIn = (dataToSubmit) => {
        ApptCheckIn(dispatch,dataToSubmit)
    }
       
   return ([state,DataApptGetCurrent,DataApptConfirm,DataApptCancel,DataApptCheckIn])
}
//=============================================================================
// useApptPastList (hook for getting past appointments and managing state)
//=============================================================================
export const useApptPastList = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(appointmentReducer,InitialState)
    
    // gets the past appointments
    const DataApptGetPast = (patient_id) => {
        ApptGetPast(dispatch,patient_id)
    }
       
   return ([state,DataApptGetPast])
}
//=============================================================================
// useApptRequest (hook for sending qppt request and managing state)
//=============================================================================
export const useApptRequest = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(appointmentReducer,InitialState)
    
    // send appt request form
    const DataApptRequest = (dataToSubmit) => {
        ApptRequest(dispatch,dataToSubmit)
    }
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,DataApptRequest,DataValidationFailure,DataValidationReset])
}
//=============================================================================
// useApptCreate (hook for creating a new appointment and managing state)
//=============================================================================
export const useApptCreate = () => {
    const InitialState = { sendSuccess:false,isError:false, error:'', data:{} }
    const [state,dispatch] = useReducer(appointmentReducer,InitialState)
    
    // send appt request form
    const DataApptCreate = (dataToSubmit) => {
        ApptCreate(dispatch,dataToSubmit)
    }
    const DataValidationFailure = (error) => {
        dispatch({type: FORM_VALIDATION_FAILURE,error})
    }
    const DataValidationReset = () => {
        dispatch({type: FORM_VALIDATION_RESET})
    }

   return ([state,DataApptCreate,DataValidationFailure,DataValidationReset])
}
//=============================================================================
// useApptFindSlot (hook for finding an appointment slot and managing state)
//=============================================================================
export const useApptFindSlot = () => {
    const InitialState = { loading:true, error:'', data:{} }
    const [state,dispatch] = useReducer(appointmentReducer,InitialState)
    
    // find appt slots
    const DataApptFindSlot = (lookupdata) => {
        ApptFindSlot(dispatch,lookupdata)
    }
       
   return ([state,DataApptFindSlot])
}
//=============================================================================