import React from 'react'
import {ActivityIndicator,Text,TouchableOpacity,View,Alert} from 'react-native'
import {appStyles} from '../../resources/styles/main_styles'
import { Snackbar ,Chip  } from 'react-native-paper';
import {Button,Icon} from 'react-native-elements'
import colors from '../../resources/themes/colors';
//=============================================================================
// Loading  - determinins if its loading
// need to pass in if loading 
//=============================================================================
export const loading = (isLoading) => {
     return (isLoading ?  <ActivityIndicator size="small" color="#0000ff" /> : null )
}
//=============================================================================
// AppButton Custom Button
//=============================================================================
export const AppButton = ({type,title,onPress}) =>{

    switch (type) {
         case 'send':
              return(<Button title={title} onPress={onPress} 
                         icon={{
                              name: 'send',
                              type: 'material-icons',
                              size: 15,
                              color: 'white',
                         }}
                         iconRight
                         buttonStyle={{
                              backgroundColor: colors.button_background,
                              borderColor: 'transparent',
                              borderWidth: 0,
                              borderRadius: 10,
                         }}
                         containerStyle={{
                              width: '95%',
                              marginHorizontal: 10,
                              marginVertical: 10,
                         }}
              
                />)
              break;
              case 'save':
                    return(<Button title={title} onPress={onPress} 
                          icon={{
                               name: 'save',
                               type: 'material-icons',
                               size: 15,
                               color: 'white',
                          }}
                          iconRight
                          buttonStyle={{
                               backgroundColor: colors.button_background,
                               borderColor: 'transparent',
                               borderWidth: 0,
                               borderRadius: 10,
                          }}
                          containerStyle={{
                               width: '95%',
                               marginHorizontal: 10,
                               marginVertical: 10,
                          }}
               
                    />)
               break;
          default: /* no icon */
               return(<Button title={title} onPress={onPress} 
                    buttonStyle={{
                         backgroundColor: colors.button_background,
                         borderColor: 'transparent',
                         borderWidth: 0,
                         borderRadius: 10,
                    }}
                    containerStyle={{
                         width: '95%',
                         marginHorizontal: 10,
                         marginVertical: 10,
                    }}
         
               />)
         break;
              break;
    }

  
}
//=============================================================================
// getAppMessageColor - Gets the app message color
//=============================================================================
const getAppMessageColor = (msgType) => {
   switch (msgType) {
        case 'error': return ('red')
        case 'success': return ('green') 
        case 'info': return ('gray') 
        default: return ('black') 
   }
}
//=============================================================================
// AppMessage - Display message
//=============================================================================
export const AppMessage = ({type,message,onDismiss,onPress}) =>{
  
    if (type==='error' || type === 'info') { 
       setTimeout(()=>{ onDismiss() },5000)
    }

   return (
          <TouchableOpacity style={{backgroundColor:getAppMessageColor(type),
               width: '95%', alignSelf:'center' ,borderRadius:5, }}>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text onPress={onPress}
                         style ={{ color: 'white',
                                   paddingLeft: 5,
                                   paddingTop:5,
                                   height:30,
                                   }} >
                    {message}
                    </Text>
                    {typeof onDismiss==='function'&&
                    <Icon 
                         name='close'
                         type='antdesign'
                         color='white'
                         onPress={() => { onDismiss()}}
                    /> }
               </View>
          </TouchableOpacity>
                     
   )
 }
//=============================================================================
// AppMessage - Display message
//=============================================================================
// export const AppMessage2 = ({type,message,onDismiss}) =>{
//      const [visible, setVisible] = React.useState(true);
//      const onToggleSnackBar = () => setVisible(!isVisible);
//      const onDismissSnackBar = () => setVisible(false);

//      return(<View >
//                 <Snackbar 
//                     style={{backgroundColor:getAppMessageColor(type)}}
//                     onDismiss={onDismiss}
//                     visible={true}
//                     action={{
//                          label: 'Close',
//                          onPress: () => {onDismiss() }
//                          }}
//                     >
//                     <Text style={{alignContent:'center'}}> {message} </Text>
//                 </Snackbar>
//           </View> )

//  }
//=============================================================================
// Confirm Dialog 
//=============================================================================
export const ConfirmDialog = (msgType,msgHeader,msg,onPress) => {
   
     return Alert.alert(
          msgHeader,
          msg,
          [// The "Yes" button
            { text: "Yes", onPress: () =>{onPress(true)}  },
            // The "No" button
            { text: "No",  },
          ]
        );
 
}
//=============================================================================r