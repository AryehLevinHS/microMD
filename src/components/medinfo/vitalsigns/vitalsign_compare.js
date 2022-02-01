import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// tools
import { loading,AppMessage,IconButton} from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useVitalsignGraph} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get VitalsignCompare data
//=============================================================================
const VitalsignCompare = () => {

    const user = useContext (UserContext)
    const [state,DataVitalsignsGetForGraph] = useVitalsignGraph()
    const navigation = useNavigation();
    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        navigation.goBack()
    }    
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataVitalsignsGetForGraph(user.patient_id)
    },[])
    //=============================================================================
    // VitalsignCompareDisplay - displays a comparison of the test results
    //=============================================================================
    const VitalsignCompareDisplay = ({vitalsigndata}) => {
        if (!vitalsigndata || !vitalsigndata.recordset || vitalsigndata.recordset.length === 0)
           return (<View>
                   </View>)
     
        return (
            <View>
                <Text style={appStyles.h3} >{vitalsigndata.recordset[0].cat_test_name}</Text>
                    <DataTable style={appStyles.table_frame}>
                        <DataTable.Header style={{backgroundColor:'lightblue'}}>
                            <DataTable.Title>Date</DataTable.Title>
                            <DataTable.Title>Result</DataTable.Title>
                            <DataTable.Title>Flag</DataTable.Title>
                        </DataTable.Header>
                        {vitalsigndata.recordset.map((row) => (
                            <DataTable.Row key={row.labresult_id}>
                                <DataTable.Cell>{row.date_reported_display}</DataTable.Cell>
                                <DataTable.Cell>{row.result_value}</DataTable.Cell>
                                <DataTable.Cell>{row.abnormal_flag_display}</DataTable.Cell>
                            </DataTable.Row>
                         ))}     
                    </DataTable>   
                {/* {vitalsigndata.recordset.map((row) => (
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
           <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.h3}> Compare Values</Text>
            </View>
            {state.loading ? loading(true) : loading(false)} 
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}}/> : <View></View> }  
          <VitalsignCompareDisplay vitalsigndata={state.data} /> 
        </ScrollView>
    )
}
 
export default VitalsignCompare;
//=============================================================================