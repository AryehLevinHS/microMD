import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useUserProfile} from '../../../store/hooks/useUserData'
import AuthNoList from '../authentication/authno_list'
import ProxyList  from '../proxy/proxy_list'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get ProfileScreen data
//=============================================================================
const ProfileScreen = () => {

    const user = useContext (UserContext)
    const [state,DataUserProfileGet] = useUserProfile()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataUserProfileGet(user.portal_user_id)
    },[])
    //=============================================================================
    // ProfileDisplay - displays the profile data
    //=============================================================================
    const ProfileDisplay = ({profiledata}) => {

        if (!profiledata || !profiledata.recordset || profiledata.recordset.length === 0)
           return (<View>
                   </View>)

        return (
            <View>
                {profiledata.recordset.map(row => (
                 <TouchableOpacity key={row.patient_id} style={appStyles.item}>
                    <Text>{'First Name: '+row.first_name}</Text>
                    <Text>{'Last Name: '+row.last_name}</Text>
                    <Text>{'Login Name: '+row.login_name}</Text>
                    <Text>{'User Type: '+row.user_type_display}</Text>
                    <Text>{'Is Active: '+row.is_active_display}</Text>
                    <Text>{'Default Clinic: '+row.clinic_name}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
             <Text style={{padding:10,fontWeight:'bold'}}> Profile Details</Text> 
            {state.loading ? loading(true) : loading(false)} 
            <ProfileDisplay profiledata={state.data} /> 
            <AuthNoList />
            <ProxyList />
        </ScrollView>
    )
}
 
export default ProfileScreen;
//=============================================================================