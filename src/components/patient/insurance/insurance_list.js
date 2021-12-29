import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useInsuranceList} from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get InsuranceList data
//=============================================================================
const InsuranceList = () => {

    const user = useContext (UserContext)
    const [state,DataInsuranceGetList,DataInsurancetDelete] = useInsuranceList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataInsuranceGetList(user.patient_id)
    },[])
    //=============================================================================
    // InsuranceListDisplay - displays the insurance list
    //=============================================================================
    const InsuranceListDisplay = ({insurancedata}) => {

        if (!insurancedata || !insurancedata.recordset || insurancedata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {insurancedata.recordset.map(row => (
                 <TouchableOpacity key={row.insurance_id} style={appStyles.item}>
                    <Text >{'Plan: '+row.plan_name}{' Policy No: '+row.policy_number}</Text>
                    <Text >{'From: '+row.begin_date_display +' To: '+row.end_date_display}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <InsuranceListDisplay insurancedata={state.data} /> 
        </ScrollView>
    )
}
 
export default InsuranceList;
//=============================================================================