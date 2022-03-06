import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {ListItem,Button, Icon} from 'react-native-elements'
// tools
import { loading,ConfirmDialog,IconButton } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useContactList} from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// Navigation
import {NAV_PATIENT_CONTACTS_EDIT} from '../../../navigation/route_types' 

//=============================================================================
// Get ContactList data
//=============================================================================
const ContactList = () => {

    const navigation = useNavigation();
    const user = useContext (UserContext)
    const [state,DataContactGetList,DataContactDelete] = useContactList()
    //=============================================================================
    // ItemAdd - adds a new item
    //=============================================================================
    const ItemAdd = () =>{
        navigation.navigate(NAV_PATIENT_CONTACTS_EDIT)
    }
    //=============================================================================
    // ItemEdit - edits an item
    //=============================================================================
    const ItemEdit = (contact_id) =>{
        user.localStorage.contact_id = contact_id
        navigation.navigate(NAV_PATIENT_CONTACTS_EDIT)
    }
    //=============================================================================
    // ItemDeiete - deletes an item
    //=============================================================================
    const ConfirmDelete = (contact_id,contact_name) => {
       
         ConfirmDialog('yesno','Delete Contact',`Are you sure you want to delete the contact: ${contact_name} ?`,
         (istrue)=>{ItemDelete(istrue,contact_id)} )
    }
    const ItemDelete = (confirmed,contact_id) =>{
       if (confirmed) { 
          DataContactDelete(user.portal_user_id,contact_id)
       }
    }
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
                    <ListItem.Swipeable style={{height:140}} key={row.contact_id}
                        rightContent={
                            <View style={{height:'80%',marginTop:18}}>
                                <Button 
                                    title="Delete"
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{minHeight: '100%', backgroundColor: 'red',alignItems:'center' }}
                                    onPress={() => ConfirmDelete(row.contact_id,row.contact_name)}
                                />
                            </View>
                            }
                    >
                    <TouchableOpacity key={row.contact_id} style={appStyles.itemSwipe}
                        onPress={()=>{ItemEdit(row.contact_id)}}>
                        <View >
                                <ListItem.Title style={appStyles.hightlightedText}>{row.contact_name}</ListItem.Title>
                                <Text>{row.contact_type_description}</Text>
                                <Text >{'H Phone: '+row.home_phone}{' W Phone: '+row.work_phone}</Text>
                                <Text >{'Address: '+row.street_address +' '+row.street_address2}</Text>
                                <Text >{row.city +' '+row.state_code+' '+row.zip}</Text>  
                        </View>
                    </TouchableOpacity> 
                    </ListItem.Swipeable>

             
               ))}
           </View>
        )
    }
        //  <TouchableOpacity key={row.contact_id} style={appStyles.item}
                //                    onPress={()=>{ItemEdit(row.contact_id)}}>
                //     <View style={appStyles.listItem_textWithDelete}>                 
                //         <Text >{row.contact_name}</Text>
                //         <IconButton type = 'DELETE' onPress={() => ConfirmDelete(row.contact_id)} />
                //     </View>
                //     <Text>{row.contact_type_description}</Text>
                //     <Text >{'H Phone: '+row.home_phone}{' W Phone: '+row.work_phone}</Text>
                //     <Text >{'Address: '+row.street_address +' '+row.street_address2}</Text>
                //     <Text >{row.city +' '+row.state_code+' '+row.zip}</Text>  
                //     </TouchableOpacity> 
                //style={{height:140}}
//=============================================================================
    return (
        <View style={{flex:1}}>
            {state.loading ? loading(true) : loading(false)} 
            <ScrollView> 
                <ContactListDisplay contactdata={state.data} /> 
            </ScrollView> 
            <IconButton type = 'ADD_FLOATING' onPress={() => ItemAdd()} />
        </View>
    )
}
 
export default ContactList;
//=============================================================================