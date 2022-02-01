import React, { useContext, useEffect, useState,useCallback } from 'react'
import { Text, View,ScrollView} from 'react-native'
import { useNavigation,useFocusEffect } from '@react-navigation/native';

// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,addtoOptionFields,
         setValue,setProperty} from '../utils/forms/form_actions';
import Formfield from '../utils/forms/form_fields';
// tools
import {AppMessage,AppButton,IconButton } from '../utils/misc_tools'
import LookupForm  from '../utils/lookup/lookup_form';
// data
import { UserContext } from '../../store/UserContext'
import { RefContext } from '../../store/RefContext'

import { useMessageForm } from '../../store/hooks/useMailData'
import {messageData}   from './msg_data'
// styles
import {appStyles} from '../../resources/styles/main_styles'
//=============================================================================
// MsgForm - create a new msg
//=============================================================================
const MsgForm = () => {

    const navigation = useNavigation();
    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,DataMailSendMsg,DataValidationFailure,
           DataValidationReset] = useMessageForm()
    const [formdata,setFormdata] = useState (messageData)
    const [lookupOpen,setLookupOpen] = useState(false)
    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        navigation.goBack()
    }    
    //=============================================================================
    // useFocusEffect - when get focus - will reset the data
    //=============================================================================
    // useFocusEffect(()=>{
    //     useCallback(()=>{
    //         // reset fields
    //         return () => {
    //             // clean up when leave 
    //         }
    //     })

    //  },[])  
    //=============================================================================
    // msgforHandle - set the reciptient
    //=============================================================================
    const msgforHandle = (lookupValue) => {
        setLookupOpen(false)
        if (lookupValue.id){
            let newFormdata = formdata
            addtoOptionFields(newFormdata,'receiver_id',[{key:lookupValue.id,value:lookupValue.description}])
            setValue(newFormdata,'receiver_id',lookupValue.id)
            setProperty(newFormdata,'receiver_id','valid','')
            setFormdata(newFormdata)   
        }
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
        newFormdata = populateOptionFields(newFormdata,ref.msgTypes,'message_type')    
        newFormdata = populateOptionFields(newFormdata,ref.providerList,'receiver_id')  
    
        let msgFor  = user.localStorage.msgFor
        let msgType = user.localStorage.msgType
        let refId   = user.localStorage.refId
        
        if(msgFor)  { setDefaultValue(newFormdata,'receiver_id',msgFor)}
        if(msgType) { setDefaultValue(newFormdata,'message_type',msgType)}
     
        setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
        setDefaultValue(newFormdata,'sender_name',user.portal_user_name)
        setDefaultValue(newFormdata,'patient_id',user.patient_id)
        setDefaultValue(newFormdata,'patient_name',user.patient_name)
        setDefaultValue(newFormdata,'replyto_msg_id',refId)
       
        setFormdata(newFormdata)    
        DataValidationReset() 

    },[])
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
        
        // DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'message');
         setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'message');
        let formIsValidRet = isFormValid(formdata,'message')
        //console.log('data to submit',formIsValidRet,dataToSubmit)
         if(formIsValidRet.formIsValid){
            DataMailSendMsg(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
              <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.form_title}> New Message</Text>
            </View> 

            <Formfield id={'receiver_id'} formdata={formdata.receiver_id}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} lookupfn={()=>{setLookupOpen(true)}}/>
           <Formfield id={'message_type'} formdata={formdata.message_type}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'subject'} formdata={formdata.subject}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'message'} formdata={formdata.message}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
           
            {state.sendSuccess ? <AppMessage type ='success' message='Message Sent Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}}/> : <View></View> }  
             <AppButton type='send' title='Send Message' onPress={submitForm}/> 
             { lookupOpen ?   <LookupForm lookupset='staff' onOk={(lookupvalue)=>{msgforHandle(lookupvalue)}} onDismiss={()=>{setLookupOpen(false)}}/> : null} 
           
        </ScrollView>
    )
}

export default MsgForm;
//=============================================================================
