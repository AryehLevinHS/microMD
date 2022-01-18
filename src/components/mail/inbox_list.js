import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../utils/misc_tools'
// data
import { UserContext } from '../../store/UserContext'
import {useMailInbox} from '../../store/hooks/useMailData'
// styles
import {appStyles} from '../../resources/styles/main_styles'
// navigation
import {NAV_MAIL_MSGDISPLAY} from '../../navigation/route_types'
//=============================================================================
// Get MailInbox (past appointments) data
//=============================================================================
const MailInbox = () => {

    const user = useContext (UserContext)
    const [state,DataMailGetInbox,DataMailGetInboxFiltered] = useMailInbox()
    const navigation = useNavigation();
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataMailGetInbox(user.portal_user_id,user.patient_id)
    },[])
    //=============================================================================
    // OpenMail - opens mail item
    //=============================================================================
    const OpenMail = (msg_id) =>{
        user.localStorage.msg_id = msg_id
        navigation.navigate(NAV_MAIL_MSGDISPLAY)
    }
    //=============================================================================
    // InboxDisplay - displays the inbox
    //=============================================================================
    const InboxDisplay = ({maildata}) => {

        if (!maildata || !maildata.recordset || maildata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {maildata.recordset.map((row) => (
                <TouchableOpacity key={row.msg_id} style={appStyles.item}
                                  onPress={()=>{OpenMail(row.msg_id)}}>
                    <Text >{'Subject: '+row.subject}</Text> 
                    <Text >{'Time: '+row.time_sent_display}{'  From: '+row.sender_name}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {/* <Text>Inbox</Text> */}
            {state.loading ? loading(true) : loading(false)} 
            <InboxDisplay maildata={state.data} /> 
        </ScrollView>
    )
}
 
export default MailInbox;
//=============================================================================