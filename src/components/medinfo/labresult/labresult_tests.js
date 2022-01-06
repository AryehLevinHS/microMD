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
import {NAV_MEDINFO_LABRESULT_GRAPH,NAV_MEDINFO_LABRESULT_COMPARE} from '../../../navigation/route_types' 
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
    const graphItem = (labresult_id) =>{
        user.localStorage.labresult_id = labresult_id
        navigation.navigate(NAV_MEDINFO_LABRESULT_GRAPH)
    }
    //=============================================================================
    // compareResult - compare test results
    //=============================================================================
    const compareResult = (labresult_id) =>{
        user.localStorage.labresult_id = labresult_id
        navigation.navigate(NAV_MEDINFO_LABRESULT_COMPARE)
    }
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
                            <DataTable.Title numeric> </DataTable.Title> 
                        </DataTable.Header>
                        {labtestdata.recordset.map((row) => (
                            <DataTable.Row key={row.labresult_id}>
                                <DataTable.Cell>{row.test_performed}</DataTable.Cell>
                                <DataTable.Cell>{row.result_value}</DataTable.Cell>
                                <DataTable.Cell>{row.abnormal_flag_display}</DataTable.Cell>
                                <DataTable.Cell numeric> 
                                                  {/* <Icon name='bar-graph' type='entypo' color='#517fa4'
                                                  onPress={() => graphItem(row.labresult_id)} />  */}
                                                 <Icon name='compare' type='materialcommunityicons' color='#517fa4'
                                                  onPress={() => compareResult(row.labresult_id)} /> </DataTable.Cell>
                                                   
                            </DataTable.Row>
                         ))}     
                    </DataTable>   
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <View style={appStyles.goBackButton}>
                <Icon 
                    name='arrowleft'
                    type='antdesign'
                    color='#517fa4'
                    onPress={() => goBack()}
                />
                <Text style={appStyles.h3}> Lab Tests</Text>
            </View>
            {/* <Text> Laboratory Tests</Text> */}
            {state.loading ? loading(true) : loading(false)} 
            <LabtestDisplay labtestdata={state.data} /> 
        </ScrollView>
    )
}
 
export default LabResultTests;
//=============================================================================