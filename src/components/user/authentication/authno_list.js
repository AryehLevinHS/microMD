import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
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
    const ConfirmDelete = (authentication_id) => {
        ConfirmDialog('yesno','Delete Authorization No','Are you sure you want to delete the authorization No?',
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
                 <TouchableOpacity key={row.authentication_id} style={appStyles.item}
                                   onPress={()=>{ItemEdit(row.authentication_id)}}>
                     <View style={appStyles.listItem_textWithDelete}>                 
                            <Text>{row.description}</Text>
                            <Icon 
                                name='closecircleo'
                                type='antdesign'
                                color='red'
                                onPress={() => ConfirmDelete(row.authentication_id)}
                            />
                     </View>  
                    <Text >{'No: '+row.number}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView >
            <View style={appStyles.addButtonWithTitle}>
                <Text style={{fontWeight:'bold'}}> Authentication Numbers</Text>
                <Icon 
                    name='pluscircleo'
                    type='antdesign'
                    color='#517fa4'
                    onPress={() => ItemAdd()}
                />
            </View>
            {state.loading ? loading(true) : loading(false)} 
            <AuthNoListDisplay authNodata={state.data} /> 
        </ScrollView>
    )
}
 
export default AuthNoList;
//=============================================================================