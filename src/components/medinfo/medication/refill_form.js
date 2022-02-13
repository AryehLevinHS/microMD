import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView, } from 'react-native'
import { CheckBox,ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
        } from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { loading,AppButton,AppMessage } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'

import {useMedicationRefillForm,useMedicationRefill} from '../../../store/hooks/useMedinfoData'
import {refillData}   from './refill_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// RefillForm - sends refill requests
//=============================================================================
const RefillForm = () => {
    const navigation = useNavigation();
    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [state,DataMedicationRefillRequestSend,DataValidationFailure,
           DataValidationReset] = useMedicationRefillForm()
    const  [loadingState,DataMedicationsGetForRefill] = useMedicationRefill();   
    const [formdata,setFormdata] = useState (refillData)
    const [checked, setChecked]  = useState([]);
    const [medications,setMedications] = useState()
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
    // handle Toggle - handles the toggle between the checkboxes
    //=============================================================================
    const HandleToggle = (value) => {
        const newChecked = [...checked]
  
        if (!value) return null
        let currentIndex = checked.indexOf(value)
        if(currentIndex === -1) {
            newChecked.push(value) // adds to the list
        } else{
          newChecked.splice(currentIndex,1) // removes the current entry
        }  
        setChecked(newChecked)
        return 
      }    
      
    //=============================================================================
    // useEffect - retrieve the data and setup the form
    //=============================================================================
    useEffect(()=>{
        // retrieve the data
        DataMedicationsGetForRefill(user.patient_id)
      
        let newFormdata = formdata
        // set dropdowns
        newFormdata = populateOptionFields(newFormdata,ref.providerList,'provider_id')   
        setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
        setDefaultValue(newFormdata,'patient_id',user.patient_id)
        
        setFormdata(newFormdata)    
        DataValidationReset() 

    },[])
    //=============================================================================
    // RefillDisplay - displays the refill llist
    //=============================================================================
    const RefillDisplay = () => {

        let medlist = (<View>
                      </View>)
    
    if (medications && medications.length > 0) {
            medlist =  medications.map(row => (
                             <View key={row.prescription_id} style={appStyles.item}>
                                  <CheckBox size={20} 
                                            containerStyle={{backgroundColor:'transparent'}}
                                            title= {row.description}
                                            checked={checked.indexOf(row.prescription_id) !== -1}
                                            onPress={() => HandleToggle(row.prescription_id)}
                                  />
                              <Text >{'Dosage: '+row.sig_text}</Text>
                          </View> 
                       ))

          }     
         return medlist
               
  
    }
    //=============================================================================
    // useEffect to load the data from the server ()
    //=============================================================================
     useEffect(()=>{
         if (loadingState.loading === false && loadingState.data && loadingState.data.recordset && loadingState.data.recordset.length > 0) {
             setMedications(loadingState.data.recordset)
         }
        
     },[loadingState.loading])   
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
    
        // DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'rxrequest');
        setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'rxrequest');
        let formIsValidRet = isFormValid(formdata,'rxrequest')
       
         if(formIsValidRet.formIsValid){
            DataMedicationRefillRequestSend(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
            {/* <Text style={appStyles.form_title}> Refill Requests</Text> */}
            <RefillDisplay /> 
            <Formfield id={'notes'} formdata={formdata.notes}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            {loadingState.loading ? loading(true) : loading(false)} 
            {state.sendSuccess ? <AppMessage type ='success' message='Request Sent Successfully' /> : <View></View> }  
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}} /> : <View></View> } 
            <AppButton type='send' title=' Send Refill Request' onPress={submitForm}/>
            
        </ScrollView>
    )
}
 
export default RefillForm;
//=============================================================================
