import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity} from 'react-native'

// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useActionItemList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get ActionitemList data
//=============================================================================
const ActionitemList = () => {

    const user = useContext (UserContext)
    const [state,DataActionItemGetlist,DataActionItemSetStatus] = useActionItemList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataActionItemGetlist(user.patient_id)
    },[])
    //=============================================================================
    // ActionItemDisplay - displays the list of action items
    //=============================================================================
    const ActionItemDisplay = ({actionitemdata}) => {

        if (!actionitemdata || !actionitemdata.recordset || actionitemdata.recordset.length === 0){
           return (<View>
                  </View>)
        }

        return (
            <View>
                {actionitemdata.recordset.map((row,index) => (
                <TouchableOpacity key={row.actionitem_id} style={appStyles.item}>
                    <Text >{row.description}</Text>
                    <Text >{'Sent By: '+row.provider_name}{' On: '+row.date_sent_display}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }

//=============================================================================
 return (
    <ScrollView>
        <Text> Action Items</Text>
        {state.loading ? loading(true) : loading(false)}
        <ActionItemDisplay actionitemdata={state.data} />
    </ScrollView>
 )

}
 
export default ActionitemList;
//=============================================================================