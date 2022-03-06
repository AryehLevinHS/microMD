import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
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
import {useReferralForm}     from '../../../store/hooks/useMedinfoData'
import {ReferralData}   from './referral_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// ReferralForm - send referral request
//=============================================================================
const ReferralForm = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,DataReferralSend,DataValidationFailure,
           DataValidationReset] = useReferralForm();
    const [formdata,setFormdata] = useState (ReferralData)
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
        newFormdata = populateOptionFields(newFormdata,ref.referralTypes,'referral_type')  
        newFormdata = populateOptionFields(newFormdata,ref.providerList,'receiver_id')    
   
        setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
        setDefaultValue(newFormdata,'sender_name',user.portal_user_name)
        setDefaultValue(newFormdata,'sender_id',user.portal_user_id)
        setDefaultValue(newFormdata,'patient_id',user.patient_id)
        setDefaultValue(newFormdata,'referral_type','SO')
       
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
        const newFormdata = updateField(formdata,id,action,value,'referral');
         setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'referral');
        let formIsValidRet = isFormValid(formdata,'referral')
     
         if(formIsValidRet.formIsValid){
            DataReferralSend(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
            <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.form_title}> Referral Request</Text>
            </View>
            <Formfield id={'receiver_id'} formdata={formdata.receiver_id}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
           <Formfield id={'referral_type'} formdata={formdata.referral_type}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'subject'} formdata={formdata.subject}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'reason'} formdata={formdata.reason}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />

            {state.sendSuccess ? <AppMessage type ='success' message='Referral Sent Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} /> : <View></View> } 
            <AppButton type='send' title='Send Referral Request' onPress={submitForm}/>
           
        </ScrollView>
    )
}
 
export default ReferralForm;
//=============================================================================
