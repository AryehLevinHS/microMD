import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { TextInput, Divider, Button }from 'react-native-paper'
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,MessageDisplay } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'
import {useAuthenicationForm} from '../../../store/hooks/useUserData'
import {AuthenticationData} from './authno_edit_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// AuthNoEditForm - edit the authentication Number
//=============================================================================
const AuthNoEditForm = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,loadingState,DataAuthenticationUpdate,DataAuthenticationGetDetails,
           DataValidationFailure,DataValidationReset] = useAuthenicationForm()
    const [formdata,setFormdata] = useState (AuthenticationData)
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
        // NOTE: called when loading data 
        //console.log('update field',id,action,value)

        // DataValidationReset()
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
        <ScrollView>
            <Text>  Authentication Number</Text>
            <Formfield id={'description'} formdata={formdata.description}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
           <Formfield id={'number'} formdata={formdata.number}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
             {state.sendSuccess ? MessageDisplay('success','Authentication No Updated Successfully') : <View></View> }  
             {/* {state.error ? MessageDisplay('error','Error: '+state.error) : <View></View> }     */}
            <Button icon="content-save" mode="contained" onPress={submitForm} compact>
               Update Authentication Number
            </Button>
           
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