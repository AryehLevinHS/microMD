import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useLabResultList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MEDINFO_LABRESULT_TESTS} from '../../../navigation/route_types' 
//=============================================================================
// Get LabresultList data
//=============================================================================
const LabresultList = () => {

    const user = useContext (UserContext)
    const [state,DataLabresultListGet] = useLabResultList()
    const navigation = useNavigation();
    //=============================================================================
    // viewTestResult - test result
    //=============================================================================
    const LabTestView = (labresultcat_id) =>{
        user.localStorage.labresultcat_id = labresultcat_id
        navigation.navigate(NAV_MEDINFO_LABRESULT_TESTS)
      }
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
                <TouchableOpacity key={row.labresultcat_id} style={appStyles.item} onPress={() => LabTestView(row.labresultcat_id)}>
                    <Text style={appStyles.bold}>{row.tests_ordered}</Text>
                    <Text >{'Date: '+row.date_reported_display}{'  By:'+row.ordered_by}</Text>
                    <Text >{'Status: '+row.status_description}</Text> 
                    {/* <View style={appStyles.addButton}>
                        <Icon 
                            name='open-in-new'
                            type='MaterialCommunityIcons'
                            color='#517fa4'
                            onPress={() => LabTestView()}
                        />
                    </View>  */}
                </TouchableOpacity> 
                
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {/* <Text> Laboratory Results</Text> */}
            
            {state.loading ? loading(true) : loading(false)} 
            <LabresultDisplay labresultdata={state.data} /> 
        </ScrollView>
    )
}
 
export default LabresultList;
//=============================================================================