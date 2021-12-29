import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity} from 'react-native'

// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useFormList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get FormList data
//=============================================================================
const FormList = () => {

    const user = useContext (UserContext)
    const [state,DataFormGetList] = useFormList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataFormGetList(user.patient_id)
    },[])
    //=============================================================================
    // FormDisplay - displays the list of forms
    //=============================================================================
    const FormDisplay = ({formdata}) => {


        if (!formdata || !formdata.recordset || formdata.recordset.length === 0)
           return (<View></View>)

         return (
             <View>
                 {formdata.recordset.map((row) => (
                 <TouchableOpacity key={row.form_id} style={appStyles.item}>
                     <Text>{row.form_name}</Text>
                     <Text>{'Sent To: '+row.receiver_name}{' on: '+row.time_sent_display}</Text>
                 </TouchableOpacity> 
                ))}
            </View>
         )

      
    }

//=============================================================================
 return (
    <ScrollView>
        <Text> Medical Forms</Text>
        {state.loading ? loading(true) : loading(false)}
        <FormDisplay formdata={state.data} /> 
    </ScrollView>
 )

}
 
export default FormList;
//=============================================================================