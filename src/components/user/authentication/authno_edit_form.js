import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements'
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,AppMessage,AppButton,IconButton } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useAuthenicationForm} from '../../../store/hooks/useUserData'
import {AuthenticationData} from './authno_edit_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// AuthNoEditForm - edit the authentication Number
//=============================================================================
const AuthNoEditForm = () => {

    const user = useContext (UserContext)
    const [state,loadingState,DataAuthenticationUpdate,DataAuthenticationGetDetails,
           DataValidationFailure,DataValidationReset] = useAuthenicationForm()
    const [formdata,setFormdata] = useState (AuthenticationData)
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
        //newFormdata = populateOptionFields(newFormdata,ref.noteStatus,'status')    
        //newFormdata = populateOptionFields(newFormdata,ref.noteType,'note_type')    
    
        let authentication_id = user.localStorage.authentication_id
        if (authentication_id > 0) {  // edit
            DataAuthenticationGetDetails(user.portal_user_id,authentication_id)  // see useeffect below
        } else {            // add 
            resetFields(newFormdata,'authNo')
            setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
            setDefaultValue(newFormdata,'number_type','SMS')
        }

        setFormdata(newFormdata)  
        DataValidationReset() 

    },[])
    //=============================================================================
    // useEffect to load the data from the server (edit)
    //=============================================================================
    useEffect(()=>{
        if (loadingState.loading === false && loadingState.data && loadingState.data.recordset && loadingState.data.recordset.length > 0) {
            let authenticationtData    = loadingState.data.recordset[0]
            let newFormData = formdata
            
            newFormData = populateFields(formdata,authenticationtData)
            setFormdata(newFormData) 
            DataValidationReset()  //otherwize does not refresh
        }
    },[loadingState.loading])   
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
   
        DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'authNo');
        setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'authNo');
        let formIsValidRet = isFormValid(formdata,'authNo')
       
         if(formIsValidRet.formIsValid){
            DataAuthenticationUpdate(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
            <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.form_title}>Authentication Number</Text>
            </View>
            <Formfield id={'description'} formdata={formdata.description}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'number'} formdata={formdata.number}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
           
           {state.sendSuccess ? <AppMessage type ='success' message='Authentication No Updated Successfully' /> : <View></View> }  
           {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}}/> : <View></View> }  
           <AppButton type='save' title=' Update Authentication Number' onPress={submitForm}/> 

        </ScrollView>
    )
}
 
export default AuthNoEditForm;
//=============================================================================
/*
 <TextInput label="Note Type" value={formdata.note_type.value} mode="outlined"
                       onChangeText={(text) => updateFormField('note_type','changed',text)} 
                       placeholder={formdata.subject.config.placeholder} />
           
                       */