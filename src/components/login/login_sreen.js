import React,{useState, useContext, useEffect} from 'react'
import {  ScrollView, TextInput,Text,Button,Image,View } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
//import {REACT_APP_PROXYSERVER} from "@env" // using 
// form tools
import Formfield from '../utils/forms/form_fields';
import { updateField, generateData, isFormValid,resetFields } from '../utils/forms/form_actions';

// Data
import { PracticeContext } from '../../store/PracticeContext'
import {UserContext,UserSetLoginData,UserSetClinicData,UserSetCounts} from '../../store/UserContext'
import {RefContext,RefProvidersSet,RefMedinfoCategoriesSet,RefMedinfoCardsSet,
        RefApptBookPrefs} from '../../store/RefContext'
import { useLoginForm } from '../../store/hooks/useUserData';
import {LoginData} from './login_data'

// styles
import {appStyles} from '../../resources/styles/main_styles'
import login_image from '../../resources/images/login/login_page.png'
// navigation
import  {NAV_HOME,NAV_USER_REGISTER,NAV_USER_FORGOTPASSWORD} from '../../navigation/route_types'
//=============================================================================
// Copyright
//=============================================================================
function Copyright() {
  return (
    <Text>
      {'Copyright © '} MicroMD{' '}{new Date().getFullYear()}{'.'}
     </Text>
  );
}
//=============================================================================
// Login Screen
//=============================================================================
const LoginScreen = () => {
   const practice = useContext (PracticeContext)
   const user     = useContext (UserContext)
   const ref      = useContext (RefContext)
   const navigation = useNavigation();
   const [state,stateStore,DataLoginUser,DataLoginSetStores,
          DataValidationFailure,DataValidationReset] = useLoginForm()
   const [formdata,setFormdata] = useState (LoginData)
    //=============================================================================
    // useEffect to set stores onces the user has logged in
    //=============================================================================
    useEffect(()=>{
        
      if (stateStore.loading === false && !stateStore.error) {
          
          if (stateStore.data) {
              let data =  stateStore.data
              // get counts
              if (data.counts && data.counts.recordset) {
                  UserSetCounts(user,data.counts.recordset[0])
              }
              // get clinic data
              if (data.clinicdata && data.clinicdata.recordset) {
                  UserSetClinicData(user, data.clinicdata.recordset[0])   
              }
              // set patient providers
              if (data.providerdata.recordset) {
                  RefProvidersSet(ref,data.providerdata.recordset)
              }
              /* medinfo categories */
              if (data.medinfocategories.recordset) {
                  RefMedinfoCategoriesSet(ref,data.medinfocategories.recordset)
              }
              /* medinfo cards */
              if (data.medinfocards.recordset) {
                  RefMedinfoCardsSet(ref,data.medinfocards.recordset)
              }
              /* get appt book preferences */
              if (data.apptprefs.recordset) {
                  RefApptBookPrefs(ref, data.apptprefs.recordset)
              }
   
          }
          // go to the home screen
          navigation.navigate(NAV_HOME)
         
      }
  },[stateStore.loading]) // do not put user as a dependancy - infinite loop
 
   //=============================================================================
    // useEffect to set user details, and patient details after user has logged in
    //=============================================================================
    useEffect(()=>{
    
      if (state.loginSuccess === true) {
              if (state.data) {
                  UserSetLoginData(user,state.data)
                  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}` 
                  // could maybe use axios.baseURL instead of proxy middleware ../setupProxy.js 
                  // axios.baseURL = REACT_APP_PROXYSERVER
                  //console.log('test env',REACT_APP_PROXYSERVER)
                  //user.baseURL = REACT_APP_PROXYSERVER
                  setConfirmOpen(true) 
                  setConfirmData({email:state.data.email,sms:state.data.sms})
              
               // REMOVE for testing
               DataLoginSetStores(user.patient_id,user.portal_user_id )
          }
      }
  },[state.loginSuccess]) 
   //=============================================================================
   // updateFormField (update fields on the form)
   //=============================================================================
   const updateFormField = (id,action,value) => {

       const newFormdata = updateField(formdata,id,action,value,'login');
       setFormdata(newFormdata)    
  }
  //=============================================================================
  // submit form (update information)
  //=============================================================================
  const submitForm = () =>{

      let dataToSubmit   = generateData(formdata,'login');
      let formIsValidRet = isFormValid(formdata,'login')
     
       if(formIsValidRet.formIsValid){
          DataLoginUser(dataToSubmit)
       } else {
          DataValidationFailure(formIsValidRet.errorMsg)
       }     
  }
  //=============================================================================
  return (
      <ScrollView style={appStyles.login_container}>
       <Text  style={appStyles.login_title}>{practice.practice_header}</Text>
       <Image style={appStyles.login_image} source={login_image} />
       <Text  style={appStyles.login_header}>{'Patient Login'}</Text>       
       <Text  style={appStyles.login_forgot_password}>{'Register'}</Text>         
       <Formfield id={'userName'} formdata={formdata.userName}
                  changefunction={(id,action,value) => updateFormField(id,action,value)} />
       <Formfield id={'password'} formdata={formdata.password}
                  changefunction={(id,action,value) => updateFormField(id,action,value)} />
       <Text  style={appStyles.login_forgot_password}>{'Forgot password ?'}</Text>         
      
      <View style={appStyles.form_button}>
          <Button title="Login" onPress={submitForm}/>
      </View>
      
    </ScrollView>
    )

}


export default LoginScreen
//=============================================================================
/*

 <TextInput
          style={appStyles.form_input}
          onChangeText={(value)=>handleOnChange('userName',value)}
          placeholder="User Name"
          value={data.userName}
      />
      <TextInput
          style={appStyles.form_input}
          onChangeText={(value)=>onSetData({...data,password:value})}
          value={data.password}
          placeholder="Password"
          secureTextEntry={true}
      />
*/