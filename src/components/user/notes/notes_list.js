import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import {StyleSheet, Alert, Button} from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading,ConfirmDialog } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useUserNoteList} from '../../../store/hooks/useUserData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_USER_NOTES_EDIT} from '../../../navigation/route_types' 
//=============================================================================
// Get NoteList data
//=============================================================================
const NoteList = () => {

    const user = useContext (UserContext)
    const [state,DataUserNoteGetList,DataUserNoteDelete] = useUserNoteList()
    const navigation = useNavigation();
    //=============================================================================
    // ItemAdd - adds a new item
    //=============================================================================
    const ItemAdd = () =>{
        navigation.navigate(NAV_USER_NOTES_EDIT)
    }
    //=============================================================================
    // ItemEdit - edits an item
    //=============================================================================
    const ItemEdit = (note_id) =>{
        user.localStorage.note_id = note_id
        navigation.navigate(NAV_USER_NOTES_EDIT)
    }
    //=============================================================================
    // ItemDeiete - deletes an item
    //=============================================================================
    const ConfirmDelete = (note_id) => {
        ConfirmDialog('yesno','Delete Note','Are you sure you want to delete the note?',
         (istrue)=>{ItemDelete(istrue,note_id)} )
    }
    const ItemDelete = (confirmed,note_id) =>{
       if (confirmed) { 
         //  console.log('note deleted',note_id)
           DataUserNoteDelete(user.portal_user_id,note_id)
       }
    }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataUserNoteGetList(user.portal_user_id)
    },[])
    //=============================================================================
    // NoteListDisplay - displays the note list
    //=============================================================================
    const NoteListDisplay = ({notedata}) => {

        if (!notedata || !notedata.recordset || notedata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {notedata.recordset.map(row => (
                 <TouchableOpacity key={row.note_id} style={appStyles.item} 
                                   onPress={()=>{ItemEdit(row.note_id)}}>
                   <View style={appStyles.listItem_textWithDelete}>                 
                        <Text >{'Date: '+row.note_date_display}</Text>
                        <Icon 
                            name='closecircleo'
                            type='antdesign'
                            color='red'
                            onPress={() => ConfirmDelete(row.note_id)}
                        />
                    </View>
                   <Text>{row.subject}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <View style={appStyles.addButton}>
                <Icon 
                    name='pluscircleo'
                    type='antdesign'
                    color='#517fa4'
                    onPress={() => ItemAdd()}
                />
            </View>
            {state.loading ? loading(true) : loading(false)} 
            <NoteListDisplay notedata={state.data} /> 
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      width: 300,
      height: 300,
      backgroundColor: "red",
      marginBottom: 30,
    },
    text: {
      fontSize: 30,
    },
  });
export default NoteList;
//=============================================================================