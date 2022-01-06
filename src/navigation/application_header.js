import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider} from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

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
 /*
 import { Appbar, Button } from 'react-native-paper';

   const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

<Appbar.Header>
              <Appbar.BackAction onPress={_goBack} />
              <Appbar.Content title="User" subtitle="Subtitle" />
              <Appbar.Action icon="magnify" onPress={_handleSearch} />
              <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
          </Appbar.Header>

          */