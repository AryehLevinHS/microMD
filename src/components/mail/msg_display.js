import React,{useEffect,useContext, useState} from 'react';
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
// tools
import { loading, IconButton} from '../utils/misc_tools';

// data 
import { UserContext }       from '../../store/UserContext';
import {useMailDisplayChain} from '../../store/hooks/useMailData'

// styles
import {appStyles} from '../../resources/styles/main_styles'
// navigation
import {NAV_MAIL_OUTBOX} from '../../navigation/route_types'

//=============================================================================
// MsgDisplay (displays the message)
//=============================================================================
const  MsgDisplay = () => {
    const user = useContext (UserContext)
    const [state,stateAttach,DataMailGetMsgChainById] = useMailDisplayChain()
    const [msgCalledfrom,setMsgCalledFrom] = useState('INBOX')
    const navigation = useNavigation();
    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        // code a bit diffent as uses same stack (could change to seperate stack?)
      
        if (msgCalledfrom === 'OUTBOX') {
            navigation.navigate(NAV_MAIL_OUTBOX) 
        } else {
            navigation.goBack()
        }
    }    
    //=============================================================================
    // useEffect - retrieve the data and setup the form
    //=============================================================================
    // useEffect(()=>{
      
    //     } 
    // },[])
    useFocusEffect(()=> {
        let msg_id = user.localStorage.msg_id
        setMsgCalledFrom(user.localStorage.msg_calledfrom)
        if (msg_id > 0) {  
            DataMailGetMsgChainById(msg_id)   
            user.localStorage.msg_id = 0
            user.msg_calledfrom = ''
        }
    })
    //=============================================================================
    // MsgDisplay - displays the message chain
    //=============================================================================
    const MsgDisplay = ({msgdata}) => {

        if (!msgdata || !msgdata.recordset || msgdata.recordset.length === 0)
           return (<View>
                   </View>)

        return (
            <View>
                {msgdata.recordset.map((row) => (
                <View key={row.msg_id}
                    style={row.sender_type ==='patient'? appStyles.mail_patient:appStyles.mail_practice }>
                    <Text style={appStyles.bold} >{'Subject: '+row.subject}</Text> 
                    <Text >{'Time: '+row.time_sent_display}{'  From: '+row.sender_name}</Text>
                    <Text >{row.message}</Text> 
                </View> 
               ))}
           </View>
        )
    }
  //=============================================================================    
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.h3}> Mail Message</Text>
            </View>
            <MsgDisplay msgdata={state.data} /> 
        </ScrollView>
    
    )
}

export default MsgDisplay;   
//=============================================================================