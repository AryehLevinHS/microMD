import React, { useContext, useState} from 'react'; 
import {MaterialCommunityIcons}       from 'react-native-vector-icons/';
import {Icon} from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator }   from '@react-navigation/bottom-tabs';
import { createDrawerNavigator }      from '@react-navigation/drawer';

// data user context
import { UserContext } from '../store/UserContext'
// style
import colors from '../resources/themes/colors';
// custom navigation
import { MedinfoSideDrawerCustom,MailSideDrawerCustom,PatientSideDrawerCustom,
         ApptSideDrawerCustom} from './drawer_navigation';

// Navigation routes
import {
  NAV_HOME_NAVIGATOR,NAV_HOME,

  NAV_USER_LOGIN,NAV_USER_LOGOUT,
  NAV_USER_REGISTER,NAV_USER_REGISTERCONFIRM,
  NAV_USER_PASSWORDRESET,NAV_USER_PASSWORDRESETCONFIRM,NAV_USER_PASSWORDCHANGE,
  NAV_USER_NOTES_NAVIGATOR,NAV_USER_NOTES,NAV_USER_NOTES_EDIT,
  NAV_USER_PROFILE_NAVIGATOR,NAV_USER_PROFILE,NAV_USER_PROFILE_LINK,
  NAV_USER_AUTHENTICATION_EDIT,NAV_USER_TERMSOFUSE,

  NAV_PATIENT_NAVIGATOR,
  NAV_PATIENT_PROVIDERS,
  NAV_PATIENT_PERSONAL_NAVIGATOR,NAV_PATIENT_PERSONAL, NAV_PATIENT_PERSONAL_EDIT,
  NAV_PATIENT_CHARGES,NAV_PATIENT_PAYMENTS,NAV_PATIENT_STATEMENTS,
  NAV_PATIENT_INSURANCE_NAVIGATOR,NAV_PATIENT_INSURANCE,NAV_PATIENT_INSURANCE_EDIT,
  NAV_PATIENT_CONTACT_NAVIGATOR,NAV_PATIENT_CONTACTS,NAV_PATIENT_CONTACTS_EDIT,NAV_PATIENT_PHARMACY,
  
  NAV_PRACTICE_NAVIGATOR,
  NAV_PRACTICE_NEWS,NAV_PRACTICE_NEWS_VIEW,NAV_PRACTICE_RESOURCES,NAV_PRACTICE_INFO,NAV_PRACTICE_EDU,

  NAV_APPT_NAVIGATOR,
  NAV_APPT_CURRENT,NAV_APPT_PAST,NAV_APPT_REQ,NAV_APPT_NEW,NAV_APPT_REQ_LINK,
  
  NAV_MAIL_NAVIGATOR,NAV_MAIL_INBOX_NAVIGATOR,NAV_MAIL_MESSAGE_LINK,NAV_MAIL_OUTBOX_NAVIGATOR,
  NAV_MAIL_INBOX,NAV_MAIL_MESSAGE,NAV_MAIL_OUTBOX,NAV_MAIL_MSGDISPLAY_IN,NAV_MAIL_MSGDISPLAY_OUT,NAV_MAIL_MSGDISPLAY,

  NAV_MEDINFO_NAVIGATOR,
  NAV_MEDINFO_ALLERGIES,
  NAV_MEDINFO_CAREPLAN_NAVIGATOR,NAV_MEDINFO_CAREPLAN,NAV_MEDINFO_CAREPLAN_PROGRESS,
  NAV_MEDINFO_DOCUMENTS,NAV_MEDINFO_DOCUMMENT_VIEW,
  NAV_MEDINFO_FORMS,NAV_MEDINFO_FORM_FILL,NAV_MEDINFO_FORM_VIEW,
  NAV_MEDINFO_IMMUNIZATION_NAVIGATOR,NAV_MEDINFO_IMMUNIZATION_LIST,NAV_MEDINFO_IMMUNIZATION_DETAIL,
  NAV_MEDINFO_LABRESULTS,NAV_MEDINFO_LABRESULT_NAVIGATOR,NAV_MEDINFO_LABRESULT_GRAPH,NAV_MEDINFO_LABRESULT_COMPARE,
  NAV_MEDINFO_LABRESULT_TESTS,
  NAV_MEDINFO_MEDICATIONS,NAV_MEDINFO_REFILLS,
  NAV_MEDINFO_HOSPITALIZATIONS,
  NAV_MEDINFO_REFERRALS_NAVIGATOR,NAV_MEDINFO_REFERRALS,NAV_MEDINFO_REFERRAL_REQUEST,
  NAV_MEDINFO_VISITS,NAV_MEDINFO_VISITS_VIEW,
  NAV_MEDINFO_VITALSIGNS,NAV_MEDINFO_VITALSIGN_GRAPH,NAV_MEDINFO_VITALSIGN_EDIT,NAV_MEDINFO_VITALSIGN_NAVIGATOR,
  NAV_MEDINFO_ALERTS,NAV_MEDINFO_DASHBOARD,
  
 } from './route_types'  

// import all the screens

// General
import HomeScreen from '../components/home/home_screen';
import LoginScreen from '../components/login/login_form'
import Logout from '../components/login/logout_form'
import {headerOptions,headerEdit}   from './application_header'
// import CalendarsList from './test_new'
//  import TestDate from './datepicker3'

// patient
import ContactList      from '../components/patient/contacts/contact_list';
import ContactEdit      from '../components/patient/contacts/contact_edit_form';
import InsuranceEdit    from '../components/patient/insurance/insurance_edit_form';
import InsuranceList    from '../components/patient/insurance/insurance_list';
import ProviderList     from '../components/patient/providers/provider_list';
import PersonalInfo     from '../components/patient/personal/personal_info';
import PersonalEdit     from '../components/patient/personal/personal_edit_form';
import PharmacyList     from '../components/patient/pharmacy/pharmacy_list';
// user
import NoteList         from '../components/user/notes/notes_list';
import NoteEdit         from '../components/user/notes/notes_edit_form';
import PasswordChange   from '../components/user/password/password_change';
import AuthNoEditForm   from '../components/user/authentication/authno_edit_form';
import TermsofUse       from '../components/user/register/terms_of_use';
import ProxyScreen      from '../components/user/proxy/proxy_list'; 
import RegisterForm     from '../components/user/register/register_form'; 
import RegisterConfirmForm   from '../components/user/register/register_confirm_form'; 
import UserProfile      from '../components/user/profile/profile_screen'; 
import PasswordReestForm from '../components/user/password/password_reset_form';
import PasswordResetConfirmForm from '../components/user/password/password_reset_confirm_form';
// Practice
import NewsList         from '../components/practice/news/news_list';
import ResourceList     from '../components/practice/resources/resource_list';
import PracticeInfo     from '../components/practice/info/practice_info';
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
import ImmunizationDetail from '../components/medinfo/immunization/immunization_detail';
import LabresultList    from '../components/medinfo/labresult/labresult_list';
import LabResultTests   from '../components/medinfo/labresult/labresult_tests';
import LabResultCompare from '../components/medinfo/labresult/labresult_compare';
import LabResultGraph from '../components/medinfo/labresult/labresult_compare';
//import LabResultGraph   from '../components/medinfo/labresult/labresult_graph';
import MedicationList   from '../components/medinfo/medication/medication_list';
import RefillForm       from '../components/medinfo/medication/refill_form';
import ReferralList     from '../components/medinfo/referral/referral_list'
import ReferralForm     from '../components/medinfo/referral/referral_form'
import NoticeList       from '../components/medinfo/notices/notice_list';
import VitalSignList    from '../components/medinfo/vitalsigns/vitalsign_list';
import VitalSignEdit    from '../components/medinfo/vitalsigns/vitalsign_edit_form';
import VitalSignCompare from '../components/medinfo/vitalsigns/vitalsign_compare';
// Appt
import ApptPastList     from '../components/appointments/appt_past_list';
import ApptCurrentList  from '../components/appointments/appt_current_list';
import ApptRequestForm  from '../components/appointments/appt_request_form';
// mail
import MailInbox        from '../components/mail/inbox_list'
import MailOutbox       from '../components/mail/outbox_list'
import MsgDisplay       from '../components/mail/msg_display';
import MsgForm          from '../components/mail/msg_form';

//=============================================================================
// Routes - navigator 
//=============================================================================
export const Routes = () => {
     const user = useContext (UserContext)
     const [userAuthenticated,setUserAuthenticated] = useState(true)
     let loggedIn = true
   
     // Login 
     const LoginStack     = createNativeStackNavigator();
     
     // main nav panel
     const BottomTab      = createBottomTabNavigator();
     const HomeStack      = createNativeStackNavigator();
     
     // app sections
     const ApptDrawer     = createDrawerNavigator();
     const MedinfoDrawer  = createDrawerNavigator();
     const PatientDrawer  = createDrawerNavigator();
     const PracticeDrawer = createDrawerNavigator();
    
     // mail
     const MailDrawer     = createDrawerNavigator();

     // user and patient
     const PersonalStack  = createNativeStackNavigator();
     const ContactStack   = createNativeStackNavigator();
     const InsuranceStack = createNativeStackNavigator();
     const ProfileStack   = createNativeStackNavigator();
     const NotesStack     = createNativeStackNavigator();

     // medinfo
     const CarePlanStack  = createNativeStackNavigator();
     const ReferrralStack = createNativeStackNavigator();
     const LabResultStack = createNativeStackNavigator();
     const VitalSignStack = createNativeStackNavigator();
     const ImmunizationStack = createNativeStackNavigator();
    //=============================================================================
    // HomeNavigator - navigator for home
    //=============================================================================
    const HomeNavigator = () => {

      return (
              <HomeStack.Navigator >
                <HomeStack.Screen name={NAV_HOME}                component={HomeScreen}
                  options= {{headerShown: false}} />
                 <HomeStack.Screen name={NAV_MAIL_NAVIGATOR}     component={MailNavigator} 
                  options= {{headerShown: false}} />  
                 <HomeStack.Screen name={NAV_PATIENT_NAVIGATOR}  component={PatientNavigator}
                  options= {{headerShown: false}} />
                 <HomeStack.Screen name={NAV_APPT_NAVIGATOR}     component={AppointmentNavigator}
                  options= {{headerShown: false}}  />
                 <HomeStack.Screen name={NAV_PRACTICE_NAVIGATOR} component={PracticeNavigator} 
                  options= {{headerShown: false}} />
                 <HomeStack.Screen name={NAV_MEDINFO_NAVIGATOR}  component={MedinfoNavigator} 
                 options= {{headerShown: false}} />
                 <HomeStack.Screen name={NAV_MEDINFO_REFILLS}    component={RefillForm}  
                         options= {{...headerOptions}} /> 
                  {/* not the greatest solution  note check out path={}      */}
              
    {/* SPECiALISED ROUTES */}
                            
                 <HomeStack.Screen name={NAV_MAIL_MESSAGE_LINK}   component={MsgForm}  
                     options= {{...headerOptions}} />    
                 <HomeStack.Screen name={NAV_APPT_REQ_LINK}   component={ApptRequestForm}  
                     options= {{...headerOptions}} />    
                 <HomeStack.Screen name={NAV_USER_PASSWORDCHANGE} component={PasswordChange}
                     options= {{headerShown: false}} /> 
                 <HomeStack.Screen name={NAV_USER_PROFILE_LINK} component={PatientProfileNavigator}
                     options= {{...headerOptions}} /> 
                 <HomeStack.Screen name={NAV_USER_TERMSOFUSE} component={TermsofUse}
                     options= {{headerShown: false}} /> 
                 <HomeStack.Screen name={NAV_USER_LOGOUT} component={Logout}
                     options= {{headerShown: false}} 
                     listeners={({ navigation, route }) => { 
                      if (  user.is_authenticated === 'N' && userAuthenticated === true) {
                            setUserAuthenticated(false)
                          }
                      }}/>  


              
                  
 {/*
          
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
                <HomeStack.Screen name={NAV_USER_NOTES_EDIT}           component={NoteEditForm} />
                <HomeStack.Screen name={NAV_PATIENT_PERSONAL}          component={PersonalInfo} />
                <HomeStack.Screen name={NAV_USER_PROFILE}              component={UserProfile} />

                <HomeStack.Screen name={NAV_MAIL_INBOX}                component={MailInbox} />
                <HomeStack.Screen name={NAV_MAIL_OUTBOX}               component={MailOutbox} />
                <HomeStack.Screen name={NAV_MAIL_MSGDISPLAY}           component={MsgDisplay} />
                <HomeStack.Screen name={NAV_MAIL_MESSAGE}              component={MsgForm} />

                <HomeStack.Screen name={NAV_PRACTICE_NEWS}             component={NewsList} />
                <HomeStack.Screen name={NAV_PRACTICE_RESOURCES}        component={ResourceList} />
                <HomeStack.Screen name={NAV_PRACTICE_INFO}             component={PracticeInfo} /> 
              */}
              </HomeStack.Navigator>
              
      )
    }
   
    //=============================================================================
    // Referral Navigator
    //=============================================================================
    const MedinfoReferralNavigator = () => {

      return (
              <ReferrralStack.Navigator InitialRouteName={NAV_MEDINFO_REFERRALS} 
                   screenOptions={{  headerShown: false  }}>
                  <ReferrralStack.Screen name={NAV_MEDINFO_REFERRALS}      component={ReferralList} />
                  <ReferrralStack.Screen name={NAV_MEDINFO_REFERRAL_REQUEST} component={ReferralForm} /> 
              </ReferrralStack.Navigator>
      )
    }
    //=============================================================================
    // Careplan Navigator
    //=============================================================================
    const MedinfoCareplanNavigator = () => {
      
      return (
              <CarePlanStack.Navigator InitialRouteName={NAV_MEDINFO_CAREPLAN} 
                   screenOptions={{  headerShown: false  }}>
                  <CarePlanStack.Screen name={NAV_MEDINFO_CAREPLAN}          component={CareplanList} />
                  <CarePlanStack.Screen name={NAV_MEDINFO_CAREPLAN_PROGRESS} component={CarePlanProgress} 
                      screenOptions={{  headerShown: true  }}
                      options={{...headerEdit}} /> 
              </CarePlanStack.Navigator>
      )
    }
    //=============================================================================
    // MedinfoLabResultNavigator - LabResult Navigator
    //=============================================================================
    const MedinfoLabResultNavigator = () => {
      
      return (
              <LabResultStack.Navigator InitialRouteName={NAV_MEDINFO_LABRESULTS} 
                   screenOptions={{  headerShown: false  }}>
                  <LabResultStack.Screen name={NAV_MEDINFO_LABRESULTS}          component={LabresultList} />
                  <LabResultStack.Screen name={NAV_MEDINFO_LABRESULT_TESTS}     component={LabResultTests} />
                  <LabResultStack.Screen name={NAV_MEDINFO_LABRESULT_GRAPH}     component={LabResultGraph} />
                  <LabResultStack.Screen name={NAV_MEDINFO_LABRESULT_COMPARE}   component={LabResultCompare} />
              </LabResultStack.Navigator>
      )
    }
    //=============================================================================
    // MedinfoLVitalSignNavigator - VitalSign Navigator
    //=============================================================================
    const MedinfoLVitalSignNavigator = () => {
      
      return (
              <VitalSignStack.Navigator InitialRouteName={NAV_MEDINFO_VITALSIGNS} 
                   screenOptions={{  headerShown: false  }}>
                  <VitalSignStack.Screen name={NAV_MEDINFO_VITALSIGNS}         component={VitalSignList} />
                  <VitalSignStack.Screen name={NAV_MEDINFO_VITALSIGN_EDIT}     component={VitalSignEdit} />
                  <VitalSignStack.Screen name={NAV_MEDINFO_VITALSIGN_GRAPH}    component={VitalSignCompare} />
              </VitalSignStack.Navigator>
      )
    }
    //=============================================================================
    // Immunization Navigator
    //=============================================================================
    const MedinfoImmunizationNavigator = () => {
      
      return (
              <ImmunizationStack.Navigator InitialRouteName={NAV_MEDINFO_IMMUNIZATION_LIST} 
                   screenOptions={{  headerShown: false  }}>
                  <ImmunizationStack.Screen name={NAV_MEDINFO_IMMUNIZATION_LIST}   component={ImmunizationList} />
                  <ImmunizationStack.Screen name={NAV_MEDINFO_IMMUNIZATION_DETAIL} component={ImmunizationDetail} 
                    //  screenOptions={{...headerEdit}} /> 
                      //?note: options not screenOptions  options={{...headerEdit}} /> 
                    screenOptions={{  headerShown: true  }}
                    setOptions={{...headerEdit}} /> 
              </ImmunizationStack.Navigator>
      )
    }
    //=============================================================================
    // MedinfoNavigator - navigoator for medinfo
    //=============================================================================
    const MedinfoNavigator = () => {
      
      return (
              <MedinfoDrawer.Navigator  InitialRouteName={NAV_MEDINFO_DASHBOARD}
                  screenOptions={{  ...headerOptions}}
                  drawerContent={(props) => <MedinfoSideDrawerCustom {...props} />}
                  // drawerContent={({navigation}) => MedinfoSideDrawerCustom(navigation)}
              >
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_DASHBOARD}      component={NoticeList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_ALLERGIES}      component={AllergyList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_CAREPLAN_NAVIGATOR} component={MedinfoCareplanNavigator} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_DOCUMENTS}      component={DocumentList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_IMMUNIZATION_NAVIGATOR}  component={MedinfoImmunizationNavigator} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_LABRESULT_NAVIGATOR}  component={MedinfoLabResultNavigator} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_MEDICATIONS}    component={MedicationList} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_REFILLS}        component={RefillForm} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_REFERRALS_NAVIGATOR} component={MedinfoReferralNavigator} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_VITALSIGN_NAVIGATOR} component={MedinfoLVitalSignNavigator} />
                  <MedinfoDrawer.Screen name={NAV_MEDINFO_VISITS}         component={EncounterList} />  
              </MedinfoDrawer.Navigator>
      )
    }
    //=============================================================================
    // PatientContactNavigator Patient contact
    //=============================================================================
    const PatientContactNavigator = () => {

      return (
              <ContactStack.Navigator InitialRouteName={NAV_PATIENT_CONTACTS} 
                    screenOptions={{  headerShown: false  }}>
                  <ContactStack.Screen name={NAV_PATIENT_CONTACTS}      component={ContactList} />
                  <ContactStack.Screen name={NAV_PATIENT_CONTACTS_EDIT} component={ContactEdit} />
              </ContactStack.Navigator>
      )
    }
    //=============================================================================
    // PatientInsuranceNavigator Patient insurance
    //=============================================================================
    const PatientInsuranceNavigator = () => {

      return (
              <InsuranceStack.Navigator InitialRouteName={NAV_PATIENT_INSURANCE} 
                    screenOptions={{  headerShown: false  }}>
                  <InsuranceStack.Screen name={NAV_PATIENT_INSURANCE}      component={InsuranceList} />
                  <InsuranceStack.Screen name={NAV_PATIENT_INSURANCE_EDIT} component={InsuranceEdit} />
              </InsuranceStack.Navigator>
      )
    }
     //=============================================================================
    // PatientpersonalNavigator Patient Personal Info
    //=============================================================================
    const PatientPersonalNavigator = () => {

      return (
              <PersonalStack.Navigator InitialRouteName={NAV_PATIENT_PERSONAL} 
                    screenOptions={{  headerShown: false  }}>
                  <PersonalStack.Screen name={NAV_PATIENT_PERSONAL}      component={PersonalInfo} />
                  <PersonalStack.Screen name={NAV_PATIENT_PERSONAL_EDIT} component={PersonalEdit} />
              </PersonalStack.Navigator>
      )
    }
    //=============================================================================
    // PatientNotesNavigator Patient Notes
    //=============================================================================
    const PatientNotesNavigator = () => {

      return (
              <NotesStack.Navigator InitialRouteName={NAV_USER_NOTES} 
                    screenOptions={{  headerShown: false  }}>
                  <NotesStack.Screen name={NAV_USER_NOTES}      component={NoteList} />
                  <NotesStack.Screen name={NAV_USER_NOTES_EDIT} component={NoteEdit} />
              </NotesStack.Navigator>
      )
    }
    //=============================================================================
    // PatientProfileNavigator Patient Notes
    //=============================================================================
    const PatientProfileNavigator = () => {

      return (
              <ProfileStack.Navigator InitialRouteName={NAV_USER_PROFILE} 
                    screenOptions={{  headerShown: false  }}>
                  <ProfileStack.Screen name={NAV_USER_PROFILE}      component={UserProfile} />
                  <ProfileStack.Screen name={NAV_USER_AUTHENTICATION_EDIT} component={AuthNoEditForm} />
              </ProfileStack.Navigator>
      )
    }
    //=============================================================================
    // PatientNavigator Patient / User - navigator 
    //=============================================================================
    const PatientNavigator = () => {
     
      return (
              <PatientDrawer.Navigator InitialRouteName={NAV_PATIENT_PROVIDERS}
                  screenOptions={{  ...headerOptions}}
                  drawerContent={(props) => <PatientSideDrawerCustom {...props} />} >
                  <PatientDrawer.Screen name={NAV_PATIENT_PROVIDERS}           component={ProviderList} />
                  <PatientDrawer.Screen name={NAV_PATIENT_CONTACT_NAVIGATOR}   component={PatientContactNavigator} />
                  <PatientDrawer.Screen name={NAV_PATIENT_PHARMACY}            component={PharmacyList} />
                  <PatientDrawer.Screen name={NAV_PATIENT_INSURANCE_NAVIGATOR} component={PatientInsuranceNavigator} />
                  <PatientDrawer.Screen name={NAV_USER_NOTES_NAVIGATOR}        component={PatientNotesNavigator} />
                  <PatientDrawer.Screen name={NAV_PATIENT_PERSONAL_NAVIGATOR}  component={PatientPersonalNavigator} />
                  <PatientDrawer.Screen name={NAV_USER_PROFILE_NAVIGATOR}      component={PatientProfileNavigator} /> 
              </PatientDrawer.Navigator>
      )
    }
    /* 
        <PatientDrawer.Screen name={NAV_PATIENT_PROVIDERS}        component={ProviderList} />
                  <PatientDrawer.Screen name={NAV_PATIENT_CONTACTS}         component={ContactList} />
                  <PatientDrawer.Screen name={NAV_PATIENT_CONTACTS_EDIT}    component={ContactEdit} />
                  <PatientDrawer.Screen name={NAV_PATIENT_INSURANCE}        component={InsuranceList} />
                  <PatientDrawer.Screen name={NAV_PATIENT_INSURANCE_EDIT}   component={InsuranceEdit} />
                  <PatientDrawer.Screen name={NAV_USER_NOTES}               component={NoteList} />
                  <PatientDrawer.Screen name={NAV_USER_NOTES_EDIT}          component={NoteEdit} />
                  <PatientDrawer.Screen name={NAV_PATIENT_PERSONAL}         component={PersonalInfo} />
                  <PatientDrawer.Screen name={NAV_PATIENT_PERSONAL_EDIT}    component={PersonalEdit} />
                  <PatientDrawer.Screen name={NAV_USER_PROFILE}             component={UserProfile} /> 
                  <PatientDrawer.Screen name={NAV_USER_AUTHENTICATION_EDIT} component={AuthNoEditForm} />

                  {/* <PatientDrawer.Screen name={NAV_MAIL_MESSAGE_LINK}    component={MsgForm}
    */
    //=============================================================================
    // AppointmentNavigator - navigator for appointments
    //=============================================================================
    const AppointmentNavigator = () => {
      //  options= {{headerShown: false}}>
       return (
               <ApptDrawer.Navigator InitialRouteName={NAV_APPT_CURRENT}
                     screenOptions={{  ...headerOptions}}
                     drawerContent={(props) => <ApptSideDrawerCustom {...props} />} >
                  <ApptDrawer.Screen name={NAV_APPT_CURRENT}  component={ApptCurrentList} />
                  <ApptDrawer.Screen name={NAV_APPT_PAST}     component={ApptPastList} />   
                  <ApptDrawer.Screen name={NAV_APPT_REQ}      component={ApptRequestForm} />   
               </ApptDrawer.Navigator>
       )
    }  
    
    //=============================================================================
    // MailNavigator - Navigator for mail messages
    //=============================================================================
    const MailNavigator = () => {
     
      return (
              <MailDrawer.Navigator  InitialRouteName={NAV_MAIL_INBOX}
                 screenOptions={{  ...headerOptions}}
                 drawerContent={(props) => <MailSideDrawerCustom {...props} />} >
                <MailDrawer.Screen name={NAV_MAIL_INBOX}               component={MailInbox} />
                <MailDrawer.Screen name={NAV_MAIL_OUTBOX}              component={MailOutbox} />
                <MailDrawer.Screen name={NAV_MAIL_MSGDISPLAY}          component={MsgDisplay} />
                <MailDrawer.Screen name={NAV_MAIL_MESSAGE}             component={MsgForm} />  
            </MailDrawer.Navigator>
      )
    }
    //=============================================================================
    // PracticeNavigator  Navigator for practice information
    //=============================================================================
    const PracticeNavigator = () => {
     /* header options is on object application_header */
      return (
              <PracticeDrawer.Navigator InitialRouteName={NAV_PRACTICE_NEWS}
                    options= {{headerShown: false}}
                    screenOptions={{  ...headerOptions,
                 }}>
                  <PracticeDrawer.Screen name={NAV_PRACTICE_NEWS}       component={NewsList} />
                  <PracticeDrawer.Screen name={NAV_PRACTICE_RESOURCES}  component={ResourceList} />
                  <PracticeDrawer.Screen name={NAV_PRACTICE_INFO}       component={PracticeInfo} /> 
              </PracticeDrawer.Navigator>
      )
    }
   //=============================================================================
    // Main  Navigation  (bottom navigation) main Navigation for app
    //=============================================================================
    const MainNavigator = () => {
      /* header options is on object application_header */
    
      return (
        <BottomTab.Navigator InitialRouteName={NAV_PRACTICE_NAVIGATOR}
         screenOptions={{  headerShown: false,
                          tabBarActiveTintColor: colors.bottomnav_active,
                          tabBarInactiveTintColor: colors.bottomnav_inactive,
                          tabBarStyle: [{ backgroundColor: 'rgb(0,140,189)'}],
                      }}
                  
                >
                <BottomTab.Screen name={NAV_HOME_NAVIGATOR} component={HomeNavigator} 
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
                    tabBarIcon: ({ color, size }) => (<Icon  name="heartbeat"  type='fontisto' color={color} size={size-2} />)
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
    // LoginNavigator - navigator for login
    //=============================================================================
    const LoginNavigator = () => {
     
      return (
              <LoginStack.Navigator  
                    screenOptions={{  headerShown: false  }}>
              
                 <LoginStack.Screen name={NAV_USER_LOGIN}    component={LoginScreen}
                  listeners={({ navigation, route }) => { 
                    if (  user.is_authenticated === 'Y') {
                          setUserAuthenticated(true)
                          loggedIn === true
                      }
                    }}/>  
                <LoginStack.Screen name={NAV_USER_REGISTER} component={RegisterForm} />
                <LoginStack.Screen name={NAV_USER_REGISTERCONFIRM} component={RegisterConfirmForm} /> 
                <LoginStack.Screen name={NAV_USER_PASSWORDRESET} component={PasswordReestForm} />
                <LoginStack.Screen name={NAV_USER_PASSWORDRESETCONFIRM} component={PasswordResetConfirmForm} />
              </LoginStack.Navigator>
      )
    }
    
  //=============================================================================

   return (
        userAuthenticated === false ? LoginNavigator() : MainNavigator()         
   )
}
    //=============================================================================
    // END 
    //=============================================================================


