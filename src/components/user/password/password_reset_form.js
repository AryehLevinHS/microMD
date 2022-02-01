import React,{useState, useContext, useEffect} from 'react'
import {  SafeAreaView,Text,View} from 'react-native' 
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

// form tools
import { updateField, generateData, setDefaultValue} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
//tools
import {AppButton, AppMessage, IconButton} from '../../utils/misc_tools'
import { passwordCheck,passwordSingleCheck } from './password_validation'
// Data
import { UserContext } from '../../../store/UserContext'
import { usePasswordChange } from '../../../store/hooks/useUserData';
import {PasswordData} from './password_resst_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import  {NAV_USER_LOGIN} from '../../../navigation/route_types' 
//=============================================================================
// PasswordReestForm
//=============================================================================
const PasswordReestForm = () => {
  const navigation = useNavigation();
  const user = useContext (UserContext)
  const [state,DataPasswordChange,DataValidationFailure,DataValidationReset] = usePasswordChange()
  const [passwordValid,setPasswordValid] = useState({size:false,chars:false})
  const [formdata,setFormdata] = useState (PasswordData)
  const checkIcon = <Icon name="check" size={20} color="green" type='antdesign' />

    //=============================================================================
    // goback (goes back to the login screen)
    //=============================================================================
      const goBack = () => {
        //navigation.goBack()
        navigation.navigate(NAV_USER_LOGIN);
    }    
    //=============================================================================
    // useEffect to close form
    //    if state.sendSuccess  the display success message and close the form
    //=============================================================================
    useEffect(()=>{
        if (state.sendSuccess) {
            setTimeout(()=>{goBack()},2000)
        }
    },[state.sendSuccess])  
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
 
      let dataToSubmit   = generateData(formdata,'password');
    //  let formIsValidRet = isFormValid(formdata,'password')
     
      let new_pwd     = formdata.new_password.value
      let confirm_pwd = formdata.confirm_password.value
      
      let validpwd = passwordCheck(new_pwd,confirm_pwd)
      if (validpwd.valid === false ) {
            DataValidationFailure(validpwd.error)
            return
      }

      let formIsValid  = isFormValidCheck(formdata,'change_password')
      if(formIsValid){
         DataPasswordChange(dataToSubmit)
      } 
  }
  //=============================================================================
  return (
       <SafeAreaView style={appStyles.form_container}>
         <View style={appStyles.goBackButton}>
               <IconButton type = 'GOBACK' onPress={() => goBack()} />
               <Text style={appStyles.form_title}> Reset Password</Text>
          </View>
          <Text style={{height:50}}></Text>
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
        <Text></Text>
        {state.sendSuccess ? <AppMessage type ='success' message='Password Successfully Changed' /> : <View></View> }  
        {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}} /> : <View></View> } 
        
        <AppButton type='default' title='Reset Password' onPress={submitForm}/>
    </SafeAreaView>
    )

}

export default PasswordReestForm
//=============================================================================


