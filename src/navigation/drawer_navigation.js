import React from 'react';
import { View,Text,Pressable } from 'react-native';
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {appStyles} from '../resources/styles/main_styles'
import { useNavigation } from '@react-navigation/native';

// import { DrawerActions } from "react-navigation";
import {NAV_PATIENT_CONTACT_NAVIGATOR,
    NAV_PATIENT_INSURANCE_NAVIGATOR,NAV_USER_PROFILE_NAVIGATOR,NAV_USER_NOTES_NAVIGATOR,
    NAV_PATIENT_PERSONAL_NAVIGATOR,NAV_PATIENT_PROVIDERS,NAV_PATIENT_PHARMACY,

    NAV_MEDINFO_DASHBOARD,NAV_MEDINFO_ALLERGIES,NAV_MEDINFO_CAREPLAN_NAVIGATOR,NAV_MEDINFO_DOCUMENTS,
    NAV_MEDINFO_VITALSIGN_NAVIGATOR,NAV_MEDINFO_VISITS,NAV_MEDINFO_LABRESULT_NAVIGATOR,NAV_MEDINFO_REFILLS,
    NAV_MEDINFO_MEDICATIONS,NAV_MEDINFO_REFERRALS_NAVIGATOR, NAV_MEDINFO_IMMUNIZATION_NAVIGATOR,

    NAV_MAIL_INBOX,NAV_MAIL_OUTBOX,NAV_MAIL_MESSAGE,

    NAV_APPT_CURRENT,NAV_APPT_REQ,NAV_APPT_PAST,
  } 
    from './route_types'

    /*
    NAV_HOME,NAV_PATIENT_INSURANCE,NAV_PATIENT_CONTACTS,NAV_USER_NOTES,
    NAV_APPT_CURRENT,NAV_USER_PROFILE,NAV_PATIENT_PERSONAL,
    */
//=============================================================================
// PatientSideDrawerCustom
//=============================================================================
export const PatientSideDrawerCustom = (props) => {
  const navigation = useNavigation();
  const options = [
    {title:'My Providers',    location:NAV_PATIENT_PROVIDERS},
    {title:'Contacts',        location:NAV_PATIENT_CONTACT_NAVIGATOR},
    {title:'Pharmacies',      location:NAV_PATIENT_PHARMACY},
    {title:'Insurance',       location:NAV_PATIENT_INSURANCE_NAVIGATOR},
    {title:'Notes',           location:NAV_USER_NOTES_NAVIGATOR},
    {title:'Personal Details',location:NAV_PATIENT_PERSONAL_NAVIGATOR},
    {title:'User Profile',    location:NAV_USER_PROFILE_NAVIGATOR},
  ]
  return (
    <DrawerContentScrollView  {...props} style={appStyles.drawermenu_container}>
      <View>
         <Text style={appStyles.drawermenu_title}>Profile Menu</Text>
      </View>
      {options.map((item) =>{ 
        return (
              <View key={item.title}>
                 <Pressable onPress={()=> { navigation.navigate(item.location) }}
                            style={({ pressed }) => [
                                      { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',  },
                                       appStyles.drawermenu_Button
                                    ]}>
                   <Text style={appStyles.drawermenu_text}>{item.title}</Text> 
                 </Pressable>
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
    {title:'Visits',location:NAV_MEDINFO_VISITS},
    {title:'Medications',location:NAV_MEDINFO_MEDICATIONS},
    {title:'Lab Results',location:NAV_MEDINFO_LABRESULT_NAVIGATOR},
    {title:'Immunizations',location:NAV_MEDINFO_IMMUNIZATION_NAVIGATOR},
    {title:'Allergies',location:NAV_MEDINFO_ALLERGIES},
    {title:'Care Plan',location:NAV_MEDINFO_CAREPLAN_NAVIGATOR},
    {title:'Documents',location:NAV_MEDINFO_DOCUMENTS},
    {title:'Referrals',location:NAV_MEDINFO_REFERRALS_NAVIGATOR},
    {title:'Vital Signs',location:NAV_MEDINFO_VITALSIGN_NAVIGATOR},
    // {title:'Home',location:NAV_HOME},

  ]

  return (
    <DrawerContentScrollView  {...props} style={appStyles.drawermenu_container}>
      <View>
         <Text style={appStyles.drawermenu_title}>Medinfo Menu</Text>
      </View>
      {options.map((item) =>{ 
        return (
              <View key={item.title}>
                 <Pressable onPress={()=> { navigation.navigate(item.location) }}
                            style={({ pressed }) => [
                                     { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',  },
                                      appStyles.drawermenu_Button
                                    ]}>
                   <Text style={appStyles.drawermenu_text}>{item.title}</Text> 
                 </Pressable>
              </View> 
           
        )
      })}
          
    </DrawerContentScrollView>
  )
}
//=============================================================================
// MailSideDrawerCustom
//=============================================================================
export const MailSideDrawerCustom = (props) => {
  const navigation = useNavigation();
  const options = [
    {title:'Inbox',location:NAV_MAIL_INBOX},
    {title:'Outbox',location:NAV_MAIL_OUTBOX},
    {title:'New Message',location:NAV_MAIL_MESSAGE},
  ]

  return (
    <DrawerContentScrollView  {...props} style={appStyles.drawermenu_container}>
      <View>
         <Text style={appStyles.drawermenu_title}>Mail Menu</Text>
      </View>
      {options.map((item) =>{ 
        return (
              <View key={item.title}>
                 <Pressable onPress={()=> { navigation.navigate(item.location) }}
                            style={({ pressed }) => [
                                      { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',  },
                                       appStyles.drawermenu_Button
                                    ]}>
                   <Text style={appStyles.drawermenu_text}>{item.title}</Text> 
                 </Pressable>
              </View> 
        )
      })}     
    </DrawerContentScrollView>
  )
}
//=============================================================================
// ApptSideDrawerCustom
//=============================================================================
export const ApptSideDrawerCustom = (props) => {
  const navigation = useNavigation();
  const options = [
    {title:'Current Appointments',location:NAV_APPT_CURRENT},
    {title:'Past Appointments',location:NAV_APPT_PAST},
    {title:'Appointment Request',location:NAV_APPT_REQ},
]

  return (
    <DrawerContentScrollView  {...props} style={appStyles.drawermenu_container}>
      <View>
         <Text style={appStyles.drawermenu_title}>Appointment Menu</Text>
      </View>
      {options.map((item) =>{ 
        return (
              <View key={item.title}>
                 <Pressable onPress={()=> { navigation.navigate(item.location) }}
                            style={({ pressed }) => [
                                      { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',  },
                                       appStyles.drawermenu_Button
                                    ]}>
                   <Text style={appStyles.drawermenu_text}>{item.title}</Text> 
                 </Pressable>
              </View> 
        )
      })}     
    </DrawerContentScrollView>
  )
}

//=============================================================================

