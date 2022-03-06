import React, { useContext, useEffect,useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
// tools
import { loading } from '../utils/misc_tools'
// data
import { UserContext } from '../../store/UserContext'
import {useMailOutbox} from '../../store/hooks/useMailData'
// styles
import {appStyles} from '../../resources/styles/main_styles'
// navigation
import {NAV_MAIL_MSGDISPLAY} from '../../navigation/route_types'
//=============================================================================
// Get MailOutbox (mail outbox) data
//=============================================================================
const MailOutbox = () => {

    const navigation = useNavigation();
    const user = useContext (UserContext)
    const [state,DataMailGetOutbox,DataMailGetOutboxFiltered] = useMailOutbox()
    const [filterData,setFilterData] = useState(user.mail_outbox_filter) //read:false,date_range:'all',from_date:'',to_date:''
    let currentDate = new Date()
      //=============================================================================
    // OpenMail - opens mail item
    //=============================================================================
    const OpenMail = (msg_id) =>{
      
        user.localStorage.msg_id = msg_id
        user.localStorage.msg_calledfrom = 'OUTBOX'
        navigation.navigate(NAV_MAIL_MSGDISPLAY)
    }
     
    //=============================================================================
    // FilterBar - opens the window to view the mail
    //============================================================================= 
    const FilterBar = () => {
       const  dateRangeOptions= [{ key:'today',value:'Today'},
                  { key:'past_week',value:'Past Week'},
                  { key:'past_month',value:'Past Month'},
                  { key:'all',value:'All'}
                ] 

        //=============================================================================
        // filterSelected - set the filtered value and calls retrieve
        //============================================================================= 
        const filterSelected = (date_range,startdate,enddate) => {
            const newfilterData = {...filterData}
           // console.log('filter- chnage',date_range)
            switch  (date_range){
                case 'today':
                    newfilterData.from_date = moment(currentDate).format('YYYY-MM-DD')
                    newfilterData.to_date   = moment(currentDate).format('YYYY-MM-DD')
                    newfilterData.date_range = 'today'
                break;
                case 'past_week':
                    newfilterData.from_date = moment(currentDate).subtract(1, 'W').format('YYYY-MM-DD')
                    newfilterData.to_date   = moment(currentDate).format('YYYY-MM-DD')
                    newfilterData.date_range = 'past_week'
                break;
                case 'past_month':
                    newfilterData.from_date =   moment(currentDate).subtract(1, 'month').format('YYYY-MM-DD')
                    newfilterData.to_date   =  moment(currentDate).format('YYYY-MM-DD')
                    newfilterData.date_range = 'past_month'
                break    
                case 'all':
                    newfilterData.from_date =  moment('2000-01-01').format('YYYY-MM-DD')
                    newfilterData.to_date   =  moment(currentDate).format('YYYY-MM-DD')
                    newfilterData.date_range = 'all'
                break;
                default:
            }
            user.mail_outbox_filter = newfilterData
            user.mail_outbox_filter_open = true
            setFilterData(newfilterData)
           // console.log('filter',newfilterData)
            if (newfilterData.date_range === 'all') {
                DataMailGetOutbox(user.portal_user_id,user.patient_id)
            } else {
              DataMailGetOutboxFiltered(user.portal_user_id,user.patient_id,newfilterData) //calls function to get filtered data
           }
          return 
        }
        //=============================================================================
        //{appStyles.filterbar_container}>
        return ( <View style={appStyles.filterbar_container}  >
                     <Picker 
                            style={appStyles.filterbar_input_picker}
                                selectedValue = {filterData.date_range}
                                onValueChange={(itemValue)=> filterSelected(itemValue,null,null) }
                            >
                            {                            
                                dateRangeOptions.map(item=>(
                                <Picker.Item label={item.value} value= {item.key} key={item.key} />
                                ))  
                            }
                    </Picker>
                </View>
        )

    }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataMailGetOutbox(user.portal_user_id,user.patient_id)
    },[])
    //=============================================================================
    // OutboxDisplay - displays the mail outbox
    //=============================================================================
    const OutboxDisplay = ({maildata}) => {
      
        if (!maildata || !maildata.recordset || maildata.recordset.length === 0)
           return (<View>
                   </View>)

        return (
            <View>
                {maildata.recordset.map((row) => (
                <TouchableOpacity key={row.msg_id} style={appStyles.item}
                                  onPress={()=>{OpenMail(row.msg_id)}}>
                    <Text >{'Subject: '+row.subject}</Text> 
                    <Text >{'Time: '+row.time_sent_display}{'  To: '+row.receiver_name}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {FilterBar()}
            {state.loading ? loading(true) : loading(false)} 
            <OutboxDisplay maildata={state.data} /> 
        </ScrollView>
    )
}
 
export default MailOutbox;
//=============================================================================