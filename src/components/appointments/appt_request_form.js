import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';

// A CALANDER APP for react native
//https://reactnativeexample.com/timetable-schedule-component-for-react-native-applications/

// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         addtoOptionFields,setValue,setProperty,} from '../utils/forms/form_actions'
import Formfield from '../utils/forms/form_fields';
// tools
import { AppMessage,AppButton,IconButton } from '../utils/misc_tools'
import LookupForm  from '../utils/lookup/lookup_form';
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

    const navigation = useNavigation();
    const user       = useContext (UserContext)
    const ref        = useContext(RefContext)
    const [state,DataApptRequest,DataValidationFailure,
           DataValidationReset] = useApptRequest()
    const [formdata,setFormdata] = useState (apptrequestData)
    const [lookupOpen,setLookupOpen] = useState(false)
    
    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        navigation.goBack()
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
    // apptforHandle - set the reciptient
    //=============================================================================
    const apptforHandle = (lookupValue) => {
        setLookupOpen(false)
        if (lookupValue.id){
            let newFormdata = formdata
            addtoOptionFields(newFormdata,'appt_for_id',[{key:lookupValue.id,value:lookupValue.description}])
            setValue(newFormdata,'appt_for_id',lookupValue.id)
            setProperty(newFormdata,'appt_for_id','valid','')
            setFormdata(newFormdata)   
        }
    }
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
        setDefaultValue(newFormdata,'from_date', moment(new Date).format('YYYY-MM-DD'))
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
         <ScrollView style={appStyles.form_container}>
             <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
               {/* <Text style={appStyles.form_title}>Appointment Request</Text> */}
            </View>
            <Formfield id={'appt_for_id'} formdata={formdata.appt_for_id} lookupfn={()=>{setLookupOpen(true)}}
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
           
            {state.sendSuccess ? <AppMessage type ='success' message='Appt Request Sent Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}}/> : <View></View> }  
            <AppButton type='send' title='Send Request' onPress={submitForm}/> 
            { lookupOpen ?   <LookupForm lookupset='staff' onOk={(lookupvalue)=>{apptforHandle(lookupvalue)}} onDismiss={()=>{setLookupOpen(false)}}/> : null} 
    
        </ScrollView>
    )
}
 
export default ApptRequestForm;
//=============================================================================
