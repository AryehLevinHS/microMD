import React,{useEffect,useContext, useState} from 'react';
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading,MessageDisplay } from '../utils/misc_tools';

// data 
import { UserContext }       from '../../store/UserContext';
import {useMailDisplayChain} from '../../store/hooks/useMailData'

// styles
import {appStyles} from '../../resources/styles/main_styles'
//=============================================================================
// MsgDisplay (displays the message)
//=============================================================================
const  MsgDisplay = () => {
    const user = useContext (UserContext)
    const [state,stateAttach,DataMailGetMsgChainById] = useMailDisplayChain()
   

    //=============================================================================
    // useEffect - retrieve the data and setup the form
    //=============================================================================
    useEffect(()=>{
        let msg_id = user.localStorage.msg_id
        if (msg_id > 0) {  
            DataMailGetMsgChainById(msg_id)   
        } 
    },[])
    //=============================================================================
    // MsgDisplay - displays the message chain
    //=============================================================================
    const MsgDisplay = ({msgdata}) => {

        if (!msgdata || !msgdata.recordset || msgdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {msgdata.recordset.map((row) => (
                <TouchableOpacity key={row.msg_id} style={row.sendertype ==='PAT'? appStyles.item:appStyles.item }>
                    <Text style={appStyles.bold} >{'Subject: '+row.subject}</Text> 
                    <Text >{'Time: '+row.time_sent_display}{'  From: '+row.sender_name}</Text>
                    <Text >{row.message}</Text> 
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
  //=============================================================================    
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <MsgDisplay msgdata={state.data} /> 
        </ScrollView>
    
    )
}

export default MsgDisplay;   
//=============================================================================