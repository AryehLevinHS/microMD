import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper';
// tools
import { loading,messageDisplay } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useLabResultGraph} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get LabResultCompare data
//=============================================================================
const LabResultCompare = () => {

    const user = useContext (UserContext)
    const [state,DataLabResultGraphGet] = useLabResultGraph()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        let labresult_id = user.localStorage.labresult_id
        DataLabResultGraphGet(user.patient_id,labresult_id)
    },[])
    //=============================================================================
    // LabcompareDisplay - displays a comparison of the test results
    //=============================================================================
    const LabcompareDisplay = ({labtestdata}) => {
        if (!labtestdata || !labtestdata.recordset || labtestdata.recordset.length === 0)
           return (<View>
                   </View>)
     
        return (
            <View>
                <Text style={appStyles.h3} >{labtestdata.recordset[0].cat_test_name}</Text>
                    <DataTable style={appStyles.table_frame}>
                        <DataTable.Header style={{backgroundColor:'lightblue'}}>
                            <DataTable.Title>Date</DataTable.Title>
                            <DataTable.Title>Result</DataTable.Title>
                            <DataTable.Title>Flag</DataTable.Title>
                        </DataTable.Header>
                        {labtestdata.recordset.map((row) => (
                            <DataTable.Row key={row.labresult_id}>
                                <DataTable.Cell>{row.date_reported_display}</DataTable.Cell>
                                <DataTable.Cell>{row.result_value}</DataTable.Cell>
                                <DataTable.Cell>{row.abnormal_flag_display}</DataTable.Cell>
                            </DataTable.Row>
                         ))}     
                    </DataTable>   
                {/* {labtestdata.recordset.map((row) => (
                <TouchableOpacity key={row.labresult_id} style={appStyles.item}>
                    <Text >{row.date_reported_display}</Text>
                    <Text >{'Result: '+row.result_value}</Text>
                    <Text >{'Flag: '+row.abnormal_flag_display}</Text> 
                </TouchableOpacity> 
               ))} */}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <Text> Laboratory Result Compare Values</Text>
            {state.loading ? loading(true) : loading(false)} 
            {state.error ? messageDisplay('error',state.error) : <View></View> }  
            <LabcompareDisplay labtestdata={state.data} /> 
        </ScrollView>
    )
}
 
export default LabResultCompare;
//=============================================================================