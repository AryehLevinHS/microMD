import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity, Button } from 'react-native'
import {List,Divider }from 'react-native-paper';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useProviderList} from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get ProviderList data
//=============================================================================
const ProviderList = () => {

    const user = useContext (UserContext)
    const [state,stateWorkplace,DataProviderGetList] = useProviderList()
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
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded}
                        onPress={handlePress}>
                        {workplace.recordset
                        .filter(workrow => workrow.provider_id === providerRow.provider_id)
                        .map(workrow => (
                            <List.Item  key={workrow.dept_id}
                                        title = {workrow.department_name +' '+ workrow.phone} />
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
                     <View style={{ flexDirection: 'row',justifyContent:'flex-end'}} >
                        <Button style={{margin:20}} title='Send Message'/>
                        <Text>  </Text>
                        <Button title='Request Appt'/>
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