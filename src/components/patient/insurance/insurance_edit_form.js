import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'

// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
    setValue, resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,AppButton,AppMessage,IconButton } from '../../utils/misc_tools';
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

    const navigation = useNavigation();
    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    // for loading and sending the data
    const [state,loadingState,DataInsuranceGetDetails,DataInsuranceUpdate,
        DataValidationFailure,DataValidationReset] = useInsuranceForm()
    const [formdata,setFormdata] = useState (InsuranceData)
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

        let insurance_id = user.localStorage.insurance_id
        if (insurance_id > 0) {  // edit
            DataInsuranceGetDetails(user.patient_id,insurance_id)  // see useeffect below
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
            let isnuranceData    = loadingState.data.recordset[0]
            let newFormData = formdata
            newFormData = populateFields(formdata,isnuranceData)
            setValue(newFormData,'portal_user_id',user.portal_user_id)
            setFormdata(newFormData) 
            DataValidationReset()  //otherwize does not refresh
        }
    },[loadingState.loading])   
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
      
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
            DataInsuranceUpdate(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
              <View style={appStyles.goBackButton}>
              <IconButton type = 'GOBACK' onPress={() => goBack()} />
              <Text style={appStyles.form_title}>Edit Insurance</Text>
            </View>
            <Formfield id={'insurance_plan_name'} formdata={formdata.insurance_plan_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_number'} formdata={formdata.policy_number}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'group_number'} formdata={formdata.group_number}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'effective_date'} formdata={formdata.effective_date}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'terminate_date'} formdata={formdata.terminate_date}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'carrier_name'} formdata={formdata.carrier_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} /> 
            <Formfield id={'accept_assignment'} formdata={formdata.accept_assignment}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            {/* needs to return string not integer
                   <Formfield id={'copay'} formdata={formdata.copay}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} /> */}
            <Formfield id={'policy_holder_first_name'} formdata={formdata.policy_holder_first_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_last_name'} formdata={formdata.policy_holder_last_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_middle_name'} formdata={formdata.policy_holder_middle_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_phone'} formdata={formdata.policy_holder_phone}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_work_phone'} formdata={formdata.policy_holder_work_phone}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_mobile'} formdata={formdata.policy_holder_mobile}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_relationship'} formdata={formdata.policy_holder_relationship}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_email'} formdata={formdata.policy_holder_email}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_street_address'} formdata={formdata.policy_holder_street_address}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_street_address2'} formdata={formdata.policy_holder_street_address2}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_city'} formdata={formdata.policy_holder_city}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_state'} formdata={formdata.policy_holder_state}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_zip'} formdata={formdata.policy_holder_zip}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'policy_holder_additional_info'} formdata={formdata.policy_holder_additional_info}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            {loadingState.loading ? loading(true) : loading(false)} 
            {state.sendSuccess ? <AppMessage type ='success' message='Insurance Saved Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}} /> : <View></View> } 
            <AppButton type='save' title='Save Insurance Details' onPress={submitForm}/>

        </ScrollView>
    )
}
 
export default InsuranceEditForm;
//=============================================================================
