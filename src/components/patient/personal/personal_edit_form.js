import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'

// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,AppButton,AppMessage,IconButton } from '../../utils/misc_tools';
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'
import { usePersonalForm } from '../../../store/hooks/usePatientData';
import {PersonalData} from './personal_edit_data'

// styles
import {appStyles} from '../../../resources/styles/main_styles'


//=============================================================================
// PatientEditForm - edit patient information
//=============================================================================
function PatientEditForm() {
     
    const navigation = useNavigation();
    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    // for loading and sending the data
    const[state,loadingState,DataDemographicsGetDetails,DataDemographicsUpdate,
               DataValidationFailure,DataValidationReset] = usePersonalForm()
    // the form data
     const [formdata,setFormdata] = useState (PersonalData)
   
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
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
      
        // DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'patient');
        setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (sends the patient demographic data)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'personal');
        let formIsValidRet = isFormValid(formdata,'personal')
       
         if(formIsValidRet.formIsValid){
            DataDemographicsUpdate(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
    //=============================================================================
    // useEffect to load the data from the server
    //=============================================================================
    useEffect(()=>{
         if (loadingState.data && loadingState.data.recordset && loadingState.data.recordset.length > 0 && loadingState.loading === false) {
             let demographicData = loadingState.data.recordset[0]
             let newFormData = formdata
             
             newFormData = populateFields(formdata,demographicData)
             setFormdata(newFormData) 
             DataValidationReset()  //otherwize does not refresh
         }
      },[loadingState.loading])      
       
     //=============================================================================
     // useEffect to populate dropdowns and call retrieve
     //=============================================================================
     useEffect(()=>{
         let newFormdata = formdata
         newFormdata = populateOptionFields(newFormdata,ref.gender,'gender')    
         newFormdata = populateOptionFields(newFormdata,ref.gender_identity,'gender_identity')    
         newFormdata = populateOptionFields(newFormdata,ref.race,'race')    
         newFormdata = populateOptionFields(newFormdata,ref.primary_phone,'patient_primary_phone')    
         newFormdata = populateOptionFields(newFormdata,ref.marital_status,'marital_status')   
         newFormdata = populateOptionFields(newFormdata,ref.language,'primary_language')   
         newFormdata = populateOptionFields(newFormdata,ref.states,'state_code')  
         setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
         setFormdata(newFormdata)    
         
         // retrieve the data
         DataDemographicsGetDetails(user.patient_id)     

    },[])
    //=============================================================================
    // useEffect to load the data from the server (edit)
    //=============================================================================
    useEffect(()=>{
        if (loadingState.loading === false && loadingState.data && loadingState.data.recordset && loadingState.data.recordset.length > 0) {
            let personalData    = loadingState.data.recordset[0]
            let newFormData = formdata
            
            newFormData = populateFields(formdata,personalData)
            setFormdata(newFormData) 
            DataValidationReset()  //otherwize does not refresh
        }
    },[loadingState.loading])   
//=============================================================================
return ( 
        <ScrollView style={appStyles.form_container}>
            <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.form_title}>Personal Information</Text>
            </View>
            {/* <Formfield id={'marital_status'} formdata={formdata.marital_status}
                changefunction={(id,action,value) => updateFormField(id,action,value)} /> */}
            <Formfield id={'gender'} formdata={formdata.gender}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'family_size'} formdata={formdata.family_size}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'primary_language'} formdata={formdata.primary_language}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'home_phone'} formdata={formdata.home_phone}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'mobile'} formdata={formdata.mobile}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'work_phone'} formdata={formdata.work_phone}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
           <Formfield id={'fax'} formdata={formdata.fax}
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
            <Formfield id={'email'} formdata={formdata.email}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />

            {state.sendSuccess ? <AppMessage type ='success' message='Personal Data Saved Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} /> : <View></View> } 
            <AppButton type='send' title='Save Personal Details' onPress={submitForm}/>

         </ScrollView>
); 
}

export default PatientEditForm;
//=============================================================================





