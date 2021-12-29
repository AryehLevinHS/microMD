import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
//import { Card } from 'react-native-elements'
// data
import { UserContext } from '../../../store/UserContext'
import {useVitalsignList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get Vital Signs data
//=============================================================================
const VitalSignList = () => {

    const user = useContext (UserContext)
    const [state,DataVitalsignlistGet] = useVitalsignList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataVitalsignlistGet(user.patient_id)
    },[])
    //=============================================================================
    // VitalsignDisplay - displays the lsit of vital signs
    //=============================================================================
    const VitalsignDisplay = ({vitalsigndata}) => {

      //  console.log('test display',vitalsigndata) 
        if (!vitalsigndata || !vitalsigndata.recordset || vitalsigndata.recordset.length === 0)
           return (<View>   </View>)

        return (
            <View>
                {vitalsigndata.recordset.map((row,index) => (
                <TouchableOpacity key={index} style={appStyles.item}>
                    <Text >{'Taken on: '+row.date_performed_display}</Text>
                    <Text >{'BP: '+row.bp}{'  BMI:'+row.bmi}{'  Pulse:'+row.pulse_rate}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }

//=============================================================================
  return (
    <ScrollView>
        <Text> vital sign screen</Text>
        <VitalsignDisplay vitalsigndata={state.data} />
    </ScrollView>
  )

}
  
export default VitalSignList;
//=============================================================================