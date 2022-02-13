//https://webdesigntips.blog/web-design/javascript/library-for-displaying-pdf-documents-in-react-native/
//react-native-view-pdf
// or react-native-pdf
// tutorial
// https://www.youtube.com/watch?v=j0-4uvR5do0
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
// tools
import { loading } from './misc_tools'

//=============================================================================
// Get DocumentList data
//=============================================================================
const DocumentList = () => {

    //=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            {/* <DocumentDisplay documentdata={state.data} />  */}
        </ScrollView>
    )
}
export default DocumentList;
//=============================================================================