import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import {ListItem,Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading,IconButton,ConfirmDialog } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useInsuranceList} from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
import colors from '../../../resources/themes/colors'
// Navigation
import {NAV_PATIENT_INSURANCE_EDIT} from '../../../navigation/route_types' 
//=============================================================================
// Get InsuranceList data
//=============================================================================
const InsuranceList = () => {

    const navigation = useNavigation();
    const user = useContext (UserContext)
    const [state,DataInsuranceGetList,DataInsurancetDelete] = useInsuranceList()
    //=============================================================================
    // ItemAdd - adds a new item
    //=============================================================================
    const ItemAdd = () =>{
        navigation.navigate(NAV_PATIENT_INSURANCE_EDIT)
    }
    //=============================================================================
    // ItemEdit - edits an item
    //=============================================================================
    const ItemEdit = (insurance_id) =>{
        user.localStorage.insurance_id = insurance_id
        navigation.navigate(NAV_PATIENT_INSURANCE_EDIT)
    }
    //=============================================================================
    // ItemDeiete - deletes an item
    //=============================================================================
    const ConfirmDelete = (insurance_id) => {
         ConfirmDialog('yesno','Delete Insurance Plan','Are you sure you want to delete the Insurance Plan?',
         (istrue)=>{ItemDelete(istrue,insurance_id)} )
    }
    const ItemDelete = (confirmed,insurance_id) =>{
       if (confirmed) { 
        DataInsurancetDelete(user.portal_user_id,insurance_id)
       }
    }   
   
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataInsuranceGetList(user.patient_id)
    },[])
    //=============================================================================
    // InsuranceListDisplay - displays the insurance list
    //=============================================================================
    const InsuranceListDisplay = ({insurancedata}) => {

        if (!insurancedata || !insurancedata.recordset || insurancedata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {insurancedata.recordset.map(row => (
                         <ListItem.Swipeable style={{height:80}} key={row.insurance_id}
                            rightContent={
                                <View style={{height:'70%',marginTop:18}}>
                                    <Button 
                                        title="Delete"
                                        icon={{ name: 'delete', color: 'white' }}
                                        buttonStyle={{minHeight: '100%', backgroundColor: 'red',alignItems:'center' }}
                                        onPress={() => ConfirmDelete(row.insurance_id)}
                                    />
                                </View>
                                }
                            >
                            <TouchableOpacity key={row.insurance_id} style={appStyles.itemSwipe}
                                onPress={()=>{ItemEdit(row.insurance_id)}}>
                                <View >
                                    <Text >{'Group No: '+row.group_number}{' Policy No: '+row.policy_number}</Text>
                                    <Text >{'From: '+row.effective_date_display +' To: '+row.terminate_date_display}</Text>
                                </View>
                            </TouchableOpacity> 
                     </ListItem.Swipeable>
                 
               ))}
           </View>
        )
    }
    /*
    <TouchableOpacity key={row.insurance_id} style={appStyles.item}
                                   onPress={()=>{ItemEdit(row.insurance_id)}}>
                    <View style={appStyles.listItem_textWithDelete}>                 
                        <Text >{row.carrier_name}</Text>
                        <IconButton type = 'DELETE' onPress={() => ConfirmDelete(row.insurance_id)} />
                    </View>
                    <Text >{'Group No: '+row.group_number}{' Policy No: '+row.policy_number}</Text>
                    <Text >{'From: '+row.effective_date_display +' To: '+row.terminate_date_display}</Text>
                </TouchableOpacity> 
*/
//=============================================================================
    return (
        <ScrollView>
            <View style={appStyles.addButton}>
               <IconButton type = 'ADD' onPress={() => ItemAdd()} />
            </View>
            {state.loading ? loading(true) : loading(false)} 
            <InsuranceListDisplay insurancedata={state.data} /> 
        </ScrollView>
    )
}
 
export default InsuranceList;
//=============================================================================