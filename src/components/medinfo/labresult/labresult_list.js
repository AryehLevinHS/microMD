import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useLabResultList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get LabresultList data
//=============================================================================
const LabresultList = () => {

    const user = useContext (UserContext)
    const [state,DataLabresultListGet] = useLabResultList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataLabresultListGet(user.patient_id)
    },[])
    //=============================================================================
    // LabresultDisplay - displays the list of labresults
    //=============================================================================
    const LabresultDisplay = ({labresultdata}) => {

        if (!labresultdata || !labresultdata.recordset || labresultdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {labresultdata.recordset.map((row) => (
                <TouchableOpacity key={row.labresultcat_id} style={appStyles.item}>
                    <Text >{row.tests_ordred}</Text>
                    <Text >{'Date: '+row.date_reported_display}{'  By:'+row.ordered_by}</Text>
                    <Text >{'Status: '+row.status_description}</Text> 
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <Text> Laboratory Results</Text>
            {state.loading ? loading(true) : loading(false)} 
            <LabresultDisplay labresultdata={state.data} /> 
        </ScrollView>
    )
}
 
export default LabresultList;
//=============================================================================