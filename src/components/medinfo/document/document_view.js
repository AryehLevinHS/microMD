import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView} from 'react-native'
import { useNavigation} from '@react-navigation/native';
// form tools
//import { WebView } from 'react-native-webview';
//import { HtmlViewer } from '../../utils/doc_viewer';
import {pdf_viewer} from '../../utils/lookup/pdf_viewer';
// tools
import { loading,AppButton,AppMessage,IconButton } from '../../utils/misc_tools';
// data
import { UserContext }   from '../../../store/UserContext'
import { useMedicalDoc } from '../../../store/hooks/useMedinfoData';
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
import { NAV_MEDINFO_DOCUMENTS } from '../../../navigation/route_types';
//=============================================================================
// DocumentView -displays a document
//=============================================================================
const DocumentView = () => {
    const navigation = useNavigation();
    const user = useContext (UserContext)
    const [state,DataMedicalDocsGetById] = useMedicalDoc();
   // const [formdata,setFormdata] = useState (NoteData)
    const [docData,setDocData] = useState({})
    const [docRetrieved,setDocRetrieved] = useState(false)
    const [docType,setDocType] = useState('')
    const [docFormat,setDocFormat] = useState('')
    const [document_id,setDocumentId] = useState(null)
    //=============================================================================
    // goback (goes back to the calling screen)
    //=============================================================================
    const goBack = () => {
        //navigation.goBack()
        navigation.navigate(NAV_MEDINFO_DOCUMENTS)
    }    
    //=============================================================================
    // useEffect - retrieve the data and setup the form
    //=============================================================================
    useEffect(()=>{

        let documentId = user.localStorage.document_id
        if (documentId > 0) {  // display
            setDocumentId(documentId)
            DataMedicalDocsGetById(user.patient_id,documentId)// see useeffect below
           user.localStorage.document_id = 0
        } 

    },[state.docId])
    //=============================================================================
    // useEffect to load the data from the server (edit)
    //=============================================================================
    /*
    useEffect(()=>{
        if (stateDoc.data && stateDoc.data.recordset){
            let doc = stateDoc.data.recordset[0]
            setDocData(doc.doc_binary)
            // setDocFormat(doc.document_format)
            //console.log('doc------------------------------',doc)
            setDocRetrieved(true)
        } else if (state.docId.length > 0 ) { 
            let doc = state.data.recordset[0]
            setDocFormat(doc.document_format) //'PDF')
            setDocType(doc.document_type)
            //console.log('data',doc.document_format,doc.document_type,state.docId)
           // state.docId = 'pointer may 2105.pdf'
          //DataMedicalDocsGetLink(patientId,state.docId)
          DataMedicalDocsGetBinary(patientId,state.docId)
r
        }

    },[stateDoc.data])   
    */
    //=============================================================================
    // DoucmentDetails displays the details of th document
    //=============================================================================
    const DocumentDetails = (document) => {

        if (!document || !document.recordset || !document.recordset[0])
        return ( <View>
                 </View>
        )
        let docdetails = document.recordset[0]

        // return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
//console.log('doc',docdetails)

         return ( 
              <View>

              </View>
              
         ) 
    }
      //     //     <Text> Published On: {docdetails.date_published_display}</Text>    
            //     <Text> Name: {docdetails.document_name}</Text>  
//=============================================================================
    return (
        <ScrollView style={appStyles.form_container}>
            <View style={appStyles.goBackButton}>
                <IconButton type = 'GOBACK' onPress={() => goBack()} />
                {/* <Text style={appStyles.form_title}> Display Document</Text> */}
            </View>
            {DocumentDetails(state.data)}  
            {state.loading? loading(true):loading(false)}
            {state.error ? <AppMessage type = 'error' message = {'Error: '+state.error} onDismiss={()=>{DataValidationReset()}} /> : <View></View> } 
         
        </ScrollView>
    )
}
 
export default DocumentView;
//=============================================================================
