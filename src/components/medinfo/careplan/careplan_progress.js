import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// form tools
import { updateField, generateData, isFormValid, setDefaultValue,populateOptionFields,
         resetFields,populateFields} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
// tools
import { AppButton,AppMessage } from '../../utils/misc_tools';
// data
import { UserContext } from '../../../store/UserContext'
import { RefContext } from '../../../store/RefContext'
import {useCareplanForm}     from '../../../store/hooks/useMedinfoData'
import {careplanData}   from './careplan_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// CarePlanProgress - edit the careplan progress
//=============================================================================
const CarePlanProgress = () => {

    const user = useContext (UserContext)
    const ref = useContext(RefContext)
    const [loadingState,state,DataCarePlanSendProgress,DataCarePlanGetbyId,
        DataValidationFailure,DataValidationReset]  = useCareplanForm()
    const [formdata,setFormdata] = useState (careplanData)
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

         navigation.setOptions({
             headerLeft:()=> (<TouchableOpacity  onPress={()=>{navigation.toggleDrawer()}  }>
                              <Text>NAV</Text>
                             
                             </TouchableOpacity>)
         })

        let newFormdata = formdata
        // set dropdowns
        newFormdata = populateOptionFields(newFormdata,ref.careplanProgress,'progress_level')  
        newFormdata = populateOptionFields(newFormdata,ref.providerList,'provider_id')   
    
        // set default values 
        setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
        setDefaultValue(newFormdata,'sender_name',user.portal_user_name)
        setDefaultValue(newFormdata,'patient_id',user.patient_id)
         
        setFormdata(newFormdata)    
        DataValidationReset() 

        let careplanId = 1 // localStorage.getItem('careplan_id');
        if (careplanId > 0 ) {
       //     localStorage.removeItem('careplan_id'); // clear data
         }
        if ( careplanId > 0){
            /* existing care plan header */
            DataCarePlanGetbyId(user.patient_id,careplanId)     
        }
       

    },[])
    
    //=============================================================================
    // updateFormField (update fields on the form)
    //=============================================================================
    const updateFormField = (id,action,value) => {
        // NOTE: called when loading data 
        //console.log('update field',id,action,value)
        
        // DataValidationReset()
        const newFormdata = updateField(formdata,id,action,value,'careplanprogress');
         setFormdata(newFormdata)    
    }
    //=============================================================================
    // submit form (update information)
    //=============================================================================
    const submitForm = () =>{
 
        let dataToSubmit   = generateData(formdata,'careplanprogress');
        let formIsValidRet = isFormValid(formdata,'careplanprogress')
       
         if(formIsValidRet.formIsValid){
            DataReferralSend(dataToSubmit)
         } else {
            DataValidationFailure(formIsValidRet.errorMsg)
         }     
    }
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
            {/* <Text style={appStyles.form_title}> Edit User Notes</Text> */}
            <Formfield id={'provider_id'} formdata={formdata.provider_id}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
           <Formfield id={'progress_level'} formdata={formdata.progress_level}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
            <Formfield id={'progress_notes'} formdata={formdata.progress_notes}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />            
            <Formfield id={'comment'} formdata={formdata.comment}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
             {state.sendSuccess ? <AppMessage type ='success' message='Careplan progress Sent Successfully' /> : <View></View> }  
             {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} /> : <View></View> } 
             <AppButton type='send' title='Send Careplan Progress' onPress={submitForm}/>
        </ScrollView>
    )
}
 
export default CarePlanProgress;
//=============================================================================
