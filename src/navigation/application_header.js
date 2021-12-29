import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider} from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

 //=============================================================================
 // SettingsIcon  - the settings icon and menu
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
                color= 'white'
                onPress={openMenu} />
              }
               >
              <Menu.Item icon="logout" onPress={() => {}} title="Logout" />
              <Menu.Item icon="account"  onPress={() => {}} title="Profile" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Bart Smith" />
            </Menu>
            
         </View>
     )
 }
 //=============================================================================
 // headerOptions  - the application header
 //=============================================================================
  export const headerOptions = {
      
    headerTitleAlign:'center',
    headerTintColor: 'white',
    headerStyle:{
        backgroundColor: 'rgb(0,140,189)',
        borderBottomWidth:5,
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
    // headerLeft:()=> (<TouchableOpacity  onPress={()=>{navigation.toggleDrawer()}  }>
    //                   <Text>NAV</Text> 
    //                 </TouchableOpacity>)
}  
//=============================================================================
 // headerEdit  - the application header for edit windows
 //=============================================================================
 export const headerEdit = {
      
  headerTitleAlign:'center',
  headerTintColor: 'white',
  headerStyle:{
      backgroundColor: 'rgb(0,140,189)',
      borderBottomWidth:5,
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
  headerLeft:()=> (<View>
                    <Icon
                        name="arrow-left"
                        type= "Feather" 
                        color= 'white'
                        onPress={()=>{navigation.goBack()}} />
                     </View>)
}  
 //=============================================================================
