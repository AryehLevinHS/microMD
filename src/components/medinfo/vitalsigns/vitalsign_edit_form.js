import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,AppMessage,AppButton,IconButton } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'

import {useVitalsignForm} from '../../../store/hooks/useMedinfoData'
import {vitalsignData}   from './vitalsign_edit_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// VitalSignEditForm - edit the vitalsign data
//=============================================================================
const VitalSignEditForm = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,DataVitalsignSend,DataValidationFailure,
           DataValidationReset] = useVitalsignForm()
    const [formdata,setFormdata] = useState (vitalsignData)
    const navigation = useNavigation();
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
    // useEffect - retrieve the data and setup the form
    //=============================================================================
    useEffect(()=>{

        let newFormdata = formdata
        // set dropdowns
        newFormdata = populateOptionFields(newFormdata,ref.painSeverity,'pain_severity')  
        newFormdata = populateOptionFields(newFormdata,ref.providerList,'provider_id')   

       // set default values 
        setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
        setDefaultValue(newFormdata,'sender_name',user.portal_user_name)
        setDefaultValue(newFormdata,'patient_id',user.patient_id)
        setDefaultValue(newFormdata,'taken_on',moment(new Date).format('YYYY-MM-DD'))
        setFormdata(newFormdata)    
        DataValidationReset() 

    },[])
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
      
        // DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'vitalsign');
        setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'vitalsign');
        let formIsValidRet = isFormValid(formdata,'vitalsign')
       console.log ('vitals form submit',formIsValidRet,'-----',dataToSubmit)
         if(formIsValidRet.formIsValid){
            DataVitalsignSend(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
             <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.form_title}>Add Vital Signs</Text>
            </View>
            <Formfield id={'provider_id'} formdata={formdata.provider_id}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <View style={{flexDirection: "row" }} >
                <View style={{flex:1} }>
                   <Formfield id={'systolic'} formdata={formdata.systolic}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
                 </View>
                 <View style={{flex:1} }>
                    <Formfield id={'diastolic'} formdata={formdata.diastolic}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
                 </View>           
            </View>
            <Formfield id={'pulse_rate'} formdata={formdata.pulse_rate}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'temperature'} formdata={formdata.temperature}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'blood_sugar'} formdata={formdata.blood_sugar}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'respiratory_rate'} formdata={formdata.respiratory_rate}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'oxygen'} formdata={formdata.oxygen}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <View style={{flexDirection: "row" }} >
                <View style={{flex:1} }>
                      <Formfield id={'height_ft'} formdata={formdata.height_ft} 
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
                 </View>
                 <View style={{flex:1} }>
                    <Formfield id={'height_in'} formdata={formdata.height_in}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
                 </View>           
            </View>
            <View style={{flexDirection: "row"}} >
                <View style={{flex:1} }>
                  <Formfield id={'weight_lb'} formdata={formdata.weight_lb}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
                 </View>
                 <View style={{flex:1} }>
                 <Formfield id={'weight_oz'} formdata={formdata.weight_oz}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
                       </View>
            </View>
            <Formfield id={'pain_severity'} formdata={formdata.pain_severity}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'comment'} formdata={formdata.comment}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
         
            {state.sendSuccess ? <AppMessage type ='success' message='Vitalsigns Successfully sent' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}}/> : <View></View> }  
            <AppButton type='send' title='Send Vitalsigns' onPress={submitForm}/> 
           
        </ScrollView>
    )
}
 
export default VitalSignEditForm;
//=============================================================================
