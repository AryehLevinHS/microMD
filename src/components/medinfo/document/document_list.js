import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useMedicalDocList} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Get DocumentList data
//=============================================================================
const DocumentList = () => {

    const user = useContext (UserContext)
    const [state,DataMedicalDocsGetList,DataMedicalDocsGetFiltered] = useMedicalDocList()
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
                <TouchableOpacity key={row.document_id} style={appStyles.item}>
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
            <Text>Medical Documents</Text>
            {state.loading ? loading(true) : loading(false)} 
            <DocumentDisplay documentdata={state.data} /> 
        </ScrollView>
    )
}
 
export default DocumentList;
//=============================================================================