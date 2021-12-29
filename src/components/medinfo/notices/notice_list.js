import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useNotices} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get Notice data
//=============================================================================
const NoticeList = () => {
    const navigation = useNavigation();
    const user = useContext (UserContext)
    const [state,DataNoticeGetList,DataNoticeSetStatus] = useNotices()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataNoticeGetList(user.patient_id)

        // navigation.setOptions({
        //     headerLeft:()=> (<TouchableOpacity  onPress={()=>{navigation.toggleDrawer()}  }>
        //                      <Text>NAV</Text>
                             
        //                     </TouchableOpacity>)
        // })
    },[])
    //=============================================================================
    // NoticeListDisplay - displays the list of notices
    //=============================================================================
    const NoticeListDisplay = ({noticedata}) => {

        if (!noticedata || !noticedata.recordset || noticedata.recordset.length === 0)
           return (<View> 
                   </View>
           )

        return (
            <View>
                {noticedata.recordset.map((row,index) => (
                <TouchableOpacity key={row.notice_id} style={appStyles.item}>
                    <Text >{row.subject}</Text>
                    <Text >{'From: '+row.sent_by_name}</Text>
                    <Text >{row.description}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )

      
    }

//=============================================================================
 return (
    <ScrollView>
        {/* <Text> Notices</Text> */}
        {state.loading ? loading(true) : loading(false)}
        <NoticeListDisplay noticedata={state.data} />
    </ScrollView>
 )

}
 
export default NoticeList;
//=============================================================================