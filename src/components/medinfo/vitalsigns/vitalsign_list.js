import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
//import { Card } from 'react-native-elements'
// data
import { UserContext } from '../../../store/UserContext'
import {useVitalsignList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MEDINFO_VITALSIGN_EDIT,NAV_MEDINFO_VITALSIGN_GRAPH} from '../../../navigation/route_types' 
//=============================================================================
// Get Vital Signs data
//=============================================================================
const VitalSignList = () => {

    const user = useContext (UserContext)
    const [state,DataVitalsignlistGet] = useVitalsignList()
    const navigation = useNavigation();
    //=============================================================================
    // addItem - adds a new item
    //=============================================================================
    const addItem = () =>{
      navigation.navigate(NAV_MEDINFO_VITALSIGN_EDIT)
    }
    //=============================================================================
    // graphItem - graphing vital signs
    //=============================================================================
    const graphItem = () =>{
      navigation.navigate(NAV_MEDINFO_VITALSIGN_GRAPH)
    }
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
           return (<View>   
                   </View>)

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
        {/* <Text> vital sign screen</Text> */}
        <View style={appStyles.addButton}>
               <Icon  style={{margin: 20}}
                    name='bar-graph'
                    type='entypo'
                    color='#517fa4'
                    onPress={() => graphItem()}
                />
                <Text>  </Text> 
                <Icon 
                    name='pluscircleo'
                    type='antdesign'
                    color='#517fa4'
                    onPress={() => addItem()}
                />
              </View>
        <VitalsignDisplay vitalsigndata={state.data} />
    </ScrollView>
  )

}
  
export default VitalSignList;
//=============================================================================