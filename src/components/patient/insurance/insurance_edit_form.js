import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'

// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,AppButton,AppMessage } from '../../utils/misc_tools';
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'

import {useInsuranceForm}   from '../../../store/hooks/usePatientData'
import {InsuranceData}   from './insurance_edit_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// InsuranceEditForm - edit the patients insurance
//=============================================================================
const InsuranceEditForm = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    // for loading and sending the data
    const [state,loadingState,DataInsuranceGetDetails,DataInsuranceUpdate,
        DataValidationFailure,DataValidationReset] = useInsuranceForm()
    const [formdata,setFormdata] = useState (InsuranceData)
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
        newFormdata = populateOptionFields(newFormdata,ref.yes_no,'accept_assignment')    
        newFormdata = populateOptionFields(newFormdata,ref.relationship,'policy_holder_relationship')    
        newFormdata = populateOptionFields(newFormdata,ref.states,'policy_holder_state')   

        if (insurance_id > 0) {  // edit
            DataInsuranceGetDetails(user.portal_user_id,insurance_id)  // see useeffect below
        } else {            // add 
            resetFields(newFormdata,'insurance')
            setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
            setDefaultValue(newFormdata,'patient_id',user.patient_id)
            setDefaultValue(newFormdata,'effective_date',moment(new Date()).format('YYYY-MM-DD'))
            setDefaultValue(newFormdata,'terminate_date',moment(new Date()).format('YYYY-MM-DD'))
           
       
        }

        setFormdata(newFormdata)    
        DataValidationReset() 

    },[])
    //=============================================================================
    // useEffect to load the data from the server (edit)
    //=============================================================================
    useEffect(()=>{
        if (loadingState.loading === false && loadingState.data && loadingState.data.recordset && loadingState.data.recordset.length > 0) {
            let noteData    = loadingState.data.recordset[0]
            let newFormData = formdata
            
            newFormData = populateFields(formdata,noteData)
            setFormdata(newFormData) 
            DataValidationReset()  //otherwize does not refresh
        }
    },[loadingState.loading])   
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
        // NOTE: called when loading data 
        //console.log('update field',id,action,value)

        // DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'insurance');
         setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'insurance');
        let formIsValidRet = isFormValid(formdata,'insurance')
       
         if(formIsValidRet.formIsValid){
            DataNoteUpdate(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
            <Text style={appStyles.form_title}> Edit Patient Insurance</Text>
            <Formfield id={'note_type'} formdata={formdata.note_type}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'status'} formdata={formdata.status}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'subject'} formdata={formdata.subject}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'note'} formdata={formdata.note}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />

            {state.sendSuccess ? <AppMessage type ='success' message='Insurance Sent Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} /> : <View></View> } 
            <AppButton type='send' title='Save User Note' onPress={submitForm}/>

        </ScrollView>
    )
}
 
export default InsuranceEditForm;
//=============================================================================
