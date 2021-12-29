import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Button }from 'react-native-paper'
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
       } from '../utils/forms/form_actions'
import Formfield from '../utils/forms/form_fields';
// tools
import { MessageDisplay } from '../utils/misc_tools'
// data
import { UserContext } from '../../store/UserContext'
import { RefContext } from '../../store/RefContext'

import {useApptRequest} from '../../store/hooks/useApptData'
import {apptrequestData} from './appt_request_data'
// styles
import {appStyles} from '../../resources/styles/main_styles'
//=============================================================================
// ApptRequestForm - add an appt request
//=============================================================================
const ApptRequestForm = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,DataApptRequest,DataValidationFailure,
           DataValidationReset] = useApptRequest()
    const [formdata,setFormdata] = useState (apptrequestData)
    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        //history.goBack()
    }    
    //=============================================================================
    // useEffect to close form once sent
    // if state.sendSuccess then display success message for 2 seconds and close the form
    //=============================================================================
    useEffect(()=>{
        if (state.sendSuccess === true) {
            setTimeout(()=>{ goBack() },2000)
        }
     },[state.sendSuccess])  
    //=============================================================================
    // useEffect - retrieve the data and setup the form
    //=============================================================================
    useEffect(()=>{

        let newFormdata = formdata
        // set dropdowns
        newFormdata = populateOptionFields(newFormdata,ref.apptTypes,'appt_type')    
        newFormdata = populateOptionFields(newFormdata,ref.apptPrefTime,'preferred_time')   
        newFormdata = populateOptionFields(newFormdata,ref.apptPrefDays,'preferred_days')   
        newFormdata = populateOptionFields(newFormdata,ref.providerList,'appt_for_id')
      
        // set default values
        setDefaultValue(newFormdata,'sender_name',user.portal_user_name)
        setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
        setDefaultValue(newFormdata,'patient_id',user.patient_id)
     //   setDefaultValue(newFormdata,'from_date', moment(currentDate).format('YYYY-MM-DD'))
     //   setDefaultValue(newFormdata,'time_sent',timeSent)
        setDefaultValue(newFormdata,'appt_type','office')
        setDefaultValue(newFormdata,'preferred_time','any')
        setDefaultValue(newFormdata,'preferred_days','2345')

        setFormdata(newFormdata)    
        DataValidationReset() 

    },[])
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
        // NOTE: called when loading data 
        //console.log('update field',id,action,value)

        // DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'apptreq');
         setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'apptreq');
        let formIsValidRet = isFormValid(formdata,'apptreq')
       
         if(formIsValidRet.formIsValid){
            DataApptRequest(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView>
            <Formfield id={'appt_for_id'} formdata={formdata.appt_for_id}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'from_date'} formdata={formdata.from_date}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'appt_type'} formdata={formdata.appt_type}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'preferred_days'} formdata={formdata.preferred_days}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'preferred_time'} formdata={formdata.preferred_time}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'reason'} formdata={formdata.reason}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'comment'} formdata={formdata.comment}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
             {state.sendSuccess ? MessageDisplay('success','Request Sent Successfully') : <View></View> }  
             
             {/* {state.error ? MessageDisplay('error','Error: '+state.error) : <View></View> }     */}
            <Button icon="content-save" mode="contained" onPress={submitForm} compact>
                Send Request
            </Button>
           
        </ScrollView>
    )
}
 
export default ApptRequestForm;
//=============================================================================
