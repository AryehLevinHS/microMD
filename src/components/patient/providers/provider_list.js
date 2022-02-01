import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity, Button } from 'react-native'
import {List}from 'react-native-paper';
import { Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useProviderList} from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MAIL_MESSAGE,NAV_APPT_REQ,NAV_APPT_NEW,NAV_APPT_NAVIGATOR,NAV_MAIL_MESSAGE_LINK} from '../../../navigation/route_types' 
//=============================================================================
// Get ProviderList data
//=============================================================================
const ProviderList = () => {

    const user = useContext (UserContext)
    const [state,stateWorkplace,DataProviderGetList] = useProviderList()
    const navigation = useNavigation();
    //=============================================================================
    // sendMessage - opens the send message screen
    //=============================================================================
    const sendMessage = (provider_id) => {
        navigation.navigate(NAV_MAIL_MESSAGE_LINK)
    }
    //=============================================================================
    // requestAppt - opens the request appt screen
    //=============================================================================
    const requestAppt = (provider_id) => {
        navigation.navigate(NAV_APPT_REQ)
    }
    //=============================================================================
    // createAppt - opens the create appt screen
    //=============================================================================
    const createAppt = (provider_id) => {
        navigation.navigate(NAV_APPT_NEW)
    }
    
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataProviderGetList(user.patient_id)
    },[])
    //=============================================================================
    // WorkplaceDisplay - displays the workplace
    //=============================================================================
    const WorkplaceDisplay = ({providerRow,workplace}) => {
        const [expanded, setExpanded] = React.useState(false);
        const handlePress = () => setExpanded(!expanded);
        return (<View style={{ justifyContent:'flex-start'}}> 
                <List.Accordion 
                        title={providerRow.provider_name}
                        // left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded}
                        onPress={handlePress}>
                        {workplace.recordset
                        .filter(workrow => workrow.provider_id === providerRow.provider_id)
                        .map(workrow => (
                            <List.Item  key={workrow.dept_id}
                                        title = {workrow.department_name +' '+ workrow.phone} 
                                        style={{height:25}}/>
                        ))} 
                 </List.Accordion>
                 </View>
        )
    }
    //=============================================================================
    // ProviderListDisplay - displays the providers
    //=============================================================================
    const ProviderListDisplay = ({providerdata,workplace}) => {
   
        if (!providerdata || !providerdata.recordset || providerdata.recordset.length === 0 ||
            !workplace || !workplace.recordset || workplace.recordset.length === 0)
           return (<View></View>)
 
        return (
            <View>
                {providerdata.recordset.map(row => (
                 <TouchableOpacity key={row.provider_id} style={appStyles.item}>
                     <WorkplaceDisplay providerRow ={row} workplace={workplace} />
                     <Text>  </Text>
                     <View style={{ flexDirection: 'row',justifyContent:'space-around'}} >
                         <View style={appStyles.providerButtonContainer}>
                            <Icon name='mail' type='antdesign' color='white' onPress={() => sendMessage(row.provider_id)} />
                         </View>
                         <View style={appStyles.providerButtonContainer}>
                             <Icon name='calendar' type='antdesign' color='white' onPress={() => requestAppt(row.provider_id)} />
                               </View>
                        {/* <Button style={{margin:20}} title='Send Message' onPress={()=>{sendMessage(row.provider_id)}}/> 
                        <Text>  </Text>
                        <Button title='Request Appt' onPress={()=>{requestAppt(row.provider_id)}}/> 
                        */}
                    </View>
                   </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <ProviderListDisplay providerdata={state.data} workplace={stateWorkplace.data} /> 
        </ScrollView>
    )
}
 
export default ProviderList;
//=============================================================================