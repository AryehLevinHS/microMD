import React from 'react';

import { useNavigation } from '@react-navigation/native';
// import { DrawerActions } from "react-navigation";
import {NAV_HOME,NAV_MAIL_INBOX,NAV_PATIENT_INSURANCE,NAV_PATIENT_CONTACT_NAVIGATOR,NAV_PATIENT_PROVIDERS,
    NAV_APPT_CURRENT,NAV_MEDINFO_REFILLS,NAV_MEDINFO_DASHBOARD,NAV_MEDINFO_ALLERGIES,NAV_MEDINFO_CAREPLAN_NAVIGATOR,NAV_MEDINFO_DOCUMENTS,
    NAV_MEDINFO_IMMUNIZATIONS,NAV_MEDINFO_REFERRALS,NAV_MEDINFO_VITALSIGNS,NAV_MEDINFO_VISITS,
    NAV_MEDINFO_MEDICATIONS,NAV_MEDINFO_REFERRALS_NAVIGATOR} 
 
    from './route_types'
import { View,Text,ScrollView,StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {Button} from 'react-native-elements'
import {appStyles} from '../resources/styles/main_styles'
//=============================================================================
// PatientSideDrawerCustom
//=============================================================================
export const PatientSideDrawerCustom = (props) => {
  const navigation = useNavigation();
  const options = [
    {title:'Providers',location:{NAV_PATIENT_PROVIDERS}},
    {title:'Contacts',location:{NAV_PATIENT_CONTACT_NAVIGATOR}},
    {title:'Insurance',location:{NAV_PATIENT_INSURANCE}}
  ]
 // console.log('props for drawer again ____',props.descriptors[0])
 // const options = props. 
  return (
    <DrawerContentScrollView  {...props} style={styles.container}>
      <View>
         <Text>Patient Options</Text>
      </View>
      {options.map((item) =>{ 
        return (
                <View key={item.title}>
                  <Button title ={item.title} key={item.title} onPress={()=>navigation.navigate({name:item.location})} buttonStyle={styles.drawerButton}/>
                </View> 
        )
      })}
    </DrawerContentScrollView>
  )
}
//=============================================================================
// MedinfoSideDrawerCustom
//=============================================================================
export const MedinfoSideDrawerCustom = (props) => {
  const navigation = useNavigation();
  const options = [
    {title:'Dashboard',location:NAV_MEDINFO_DASHBOARD},
    {title:'Allergies',location:NAV_MEDINFO_ALLERGIES},
    {title:'Medications',location:NAV_MEDINFO_MEDICATIONS},
    {title:'Care Plan',location:NAV_MEDINFO_CAREPLAN_NAVIGATOR},
    {title:'Documents',location:NAV_MEDINFO_DOCUMENTS},
    {title:'Immunizations',location:NAV_MEDINFO_IMMUNIZATIONS},
    {title:'Referrals',location:NAV_MEDINFO_REFERRALS_NAVIGATOR},
    {title:'Vital Signs',location:NAV_MEDINFO_VITALSIGNS},
    {title:'Visits',location:NAV_MEDINFO_VISITS},
    {title:'Home',location:NAV_HOME},

  ]


 // console.log('props for drawer again ____',props.descriptors[0])
 // const options = props. 
  return (
    <DrawerContentScrollView  {...props} style={styles.container}>
      <View>
         <Text style={appStyles.drawermenu_title}>{'Medinfo Options'}</Text>
      </View>
      {options.map((item) =>{ 
        return (
              <View key={item.title}>
                 <Button title ={item.title} key={item.title} onPress={()=>navigation.navigate(item.location)} buttonStyle={styles.drawerButton}/>
              </View> 
        )
      })}
    </DrawerContentScrollView>
  )
}

//=============================================================================
// styles
//=============================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  drawerButton:{
     backgroundColor:'lightblue',
     color:'lightblue',
    // width: '100%',
     borderColor:'darkblue',
     borderWidth:1,
  
  }
});

//=============================================================================

