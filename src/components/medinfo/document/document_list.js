import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useMedicalDocList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import {NAV_MEDINFO_DOCUMMENT_VIEW} from '../../../navigation/route_types'
//=============================================================================
// Get DocumentList data
//=============================================================================
const DocumentList = () => {

    const navigation = useNavigation();
    const user = useContext (UserContext)
    const [state,DataMedicalDocsGetList,DataMedicalDocsGetFiltered] = useMedicalDocList()
    //=============================================================================
    // ItemDisplay - displays the document
    //=============================================================================
    const ItemDisplay = (document_id) =>{
        user.localStorage.document_id = document_id
        navigation.navigate(NAV_MEDINFO_DOCUMMENT_VIEW)
    }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataMedicalDocsGetList(user.patient_id)
    },[])
    //=============================================================================
    // DocumentDisplay - displays the list of documents
    //=============================================================================
    const DocumentDisplay = ({documentdata}) => {

        if (!documentdata || !documentdata.recordset || documentdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {documentdata.recordset.map((row) => (
                <TouchableOpacity key={row.document_id} style={appStyles.item}
                     onPress={()=>{ItemDisplay(row.document_id)}}  >
                    <Text >{row.document_name}</Text>
                    <Text >{'By: '+row.published_by_name} {' On: '+row.published_on_display}</Text>
                    <Text >{'Status: '+row.status_description}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <DocumentDisplay documentdata={state.data} /> 
        </ScrollView>
    )
}
 
export default DocumentList;
//=============================================================================