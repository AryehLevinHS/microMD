import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { TextInput, Divider, Button }from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,MessageDisplay } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'

import {useUserNoteEditForm} from '../../../store/hooks/useUserData'
import {NoteData}   from './notes_edit_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// NoteEditForm - edit the note
//=============================================================================
const NoteEditForm = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,loadingState,DataNoteGetDetails,DataNoteUpdate,
           DataValidationFailure,DataValidationReset] = useUserNoteEditForm()
    const [formdata,setFormdata] = useState (NoteData)
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
        newFormdata = populateOptionFields(newFormdata,ref.noteStatus,'status')    
        newFormdata = populateOptionFields(newFormdata,ref.noteType,'note_type')    
    
        let note_id = user.localStorage.note_id
        if (note_id > 0) {  // edit
           DataNoteGetDetails(user.portal_user_id,note_id)  // see useeffect below
        } else {            // add 
            resetFields(newFormdata,'note')
            setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
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
        const newFormdata = updateField(formdata,id,action,value,'notes');
         setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'notes');
        let formIsValidRet = isFormValid(formdata,'notes')
       
         if(formIsValidRet.formIsValid){
            DataNoteUpdate(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
            <Text style={appStyles.form_title}> Edit User Notes</Text>
            <Formfield id={'note_type'} formdata={formdata.note_type}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'status'} formdata={formdata.status}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'subject'} formdata={formdata.subject}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'note'} formdata={formdata.note}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
             {state.sendSuccess ? MessageDisplay('success','Note Successfully Saved') : <View></View> }  
             {/* {state.error ? MessageDisplay('error','Error: '+state.error) : <View></View> }     */}
            <Button icon="content-save" mode="contained" onPress={submitForm} compact style={{margin:5}}>
                Save User Note
            </Button>
           
        </ScrollView>
    )
}
 
export default NoteEditForm;
//=============================================================================
