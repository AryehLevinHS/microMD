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

    
        // SETS THE HEADER
        // navigation.setOptions({
        //     headerLeft:()=> (<TouchableOpacity  onPress={()=>{navigation.toggleDrawer()}  }>
        //                      <Text>NAV</Text>
                             
        //                     </TouchableOpacity>)
        // })
    },[])
    //=============================================================================
    // gotoItem - navigates to the selected section
    //=============================================================================
    const gotoItem = (itemType,itemId) =>{
        switch (itemType) {
            case 'LAB':
             //   navigation.navigate(NAV_USER_NOTES_EDIT)
                return 
            break;
            case 'IMU':
               // navigation.navigate(NAV_USER_NOTES_EDIT)
                return 
            case 'FRM':
               // navigation.navigate(NAV_USER_NOTES_EDIT)
               return 
              
            default:
                break;
        }
        
    }
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
                    <Text style={appStyles.bold}>{row.subject}</Text>
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
        {state.loading ? loading(true) : loading(false)}
        <NoticeListDisplay noticedata={state.data} />
    </ScrollView>
 )

}
 
export default NoticeList;
//=============================================================================