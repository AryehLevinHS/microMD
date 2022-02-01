import React , {useContext} from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider} from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//data
import { UserContext } from '../store/UserContext'
// style
import colors from '../resources/themes/colors'
// navigation
import {NAV_USER_PASSWORDCHANGE,NAV_USER_PROFILE_NAVIGATOR,NAV_HOME,NAV_USER_LOGIN,
       NAV_USER_PROFILE_LINK,NAV_USER_TERMSOFUSE} from '../navigation/route_types'
 //=============================================================================
 // SettingsIcon  - the settings icon and menu
 //=============================================================================
const SettingsIcon = () => {
    const navigation = useNavigation()
    const user = useContext (UserContext)
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    //=============================================================================
    // passwordChange - change password screen
    //=============================================================================
    const passwordChange = () =>{
      closeMenu()
      navigation.navigate(NAV_USER_PASSWORDCHANGE) 
    }
    //=============================================================================
    // termsOfUse - opens terms of use screen
    //=============================================================================
    const termsOfUse = () =>{
      closeMenu()
      navigation.navigate(NAV_USER_TERMSOFUSE) 
    }
    //=============================================================================
    // myProfile - goes to my profile screen
    //=============================================================================
    const myProfile = () =>{
      closeMenu()
      navigation.navigate(NAV_USER_PROFILE_LINK) 
    }
    //=============================================================================
      // passwordChange - change password screen
    //=============================================================================  
    const logout = () => {
      closeMenu()
      user.is_authenticated = 'N'
     // navigation.setParams({login:'true'})
      navigation.navigate(NAV_HOME) 
      //user.UserLogout(user)
    }
   //=============================================================================
   
     return(
         <View style={{margin:10}}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={  <Icon  name="settings"
                               type= "Feather" //"antdesign"
                               color= 'white'
                               onPress={openMenu} />
              }
               >
              <Menu.Item icon="key"      onPress={() => {passwordChange()}} title="Change Password" />
              <Menu.Item icon="account"  onPress={() => {myProfile()}} title="My Profile" />
              <Menu.Item icon="compass"  onPress={() => {termsOfUse()}} title="Terms of Use" />
              <Menu.Item icon="logout"   onPress={() => {logout()}} title="Logout" /> 
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
    headerTintColor: colors.header_title,
    headerStyle:{
        backgroundColor: colors.header_background,
        borderBottomWidth:5,
        borderBottomColor: colors.header_border,
        height: Platform.OS === 'ios' ? 110 : 60
    },
    headerRight: (props)=> <SettingsIcon/>,

      // headerTitle:()=> 'Fred'
    // headerTitle: () =>
    //        <View>
    //              <Text>Title</Text>
    //              <Text>subtitle</Text>
    //          </View>,
    // headerLeft:()=> (<TouchableOpacity  onPress={()=>{navigation.toggleDrawer()} or navigation.openDrawer() }>
    //                   <Text>NAV</Text> 
    //                 </TouchableOpacity>)
}  
//=============================================================================
 // headerEdit  - the application header for edit windows
 //=============================================================================
 export const headerEdit = {
   
  headerTitleAlign:'center',
  headerTintColor:  colors.header_title,
  headerStyle:{
      backgroundColor:  colors.header_background,
      borderBottomWidth:5,
      borderBottomColor:colors.header_border,
      height: Platform.OS === 'ios' ? 110 : 60
  },
  headerRight: (props)=> <SettingsIcon/>,

    // headerTitle:()=> 'Fred'
      //  headerTitle: () =>
      //      <View>
      //          <Text>Title</Text>
      //          <Text>subtitle</Text>
      //      </View>,
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