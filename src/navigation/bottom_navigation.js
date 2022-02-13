import { BottomNavigation } from 'react-native-paper';
import { Text,View,Button } from 'react-native';
import React from 'react';
import {NAV_MAIL_INBOX,NAV_MEDINFO_DASHBOARD,NAV_PRACTICE_NEWS,NAV_PATIENT_PROVIDERS,
  NAV_APPT_CURRENT,} from './route_types'
  import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreenTest = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home sweet home!</Text>
      <Button
       title="Go to settings"
     //  onPress={() => navigation.navigate('Settings')}
      onPress={() => navigation.navigate({NAV_MEDINFO_CAREPLAN})}
     
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

export const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [lastIndex,setLastIndex] = React.useState(0);
  const BottomTab = createBottomTabNavigator();
  const navigation = useNavigation();

  const SetRoute = (key) => {

    //if (lastIndex=== key)
    //  return 
    //setActive(key)
    
    switch (key) {
        case 'mail': navigation.navigate(NAV_MAIL_INBOX);
        break;
        case 'profile': navigation.navigate(NAV_PATIENT_PROVIDERS);
        break;
        case 'rxreq': navigation.navigate(NAV_MAIL_INBOX);
        break;
        case 'medinfo': navigation.navigate(NAV_MEDINFO_DASHBOARD);
        break;
        case 'appointment': navigation.navigate(NAV_APPT_CURRENT);
        break;
        case 'practice': navigation.navigate(NAV_PRACTICE_NEWS);
        break;
        
        default : 
    }
    return (<Text>hello</Text>)
}


    const [routes] = React.useState([
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'mail', title: 'Mail', icon: 'mail' },
      { key: 'medical', title: 'Medical', icon: 'history' },
      { key: 'profile', title: 'My Profile', icon: 'account' },
      { key: 'practice', title: 'Practice', icon: 'school' },
  
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      home: ()=>SetRoute('home'),
      mail: ()=>SetRoute('mail'),
      medical: ()=>SetRoute('medical'),
      profile: ()=>SetRoute('profile'),
      practice: ()=>SetRoute('practice'),
    });
  
    
     return (
               <BottomNavigation style={{}}
               navigationState={{ index, routes }}
               onIndexChange={setIndex}
               renderScene={renderScene}
               />
           );
//     return (
//     <BottomTab.Navigator InitialRouteName="Home">
//     <BottomTab.Screen name="Home" component={HomeScreenTest} />
//     <BottomTab.Screen name="Settings" component={SettingsScreen} 
//       options={{
//     tabBarLabel: 'Settings',
//     tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" color={color} size={size} />)
//       }}
//    />
// </BottomTab.Navigator> 
//     )
  };