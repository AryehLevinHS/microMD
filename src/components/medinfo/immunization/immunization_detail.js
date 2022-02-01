import React, { useContext, useEffect,useState } from 'react'
import { Text, View,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading, IconButton } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useImmunizationList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get ImmunizationDetail data
//=============================================================================
const ImmunizationDetail = () => {

    const user = useContext (UserContext)
    const [state,stateDetail,DataImmunizationlistGet] = useImmunizationList()
    const [immunizationId,setImmunizationId] = useState(0)
    const navigation = useNavigation();
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataImmunizationlistGet(user.patient_id)
        if (user.localStorage.immunization_id > 0) {
            setImmunizationId(user.localStorage.immunization_id)
            user.localStorage.immunization_id = 0 
        } 
    },[])
    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        navigation.goBack()
    }    
    //=============================================================================
    // ImmunizationDisplay - displays the immunization details
    //=============================================================================
    const ImmunizationDisplay = ({immunizationdata}) => {

        if (!immunizationdata || !immunizationdata.recordset || immunizationdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {immunizationdata.recordset.filter(item => item.immunization_id === immunizationId)
                .map((row) => (
                <View key={row.immunizationdetail_id} style={appStyles.item}>
                    <Text style={appStyles.bold}>{row.vaccine_name}</Text>
                    <Text >{'Recommended: '+row.date_recommended_display}</Text>
                    <Text >{'Given: '+row.date_given_display}</Text> 
                </View> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                <Text style={appStyles.h3}> Vaccine Details</Text>
            </View>
            {state.loading ? loading(true) : loading(false)} 
            <ImmunizationDisplay immunizationdata={stateDetail.data} /> 
        </ScrollView>
    )
}
 
export default ImmunizationDetail;
//=============================================================================