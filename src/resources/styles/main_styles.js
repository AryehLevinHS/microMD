import React from 'react'
import { StyleSheet } from 'react-native'

//=============================================================================
// Main Applicatin Styles
//=============================================================================
export const appStyles = StyleSheet.create({
    item: {
      backgroundColor: '#6fbcdc',//'#2196F3', //"#f9c2ff",
      padding: 10,
      marginVertical: 8,
      margin:8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    },
    addButton: {
      //backgroundColor:'blue',
      //width: 55,
      //height:55,
      margin:10,
      //right: 5,
     // borderRadius:100,
       flexDirection: "row",
      justifyContent:'center',
      alignItems:'center',
      alignSelf: 'flex-end'
    },
    //=============================================================================
    // General Settings
    //=============================================================================
    general_link:{
      color: "blue",
      textDecorationLine: 'underline' 
    },
    main_title:{
      color: "darkblue",
      fontSize:30,
      height: 40,
      width: '100%',
      marginTop:60,
      textAlign: "center",  
    },
    h1:{
      fontSize:30,
      height: 40,  
    },
    h2:{
      fontSize:25,
      height: 30,  
    },
    h3:{
      fontSize:20,
      height: 25,  
    },
    hightlightedText:{
      fontWeight:'bold'
    },
    bold:{
      fontWeight:'bold'
    },
    italic:{
      fontStyle: 'italic'
    },
    drawermenu_title:{
      textAlign: "center",  
      color: "darkblue",
      fontSize:30,
      backgroundColor:"white"
    },

    error_msg:{
      color: "white",
      backgroundColor:'red',
      position:'absolute',
      bottom: 10,
      width:'100%',
      alignItems:'center',
      justifyContent:'center'
    },
    success_msg:{
      color: "white",
      backgroundColor:'green',
      position:'absolute',
     // top: 100,
     // bottom: 0,
      width:'100%',
      alignItems:'center',
      justifyContent:'center'
    },
    //=============================================================================
    // Forms 
    //=============================================================================
    form_container:{
      flex: 1,
      backgroundColor:'lightgray'
     },
     form_title:{
      fontSize:30,
      height: 40,  
      justifyContent:'center',
    },
    form_input_field:{
      fontSize:15,
      backgroundColor:'white',
      height: 60,
      margin: 10,
      borderWidth: 1,
      borderRadius:5,
      paddingHorizontal: 10,
      justifyContent: 'space-evenly'  //'center',
     // textAlign:'center'
    },
    form_input_textarea:{
      fontSize:15,
      backgroundColor:'white',
      marginTop: 5,
      borderWidth: 1,
      borderRadius:5,
      justifyContent:'center',
     // textAlign:'center'
    },
    form_button:{
      margin: 10,
    },
    //=============================================================================
    // tables 
    //=============================================================================
    table_frame:{
      borderWidth: 1,
      borderRadius:2,
      margin:2,
      width:'99%',
      fontSize:18,
    },
    //=============================================================================
    // navigation drawer
    //=============================================================================
    drawer_item:{
      flexDirection: 'row',
      borderRadius:2,
      margin:2,
      width:'99%',
      fontSize:18,
    },
    drawer_itemText:{
      paddingVertical:7,
      fontSize:18,
    },
    
    //=============================================================================
    // Login
    //=============================================================================
    login_container:{
      flex: 1,
      backgroundColor:'lightgray'
     },
    login_title:{
      color: "darkblue",
      fontSize:30,
      height: 40,
      width: '100%',
      marginTop:50,
      marginBottom:10,
      textAlign: "center",  
    },
    login_header:{
      color: "black",
      fontSize:25,
      fontWeight:'bold',
      height: 40,
      width: '100%',
      marginTop:20,
      marginLeft:10,
    },
    login_image:{
      height: 80,
      width: 80,
      alignSelf:"center",
      borderRadius: 15
     } ,
     login_forgot_password:{
      color: "blue",
      textDecorationLine: 'underline' ,
      textAlign:'right',
      marginRight:10,
      marginBottom:20 
     },
    //=============================================================================
    // Home Page
    //=============================================================================
     homepage_container:{
      flex: 1,
     },
     homepage_image:{
      flex: 1,
      justifyContent: "center"
     }, 
     
     homepage_item:{
      flex: 1,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",  
     },
     homepage_title1:{
      color: "white",
      fontWeight: "bold",
      textAlign: "right", 
      fontSize:25, 
      paddingRight:7,
      marginTop:60
     },
     homepage_title2:{
      color: "white",
      fontWeight: "bold",
      textAlign: "right", 
      fontSize:25, 
      paddingRight:7,
      marginBottom:30
     },
     homepage_cardtext:{
      color: "white",
      fontWeight: "bold",
      textAlign: "center",  
     },
     homepage_cardimage:{
      height: 50,
      width: 50,
      alignSelf:"center",
      borderRadius: 15
     } ,
 
 //=============================================================================
 // password Page
 //=============================================================================
  password_container:{
    // justifyContent:'center',
    flex: 1,
    backgroundColor:'lightgray'
   },
//=============================================================================
});