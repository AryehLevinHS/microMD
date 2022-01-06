import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useClinicList} from '../../../store/hooks/usePracticeData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get ClinicList data
//=============================================================================
const ClinicList = () => {

    const user = useContext (UserContext)
    const [state,DataClinicGetList] = useClinicList()
    const navigation = useNavigation();
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataClinicGetList(user.practice_id)
    },[])
    //=============================================================================
    // ClinicListDisplay - displays the list of clinics
    //=============================================================================
    const ClinicListDisplay = ({clinicdata}) => {

        if (!clinicdata || !clinicdata.recordset || clinicdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {clinicdata.recordset.map(row => (
                 <TouchableOpacity key={row.clinic_id} style={appStyles.item}>
                    <Text style={appStyles.bold}>{row.clinic_name}</Text>
                    <Text >{'Phone: '+row.phone}</Text>
                    <Text >{'Working Hours: '+row.working_hours}</Text>
                    <Text >{'Email: '+row.email}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
          {/*  <View style={appStyles.addButton}>
                 <Icon 
                    name='pluscircleo'
                    type='antdesign'
                    color='#517fa4'
                    onPress={() => addItem()}
                /> 
              </View> */}
            {state.loading ? loading(true) : loading(false)} 
            <ClinicListDisplay clinicdata={state.data} /> 
        </ScrollView>
    )
}
 
export default ClinicList;
//=============================================================================