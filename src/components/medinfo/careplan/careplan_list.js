import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useCareplanList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MEDINFO_CAREPLAN_PROGRESS} from '../../../navigation/route_types' 
//=============================================================================
// Get Careplan data
//=============================================================================
const CareplanList = () => {

    const user = useContext (UserContext)
    const [state,DataCareplanGetList,DataCareplanSetStatus] = useCareplanList()
    const navigation = useNavigation();
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataCareplanGetList(user.patient_id)
    },[])
    //=============================================================================
    // addItem - adds a new item
    //=============================================================================
    const addItem = () =>{
        navigation.navigate(NAV_MEDINFO_CAREPLAN_PROGRESS)
    }
    //=============================================================================
    // ItemEdit - edits an item
    //=============================================================================
    const ItemEdit = (careplan_id,careplan_name) =>{
        user.localStorage.careplan_id = careplan_id
        user.localStorage.careplan_name = careplan_name
        navigation.navigate(NAV_MEDINFO_CAREPLAN_PROGRESS)
    }
    //=============================================================================
    // CareplanDisplay - displays the list of careplans
    //=============================================================================
    const CareplanDisplay = ({careplandata}) => {

        if (!careplandata || !careplandata.recordset || careplandata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {careplandata.recordset.map((row,index) => (
                <TouchableOpacity key={index} style={appStyles.item}
                                  onPress={()=>{ItemEdit(row.careplan_id,row.description)}}>
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
            {/* <Text> Care Plan</Text> */}
            <View style={appStyles.addButton}>
                <Icon 
                    name='pluscircleo'
                    type='antdesign'
                    color='#517fa4'
                    onPress={() => addItem()}
                />
              </View>
            {state.loading ? loading(true) : loading(false)} 
            <CareplanDisplay careplandata={state.data} /> 
        </ScrollView>
    )
}
 
export default CareplanList;
//=============================================================================