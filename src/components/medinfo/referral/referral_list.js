import React, { useContext, useEffect,useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading ,IconButton} from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useReferrals} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MEDINFO_REFERRAL_REQUEST} from '../../../navigation/route_types' 

  {/*  from react native elements only works on click
        Tooltip
       <Tooltip popover={<Text>Add Referral</Text>}>
            </Tooltip>
        use react-tooltip
        */}


//=============================================================================
// Get ReferralList data
//=============================================================================
const ReferralList = () => {

    const user = useContext (UserContext)
    const [state,DataReferralGetList] = useReferrals();
    const navigation = useNavigation();
    //filtering
    let currentDate = new Date()
    let fromDate = currentDate
    let toDate = currentDate
  //  let fromDate = moment(currentDate).format('YYYY-MM-DD') // need this format for a date field
  //  let toDate = moment(currentDate).format('YYYY-MM-DD')
   // const [filterData,setFilterData] = useState({medlist:'current',date_range:'past_month',begin_date:fromDate,end_date:toDate})
    //=============================================================================
    // addItem - adds a new item
    //=============================================================================
    const addItem = () =>{
        navigation.navigate(NAV_MEDINFO_REFERRAL_REQUEST)
    }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataReferralGetList(user.patient_id)
    },[])
    //=============================================================================
    // MedicationDisplay - displays the list of medications
    //=============================================================================
    const MedicationDisplay = ({referraldata}) => {

        if (!referraldata || !referraldata.recordset || referraldata.recordset.length === 0)
           return (<View>
                  </View>)

        return (
            <View>
                {referraldata.recordset.map((row,index) => (
                <View key={index} style={appStyles.item}>
                    <Text style={appStyles.bold} >{row.specialist}</Text>
                    <Text >{row.service_requested}</Text>
                    <Text >{'Sent On:'+row.date_requested_display}{'  To:'+row.assignedto_name}</Text>
                    <Text >{'Status:'+row.status_description}</Text>
                </View> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
           <View>
            {state.loading ? loading(true) : loading(false)} 
            <ScrollView>
              <MedicationDisplay referraldata={state.data} /> 
            </ScrollView>
            <IconButton type = 'ADD_FLOATING' onPress={() => ItemAdd()} />
        </View>
    )
}
 
export default ReferralList;
//=============================================================================