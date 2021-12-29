import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import { DrawerActions } from "react-navigation";
import {NAV_MAIL_INBOX,NAV_MEDINFO_DASHBOARD,NAV_PRACTICE_NEWS,NAV_PATIENT_PROVIDERS,
    NAV_APPT_CURRENT,NAV_MEDINFO_REFILLS} from './route_types'
import { View } from 'react-native';

export const DrawerNavigation = () => {
    const navigation = useNavigation();
    const [active, setActive] = React.useState('');
  
    const SetRoute = (key) => {
        setActive(key)
        //DrawerActions.toggleDrawer()
        switch (key) {
            case 'mail': navigation.navigate(NAV_MAIL_INBOX);
            break;
            case 'profile': navigation.navigate(NAV_PATIENT_PROVIDERS);
            break;
            case 'rxreq': navigation.navigate(NAV_MEDINFO_REFILLS);
            break;
            case 'medinfo': navigation.navigate(NAV_MEDINFO_DASHBOARD);
            break;
            case 'appointment': navigation.navigate(NAV_APPT_CURRENT);
            break;
            case 'practice': navigation.navigate(NAV_PRACTICE_NEWS);
            break;
            
            default : 
        }
    }

  
    return (
      <Drawer.Section title="Medinfo Items">
        <Drawer.Item
          label="Allergies"
          icon="star"
          active={active === 'first'}
          onPress={() => SetRoute('first')}
        />
        <Drawer.Item
          label="Medications"
          active={active === 'second'}
          onPress={() => SetRoute('mail')}
        />
      </Drawer.Section>
    );
  };

const SideDrawerCustom = (props) => {


  return (
    <View>
      <Text>Medinfo Button</Text>
    </View>
  )

}