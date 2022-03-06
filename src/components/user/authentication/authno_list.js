import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {ListItem,Button} from 'react-native-elements'
// tools
import { loading,IconButton,ConfirmDialog } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useAuthenticationNumbers} from '../../../store/hooks/useUserData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_USER_AUTHENTICATION_EDIT} from '../../../navigation/route_types' 
//=============================================================================
// Get AuthNoList data
//=============================================================================
const AuthNoList = () => {

    const user = useContext (UserContext)
    const [state,DataAuthNumberGetList,DataAuthNumberDelete] = useAuthenticationNumbers()
    const navigation = useNavigation();
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataAuthNumberGetList(user.portal_user_id)       
    },[])
    //=============================================================================
    // ItemAdd - adds a new item
    //=============================================================================
    const ItemAdd = () =>{
        user.localStorage.authentication_id = 0
        navigation.navigate(NAV_USER_AUTHENTICATION_EDIT)
    }
    //=============================================================================
    // ItemEdit - edits an item
    //=============================================================================
    const ItemEdit = (authentication_id) =>{
        user.localStorage.authentication_id = authentication_id
        navigation.navigate(NAV_USER_AUTHENTICATION_EDIT)
    }
    //=============================================================================
    // ItemDeiete - deletes an item
    //=============================================================================
    const ItemDelete = (confirmed,authentication_id) =>{
        if (confirmed === true) {
            DataAuthNumberDelete(user.portal_user_id,authentication_id)
        }
    }
    //=============================================================================
    const ConfirmDelete = (authentication_id,description) => {
         ConfirmDialog('yesno','Delete Authorization No',`Are you sure you want to delete the authorization No for ${description}?`,
         (confirmed)=>{ItemDelete(confirmed,authentication_id)} )
    }
    //=============================================================================
    // AuthNoListDisplay - displays the list of authentication numbers
    //=============================================================================
    const AuthNoListDisplay = ({authNodata}) => {

        if (!authNodata || !authNodata.recordset || authNodata.recordset.length === 0)
           return (<View  style={appStyles.item}>
                     <Text>No Authentication Numbers</Text>
                   </View>)

        return (
            <View>
            {authNodata.recordset.map(row => (
                 <ListItem.Swipeable style={{height:80}} key={row.authentication_id}
                    rightContent={
                     <View style={{height:'70%',marginTop:18}}>
                         <Button 
                             title="Delete"
                             icon={{ name: 'delete', color: 'white' }}
                             buttonStyle={{minHeight: '100%', backgroundColor: 'red',alignItems:'center' }}
                             onPress={() => ConfirmDelete(row.authentication_id,row.description)}
                         />
                     </View>
                    }
                 >
                 <View key={row.authentication_id} style={appStyles.itemSwipe} >
                     <Text>{row.description}</Text>
                     <Text >{'Phone No: '+row.number}</Text>
                 </View> 
             </ListItem.Swipeable>
           ))}
       </View>
        //     <View>
        //         {authNodata.recordset.map(row => (
        //          <TouchableOpacity key={row.authentication_id} style={appStyles.item}
        //                            onPress={()=>{ItemEdit(row.authentication_id)}}>
        //              <View style={appStyles.listItem_textWithDelete}>                 
        //                     <Text>{row.description}</Text>
        //                     <IconButton type = 'DELETE' onPress={() => ConfirmDelete(row.authentication_id)} />
        //              </View>  
        //             <Text >{'No: '+row.number}</Text>
        //         </TouchableOpacity> 
        //        ))}
        //    </View>
        )
    }
//=============================================================================
    return (
        <ScrollView >
            <View style={appStyles.addButtonWithTitle}>
                <Text style={{fontWeight:'bold'}}> Authentication Numbers</Text>
                <IconButton type = 'ADD' onPress={() => ItemAdd()} />
            </View>
            {state.loading ? loading(true) : loading(false)} 
            <AuthNoListDisplay authNodata={state.data} /> 
        </ScrollView>
    )
}
 
export default AuthNoList;
//=============================================================================