import React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// Formfield - various functions for setting up the forls
//=============================================================================
const Formfield = ({formdata,id,changefunction}) => {

    //=============================================================================
    // showError - displays the error
    //=============================================================================
    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid &&formdata.touched){
             errorMessage = (
                <HelperText type="error" visible={true}>
                   {formdata.validationMessage} 
                </HelperText>
             )
        }
        return errorMessage;
    }
     //=============================================================================
    // handlePasswordVisible 
    //=============================================================================
    const handlePasswordVisible = () => {
        formdata.showPassword = !formdata.showPassword
    }
    //=============================================================================
    // renderTemplate - setsup the form field based on type
    //=============================================================================
    const renderTemplate = () => {
        let formTemplate = null;

       // console.log('fordata',formdata.config.label)

        switch(formdata.element){
            case 'input':
                formTemplate = (
                     <View  style={appStyles.form_input_field}>   
                          {/* */}
                         <TextInput  
                           // mode="outlined"
                            error = {!formdata.valid}
                            label = {formdata.config.label}
                            placeholder = {formdata.config.placeholder}
                           // style={appStyles.form_input_field}
                            style = {{backgroundColor:'white',height:58}}
                            value = {formdata.value}
                            onBlur= {()=> changefunction(id,'onblur',formdata.value)}
                            onChangeText={(text)=> changefunction(id,'changed',text) }
                        />
                        {showError()}
                    </View>
                )
                break;
            /* --------------------------------------------------------------*/
            case 'select':
                    formTemplate = (
                    <View   style={appStyles.form_input_field}>
                         <Picker 
                            style = {{backgroundColor:'white'}}
                            selectedValue = {formdata.value}
                            onValueChange={(itemValue)=> changefunction(id,'changed',itemValue) }
                          >
                          {                            
                            formdata.config.options.map(item=>(
                              <Picker.Item label={item.value} value= {item.key} key={item.key} />
                            ))  
                          }
                         </Picker>
                        {showError()}
                    </View>
                )
                break; 
            /* --------------------------------------------------------------*/
            case 'messagetext':
            case 'textarea':
                    formTemplate = (
                    <View  styles = {appStyles.form_input_textarea}>
                        <TextInput  
                            mode="outlined"
                            multiline
                            numberOfLines={4}
                            error = {!formdata.valid}
                            label = {formdata.config.label}
                            placeholder = {formdata.config.placeholder}
                            style={{margin:5}}
                            // styles = {appStyles.form_input_textarea}
                            value = {formdata.value}
                            onBlur= {()=> changefunction(id,'onblur',formdata.value)}
                            onChangeText={(text)=> changefunction(id,'changed',text) }
                        />
                        {showError()}
                    </View>
                )
                break;
            /* --------------------------------------------------------------*/
            case 'password':
                formTemplate = (
                    <View   >
                         <TextInput   
                            mode="outlined"
                            error = {!formdata.valid}
                            label = {formdata.config.label}
                            placeholder = {formdata.config.placeholder}
                            style={appStyles.form_input_field}
                            value = {formdata.value}
                            onBlur= {()=> changefunction(id,'onblur',formdata.value)}
                            onChangeText={(text)=> changefunction(id,'changed',text) }
                            secureTextEntry = { formdata.showPassword}
                            right={<TextInput.Icon name="eye" onPress = {() =>handlePasswordVisible()} />}
                        />
                        {showError()}
                    </View>
                )
            break;
            /* --------------------------------------------------------------*/
        }
    return formTemplate
    }
//=============================================================================
 return (
    <>
        {renderTemplate()}
    </>
  );
}
export default Formfield;
//=============================================================================

/* <TextInput  
label = {formdata.config.label}
placeholder = {formdata.config.placeholder}
style ={{backgroundColor:'white'}}
value={formdata.value}
onBlur={()=> changefunction(id,'onblur',formdata.value)}
onChangeText={(text)=> changefunction(id,'changed',text) }
/>

*/