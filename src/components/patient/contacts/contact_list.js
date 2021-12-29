import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useContactList} from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get ContactList data
//=============================================================================
const ContactList = () => {

    const user = useContext (UserContext)
    const [state,DataContactGetList,DataContactDelete] = useContactList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataContactGetList(user.patient_id)
    },[])
    //=============================================================================
    // ContactListDisplay - displays the contact list
    //=============================================================================
    const ContactListDisplay = ({contactdata}) => {

        if (!contactdata || !contactdata.recordset || contactdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {contactdata.recordset.map(row => (
                 <TouchableOpacity key={row.contact_id} style={appStyles.item}>
                    <Text >{row.contact_name}</Text>
                    <Text>{row.contact_type_description}</Text>
                    <Text >{'H Phone: '+row.home_phone}{' W Phone: '+row.work_phone}</Text>
                    <Text >{'Address: '+row.street_address +' '+row.street_address2}</Text>
                    <Text >{row.city +' '+row.state_code+' '+row.zip}</Text>  
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <ContactListDisplay contactdata={state.data} /> 
        </ScrollView>
    )
}
 
export default ContactList;
//=============================================================================