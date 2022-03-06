import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import { Switch } from 'react-native-elements';
import moment from 'moment';
// tools
import { loading } from '../utils/misc_tools'
// data
import { UserContext } from '../../store/UserContext'
import {useMailInbox} from '../../store/hooks/useMailData'
// styles
import {appStyles} from '../../resources/styles/main_styles'
// navigation
import {NAV_MAIL_MSGDISPLAY} from '../../navigation/route_types'
//=============================================================================
// Get MailInbox (past appointments) data
//=============================================================================
const MailInbox = () => {

    const user = useContext (UserContext)
    const [state,DataMailGetInbox,DataMailGetInboxFiltered] = useMailInbox()
    const navigation = useNavigation();
    const [filterData,setFilterData] = useState(user.mail_outbox_filter) //read:false,date_range:'all',from_date:'',to_date:''
    let currentDate = new Date()
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
         const filterSelected = (date_range,read,startdate,enddate) => {
             const newfilterData = {...filterData}
            
            if (date_range !== null) {
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
            }
            if (read !== null) {
                newfilterData.read = !filterData.read  
            }
              
            // save settings
             user.mail_outbox_filter = newfilterData
             user.mail_outbox_filter_open = true
             setFilterData(newfilterData)
           //  console.log('filter',newfilterData)
             DataMailGetInboxFiltered(user.portal_user_id,user.patient_id,newfilterData) //calls function to get filtered data
            
           return 
         }
         //=============================================================================
         //{appStyles.filterbar_container}>
         return ( <View style={appStyles.filterbar_container}  >
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <Text style={{margin:2}}>unread</Text>
                        <Switch
                            value={filterData.read}
                            onValueChange={(value) => filterSelected(null,value,null,null)}
                        />
                         <Text style={{margin:2}}>read</Text>
                      </View>  
                      <Picker 
                             style={appStyles.filterbar_input_picker}
                                 selectedValue = {filterData.date_range}
                                 onValueChange={(itemValue)=> filterSelected(itemValue,null,null,null) }
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
        DataMailGetInbox(user.portal_user_id,user.patient_id)
    },[])
    //=============================================================================
    // OpenMail - opens mail item
    //=============================================================================
    const OpenMail = (msg_id) =>{
        user.localStorage.msg_id = msg_id
        user.localStorage.msg_calledfrom = 'INBOX'
        navigation.navigate(NAV_MAIL_MSGDISPLAY)
    }
    //=============================================================================
    // InboxDisplay - displays the inbox
    //=============================================================================
    const InboxDisplay = ({maildata}) => {

        if (!maildata || !maildata.recordset || maildata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {maildata.recordset.map((row) => (
                <TouchableOpacity key={row.msg_id} style={appStyles.item}
                                  onPress={()=>{OpenMail(row.msg_id)}}>
                    <Text >{'Subject: '+row.subject}</Text> 
                    <Text >{'Time: '+row.time_sent_display}{'  From: '+row.sender_name}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {/* <Text>Inbox</Text> */}
            {FilterBar()}
            {state.loading ? loading(true) : loading(false)} 
            <InboxDisplay maildata={state.data} /> 
        </ScrollView>
    )
}
 
export default MailInbox;
//=============================================================================