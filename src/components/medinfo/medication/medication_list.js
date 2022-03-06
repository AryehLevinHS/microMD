import React, { useContext, useEffect,useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
//import moment from 'moment'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useMedicationList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MEDINFO_REFILLS} from '../../../navigation/route_types' 
//=============================================================================
// Get MedicationList data
//=============================================================================
const MedicationList = () => {

    const user = useContext (UserContext)
    const [state,DataMedicationGetList] = useMedicationList()
    const navigation = useNavigation();
    //filtering
    let currentDate = new Date()
    let fromDate = currentDate
    let toDate = currentDate
  //  let fromDate = moment(currentDate).format('YYYY-MM-DD') // need this format for a date field
  //  let toDate = moment(currentDate).format('YYYY-MM-DD')
    const [filterData,setFilterData] = useState({medlist:'current',date_range:'past_month',begin_date:fromDate,end_date:toDate})
    //=============================================================================
    // addItem - adds a new item
    //=============================================================================
    const rxRequest = () =>{
        navigation.navigate(NAV_MEDINFO_REFILLS)
    }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataMedicationGetList(user.patient_id,filterData)
    },[])
    //=============================================================================
    // MedicationDisplay - displays the list of medications
    //=============================================================================
    const MedicationDisplay = ({medicationdata}) => {

        if (!medicationdata || !medicationdata.recordset || medicationdata.recordset.length === 0)
           return (<View>
                  </View>)

        return (
            <View>
                {medicationdata.recordset.map((row,index) => (
                <View key={index} style={appStyles.item}>
                    <Text >{row.description}</Text>
                    <Text >{'Created On:'+row.careplan_date_display}{'  By:'+row.provider_name}</Text>
                </View> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <View style={{flex:1}}>
           {state.loading ? loading(true) : loading(false)} 
            <ScrollView>
                <MedicationDisplay medicationdata={state.data} /> 
            </ScrollView>
            <View style={[appStyles.addButtonFloating,{backgroundColor:'red'}]}>
                <Icon  name='medicinebox'   type='antdesign'  color='white'
                       onPress={() => rxRequest()} />
            </View>
        </View>
     
    )
}
 
export default MedicationList;
//=============================================================================