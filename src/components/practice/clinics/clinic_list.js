import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
//import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
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
   // const navigation = useNavigation();
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataClinicGetList(user.practice_id)
    },[])
    //=============================================================================
    // Open Map
    //=============================================================================
    const MapOpen = (clinic_id) => {
      //not yet 
      // below could use accordian
    }
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
                    <Text >{'Email: '+row.email}</Text>
                    <View style={appStyles.listItem_textWithDelete}>    
                         <Text >{'Working Hours: '+row.working_hours}</Text>
                         <Icon name='map' type='foundation' color='black'
                                onPress={() => MapOpen(row.clinic_id)}
                        />
                    </View>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <ClinicListDisplay clinicdata={state.data} /> 
        </ScrollView>
    )
}
 
export default ClinicList;
//=============================================================================