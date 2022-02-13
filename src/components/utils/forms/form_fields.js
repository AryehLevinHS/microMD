import React,{useState} from 'react';
import { View,Text ,StyleSheet, TextInput} from 'react-native';
import { HelperText, } from 'react-native-paper'; //TextInput
import {Icon} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
//import moment from 'moment';
// npm i react-native-neat-date-picker

import {appStyles} from '../../../resources/styles/main_styles'
import colors from '../../../resources/themes/colors';

//=============================================================================
// Formfield - various functions for setting up the forls
//=============================================================================
const Formfield = ({formdata,id,changefunction,lookupfn}) => {

    //=============================================================================
    // showError - displays the error
    //=============================================================================
    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid &&formdata.touched){
             errorMessage = (
                <HelperText type="error" visible={true} style={{fontWeight:'bold'}}> 
                   {formdata.validationMessage} 
                </HelperText>
             )
             //style={{backgroundColor:'white'}}
        }
        return errorMessage;
    }
    //=============================================================================
    // renderTemplate - setsup the form field based on type
    //=============================================================================
    const renderTemplate = () => {
        let formTemplate = null;
        const [date, setDate] = useState(new Date(1598051730000));
        const [pwdShow,setPwdShow] = useState(false)

        // const onChange = (event, selectedDate) => {
        //     const currentDate = selectedDate || date;
        //   //  setShow(Platform.OS === 'ios');
        //     setDate(currentDate);
        //   };
        //============================================================================= 
        const [isPickerShow, setIsPickerShow] = useState(false);
       
        const showDatePicker = () => {
          setIsPickerShow(true);
        };
      
        const onDateChange = (event, value) => {
          setDate(value);
          if (Platform.OS === 'android') {
            setIsPickerShow(false);
          }
        };
       
        //=============================================================================
        const getBorderColor = () =>{
              if (!formdata.valid) 
                 return 'red'
              else 
                return colors.fieldborder
          }
        //=============================================================================
        const displayLabel = () =>{
            if (formdata.config.label) {
               return (
                        <View  style={formStyles.form_input_field_label}>
                            <Text style={formStyles.form_input_label_text}>{formdata.config.label}</Text>
                        </View>    
                )
            }

        }
      //=============================================================================
      switch(formdata.element){
            case 'input': case 'input_number': 
            //case 'date':
                formTemplate = (
                    <View >   
                          {displayLabel()}
                          {/* change border color to red if error */}
                          <View style={[formStyles.form_input_field_wrapper,{borderColor:getBorderColor()}]}>
                            <TextInput  
                                error = {!formdata.valid}
                                // placeholder = {formdata.config.placeholder}
                                style  = {formStyles.form_input_field_text}
                                value  = {formdata.value}
                                onBlur = {()=> changefunction(id,'onblur',formdata.value)}
                                onChangeText = {(text)=> changefunction(id,'changed',text) }
                                keyboardType={formdata.element === 'input_number'? "number-pad":'default'}                                //keyboardType="number-pad"
                                //maxLengh={4}  
                            />
                          </View>
                          {showError()}
                    </View>
                )
                break;
            /* --------------------------------------------------------------*/
            case 'select':
                    formTemplate = (
                        <View>
                             {displayLabel()}
                             <View style={formStyles.form_input_field_wrapper}>
                               <Picker 
                                style={formStyles.form_input_picker}
                                    selectedValue = {formdata.value}
                                    onValueChange={(itemValue)=> changefunction(id,'changed',itemValue) }
                                >
                                {                            
                                    formdata.config.options.map(item=>(
                                    <Picker.Item label={item.value} value= {item.key} key={item.key} />
                                    ))  
                                }
                                </Picker>
                          </View>
                         {showError()}
                    </View>
                    )
                break; 
                /* --------------------------------------------------------------*/
                case 'date':
                    formTemplate = (
                        <View  >
                             {displayLabel()}
                             <View style={[formStyles.form_input_field_wrapper,{borderColor:getBorderColor()}]}>
                                 {/* // NEEED TO FIX */}
                                <TextInput  
                                    error = {!formdata.valid}
                                    style  = {formStyles.form_input_field_text}
                                    value  = {formdata.value}
                                    onBlur = {()=> changefunction(id,'onblur',formdata.value)}
                                    onChangeText = {(text)=> changefunction(id,'changed',text) }
                                    keyboardType={formdata.element === 'input_number'? "number-pad":'default'} 
                                    dataDetectorTypes={'calendarEvent'}
                                />
                             </View>
                             {showError()}
                        </View>
                    )
                       
                                {/* <DateTimePicker
                                    testID="dateTimePicker"r
                                    value={new Date()}
                                    mode={'date'}
                                    is24Hour={true}
                                    display="default"
                                    onChange={(event,seletedDate) => onChange(event,seletedDate)}
                                    //style={formStyles.form_input_datePickerStyle}
                                />    */}
                             {/* <DateTimePicker
                                    style={formStyles.form_input_datePickerStyle}
                                    mode="date" // The enum of date, datetime and time
                                    value = {new Date}
                                    //value = {moment(formdata.value).format('DD-MM-YYYY')}
                                    placeholder="select date"
                                    format="DD-MM-YYYY"
                                    display="default"
                                 //   maximumDate="01-01-2022"
                                 //   minimumDate="01-01-2019"
                                    onChange={(date) => {
                                        changefunction(id,'changed',moment(date).format('YYYY-MM-DD'))  
                                      //  changefunction(id,'changed',date)  
                                }}
                                  /> */}
                               
                         //    </View>
                        //{showError()}
                    //</View>
                  
                break; 
            /* --------------------------------------------------------------*/
            case 'messagetext':
            case 'textarea':
                    formTemplate = (
                        <View  >
                          {displayLabel()}
                          <View style={[formStyles.form_input_field_wrapper,{borderColor:getBorderColor()}]}>
                          <TextInput  
                                mode= "flat"
                                multiline
                                numberOfLines={4}
                                error = {!formdata.valid}
                                style={formStyles.form_input_field_textarea}
                                //label = {formdata.config.label}
                                placeholder = {formdata.config.placeholder}
                                value = {formdata.value}
                                onBlur= {()=> changefunction(id,'onblur',formdata.value)}
                                onChangeText={(text)=> changefunction(id,'changed',text) }
                            />
                           </View>
                          {showError()}
                        </View>
                 
                )
                break;
            /* --------------------------------------------------------------*/
            case 'password':
                formTemplate = (
                    <View >   
                          {displayLabel()}
                          <View style={[formStyles.form_input_field_wrapper_icon,{borderColor:getBorderColor()}]}>
                            <View style={{flex:1}}>
                            <TextInput  
                                    error = {!formdata.valid}
                                    //placeholder = {formdata.config.placeholder}
                                    style={formStyles.form_input_field_text}
                                    value = {formdata.value}
                                    onBlur= {()=> changefunction(id,'onblur',formdata.value)}
                                    onChangeText={(text)=> changefunction(id,'changed',text) }
                                    secureTextEntry = {!pwdShow}
                                    maxLength={15}
                                />
                            </View>    
                            <Icon name= {!pwdShow ? 'eye' :'eyeo'} type='antdesign'
                                  onPress={() => {setPwdShow(!pwdShow)}}  />
                          </View>
                          {showError()}
                    </View>
                )
            break;
            /* --------------------------------------------------------------*/
            case 'lookup':
                formTemplate = (
                    <View >   
                          {displayLabel()}
                          <View style={[formStyles.form_input_field_wrapper_icon,{borderColor:getBorderColor()}]}>
                            <TextInput  
                                error = {!formdata.valid}
                                //placeholder = {formdata.config.placeholder}
                                style={formStyles.form_input_field_text}
                                value = {formdata.value}
                                onBlur= {()=> changefunction(id,'onblur',formdata.value)}
                                onChangeText={(text)=> changefunction(id,'changed',text) }
                            />
                            <Icon name= 'search1' type='antdesign'  onPress={() => {lookupfn()}}  />
                          </View>
                          {showError()}
                    </View>
                )
            break;
            /* --------------------------------------------------------------*/
            case 'dropdownlookup':
                    formTemplate = (
                        <View>
                             {displayLabel()}
                             <View style={{flexDirection:'row',marginRight:15}}>
                                <View style={[formStyles.form_input_field_wrapper,{flex:1}]}>
                                <Picker 
                                    style={formStyles.form_input_picker}
                                        selectedValue = {formdata.value}
                                        onValueChange={(itemValue)=> changefunction(id,'changed',itemValue) }
                                    >
                                    {                            
                                        formdata.config.options.map(item=>(
                                        <Picker.Item label={item.value} value= {item.key} key={item.key} />
                                        ))  
                                    }
                                    </Picker>
                                </View>
                                  {typeof lookupfn ==='function' &&
                                  <Icon name= 'search1' type='antdesign' color='white'  onPress={() => lookupfn()  }  /> }  
                    
                              </View>
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
const formStyles = StyleSheet.create({
    form_input_field_label:{
        marginTop:5,
        marginLeft:15,
        paddingVertical:4,
    },
    form_input_label_text:{
        color:"white",
    },
    form_input_field_wrapper:{
        backgroundColor:colors.field,
        borderColor: colors.fieldborder,
        borderWidth:1,
        borderRadius:4,
        marginHorizontal:15,
    },
    form_input_field_wrapper_icon:{
        backgroundColor: colors.field,
        borderColor: colors.fieldborder,
        borderWidth:1,
        borderRadius:4,
        marginHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    form_input_field_text:{
        fontSize:15,
        backgroundColor:'white',
        height: 20,
        margin: 5,
      },
     form_input_field_textarea:{
        fontSize:15,
        backgroundColor:'white',
        margin: 5,
     },
      form_input_picker:{
        marginVertical: 0,
        padding: 0,
        borderWidth: 1,
        borderColor: "#666",  
       // color:'green',
       // height:40
      },
      form_input_datePickerStyle: {
        width: '100%',
      //  marginTop: 20,
      }
    //   form_input_picker_item:{
    //     marginVertical: 0,
    //     padding: 5,
    //     borderWidth: 1,
    //     borderColor: "#666",  
    //   }

})
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