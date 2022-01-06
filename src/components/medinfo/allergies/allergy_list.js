import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity} from 'react-native'

// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useAllergyList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get Allergy data
//=============================================================================
const AllergyList = () => {

    const user = useContext (UserContext)
    const [state,DataAllergyGetList] = useAllergyList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataAllergyGetList(user.patient_id)
    },[])
    //=============================================================================
    // AllergyDisplay - displays the list of allergies
    //=============================================================================
    const AllergyDisplay = ({allergydata}) => {

        if (!allergydata || !allergydata.recordset || allergydata.recordset.length === 0)
           return (<View> 
                   </View>)

        return (
            <View>
                {allergydata.recordset.map((row,index) => (
                <TouchableOpacity key={row.allergy_id} style={appStyles.item}>
                    <View style={{flexDirection:'row'}} key={index}>
                       <Text>Allergy: </Text> 
                       <Text style={appStyles.bold}>{row.description}</Text>
                    </View>
                    <Text >{'Severity: '+row.allergy_severity}</Text>
                    <Text >{'Recorded on: '+row.begin_date_display}{'  By:'+row.diagnosed_by}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }

//=============================================================================
 return (
    <ScrollView>
        {/* <Text> Allergies</Text> */}
        {state.loading ? loading(true) : loading(false)}
        <AllergyDisplay allergydata={state.data} />
    </ScrollView>
 )

}
 
export default AllergyList;
//=============================================================================