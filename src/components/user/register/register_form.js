import React,{useState, useContext, useEffect} from 'react'
import { ScrollView, View, Text} from 'react-native' //TextInput Button
import { Appbar, } from 'react-native-paper';

// form tools
import { updateField, generateData, setDefaultValue} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
//tools
import { passwordCheck,passwordSingleCheck } from '../password/password_validation';
import { AppMessage,AppButton } from '../../utils/misc_tools'
// Data
import { UserContext } from '../../../store/UserContext'
import {usePatientRegister} from '../../../store/hooks/usePatientData'
import {RegisterData} from './register_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
import Icon from 'react-native-vector-icons/FontAwesome';

//=============================================================================
// RegisterForm
//=============================================================================
const RegisterForm = () => {
  const user = useContext (UserContext)
     // for registering the patient etc
  const [stateRegister,statePatient,DataPatientRegister,DataPatientRegisterGetDetails,
      DataPatientRegisterLoginNameVerify, DataValidationFailure,DataValidationReset] = usePatientRegister()
  const [formdata,setFormdata] = useState (RegisterData)
  const [passwordValid,setPasswordValid] = useState(false)
  const loginnameVerified = useState(false)
  const checkIcon = <Icon name="check-circle" size={30} color="green" />;
  const verifyUserIcon = <Icon name="check-circle" size={30} color="red" />;
  const verifiedUserIcon = <Icon name="check-circle" size={30} color="green" />;
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
  
 
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  return (
       <ScrollView style={appStyles.password_container}>
           <Appbar.Header>
              <Appbar.BackAction onPress={_goBack} />
              <Appbar.Content title="User" subtitle="Subtitle" />
              <Appbar.Action icon="magnify" onPress={_handleSearch} />
              <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
          </Appbar.Header>
          <Text  style={appStyles.main_title}>{'Patient Registration'}</Text>
          <Text style={appStyles.h3}> Wecome {formdata.first_name.value + ' ' + formdata.last_name.value}</Text>
          <Text>Please choose a login name and set your password. The default login name is 'last name.first name'.
                Click the 'Verfy Login Name' button to verify the Login Name
          </Text>
           <Formfield id={'login_name'} formdata={formdata.login_name}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
                        {loginnameVerified? verifyUserIcon  : verifiedUserIcon}
                         
          <Text>Your password: </Text> 
          {passwordValid.size ? {checkIcon} :null}  
             <Text>must be between 6 and 12 characters</Text>
          {passwordValid.chars ? {checkIcon} :null} 
             <Text>must contain at least one special character [!@#$%^&*()_+]</Text>
      
          <Formfield id={'new_password'} formdata={formdata.new_password}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
          <Formfield id={'confirm_password'} formdata={formdata.confirm_password}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
          <Formfield id={'default_clinic'} formdata={formdata.default_clinic}
                        changefunction={(id,action,value) => updateFormField(id,action,value)} />
                       
          {stateRegister.sendSuccess ? <AppMessage type ='success' message='Patient Successfully Registered' /> : <View></View> }  
          <AppButton type='send' title='Register' onPress={submitForm}/> 
          <Text>We hope you enjoy using the Patient Portal!</Text> 
    </ScrollView>
    )

}

export default RegisterForm
//=============================================================================


