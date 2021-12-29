import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useEncounterList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get EncounterList data
//=============================================================================
const EncounterList = () => {

    const user = useContext (UserContext)
    const [state,DataEncounterGetList] = useEncounterList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataEncounterGetList(user.patient_id)
    },[])
    //=============================================================================
    // EncounterDisplay - displays the list of encounters
    //=============================================================================
    const EncounterDisplay = ({encounterdata}) => {

        if (!encounterdata || !encounterdata.recordset || encounterdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {encounterdata.recordset.map((row,index) => (
                <TouchableOpacity key={index} style={appStyles.item}>
                    <Text >{'Visit to: '+row.provider_name}</Text>
                    <Text >{'On: '+row.encounter_time_display}</Text>
                    <Text >{'At: '+row.clinic_name}</Text>
                    {row.chief_complaint ? <Text >{row.chief_complaint}</Text> : null}
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <EncounterDisplay encounterdata={state.data} /> 
        </ScrollView>
    )
}
 
export default EncounterList;
//=============================================================================