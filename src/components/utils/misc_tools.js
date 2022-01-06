import React from 'react'
import {ActivityIndicator,Text,View} from 'react-native'
import {appStyles} from '../../resources/styles/main_styles'
import { Snackbar ,Chip  } from 'react-native-paper';
import {Button} from 'react-native-elements'
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
                              backgroundColor: 'darkblue',
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
                               backgroundColor: 'darkblue',
                               borderColor: 'transparent',
                               borderWidth: 0,
                               borderRadius: 15,
                          }}
                          containerStyle={{
                               width: '95%',
                               marginHorizontal: 10,
                               marginVertical: 10,
                          }}
               
                 />)
               break;
          default:
              break;
    }

  
}
//=============================================================================
// AppMessage - Display message
//=============================================================================
export const AppMessage = ({type,message,onPress}) =>{
     const [visible, setVisible] = React.useState(true);
     const onToggleSnackBar = () => setVisible(!isVisible);
     const onDismissSnackBar = () => setVisible(false);



     switch (type) {
          case 'error':
               //style={styles.container}
               return(<View >
                         {/* <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button> */}
                           <Snackbar 
                              style={{backgroundColor:'red'}}
                              visible={visible}
                              onDismiss={onDismissSnackBar}
                              action={{label: 'X', onPress: () => {onDismissSnackBar}, }}
                           >
                             <Text style={{alignContent:'center'}}> {message} </Text>
                           </Snackbar>
                    </View> )
               break;
          case 'success':
              // style={styles.container}
                    return(<View style={{backgroundColor:'green'}} >
                              {/* <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button> */}
                                <Snackbar
                                   visible={visible}
                                   onDismiss={onDismissSnackBar}
                                   // action={{
                                   //     label: 'Undo',
                                   //     onPress: () => {onPress},
                                   //     }}
                                   >
                                    {message}
                                </Snackbar>
                         </View> )
                    break;
               default:
               break;
     }
 
     <Snackbar visible={visible}
     onDismiss={onDismissSnackBar}
     action={{ label: 'Close',// onPress: () => { Do something },
          }}>
     Hey there! I'm a Error.
  </Snackbar> 
 }
//=============================================================================
// Display Message  - 
//=============================================================================
export const MessageDisplay = (msgType,msg) => {
     const [visible, setVisible] = React.useState(true);
     const onToggleSnackBar = () => setVisible(!visible);
     const onDismissSnackBar = () => setVisible(false);
     let   message = ''

     switch (msgType) {
     case 'error':
          message =  (<Snackbar visible={visible}
                         onDismiss={onDismissSnackBar}
                         action={{ label: 'Close',// onPress: () => { Do something },
                              }}>
                         Hey there! I'm a Error.
                      </Snackbar>  )
     break;
     case 'success':
          message =  (<Snackbar visible={visible}
                         onDismiss={() => onDismissSnackBar()}
                         // action={{ label: 'Close',// onPress: () => { Do something },
                         //      }}
                          >
                          {msg}
                      </Snackbar>  )
      break;
     default:
           message = <Text>{msg}</Text>      
     }

   return message


     //    //     <Text style={appStyles.error_msg}>{msg}</Text>
      
     // Toast.show({
     //      type: 'success',
     //      text1: 'Hello',
     //      text2: 'This is some something 👋'
     //    });
     //<Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
     // <View>
     //<Text  style={appStyles.success_msg} >{msg}</Text>
     //</View>
  
}
//=============================================================================r