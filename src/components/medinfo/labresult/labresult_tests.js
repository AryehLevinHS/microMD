import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useLabResultTests} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MEDINFO_LABRESULT_GRAPH} from '../../../navigation/route_types' 
//=============================================================================
// Get LabResultTests data
//=============================================================================
const LabResultTests = () => {

    const user = useContext (UserContext)
    const [state,DataLabResultTestsGet] = useLabResultTests()
    const navigation = useNavigation();
    //=============================================================================
    // graphItem - graphing lab results
    //=============================================================================
    const graphItem = () =>{
        navigation.navigate(NAV_MEDINFO_LABRESULT_GRAPH)
     }
    //=============================================================================
    // compareResult - compare test results
    //=============================================================================
    const compareResult = () =>{
        navigation.navigate(NAV_MEDINFO_LABRESULT_COMPARE)
      }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        let labresultcat_id = user.localStorage.labresultcat_id
        DataLabResultTestsGet(user.patient_id,labresultcat_id)
    },[])
    //=============================================================================
    // LabtestDisplay - displays the test results
    //=============================================================================
    const LabtestDisplay = ({labtestdata}) => {

        if (!labtestdata || !labtestdata.recordset || labtestdata.recordset.length === 0)
           return (<View>
                   </View>)
   
        return (
            <View>
                 <DataTable style={appStyles.table_frame}>
                        <DataTable.Header style={{backgroundColor:'lightblue',fontSize:10}}>
                            <DataTable.Title>Test</DataTable.Title>
                            <DataTable.Title>Result</DataTable.Title>
                            <DataTable.Title>Flag</DataTable.Title>
                        </DataTable.Header>
                        {labtestdata.recordset.map((row) => (
                            <DataTable.Row key={row.labresult_id}>
                                <DataTable.Cell>{row.test_performed}</DataTable.Cell>
                                <DataTable.Cell>{row.result_value}</DataTable.Cell>
                                <DataTable.Cell>{row.abnormal_flag_display}</DataTable.Cell>
                            </DataTable.Row>
                         ))}     
                    </DataTable>   
                    <View style={appStyles.addButton}>
                        <Icon 
                            name='bar-graph'
                            type='Entypo'
                            color='#517fa4'
                            onPress={() => graphItem()}
                        />
                    </View> 
                    <View style={appStyles.addButton}>
                        <Icon 
                            name='compare'
                            type='MaterialCommunityIcons'
                            color='#517fa4'
                            onPress={() => compareResult()}
                        />
                    </View> 
                {/* {labtestdata.recordset.map((row) => (
                <TouchableOpacity key={row.labresult_id} style={appStyles.item}>
                    <Text >{row.test_performed}</Text>
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
            {/* <Text> Laboratory Tests</Text> */}
            {state.loading ? loading(true) : loading(false)} 
            <LabtestDisplay labtestdata={state.data} /> 
        </ScrollView>
    )
}
 
export default LabResultTests;
//=============================================================================