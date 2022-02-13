import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,AppMessage,AppButton,IconButton } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'

import {useContactForm} from '../../../store/hooks/usePatientData'
import {ContactData}   from './contact_edit_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// ContactEditForm - edit the note
//=============================================================================
const ContactEditForm = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,loadingState,DataContactGetDetails,DataContactUpdate,
           DataValidationFailure,DataValidationReset] = useContactForm()
    const [formdata,setFormdata] = useState (ContactData)
    const [title,setTitle] = useState('Edit Contact')
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

        let newFormData = formdata
        // set dropdowns
        newFormData = populateOptionFields(newFormData,ref.gender,'gender')    
        newFormData = populateOptionFields(newFormData,ref.yes_no,'is_primary')    
        newFormData = populateOptionFields(newFormData,ref.relationship,'relationship')    
        newFormData = populateOptionFields(newFormData,ref.contact_type,'contact_type')   
        newFormData = populateOptionFields(newFormData,ref.language,'primary_language')   
        newFormData = populateOptionFields(newFormData,ref.states,'state_code')   

        setDefaultValue(newFormData,'portal_user_id',user.portal_user_id)
        
        let contact_id = user.localStorage.contact_id
        if (contact_id > 0) {  // edit
            DataContactGetDetails(user.patient_id,contact_id)  // see useeffect below
            user.localStorage.contact_id = 0
        } else {            // add 
            setTitle('Add Contact')
            resetFields(newFormData,'contact')
            setDefaultValue(newFormData,'patient_id',user.patient_id)
        }

        setFormdata(newFormData)    
        DataValidationReset() 

    },[])
    //=============================================================================
    // useEffect to load the data from the server (edit)
    //=============================================================================
    useEffect(()=>{
        if (loadingState.loading === false && loadingState.data && loadingState.data.recordset && loadingState.data.recordset.length > 0) {
            let contactData    = loadingState.data.recordset[0]
            let newFormData = contactData
            newFormData = populateFields(formdata,contactData)
            setDefaultValue(newFormData,'portal_user_id',user.portal_user_id)
            setFormdata(newFormData) 
            DataValidationReset()  //otherwize does not refresh
        }
    },[loadingState.loading])   
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
       
        // DataValidationReset()
        const newFormData = updateField(formdata,id,action,value,'contact');
         setFormdata(newFormData)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'contact');
        let formIsValidRet = isFormValid(formdata,'contact')
       
         if(formIsValidRet.formIsValid){
            DataContactUpdate(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
              <View style={appStyles.goBackButton}>
              <IconButton type = 'GOBACK' onPress={() => goBack()} />
              <Text style={appStyles.form_title}>{title}</Text>
            </View>
           
            <Formfield id={'contact_type'} formdata={formdata.contact_type}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
           <Formfield id={'relationship'} formdata={formdata.relationship}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'is_primary'} formdata={formdata.is_primary}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'first_name'} formdata={formdata.first_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'last_name'} formdata={formdata.last_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'institution_name'} formdata={formdata.institution_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'street_address'} formdata={formdata.street_address}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'street_address2'} formdata={formdata.street_address2}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'city'} formdata={formdata.city}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'state_code'} formdata={formdata.state_code}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'zip'} formdata={formdata.zip}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'home_phone'} formdata={formdata.home_phone}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'work_phone'} formdata={formdata.work_phone}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'mobile'} formdata={formdata.mobile}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'email'} formdata={formdata.email}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'fax'} formdata={formdata.fax}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'primary_language'} formdata={formdata.primary_language}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'gender'} formdata={formdata.gender}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
                   
            {loadingState.loading ? loading(true) : loading(false)}        
            {state.sendSuccess ? <AppMessage type ='success' message='Contact Information Updated Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}}/> : <View></View> }  
            <AppButton type='save' title='Update Contact Information' onPress={submitForm}/> 
           
        </ScrollView>
    )
}
 
export default ContactEditForm;
//=============================================================================
