import * as React from 'react';
import { Text, View,Button } from 'react-native';
import {
  NAV_USER_LOGIN,NAV_USER_REGISTER,
  NAV_HOME,NAV_DEFAULT,NAV_APPT_CURRENT,NAV_APPT_PAST,NAV_APPT_REQ,NAV_APPT_NEW,
  NAV_MEDINFO_NAVIGATOR,
  NAV_MEDINFO_ALLERGIES,
  NAV_MEDINFO_CAREPLAN,NAV_MEDINFO_CAREPLAN_PROGRESS,NAV_MEDINFO_DOCUMENTS,NAV_MEDINFO_DOCUMMENT_VIEW,
  NAV_MEDINFO_FORMS,NAV_MEDINFO_FORM_FILL,NAV_MEDINFO_IMMUNIZATIONS,
  NAV_MEDINFO_LABRESULTS,NAV_MEDINFO_LABRESULT_GRAPH,NAV_MEDINFO_LABRESULT_COMPARE,
  NAV_MEDINFO_LABRESULT_TESTS,
  NAV_MEDINFO_MEDICATIONS,NAV_MEDINFO_REFILLS,
  NAV_MEDINFO_HOSPITALIZATIONS,NAV_MEDINFO_FORM_VIEW,
  NAV_MEDINFO_REFERRALS,NAV_MEDINFO_REFERRAL_REQUEST,
  NAV_MEDINFO_VISITS,NAV_MEDINFO_VISITS_VIEW,
  NAV_MEDINFO_VITALSIGNS,NAV_MEDINFO_VITALSIGN_GRAPH,NAV_MEDINFO_VITALSIGN_EDIT,
  NAV_MEDINFO_ALERTS,NAV_MEDINFO_DASHBOARD,
  NAV_MAIL_INBOX,NAV_MAIL_MESSAGE,NAV_MAIL_OUTBOX,NAV_MAIL_MSGDISPLAY,
  NAV_PATIENT_PROVIDERS,NAV_PATIENT_PERSONAL,NAV_PATIENT_CHARGES,NAV_PATIENT_CONTACTS,NAV_PATIENT_INSURANCE,
  NAV_PATIENT_INSURANCE_EDIT,NAV_PATIENT_PERSONAL_EDIT,NAV_PATIENT_PAYMENTS,NAV_PATIENT_STATEMENTS,
  NAV_PATIENT_CONTACTS_EDIT,
  NAV_USER_DASHBOARD,NAV_USER_NOTES,NAV_USER_NOTES_EDIT,NAV_USER_PROFILE,NAV_USER_AUTHENTICATION_EDIT,
  NAV_PRACTICE_NEWS,NAV_PRACTICE_NEWS_VIEW,NAV_PRACTICE_RESOURCES,NAV_PRACTICE_INFO,NAV_PRACTICE_EDU} from './route_types'  

// General
import HomeScreen from '../components/home/home_screen';
import LoginScreen from '../components/login/login_sreen'
// register
 

// Medinfo
//import DashboardScreen from "../components/medinfo/dashboard/dashboardScreen"
import AllergyList      from '../components/medinfo/allergies/allergy_list';
import ActionitemList   from '../components/medinfo/actionitems/actionitem_list';
import CareplanList     from '../components/medinfo/careplan/careplan_list';
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
// user
import NoteList         from '../components/user/notes/notes_list';
import NoteEditForm     from '../components/user/notes/notes_edit_form';
import ChangePassword   from '../components/user/password/password_change';
import AuthNoList       from '../components/user/authentication/authno_list';
import AuthNoEditForm   from '../components/user/authentication/authno_edit_form';
import TermsofUse       from '../components/user/register/terms_of_use';
import ProxyScreen      from '../components/user/proxy/proxy_screen'; 
import RegisterForm     from '../components/user/register/register_form'; 

// Practice
import NewsList         from '../components/practice/news/news_list';
import ResourceList     from '../components/practice/resources/resource_list';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import {createDrawerNavigator} from '@react-navigation/drawer'

// const [isAuth,SetIsAuth] = useState(false)
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export const Routes = () => {
     const [authenticated,setAuthenticated] = React.useState(false)
     const MainStack      = createNativeStackNavigator();
     const LoginStack     = createNativeStackNavigator();
     const HomeStack      = createNativeStackNavigator();
     const MedinfoDrawer  = createDrawerNavigator();
     const PatientDrawer  = createDrawerNavigator();
     const PracticeDrawer = createDrawerNavigator();
     const MailDrawer     = createDrawerNavigator();
     const BottomTab      = createBottomTabNavigator();
     const HomeTab        = createBottomTabNavigator();
     const Drawer          = createDrawerNavigator();
     //=============================================================================
    // LoginNavigator - navigator for login
    //=============================================================================
    const BottomTabNavigator = () => {
      return (
               <BottomTab.Navigator>
                <BottomTab.Screen name={NAV_USER_LOGIN}    component={LoginScreen} />
                <BottomTab.Screen name={NAV_USER_REGISTER} component={RegisterForm} />
              </BottomTab.Navigator>
      )
    }
    

    //=============================================================================
    // LoginNavigator - navigator for login
    //=============================================================================
    const LoginNavigator = () => {
      return (<LoginStack.Navigator>
                <LoginStack.Screen name={NAV_USER_LOGIN}    component={LoginScreen} />
                <LoginStack.Screen name={NAV_USER_REGISTER} component={RegisterForm} />
              </LoginStack.Navigator>
      )
    }
    //=============================================================================
    // HomeNavigator - navigator for home screens
    //=============================================================================
    const HomeNavigator = () => {
      return (<HomeStack.Navigator InitialRouteName={NAV_HOME}>
                <HomeStack.Screen name={NAV_HOME}              component={HomeScreen} />
                <HomeStack.Screen name={NAV_MEDINFO_DASHBOARD} component={NoticeList} />   
                <HomeStack.Screen name={NAV_USER_DASHBOARD}    component={ProviderList} />  
                <HomeStack.Screen name={NAV_MAIL_INBOX}        component={MailInbox} />  
                <HomeStack.Screen name={NAV_PRACTICE_NEWS}     component={NewsList} />   
              </HomeStack.Navigator>
      )
    }
      //=============================================================================
    // BottomNavigator - navigator for all screens
    //=============================================================================
    const BottomNavigator = () => {
      return (<HomeTab.Navigator InitialRouteName={NAV_HOME}>
                <HomeTab.Screen name={NAV_HOME}              component={HomeScreen} />
                <HomeTab.Screen name={NAV_MEDINFO_DASHBOARD} component={MedinfoNavigator} />   
                <HomeTab.Screen name={NAV_PATIENT_PROVIDERS} component={PatientNavigator} />  
                <HomeTab.Screen name={NAV_MAIL_INBOX}        component={MailNavigator} />  
                <HomeTab.Screen name={NAV_PRACTICE_NEWS}     component={PracticeNavigator} />  
              </HomeTab.Navigator>
      )
    }
    //=============================================================================
    // MedinfoNavigator - navigoator for medinfo
    //=============================================================================
    const MedinfoNavigator = () => {
      //InitialRouteName={NAV_MEDINFO_DASHBOARD}
      return (<MedinfoDrawer.Navigator >
                <MedinfoDrawer.Screen name={NAV_MEDINFO_ALLERGIES}      component={AllergyList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_CAREPLAN}       component={CareplanList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_DOCUMENTS}      component={DocumentList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_IMMUNIZATIONS}  component={ImmunizationList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_LABRESULTS}     component={LabresultList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_MEDICATIONS}    component={MedicationList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_REFILLS}        component={RefillForm} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_REFERRALS}      component={ReferralList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_REFERRAL_REQUEST} component={ReferralForm} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_DASHBOARD}      component={NoticeList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_VITALSIGNS}     component={VitalSignList} />
                <MedinfoDrawer.Screen name={NAV_MEDINFO_VISITS}         component={EncounterList} />
            </MedinfoDrawer.Navigator>
      )
    }
    //=============================================================================
    // PatientNavigator Patient / User - navigator 
    //=============================================================================
    const PatientNavigator = () => {
      return (<PatientDrawer.Navigator InitialRouteName={NAV_PATIENT_PROVIDERS}>
                <PatientDrawer.Screen name={NAV_PATIENT_PROVIDERS}      component={ProviderList} />
                <PatientDrawer.Screen name={NAV_PATIENT_CONTACTS}       component={ContactList} />
                <PatientDrawer.Screen name={NAV_PATIENT_CONTACTS_EDIT}  component={ContactEditForm} />
                <PatientDrawer.Screen name={NAV_PATIENT_INSURANCE}      component={InsuranceList} />
                <PatientDrawer.Screen name={NAV_USER_NOTES}             component={NoteList} />
            </PatientDrawer.Navigator>
      )
    }
    //=============================================================================
    // MailNavigator - Navigator for mail messages
    //=============================================================================
    const VideosStack = () => {
     
      return (
      <MailDrawer.Navigator InitialRouteName={NAV_MAIL_INBOX}>
                <MailDrawer.Screen name={NAV_MAIL_INBOX}                component={MailInbox} />
                <MailDrawer.Screen name={NAV_MAIL_OUTBOX}               component={MailOutbox} />
                <MailDrawer.Screen name={NAV_MAIL_MSGDISPLAY}           component={MsgDisplay} />
                <MailDrawer.Screen name={NAV_MAIL_MESSAGE}              component={MsgForm} />
     </MailDrawer.Navigator>
      )
    }
    //=============================================================================
    // PracticeNavigator  Navigator for practice information
    //=============================================================================
    const PracticeNavigator = () => {
      return (<PracticeDrawer.Navigator InitialRouteName={NAV_PRACTICE_NEWS}>
                <PracticeDrawer.Screen name={NAV_PRACTICE_NEWS}       component={NewsList} />
                <PracticeDrawer.Screen name={NAV_PRACTICE_RESOURCES}  component={ResourceList} />

              </PracticeDrawer.Navigator>
      )
    }


const HomeScreenTest = ({ navigation }) => {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Home sweet home!</Text>
       <Button
        title="Go to settings"
        onPress={() => navigation.navigate('Settings')}
      // onPress={() => navigation.navigate({NAV_MEDINFO_CAREPLAN})}
      
      />
     </View>
   );
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
  headerTitle:()=> 'Fred'
}

const ArticleScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen!</Text>
      <Button
       title="Go to settings"
       onPress={() => navigation.navigate('Settings')}
     // onPress={() => navigation.navigate({NAV_MEDINFO_CAREPLAN})}
     
     />
    </View>
  );
}

const VideoScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Video Screen!</Text>
      <Button
       title="Go to settings"
       onPress={() => navigation.navigate('Settings')}
     // onPress={() => navigation.navigate({NAV_MEDINFO_CAREPLAN})}
     
     />
    </View>
  );
}

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const VideosStack2 = () => (
  <Drawer.Navigator  initialRouteName="Videos_screen"  >
      <Drawer.Screen name="Videos_screen" component={VideoScreen}  />
      <Drawer.Screen name="Article" component={SettingsScreen}  />
      <Drawer.Screen name={NAV_MAIL_INBOX}                component={MailInbox} />
  </Drawer.Navigator>
)


   return (
           <BottomTab.Navigator InitialRouteName="Home">
                 <BottomTab.Screen name="Home" component={HomeScreenTest} />
                 <BottomTab.Screen name="Settings" component={VideosStack} 
                   options={{
                 tabBarLabel: 'Settings',
                 tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" color={color} size={size} />)
                   }}
                />
         </BottomTab.Navigator> 
        // <MainStack.Navigator>
        //      <HomeTab.Screen name={NAV_HOME}                          component={HomeScreen} options={{headerShown:false}}/>
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_ALLERGIES}      component={AllergyList} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_CAREPLAN}       component={CareplanList} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_DOCUMENTS}      component={DocumentList} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_IMMUNIZATIONS}  component={ImmunizationList} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_LABRESULTS}     component={LabresultList} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_MEDICATIONS}    component={MedicationList} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_REFILLS}        component={RefillForm} />
        //      <MedinfoDrawer.Screen name={NAV_MEDINFO_REFERRALS}      component={ReferralList} />
        //      <MedinfoDrawer.Screen name={NAV_MEDINFO_REFERRAL_REQUEST} component={ReferralForm} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_DASHBOARD}      component={NoticeList} /> 
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_VITALSIGNS}     component={VitalSignList} />
        //      <MedinfoDrawer.Screen  name={NAV_MEDINFO_VISITS}         component={EncounterList} />
        //      <PatientDrawer.Screen name={NAV_PATIENT_PROVIDERS}      component={ProviderList} />
        //      <PatientDrawer.Screen name={NAV_PATIENT_CONTACTS}       component={ContactList} />
        //      <PatientDrawer.Screen name={NAV_PATIENT_CONTACTS_EDIT}  component={ContactEditForm} />
        //      <PatientDrawer.Screen name={NAV_PATIENT_INSURANCE}      component={InsuranceList} />
        //      <PatientDrawer.Screen name={NAV_USER_NOTES}             component={NoteList} />
        //      <MailDrawer.Screen     name={NAV_MAIL_INBOX}             component={MailInbox} />
        //      <MailDrawer.Screen     name={NAV_MAIL_OUTBOX}            component={MailOutbox} />
        //      <MailDrawer.Screen     name={NAV_MAIL_MSGDISPLAY}        component={MsgDisplay} />
        //      <MailDrawer.Screen     name={NAV_MAIL_MESSAGE}           component={MsgForm} />
        //      <PracticeDrawer.Screen name={NAV_PRACTICE_NEWS}          component={NewsList} />
        //      <PracticeDrawer.Screen name={NAV_PRACTICE_RESOURCES}     component={ResourceList} />
           
        //  </MainStack.Navigator>
    
   )
}
//const LoginNavigation =() => {
  // const LoginStack = createStackNavigator();

  // <LoginStack.Navigator InitialRouteName="Login">
  //          <LoginStack.Screen name="Login" component={LoginScreen} />
  //          <LoginStack.Screen name="Register" component={RegisterScreen} />
  //          <LoginStack.Screen name="ResetPW" component={ResetPWScreen} />
  //  </LoginStack.Navigator>
//}
 

    // <Drawer.Navigator InitialRouteName={NAV_HOME}>
    //          <Drawer.Screen name={NAV_HOME}        component={HomeNavigator()} />
    //          {/* <Drawer.Screen name={NAV_USER_LOGIN}  component={LoginNavigator()} /> */}
    //  </Drawer.Navigator>
    // <MedinfoDrawer >
    //          <MedinfoDrawer.Screen name='Allergies'      component={HomeScreenTest} />
    //          <MedinfoDrawer.Screen name='Careplan'       component={HomeScreenTest} />
    //          <MedinfoDrawer.Screen name='Docs'      component={HomeScreenTest} />
    //          <MedinfoDrawer.Screen name='Immunizations'  component={HomeScreenTest} />
    //          <MedinfoDrawer.Screen name='Labresults'     component={HomeScreenTest} />
    //          <MedinfoDrawer.Screen name="meds"   component={SettingsScreen} />
    //          <MedinfoDrawer.Screen name="Dash"     component={SettingsScreen} />
    //          <MedinfoDrawer.Screen name='VitalSigns'     component={VitalSignList} />
    //          <MedinfoDrawer.Screen name='Visits'        component={SettingsScreen} />
    //      </MedinfoDrawer>
    // <Stack.Navigator InitialRouteName="Home">
    //         <Stack.Screen name="Home" component={HomeScreenTest} />
    //         <Stack.Screen name="Settings" component={SettingsScreen} />
    //         <Stack.Screen name='Allergies' component={CareplanList} />
    // </Stack.Navigator>
   
    //   <Drawer.Navigator InitialRouteName="Home">
    //          <Drawer.Screen name="Home" component={HomeScreenTest} />
    //          <Drawer.Screen name="Settings" component={SettingsScreen} />
    //          <Drawer.Screen name= {NAV_MEDINFO_NAVIGATOR} component={HomeNavigator} />
            
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_ALLERGIES}      component={AllergyList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_CAREPLAN}       component={CareplanList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_DOCUMENTS}      component={DocumentList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_IMMUNIZATIONS}  component={ImmunizationList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_LABRESULTS}     component={LabresultList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_MEDICATIONS}    component={MedicationList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_DASHBOARD}      component={NoticeList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_VITALSIGNS}     component={VitalSignList} />
    //          <MedinfoDrawer.Screen name={NAV_MEDINFO_VISITS}         component={EncounterList} /> 
    //  </Drawer.Navigator>
    
    
    // <HomeScreen/>
     //<LoginScreen/>
      
    //<ActionitemList/>
    //<AllergyList/>
   // <CareplanList/>
    //<DocumentList/>
    //<EncounterList/>
    //<FormList/>
    //<ImmunizationList/>
    //<LabresultList/>
    //<LabResultTests/>
    //<LabResultCompare/>
    //<LabResultGraph/>
    //<NoticeList/>
    //<VitalSignList/>

    //<ApptPastList/> 
    //<ApptCurrentList/>
    //<ApptRequestForm/>
  
    //<MailInbox/>
    //<MailOutbox/>
    //<MsgDisplay/>
    //<MsgForm/>

   // <ContactList/>
    // <ContactEditForm/>
    //<InsuranceList/>
    //<ProviderList/>

    //<NoteList/>
    //<NoteEditForm/>
    //<ChangePassword/>
    //<AuthNoList/>
    //<AuthNoEditForm/>
    //<TermsofUse/>
    //<ProxyScreen/>
    // <RegisterForm/>

    //<NewsList/>
    //<ResourceList/>
//    )
  //  return (
  //      <Stack.Navigator InitialRouteName="Home">
  //        <Stack.Screen name="Home" component={HomeScreenTest} />
  //        <Stack.Screen name="Settings" component={SettingsScreen} />
  //      </Stack.Navigator>
  //  );
// }
  // <BottomTab.Navigator InitialRouteName="Home">
  //            <BottomTab.Screen name="Home" component={HomeScreenTest} />
  //            <BottomTab.Screen name="Settings" component={SettingsScreen} 
  //               options={{
  //             tabBarLabel: 'Settings',
  //             tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" color={color} size={size} />)
  //               }}
  //            />
  //    </BottomTab.Navigator> 
// export function Routes () {
//   return (
//     <View>
//       <Text>this is the routes </Text>
//       </View> 
      
//       // <NavigationContainer>
//         //    <Drawer.Navigator>
//         //       {isAuth ?
//         //            <Drawer.Screen name = "Home" component = {HomeScreen} />
//         //          :
//         //            <Drawer.Screen name = 'Login' component = {LoginNavigation} />
//         //        }

//         //     </Drawer.Navigator>
//         // </NavigationContainer>
//   )
// }

//export default Routes


