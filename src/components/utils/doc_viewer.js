//https://webdesigntips.blog/web-design/javascript/library-for-displaying-pdf-documents-in-react-native/
//react-native-view-pdf
// or react-native-pdf
// tutorial
// https://www.youtube.com/watch?v=j0-4uvR5do0

// html viewer
//npm install --save-prod react-native-render-html
//https://meliorence.github.io/react-native-render-html/docs/intro

// file viewer
//$ npm install react-native-file-viewer --save

import { Text, View,ScrollView,TouchableOpacity, useWindowDimensions } from 'react-native'
//import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';
// tools
import { loading } from './misc_tools'

//=============================================================================
// PdfViewer
//=============================================================================
export const PdfViewer = (content) => {

    //=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            {/* <DocumentDisplay documentdata={state.data} />  */}
        </ScrollView>
    )
}
//=============================================================================
// HtmlViewer
//=============================================================================
export const HtmlViewer = (content) => {
    const { width } = useWindowDimensions();
    const source = {
        html: `
      <p style='text-align:center;'>
        Hello World!
      </p>`
      };

    //=============================================================================
    return ( <View>

    </View>
    //     <RenderHtml
    //       contentWidth={width}
    //       source={source}
    //    />
    )
}
//=============================================================================