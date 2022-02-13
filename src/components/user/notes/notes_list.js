import React, { useContext, useEffect} from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import {ListItem,Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading,ConfirmDialog,IconButton } from '../../utils/misc_tools'
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

    const navigation = useNavigation();
    const user = useContext (UserContext)
    const [state,DataUserNoteGetList,DataUserNoteDelete] = useUserNoteList()
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
    const ConfirmDelete = (note_id,subject) => {
        ConfirmDialog('yesno','Delete Note','Are you sure you want to delete the note?',
         (istrue)=>{ItemDelete(istrue,note_id)} )
    }
    const ItemDelete = (confirmed,note_id) =>{
       if (confirmed) { 
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
                     <ListItem.Swipeable style={{height:80}} key={row.note_id}
                        rightContent={
                            <View style={{height:'70%',marginTop:18}}>
                                <Button 
                                    title="Delete"
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{minHeight: '100%', backgroundColor: 'red',alignItems:'center' }}
                                    onPress={() => ConfirmDelete(row.note_id,row.subject)}
                                />
                            </View>
                            }
                        >
                        <TouchableOpacity key={row.note_id} style={appStyles.itemSwipe}
                            onPress={()=>{ItemEdit(row.note_id)}}>
                            <View >
                                    <Text style={appStyles.hightlightedText}>Date: {row.note_date_display}</Text>
                                    <Text >{row.subject}</Text>
                            </View>
                        </TouchableOpacity> 
                    </ListItem.Swipeable>
                //  <TouchableOpacity key={row.note_id} style={appStyles.item} 
                //                    onPress={()=>{ItemEdit(row.note_id)}}>
                //    <View style={appStyles.listItem_textWithDelete}>                 
                //         <Text >{'Date: '+row.note_date_display}</Text>
                //         <IconButton type = 'DELETE' onPress={() => ConfirmDelete(row.note_id)} />
                //     </View>
                //    <Text>{row.subject}</Text>
                // </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <View style={appStyles.addButton}>
               <IconButton type = 'ADD' onPress={() => ItemAdd()} />
            </View>
            {state.loading ? loading(true) : loading(false)} 
            <NoteListDisplay notedata={state.data} /> 
        </ScrollView>
    )
}

export default NoteList;
//=============================================================================