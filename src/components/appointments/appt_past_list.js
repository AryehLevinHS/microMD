import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView} from 'react-native'
// tools
import { loading } from '../utils/misc_tools'
// data
import { UserContext } from '../../store/UserContext'
import {useApptPastList} from '../../store/hooks/useApptData'
// styles
import {appStyles} from '../../resources/styles/main_styles'
//=============================================================================
// Get ApptPastList (past appointments) data
//=============================================================================
const ApptPastList = () => {

    const user = useContext (UserContext)
    const [state,DataApptGetPast] = useApptPastList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataApptGetPast(user.patient_id)
    },[])
    //=============================================================================
    // ApptPastDisplay - displays the list of past appointments
    //=============================================================================
    const ApptPastDisplay = ({apptdata}) => {

        if (!apptdata || !apptdata.recordset || apptdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {apptdata.recordset.map((row) => (
                <View key={row.appointment_id} style={appStyles.item}>
                    <Text >{'Date: '+row.on_date_display}{'  For: '+row.appt_with}</Text>
                    <Text >{'Location: '+row.location}</Text> 
                </View> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <ApptPastDisplay apptdata={state.data} /> 
        </ScrollView>
    )
}
 
export default ApptPastList;
//=============================================================================