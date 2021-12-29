import React, { useContext, useEffect,useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
//import moment from 'moment'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useMedicationList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get MedicationList data
//=============================================================================
const MedicationList = () => {

    const user = useContext (UserContext)
    const [state,DataMedicationGetList] = useMedicationList()
    //filtering
    let currentDate = new Date()
    let fromDate = currentDate
    let toDate = currentDate
  //  let fromDate = moment(currentDate).format('YYYY-MM-DD') // need this format for a date field
  //  let toDate = moment(currentDate).format('YYYY-MM-DD')
    const [filterData,setFilterData] = useState({medlist:'current',date_range:'past_month',begin_date:fromDate,end_date:toDate})
   
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
                <TouchableOpacity key={index} style={appStyles.item}>
                    <Text >{row.description}</Text>
                    <Text >{'Created On:'+row.careplan_date_display}{'  By:'+row.provider_name}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <MedicationDisplay medicationdata={state.data} /> 
        </ScrollView>
    )
}
 
export default MedicationList;
//=============================================================================