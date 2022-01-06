import React, { useContext, useEffect} from 'react'
import { Text, View,ScrollView} from 'react-native'

// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {usePracticeInfo} from '../../../store/hooks/usePracticeData'
import ClinicList from '../clinics/clinic_list'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get practice info data
//=============================================================================
const PracticeInfo = () => {

    const user = useContext (UserContext)
    const [state,DataPracticeInfoGet] = usePracticeInfo()
    
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataPracticeInfoGet(user.practice_id)
    },[])
    //=============================================================================
    // PracticeInfoDisplay - displays the practice info
    //=============================================================================
    const PracticeInfoDisplay = ({practiceinfodata}) => {

        if (!practiceinfodata || !practiceinfodata.recordset || practiceinfodata.recordset.length === 0)
           return (<View> 
                   </View>)

        let practiceInfo = practiceinfodata.recordset[0]
        return (
            <View>
              <Text style={appStyles.h2}>  Practice Details </Text> 
              <View style={appStyles.item}>
                <View style={{flexDirection:'row'}}>
                    <Text style={appStyles.bold}>Address: </Text><Text>{practiceInfo.street_address+' '+practiceInfo.street_address2}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={appStyles.bold}>Phone: </Text><Text>{practiceInfo.phone}</Text>
                </View>
              </View>
           </View>
        )
    }
//=============================================================================
 return (
    <ScrollView>
        {state.loading ? loading(true) : loading(false)}
        <PracticeInfoDisplay practiceinfodata={state.data} />
        <Text/>
        <Text style={appStyles.h3}>  Clinics</Text>
        <ClinicList/>
    </ScrollView>
 )

}
 
export default PracticeInfo;
//=============================================================================