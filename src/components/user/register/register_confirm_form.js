import React,{useState, useContext, useEffect} from 'react'
import {  SafeAreaView,Text,View} from 'react-native' 
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

// form tools
import { updateField, generateData, setDefaultValue,setValue,
         populateOptionFields, isFormValid} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
//tools
import {AppButton, AppMessage, IconButton} from '../../utils/misc_tools'
// Data
import { UserContext } from '../../../store/UserContext'
import {useConfirmationForm} from '../../../store/hooks/useUserData'
import {RegisterConfirmData} from './register_confirm_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import  {NAV_USER_REGISTER} from '../../../navigation/route_types' 

//=============================================================================
// RegisterConfirmForm
//=============================================================================
const RegisterConfirmForm = () => {
  const navigation = useNavigation();
  const user = useContext (UserContext)
  const [stateRequest,stateValidate,DataConfirmCodeSend,DataConfirmCodeValidate,
         DataValidationFailure,DataValidationReset] = useConfirmationForm()
  const [formdata,setFormdata] = useState (RegisterConfirmData)
  const [attempt,setAttempt] = useState(0)
  const [codeSent,setCodeSent] = useState(false)

  //const [passwordValid,setPasswordValid] = useState({size:false,chars:false})
  const InfoIcon = <Icon name="infocirlce" size={20} color="blue" type='antdesign' />

    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        navigation.goBack()
    }    
    //=============================================================================
    // goRegister (goes to register screen)
    //=============================================================================
    const goRegister = () => {
        navigation.navigate(NAV_USER_REGISTER)
    }   
    //=============================================================================
    // useEffect = sets the data when entering this screen
    //=============================================================================
    useEffect(()=>{
     
      let confirmOptions = [ { key:'SMS',value:'SMS'},
                             { key:'EMAIL',value:'E-Mail'}]
      
      let newFormdata = formdata
      newFormdata = populateOptionFields(newFormdata,confirmOptions,'confirm_mechanism')  
      setDefaultValue(newFormdata,'confirm_mechanism','SMS')
      //setDefaultValue(newFormdata,'login_name',user.login_name)
      
      setFormdata(newFormdata)
    },[])
    //=============================================================================
    // RequestCode - sends the confirmation code to the patient
    //=============================================================================
    const RequestCode = () =>{
       
      let dataToSubmit   = generateData(formdata,'password_reset');
      let formIsValidRet = isFormValid(formdata,'password_reset')
   
      // for testing
      //user.portal_user_id  = 1000001
      return setCodeSent(true) 

      if(formIsValidRet.formIsValid){
          DataConfirmCodeSend(dataToSubmit)
      } else {
          DataValidationFailure(formIsValidRet.errorMsg)
      }
    }
    //=============================================================================
    // UseEffect (to get verification that code was send and get the portal_user_id)
    //=============================================================================
    useEffect(()=>{
    
      if (stateRequest.sendSuccess === true) {
         if (stateRequest.data )  {
            user.portal_user_id =  stateRequest.data.portal_user_id
            setCodeSent(true) 
         }
      }
       
  },[stateRequest.sendSuccess])
    //=============================================================================
    // submitcode (submit confirmation code)
    //=============================================================================
    const SubmitCode = () =>{
      setAttempt(attempt + 1)
      // for testing
      return goRegister() 

      let validationCode = formdata.confirm_code.value
      if (validationCode.length === 0 ) {
          DataValidationFailure('Invalid Validation Code')
          return
      }
      let dataToSubmit   = generateData(formdata,'password_reset');
      DataConfirmCodeValidate(dataToSubmit)
  }
   //=============================================================================
    // useEffect to close form
    //    if state.success   close the form - confirm sent and validated
    //=============================================================================
    useEffect(()=>{
  
      if (stateValidate.success && stateValidate.data ) {
          let status = stateValidate.data.success
          if (status === true) {
              goRegister()
          } 
      }
      if (stateValidate.isError === true) {
          //reset the confirmaiton code
          let newFormdata = formdata
          setValue(newFormdata,'confirm_code','')
          setFormdata(newFormdata)
          if (attempt > 5) {
             goBack()
          }
          
      }
  },[stateValidate.success,stateValidate.isError])  
  //=============================================================================
  // updateFormField (update fields on the form)
  //=============================================================================
  const updateFormField = (id,action,value) => {
    
      // DataValidationReset()
      const newFormdata = updateField(formdata,id,action,value,'register');
      setFormdata(newFormdata)    
     
  }
  //=============================================================================
  return (
       <SafeAreaView style={appStyles.form_container}>
         <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />    
                <Text style={[appStyles.form_title,{justifyContent:'center'}]}>Portal Self Registration</Text>
         </View>
         <Text style={appStyles.form_text}>To Register you need to be a patient in the practice.</Text>
         <Formfield id={'first_name'} formdata={formdata.first_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
         <Formfield id={'last_name'} formdata={formdata.last_name}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
         <Formfield id={'date_of_birth'} formdata={formdata.date_of_birth}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
         <View>

         </View>
         <Formfield id={'confirm_mechanism'} formdata={formdata.confirm_mechanism}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
        { formdata.confirm_mechanism.value === 'SMS' ?
          <Text style={appStyles.form_text}>to the Mobile Number specified in your Medical Records </Text>
      : <Text style={appStyles.form_text}> to the E-mail specified in your Medical Records </Text>} 
         <AppButton type='default' title='Send Confirmation Code' onPress={RequestCode}/> 
         {codeSent ? <View>
                      <Text></Text>             
                      <Formfield id={'confirm_code'} formdata={formdata.confirm_code}
                                    changefunction={(id,action,value) => updateFormField(id,action,value)} />
                                    <AppButton type='default' title='Complete Registration' onPress={SubmitCode}/>
                    </View>
        : <View>
          </View>}
        {stateValidate.sendSuccess ? <AppMessage type ='success' message='Code Successfully Validated' /> : <View></View> }  
        {stateValidate.error ? <AppMessage type = 'error' message = {' Unable to validate confirmation code'} onDismiss={()=>{DataValidationReset()}} /> : <View></View> } 
        {stateRequest.error ? <AppMessage type = 'error' message = {' Unable to send request code'} onDismiss={()=>{DataValidationReset()}} /> : <View></View> } 
        <Text style={appStyles.form_text}> If you are having difficulties with the self registration.</Text>
        <Text style={appStyles.form_text} > Please contact your practice to sign you up.</Text>
   
    </SafeAreaView>
    )

}

export default RegisterConfirmForm
//=============================================================================


