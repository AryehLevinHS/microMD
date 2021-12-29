import * as React from 'react';
import { Text, View } from 'react-native';
// Medinfo
import AllergyList      from '../components/medinfo/allergies/allergy_list';
import CareplanList     from '../components/medinfo/careplan/careplan_list';
import DocumentList     from '../components/medinfo/document/document_list';
import EncounterList    from '../components/medinfo/encounter/encounter_list';
import FormList         from '../components/medinfo/forms/form_list';
import ImmunizationList from '../components/medinfo/immunization/immunization_list';
import LabresultList    from '../components/medinfo/labresult/labresult_list';
import NoticeList       from '../components/medinfo/notices/notice_list';
import VitalSignList    from '../components/medinfo/vitalsigns/vitalsign_list';


//import {createStackNavigator} from '@react-navigation/native-stack'
//import {createDrawerNavigator} from '@react-navigation/drawer'

//import HomeScreen from "../components/home/homeScreen"
//import LoginScreen from "../components/login/loginScreen"
//import DashboardScreen from "../components/medinfo/dashboard/dashboardScreen"

 //import { View,Text } from "react-native"

// const [isAuth,SetIsAuth] = useState(false)
//const Stack = createStackNavigator()
//const Drawer  = createDrawerNavigator()

// const MainDrawer = () => {
//     <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen}/>
//         <Drawer.Screen name="Dashboard" component={DashboardScreen}/>
//     </Drawer.Navigator>
// }


//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home sweet home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const LoginNavigation =() => {
  // const LoginStack = createStackNavigator();

  // <LoginStack.Navigator InitialRouteName="Login">
  //          <LoginStack.Screen name="Login" component={LoginScreen} />
  //          <LoginStack.Screen name="Register" component={RegisterScreen} />
  //          <LoginStack.Screen name="ResetPW" component={ResetPWScreen} />
  //  </LoginStack.Navigator>
}
 

 export function Routes() {
   return (
    //<AllergyList/>
    //<CareplanList/>
    //<DocumentList/>
    //<EncounterList/>
    //<ImmunizationList/>
    //<LabresultList/>
    //<VitalSignList/>
    <FormList/>
   )
//   return (
//       <Tab.Navigator InitialRouteName="Home">
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//   );
 }

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


