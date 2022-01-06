import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
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
    const ItemDelete = (note_id) =>{
    //    user.localStorage.note_id = note_id
    //    navigation.navigate(NAV_USER_NOTES_EDIT)
        DataUserNoteDelete(user.portal_user_id,note_id)
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
                   <View style={appStyles.deleteButton} >
                        <Icon 
                            name='closecircleo'
                            type='antdesign'
                            color='red'
                            onPress={() => ItemDelete(row.note_id)}
                        />
                    </View>
                    <Text >{'Date: '+row.note_date_display}</Text>
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
 
export default NoteList;
//=============================================================================