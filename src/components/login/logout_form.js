import React,{useState, useContext, useEffect} from 'react'
import {SafeAreaView, Text,View,ActivityIndicator } from 'react-native'
import { useNavigation} from '@react-navigation/native';
// data
import {UserContext,UserLogout} from '../../store/UserContext'
// styles
import {appStyles} from '../../resources/styles/main_styles'

//=============================================================================
// logout Screen
//=============================================================================
const Logout = () => {
    const navigation = useNavigation()
    const user = useContext(UserContext)
    //=============================================================================r
    // useEffect to logout user
    //=============================================================================
    useEffect(()=>{
        setTimeout(()=>{ logoutApp() },100)
    },[])
  //=============================================================================r
  // logoutApp
  //=============================================================================   
  const logoutApp =() => {
        user.is_authenticated = 'N'
    //    user.UserLogout(user)
        navigation.setParams({login:'false'})  
  } 

//=============================================================================
  return (
    <SafeAreaView style={appStyles.logout_container} >
        <View style={appStyles.logout_message}>
           <ActivityIndicator />
           <Text style={{color:'white'}}>Logging out...</Text> 
        </View>
  </SafeAreaView>
  )

}

export default Logout