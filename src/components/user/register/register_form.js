import React,{useState, useContext, useEffect} from 'react'
import { ScrollView, View, Text} from 'react-native' //TextInput Button
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

// form tools
import { updateField, generateData, setDefaultValue} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
//tools
import { passwordCheck,passwordSingleCheck } from '../password/password_validation';
import { AppMessage,AppButton,IconButton } from '../../utils/misc_tools'
// Data
import { UserContext } from '../../../store/UserContext'
import {usePatientRegister} from '../../../store/hooks/usePatientData'
import {RegisterData} from './register_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import  {NAV_USER_LOGIN} from '../../../navigation/route_types' 
//=============================================================================
// RegisterForm
//=============================================================================
const RegisterForm = () => {
  const navigation = useNavigation();
  const user = useContext (UserContext)
     // for registering the patient etc
  const [stateRegister,statePatient,DataPatientRegister,DataPatientRegisterGetDetails,
      DataPatientRegisterLoginNameVerify, DataValidationFailure,DataValidationReset] = usePatientRegister()
  const [formdata,setFormdata] = useState (RegisterData)
  const [passwordValid,setPasswordValid] = useState(false)
  const [loginnameVerified,setLoginnameVerified] = useState(false)
  const checkIcon = <Icon name="check" size={20} color="green" type='antdesign' />
    
  //=============================================================================
  // goback (goes back to the calling screen)
  //=============================================================================
  const goBack = () => {
     navigation.navigate(NAV_USER_LOGIN);
     // navigation.goBack()
   }  
   //=============================================================================
   // verifyLoginName - check the data to see if login name is ok
   //=============================================================================
   const verifyLoginName = () => {
      let loginName = formdata.login_name.value
      DataPatientRegisterLoginNameVerify(loginName)
      setLoginnameVerified(true) // TEMP
   }    
   //=============================================================================
   // useEffect = sets the data when entering this screen
   //=============================================================================
   useEffect(()=>{
     let newFormdata = formdata
     setDefaultValue(newFormdata,'portal_user_id',user.portal_user_id)
     setFormdata(newFormdata)
  },[])
  //=============================================================================
  // updateFormField (update fields on the form)
  //=============================================================================
  const updateFormField = (id,action,value) => {
    
      // DataValidationReset()
      const newFormdata = updateField(formdata,id,action,value,'password');
      setFormdata(newFormdata)    
      
      switch(id){
      case 'new_password': 
            // check marks so user knows that its valid size and other chars
            let new_pwd = value
            let sizevalid = passwordSingleCheck('SIZE',new_pwd,'')
            let charsvalid = passwordSingleCheck('SPECIAL_CHARS',new_pwd,'')
            setPasswordValid({size:sizevalid,chars:charsvalid})
            break;
      default:
        return
      }
  }
  //=============================================================================
  // submit form (update information)
  //=============================================================================
    const submitForm = () =>{
      
      let new_pwd     = formdata.new_password.value
      let confirm_pwd = formdata.confirm_password.value
      
      // check password
      let validpwd = passwordCheck(new_pwd,confirm_pwd)
      if (validpwd.valid === false ) {
          DataValidationFailure(validpwd.error)
          return
      }
      
      // check the rest of the form
      let dataToSubmit   = generateData(formdata,'register');
      let formIsValidRet = isFormValid(formdata,'register')
    
      if(formIsValidRet.formIsValid){
        DataPatientRegister(dataToSubmit)
    } else {
        DataValidationFailure(formIsValidRet.errorMsg)
    }     
  }
  //=============================================================================
  return (
       <ScrollView style={appStyles.form_container} >
         <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.form_title}>Patient Registration</Text>
          </View>
          <Text style={appStyles.form_subTitle}>Wecome {formdata.first_name.value + ' ' + formdata.last_name.value}</Text>
          <Text style={appStyles.form_text}>Please choose a login name and set your password. The default login name is 'last name.first name'.
                Click the 'Verfy Login Name' button to verify the Login Name
          </Text>
           <View style={{flexDirection:'row'}}>
                  <View style={{flex:1}}>
                  <Formfield id={'login_name'} formdata={formdata.login_name} 
                             changefunction={(id,action,value) => updateFormField(id,action,value)} />
                  </View>
                  <View style={{marginTop:40, marginRight:10}}>
                      {loginnameVerified === true ? 
                        <Icon name="checkcircle" size={20} color="green" type='antdesign' 
                              />  
                       : <Icon name="checkcircle" size={20} color="red" type='antdesign'
                           onPress = {()=>{verifyLoginName()}} />  }
                  </View>
         </View>              
          <Text style={appStyles.form_text}>Your password: </Text> 
          <View style={{flexDirection:'row'}}>
                {passwordValid.size ? checkIcon :null}  
                <Text style={appStyles.form_text}>must be between 6 and 12 characters</Text>
          </View>
          <View style={{flexDirection:'row'}}>
              {passwordValid.chars ? checkIcon :null}  
              <Text style={appStyles.form_text}>must contain at least one special character [!@#$%^&*()_+]</Text>
          </View>
      
          <Formfield id={'new_password'} formdata={formdata.new_password}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
          <Formfield id={'confirm_password'} formdata={formdata.confirm_password}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
          <Formfield id={'default_clinic'} formdata={formdata.default_clinic}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
                       
          {stateRegister.sendSuccess ? <AppMessage type ='success' message='Patient Successfully Registered' /> : <View></View> }  
          <AppButton type='send' title='Register' onPress={submitForm}/> 
          <Text style={appStyles.form_text}>We hope you enjoy using the Patient Portal!</Text> 
    </ScrollView>
    )

}

export default RegisterForm
//=============================================================================


