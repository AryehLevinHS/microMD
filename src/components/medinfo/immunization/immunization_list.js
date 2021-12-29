import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useImmunizationList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get ImmunizationList data
//=============================================================================
const ImmunizationList = () => {

    const user = useContext (UserContext)
    const [state,stateDetail,DataImmunizationlistGet] = useImmunizationList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataImmunizationlistGet(user.patient_id)
    },[])
    //=============================================================================
    // ImmunizationDisplay - displays the list of immunizations
    //=============================================================================
    const ImmunizationDisplay = ({immunizationdata}) => {

        if (!immunizationdata || !immunizationdata.recordset || immunizationdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {immunizationdata.recordset.map((row) => (
                <TouchableOpacity key={row.immunization_id} style={appStyles.item}>
                    <Text style={appStyles.bold}>{row.vaccine_name}</Text>
                    <Text >{'Scheduled: '+row.scheduled}{'  Given:'+row.given}</Text>
                    <Text >{'Last Given: '+row.last_given_display} {'  Next Scheduled:'+row.next_sched_display}</Text> 
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <ImmunizationDisplay immunizationdata={state.data} /> 
        </ScrollView>
    )
}
 
export default ImmunizationList;
//=============================================================================