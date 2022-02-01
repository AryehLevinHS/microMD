import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../themes/colors'

//=============================================================================
// Main Applicatin Styles
//=============================================================================
export const appStyles = StyleSheet.create({
    /* list item */
    item: {
      backgroundColor: colors.listitem_background,
      padding: 10,
      marginVertical: 8,
      margin:8,
      borderRadius:5,
    },
    listItem_textWithDelete: {
      flexDirection: "row",
      justifyContent:'space-between',
    },

    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    },
    addButton: {
      margin:10,
      flexDirection: "row",
      justifyContent:'center',
      alignItems:'center',
      alignSelf: 'flex-end'
    },
    addButtonContainer : {
       backgroundColor: 'green',
       width:25,
       height:25,
       borderRadius:100,
       justifyContent:'center',
       alignItems:'center',
      // position:'absolute',
      // bottom:45,
     //  right:10,
  },
    addButtonWithTitle: {
      marginHorizontal:10,
      flexDirection: "row",
      justifyContent:'space-between',
    },
    deleteButton: {
      right: 5,
      flexDirection: "row",
      alignSelf: 'flex-end',
      color: '#841584'
    },
    deleteButtonContainer : {
      backgroundColor: '#ee7d81', //red
      width:25,
      height:25,
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center',
      //position:'absolute',
  },
   goBackButton: {
      margin:10,
      flexDirection: "row",
      alignSelf: 'flex-start'
    },
    providerButtonContainer : {
      backgroundColor: '#44419e', //'darkblue',
      width:40,
      height:40,
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center',
     // position:'absolute',
     // bottom:45,
    //  right:10,
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
      backgroundColor:colors.form_background,
     },
     form_title:{
      fontSize:25,
      color:'white',
      //alignSelf:'center'
       marginLeft:50,
    },
    form_subTitle:{
      fontSize:16,
      color:'white',
      marginLeft:15,
    },
    form_text:{
      fontSize:14,
      color:'white',
      marginLeft:15,
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
     // justifyContent:'center',
     // textAlign:'center'
    },
    form_button:{
      margin: 10,
    },
    //=============================================================================
    // lookup 
    //=============================================================================
    lookup_screen: {
      flex: 1,
      marginTop: 10,
      backgroundColor:'#c8e9fc',
      borderWidth:2,
      margin:10
    },

    lookup_container: {
      flex: 1,
      borderRadius:5,
      borderWidth:1,
      marginHorizontal:15
    },
    lookup_title:{
      fontSize:25,
      color:'darkblue',
      alignSelf:'center',
       
    },
    lookup_item: {
        backgroundColor: colors.lookup_background,
        height: 24,
        justifyContent: 'center',
        marginVertical: 1,
        // marginHorizontal: 16,
        padding: 5,
    },
    lookup_item_text: {
      fontSize: 16,
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
      backgroundColor:colors.login_background,
     },
    login_title:{
      color: colors.login_practice,
      fontSize:30,
      height: 40,
      width: '100%',
      marginTop:50,
      marginBottom:10,
      textAlign: "center",  
    },
    login_header:{
      color: colors.login_header,
      fontSize:25,
      fontWeight:'bold',
      height: 40,
      width: '100%',
      marginTop:20,
      marginLeft:10,
    },
    login_image:{
      height: 100,
      width: 100,
      alignSelf:"center",
      borderRadius: 15
     } ,
     login_forgot_password:{
      color: colors.login_forgot,
      textDecorationLine: 'underline' ,
      textAlign:'right',
      marginRight:15,
      marginBottom:0 
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
  // Mail 
  //=============================================================================
  mail_patient: {
    backgroundColor: '#6fbcdc',
    padding: 10,
    marginVertical: 8,
    marginLeft:8,
    marginRight:28,
    borderRadius:5,
  },
  mail_practice: {
    backgroundColor: 'lightgreen',
    padding: 10,
    marginVertical: 8,
    marginLeft:28,
    marginRight:8,
    borderRadius:5,
  },
//=============================================================================
});