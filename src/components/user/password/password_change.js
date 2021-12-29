import React,{useState, useContext, useEffect} from 'react'
import {  SafeAreaView,Text,Button} from 'react-native' //TextInput Button
import { Appbar }from 'react-native-paper';

// form tools
import { updateField, generateData, setDefaultValue} from '../../utils/forms/form_actions';
import Formfield from '../../utils/forms/form_fields';
//tools
import { passwordCheck,passwordSingleCheck } from './password_validation'
// Data
import { UserContext } from '../../../store/UserContext'
import { usePasswordChange } from '../../../store/hooks/useUserData';
import {PasswordData} from './password_data'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
import Icon from 'react-native-vector-icons/FontAwesome';

//=============================================================================
// ChangePassword
//=============================================================================
const ChangePassword = () => {
  const user = useContext (UserContext)
  const [state,DataPasswordChange,DataValidationFailure,DataValidationReset] = usePasswordChange()
  const [passwordValid,setPasswordValid] = useState({size:false,chars:false})
  const [formdata,setFormdata] = useState (PasswordData)
  const checkIcon = <Icon name="check-circle" size={30} color="green" />;
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
  
 
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  return (
       <SafeAreaView style={appStyles.password_container}>
           <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="User" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
          </Appbar.Header>
          <Text  style={appStyles.main_title}>{'Change Password'}</Text>
          <Text>Your password: </Text> 
                {passwordValid.size ? {checkIcon} :null}  
          <Text>must be between 6 and 12 characters</Text>
              {passwordValid.chars ? {checkIcon} :null}  
          <Text>must contain at least one special character [!@#$%^&*()_+]</Text>
          
    
      <Formfield id={'new_password'} formdata={formdata.new_password}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
      <Formfield id={'confirm_password'} formdata={formdata.confirm_password}
                       changefunction={(id,action,value) => updateFormField(id,action,value)} />
       <Button title="Change Password" 
               onPress={submitForm}
      />
    </SafeAreaView>
    )

}

export default ChangePassword
//=============================================================================


