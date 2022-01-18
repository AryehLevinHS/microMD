import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useUserProxyList} from '../../../store/hooks/useUserData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get ProxyScreen data
//=============================================================================
const ProxyScreen = () => {
    const user = useContext (UserContext)
    const [state,DataProxyUserGetList,DataProxyPatientDelete] = useUserProxyList()

    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataProxyUserGetList(user.portal_user_id)
    },[])
    //=============================================================================
    // ProxyListDisplay - displays the proxy data
    //=============================================================================
    const ProxyListDisplay = ({proxydata}) => {

        if (!proxydata || !proxydata.recordset || proxydata.recordset.length === 0) {
           return (<View  style={appStyles.item}>
                       <Text>No Listed Proxies</Text>
                  </View>)
        }  
        return (
            <View>
                {proxydata.recordset.map(row => (
                 <TouchableOpacity key={row.portal_proxy_id} style={appStyles.item}>
                    <Text>{'Name: '+row.patient_name}</Text>
                    <Text>{'Relationship: '+row.relationship_display}</Text>
                    <Text>{'Expiry: '+row.expiry_display}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <Text style={{padding:10,fontWeight:'bold'}}> User Proxy</Text>
            <Text style={{paddingLeft:10}}>{user.portal_user_name} has access to the following Patient Portals: </Text>
            {state.loading ? loading(true) : loading(false)} 
            <ProxyListDisplay proxydata={state.data} /> 
        </ScrollView>
    )
}
 
export default ProxyScreen;
//=============================================================================