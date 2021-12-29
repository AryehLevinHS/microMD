import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useUserNoteList} from '../../../store/hooks/useUserData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get NoteList data
//=============================================================================
const NoteList = () => {

    const user = useContext (UserContext)
    const [state,DataUserNoteGetList,DataUserNoteDelete] = useUserNoteList()
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
                 <TouchableOpacity key={row.note_id} style={appStyles.item}>
                    <Text>{row.subject}</Text>
                    <Text >{'Date: '+row.note_date_display}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <NoteListDisplay notedata={state.data} /> 
        </ScrollView>
    )
}
 
export default NoteList;
//=============================================================================