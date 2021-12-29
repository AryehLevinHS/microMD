import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useAuthenticationNumbers} from '../../../store/hooks/useUserData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get AuthNoList data
//=============================================================================
const AuthNoList = () => {

    const user = useContext (UserContext)
    const [state,DataAuthNumberGetList,DataAuthNumberDelete] = useAuthenticationNumbers()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataAuthNumberGetList(user.portal_user_id)       
    },[])
    //=============================================================================
    // AuthNoListDisplay - displays the list of authentication numbers
    //=============================================================================
    const AuthNoListDisplay = ({authNodata}) => {

        if (!authNodata || !authNodata.recordset || authNodata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {authNodata.recordset.map(row => (
                 <TouchableOpacity key={row.authentication_id} style={appStyles.item}>
                    <Text>{row.description}</Text>
                    <Text >{'No: '+row.number}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <Text> Authentication Numbers</Text>
            {state.loading ? loading(true) : loading(false)} 
            <AuthNoListDisplay authNodata={state.data} /> 
        </ScrollView>
    )
}
 
export default AuthNoList;
//=============================================================================