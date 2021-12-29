import React, { useContext} from 'react'; 
import { Text, View,Button } from 'react-native';
import { Icon } from 'react-native-elements';
import {  Menu, Divider} from 'react-native-paper';

import {MaterialCommunityIcons} from 'react-native-vector-icons/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { UserContext } from '../store/UserContext'
// Navigation
import {
  NAV_USER_LOGIN,NAV_USER_REGISTER,
  NAV_HOME,NAV_DEFAULT,
  
  NAV_APPT_NAVIGATOR,
  NAV_APPT_CURRENT,NAV_APPT_PAST,NAV_APPT_REQ,NAV_APPT_NEW,
  
  NAV_MEDINFO_NAVIGATOR,
  NAV_MEDINFO_ALLERGIES,
  NAV_MEDINFO_CAREPLAN_NAVIGATOR,NAV_MEDINFO_CAREPLAN,NAV_MEDINFO_CAREPLAN_PROGRESS,
  NAV_MEDINFO_DOCUMENTS,NAV_MEDINFO_DOCUMMENT_VIEW,
  NAV_MEDINFO_FORMS,NAV_MEDINFO_FORM_FILL,NAV_MEDINFO_IMMUNIZATIONS,
  NAV_MEDINFO_LABRESULTS,NAV_MEDINFO_LABRESULT_GRAPH,NAV_MEDINFO_LABRESULT_COMPARE,
  NAV_MEDINFO_LABRESULT_TESTS,
  NAV_MEDINFO_MEDICATIONS,NAV_MEDINFO_REFILLS,
  NAV_MEDINFO_HOSPITALIZATIONS,NAV_MEDINFO_FORM_VIEW,
  NAV_MEDINFO_REFERRALS_NAVIGATOR,NAV_MEDINFO_REFERRALS,NAV_MEDINFO_REFERRAL_REQUEST,
  NAV_MEDINFO_VISITS,NAV_MEDINFO_VISITS_VIEW,
  NAV_MEDINFO_VITALSIGNS,NAV_MEDINFO_VITALSIGN_GRAPH,NAV_MEDINFO_VITALSIGN_EDIT,
  NAV_MEDINFO_ALERTS,NAV_MEDINFO_DASHBOARD,
 
  NAV_MAIL_NAVIGATOR,
  NAV_MAIL_INBOX,NAV_MAIL_MESSAGE,NAV_MAIL_OUTBOX,NAV_MAIL_MSGDISPLAY,
 
  NAV_PATIENT_NAVIGATOR,
  NAV_PATIENT_PROVIDERS,NAV_PATIENT_PERSONAL,NAV_PATIENT_CHARGES,NAV_PATIENT_INSURANCE,
  NAV_PATIENT_INSURANCE_EDIT,NAV_PATIENT_PERSONAL_EDIT,NAV_PATIENT_PAYMENTS,NAV_PATIENT_STATEMENTS,
  NAV_PATIENT_CONTACT_NAVIGATOR,NAV_PATIENT_CONTACTS,NAV_PATIENT_CONTACTS_EDIT,
  NAV_USER_NOTES,NAV_USER_NOTES_EDIT,NAV_USER_PROFILE,NAV_USER_AUTHENTICATION_EDIT,
 
  NAV_PRACTICE_NAVIGATOR,
  NAV_PRACTICE_NEWS,NAV_PRACTICE_NEWS_VIEW,NAV_PRACTICE_RESOURCES,NAV_PRACTICE_INFO,NAV_PRACTICE_EDU} from './route_types'  

 import {SideDrawerCustom} from './drawer_navigation'

  // import all the screens

// General
import HomeScreen from '../components/home/home_screen';
import LoginScreen from '../components/login/login_sreen'
// register
 

// Medinfo
//import DashboardScreen from "../components/medinfo/dashboard/dashboardScreen"
import AllergyList      from '../components/medinfo/allergies/allergy_list';
import ActionitemList   from '../components/medinfo/actionitems/actionitem_list';
import CareplanList     from '../components/medinfo/careplan/careplan_list';
import CarePlanProgress from '../components/medinfo/careplan/careplan_progress';
import DocumentList     from '../components/medinfo/document/document_list';
import EncounterList    from '../components/medinfo/encounter/encounter_list';
import FormList         from '../components/medinfo/forms/form_list';
import ImmunizationList from '../components/medinfo/immunization/immunization_list';
import LabresultList    from '../components/medinfo/labresult/labresult_list';
import LabResultTests   from '../components/medinfo/labresult/labresult_tests';
import LabResultCompare from '../components/medinfo/labresult/labresult_compare';
import LabResultGraph   from '../components/medinfo/labresult/labresult_graph';
import MedicationList   from '../components/medinfo/medication/medication_list';
import RefillForm       from '../components/medinfo/medication/refill_form';
import ReferralList     from '../components/medinfo/referral/referral_list'
import ReferralForm     from '../components/medinfo/referral/referral_form'
import NoticeList       from '../components/medinfo/notices/notice_list';
import VitalSignList    from '../components/medinfo/vitalsigns/vitalsign_list';

// Appt
import ApptPastList     from '../components/appointments/appt_past_list';
import ApptCurrentList  from '../components/appointments/appt_current_list';
import ApptRequestForm  from '../components/appointments/appt_request_form';
// mail
import MailInbox        from '../components/mail/inbox_list'
import MailOutbox       from '../components/mail/outbox_list'
import MsgDisplay       from '../components/mail/msg_display';
import MsgForm          from '../components/mail/msg_form';
// patient
import ContactList      from '../components/patient/contacts/contact_list';
import ContactEditForm  from '../components/patient/contacts/contact_edit_form';
import InsuranceList    from '../components/patient/insurance/insurance_list';
import ProviderList     from '../components/patient/providers/provider_list';
import PersonalInfo     from '../components/patient/personal/personal_info';

// user
import NoteList         from '../components/user/notes/notes_list';
import NoteEditForm     from '../components/user/notes/notes_edit_form';
import ChangePassword   from '../components/user/password/password_change';
import AuthNoList       from '../components/user/authentication/authno_list';
import AuthNoEditForm   from '../components/user/authentication/authno_edit_form';
import TermsofUse       from '../components/user/register/terms_of_use';
import ProxyScreen      from '../components/user/proxy/proxy_screen'; 
import RegisterForm     from '../components/user/register/register_form'; 
import UserProfile      from '../components/user/register/register_form'; 

// Practice
import NewsList         from '../components/practice/news/news_list';
import ResourceList     from '../components/practice/resources/resource_list';
import PracticeInfo     from '../components/practice/resources/resource_list';

import {headerOptions}   from './application_header'

// const [isAuth,SetIsAuth] = useState(false)
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export const Routes = () => {
     const user = useContext (UserContext)

    
     const LoginStack     = createNativeStackNavigator();
     // main nav panel
     const BottomTab      = createBottomTabNavigator();
     
     // app sections
     const ApptDrawer     = createDrawerNavigator();
     const MedinfoDrawer  = createDrawerNavigator();
     const PatientDrawer  = createDrawerNavigator();
     const PracticeDrawer = createDrawerNavigator();
     const MailDrawer     = createDrawerNavigator();
     
     const ContactStack   = createNativeStackNavigator();
     const ReferrralStack = createNativeStackNavigator();
     const HomeStack      = createNativeStackNavigator();
    
    //=============================================================================
    // HomeNavigator - navigator for home
    //=============================================================================
    const HomeNavigator = () => {
      return (
              <HomeStack.Navigator>
                <HomeStack.Screen name={NAV_HOME}                      component={HomeScreen} />
           
                <HomeStack.Screen name={NAV_APPT_CURRENT}              component={ApptCurrentList} />
                <HomeStack.Screen name={NAV_APPT_PAST}                 component={ApptPastList} />   
                <HomeStack.Screen name={NAV_APPT_REQ}                  component={ApptRequestForm} />  

                <HomeStack.Screen name={NAV_MEDINFO_DASHBOARD}         component={NoticeList} />
                <HomeStack.Screen name={NAV_MEDINFO_ALLERGIES}         component={AllergyList} />
                <HomeStack.Screen name={NAV_MEDINFO_CAREPLAN}          component={CareplanList} />
                <HomeStack.Screen name={NAV_MEDINFO_CAREPLAN_PROGRESS} component={CarePlanProgress} />
                <HomeStack.Screen name={NAV_MEDINFO_DOCUMENTS}         component={DocumentList} />
                <HomeStack.Screen name={NAV_MEDINFO_IMMUNIZATIONS}     component={ImmunizationList} />
                <HomeStack.Screen name={NAV_MEDINFO_LABRESULTS}        component={LabresultList} />
                <HomeStack.Screen name={NAV_MEDINFO_MEDICATIONS}       component={MedicationList} />
                <HomeStack.Screen name={NAV_MEDINFO_REFILLS}           component={RefillForm} />
                <HomeStack.Screen name={NAV_MEDINFO_REFERRALS}         component={ReferralList} />
                <HomeStack.Screen name={NAV_MEDINFO_REFERRAL_REQUEST}  component={ReferralForm} />
                <HomeStack.Screen name={NAV_MEDINFO_VITALSIGNS}        component={VitalSignList} />
                <HomeStack.Screen name={NAV_MEDINFO_VISITS}            component={EncounterList} />

                <HomeStack.Screen name={NAV_PATIENT_PROVIDERS}         component={ProviderList} />
                <HomeStack.Screen name={NAV_PATIENT_CONTACT_NAVIGATOR} component={PatientContactNavigator} />
                <HomeStack.Screen name={NAV_PATIENT_INSURANCE}         component={InsuranceList} />
                <HomeStack.Screen name={NAV_USER_NOTES}                component={NoteList} />
                <HomeStack.Screen name={NAV_PATIENT_PERSONAL}          component={PersonalInfo} />
                <HomeStack.Screen name={NAV_USER_PROFILE}              component={UserProfile} />

                <HomeStack.Screen name={NAV_MAIL_INBOX}                component={MailInbox} />
                <HomeStack.Screen name={NAV_MAIL_OUTBOX}               component={MailOutbox} />
                <HomeStack.Screen name={NAV_MAIL_MSGDISPLAY}           component={MsgDisplay} />
                <HomeStack.Screen name={NAV_MAIL_MESSAGE}              component={MsgForm} />

                <HomeStack.Screen name={NAV_PRACTICE_NEWS}             component={NewsList} />
                <HomeStack.Screen name={NAV_PRACTICE_RESOURCES}        component={ResourceList} />
                <HomeStack.Screen name={NAV_PRACTICE_INFO}             component={PracticeInfo} />
              </HomeStack.Navigator>
      )
    }
    //=============================================================================
    // LoginNavigator - navigator for login
    //=============================================================================
    const LoginNavigator = () => {
      return (
              <LoginStack.Navigator  screenOptions={{  headerShown: false  }}>
                <LoginStack.Screen name={NAV_USER_LOGIN}    component={LoginScreen} />
                <LoginStack.Screen name={NAV_USER_REGISTER} component={RegisterForm} />
              </LoginStack.Navigator>
      )
    }
    //=============================================================================
    // AppointmentNavigator - navigator for appointments
    //=============================================================================
    const AppointmentNavigator = () => {
      return (<ApptDrawer.Navigator InitialRouteName={NAV_APPT_CURRENT}>
               {/* <ApptDrawer.Screen name={NAV_APPT_CURRENT}  component={ApptCurrentList} />
               <ApptDrawer.Screen name={NAV_APPT_PAST}     component={ApptPastList} />   
               <ApptDrawer.Screen name={NAV_APPT_REQ}      component={ApptRequestForm} />   */}
              </ApptDrawer.Navigator>
      )
    }
    //=============================================================================
    // Referral Navigator
    //=============================================================================
    const MedinfoReferralNavigator = () => {
      return (
              <ReferrralStack.Navigator InitialRouteName={NAV_MEDINFO_REFERRALS} 
                   screenOptions={{  headerShown: false  }}>
                  {/* <ReferrralStack.Screen name={NAV_MEDINFO_REFERRALS}      component={ReferralList} />
                  <ReferrralStack.Screen name={NAV_MEDINFO_REFERRAL_REQUEST} component={ReferralForm} /> */}
              </ReferrralStack.Navigator>
      )
    }
    //=============================================================================
    // Referral Navigator
    //=============================================================================
    const MedinfoCareplanNavigator = () => {
      return (
              <ReferrralStack.Navigator InitialRouteName={NAV_MEDINFO_CAREPLAN} 
                   screenOptions={{  headerShown: false  }}>
                  {/* <ReferrralStack.Screen name={NAV_MEDINFO_CAREPLAN}          component={CareplanList} />
                  <ReferrralStack.Screen name={NAV_MEDINFO_CAREPLAN_PROGRESS} component={CarePlanProgress} /> */}
              </ReferrralStack.Navigator>
      )
    }

    //=============================================================================
    // MedinfoNavigator - navigoator for medinfo
    //=============================================================================
    const MedinfoNavigator = () => {
      
      return (
              <MedinfoDrawer.Navigator  InitialRouteName={NAV_MEDINFO_DASHBOARD}>
                  {/* <MedinfoDrawer.Screen name={NAV_MEDINFO_DASHBOARD}      component={NoticeList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_ALLERGIES}      component={AllergyList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_CAREPLAN_NAVIGATOR}       component={MedinfoCareplanNavigator} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_DOCUMENTS}      component={DocumentList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_IMMUNIZATIONS}  component={ImmunizationList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_LABRESULTS}     component={LabresultList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_MEDICATIONS}    component={MedicationList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_REFILLS}        component={RefillForm} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_REFERRALS_NAVIGATOR}      component={MedinfoReferralNavigator} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_VITALSIGNS}     component={VitalSignList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_VISITS}         component={EncounterList} /> */}
              </MedinfoDrawer.Navigator>
      )
    }
    //=============================================================================
    // PatientContactNavigator Patient contact
    //=============================================================================
    const PatientContactNavigator = () => {

      return (
              <ContactStack.Navigator InitialRouteName={NAV_PATIENT_CONTACTS} screenOptions={{  headerShown: false  }}>
                  <ContactStack.Screen name={NAV_PATIENT_CONTACTS}      component={ContactList} />
                  <ContactStack.Screen name={NAV_PATIENT_CONTACTS_EDIT} component={ContactEditForm} />
              </ContactStack.Navigator>
      )
    }
    //=============================================================================
    // PatientNavigator Patient / User - navigator 
    //=============================================================================
    const PatientNavigator = () => {

      return (
              <PatientDrawer.Navigator InitialRouteName={NAV_PATIENT_PROVIDERS}
                //  drawerContent={(props) => <SideDrawerCustom {...props} />}
                  //  drawerStyle={{backgroundColor:'red'}}
              >
                  {/* <PatientDrawer.Screen name={NAV_PATIENT_PROVIDERS}      component={ProviderList} />
                  <PatientDrawer.Screen name={NAV_PATIENT_CONTACT_NAVIGATOR} component={PatientContactNavigator} />
                  <PatientDrawer.Screen name={NAV_PATIENT_INSURANCE}      component={InsuranceList} />
                  <PatientDrawer.Screen name={NAV_USER_NOTES}             component={NoteList} />
                  <PatientDrawer.Screen name={NAV_PATIENT_PERSONAL}       component={PersonalInfo} />
                  <PatientDrawer.Screen name={NAV_USER_PROFILE}           component={UserProfile} /> */}
                  {/* <PatientDrawer.Screen name={NAV_USER_NOTES}             component={NoteList} /> */}
              </PatientDrawer.Navigator>
      )
    }
    //=============================================================================
    // MailNavigator - Navigator for mail messages
    //=============================================================================
    const MailNavigator = () => {
     
      return (
              <MailDrawer.Navigator InitialRouteName={NAV_MAIL_INBOX}>
                    {/* <MailDrawer.Screen name={NAV_MAIL_INBOX}                component={MailInbox} />
                    <MailDrawer.Screen name={NAV_MAIL_OUTBOX}               component={MailOutbox} />
                    <MailDrawer.Screen name={NAV_MAIL_MSGDISPLAY}           component={MsgDisplay} />
                    <MailDrawer.Screen name={NAV_MAIL_MESSAGE}              component={MsgForm} /> */}
              </MailDrawer.Navigator>
      )
    }

    //=============================================================================
    // PracticeNavigator  Navigator for practice information
    //=============================================================================
    const SettingsIcon = () => {
      // const navigation = useNavigation()
      const [visible, setVisible] = React.useState(false);
      const openMenu = () => setVisible(true);
      const closeMenu = () => setVisible(false);
       return(
           <View style={{margin:10}}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={  <Icon
                  name="settings"
                  type= "Feather" //"antdesign"
                  color= 'purple'
                  onPress={openMenu} />
                }
                 >
                <Menu.Item icon="logout" onPress={() => {}} title="Logout" />
                <Menu.Item icon="human-male"  onPress={() => {}} title="Profile" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Bart Smith" />
              </Menu>
              
           </View>
       )
   }
   const screenOptions = {
    headerTitleAlign:'center',
    headerTintColor: 'green',
    headerStyle:{
        backgroundColor: 'orange',
        borderBottomWidth:6,
        borderBottomColor:'blue',
        height: Platform.OS === 'ios' ? 110 : 60
    },
    headerRight: (props)=> <SettingsIcon/>,
    
    // headerTitle:()=> 'Fred'
    // headerTitle: () =>
    //     <View>
    //         <Text>Title</Text>
    //         <Text>subtitle</Text>
    //     </View>,

  }

    const PracticeNavigator = () => {

      return (
              <PracticeDrawer.Navigator InitialRouteName={NAV_PRACTICE_NEWS}
                    screenOptions={{  ...headerOptions,
                 }}>
                  {/* <PracticeDrawer.Screen name={NAV_PRACTICE_NEWS}       component={NewsList} />
                  <PracticeDrawer.Screen name={NAV_PRACTICE_RESOURCES}  component={ResourceList} />
                  <PracticeDrawer.Screen name={NAV_PRACTICE_INFO}       component={PracticeInfo} /> */}
              </PracticeDrawer.Navigator>
      )
    }

  //=============================================================================
   return ( user.is_authenticated === 'N' ?
              LoginNavigator()
            :
           <BottomTab.Navigator InitialRouteName="Home" 
                                screenOptions={{  headerShown: false,
                                              }}
                                          
           >
                <BottomTab.Screen name="Home1" component={HomeNavigator} 
                         options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
                         }}
                />
                <BottomTab.Screen name={NAV_MAIL_NAVIGATOR} component={MailNavigator} 
                          options={{
                            tabBarLabel: 'Mail',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="mail" color={color} size={size} />)
                          }}
                />
               <BottomTab.Screen name={NAV_PATIENT_NAVIGATOR} component={PatientNavigator} 
                          options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />)
                          }}
                />
                <BottomTab.Screen name={NAV_APPT_NAVIGATOR} component={AppointmentNavigator} 
                          options={{
                            tabBarLabel: 'Appt',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clock-outline" color={color} size={size} />)
                          }}
                />
                <BottomTab.Screen name={NAV_MEDINFO_NAVIGATOR} component={MedinfoNavigator} 
                          options={{
                            tabBarLabel: 'Medical',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="run" color={color} size={size} />)
                          }}
                />
                <BottomTab.Screen name={NAV_PRACTICE_NAVIGATOR} component={PracticeNavigator} 
                          options={{
                            tabBarLabel: 'Practice',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="hospital-building" color={color} size={size} />)
                          }}
                />
           </BottomTab.Navigator> 
                        
   )
}
    //=============================================================================
    // END 
    //=============================================================================


