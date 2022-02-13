import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity, Image,Button } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Icon,BottomSheet,ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
//import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-crop-picker';

// tools
import { loading,IconButton } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import { usePersonaleDetails } from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

// navigation
import {NAV_PATIENT_PERSONAL_EDIT} from '../../../navigation/route_types'
//=============================================================================
// Get PersonalInfo data
//=============================================================================
const PersonalInfo = () => {

    const user = useContext (UserContext)
    const navigation = useNavigation();
    const [state,DataPersonalInfoGetDetails] = usePersonaleDetails()
    const [avatar,setAvatar] = useState('../../resources/images/homepage/Appintment.png')
    //=============================================================================

    const [selectImage, setSelectImage] = useState(false);
    const list = [
      { title: 'Open Camera',
        icon :<Icon name="camera"   type='antdesign' />,
        onPress: ()=>addImageFromCamera()},
      { title: 'Choose from gallery',
        icon:<Icon name="photograph"  type='fontisto' />,
        onPress: ()=>{ addImageFromLibrary()},
      },
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: 'orange' },
        titleStyle: { color: 'white' },
        onPress: () => setSelectImage(false),
        // icon :<Icon name="camera" />,
      },
    ];
    //=============================================================================
    // addImageFromLibrary - adds the picture from a library
    //=============================================================================
    const addImageFromLibrary = () =>{
        setSelectImage(false)
        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        //     freeStyleCropEnabled: true,
        //   }).then(image => {
        //     console.log(image);
        //   }).catch((error) => {
        //     console.log(error);
        //   });

        // launchImageLibrary({}, (response)=> {
        //     if(response.didCancel) {
        //        console.log('No Pics') 
        //     } else if (response.error) {
        //         console.log('Image Picker Failed: ',response.error) 
            
        //     } else {
        //         setAvatar(respose.uri)
        //     }
        // })
      }
    //=============================================================================
    // addImageFromCamera - adds the picture from a library
    //=============================================================================
    const addImageFromCamera = async () =>{
        setSelectImage(false)
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        //   }).then(image => {
        //     console.log(image);
        //   });
        // const response = await launchCamera({})
        //     if(response.didCancel) {
        //        console.log('No Pics') 
        //     } else if (response.error) {
        //         console.log('Image Picker Failed: ',response.error) 
            
        //     } else {
        //         setAvatar(respose.uri)
        //     }
        
      }
    
    //=============================================================================
    // editData - edits the data
    //=============================================================================
    const editData = () =>{
        navigation.navigate(NAV_PATIENT_PERSONAL_EDIT)
      }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataPersonalInfoGetDetails(user.patient_id)
    },[])
    //=============================================================================
    // PersonalInfoDisplay - displays the personal Info
    //=============================================================================
    const PersonalInfoDisplay = ({personaldata}) => {

        if (!personaldata || !personaldata.recordset || personaldata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {/* <Image source = {{uri:avatar}} style={{width:100, height:100}} /> */}
                <TouchableOpacity style={appStyles.item} >
                  {personaldata.recordset.map(row => (
                     <DataTable style={appStyles.table_frame} key={11}>
                         <DataTable.Row key={10}>
                             <DataTable.Cell>First Name</DataTable.Cell>
                             <DataTable.Cell>{row.first_name}</DataTable.Cell>
                         </DataTable.Row>    
                          <DataTable.Row key={1}>
                             <DataTable.Cell>Last Name</DataTable.Cell>
                             <DataTable.Cell>{row.last_name}</DataTable.Cell>
                         </DataTable.Row>    
                         <DataTable.Row key={2}>    
                             <DataTable.Cell>Address</DataTable.Cell>
                             <DataTable.Cell>{row.street_address +' '+row.street_address2}</DataTable.Cell>
                         </DataTable.Row>    
                         <DataTable.Row key={3}>  
                             <DataTable.Cell></DataTable.Cell>
                             <DataTable.Cell>{row.city +' '+row.state_code+' '+row.zip}</DataTable.Cell>
                         </DataTable.Row>
                        <DataTable.Row key={4}>  
                             <DataTable.Cell>Home Phone</DataTable.Cell>
                             <DataTable.Cell>{row.home_phone}</DataTable.Cell>
                         </DataTable.Row>
                         <DataTable.Row key={5}>  
                             <DataTable.Cell>Mobile</DataTable.Cell>
                             <DataTable.Cell>{row.mobile}</DataTable.Cell>
                         </DataTable.Row>
                          <DataTable.Row key={6}>  
                             <DataTable.Cell>Date of Birth</DataTable.Cell>
                             <DataTable.Cell>{row.date_of_birth}</DataTable.Cell>
                         </DataTable.Row>
                         <DataTable.Row key={7}>  
                             <DataTable.Cell>Marital status</DataTable.Cell>
                             <DataTable.Cell>{row.marital_status_display}</DataTable.Cell>
                         </DataTable.Row>
                         <DataTable.Row key={8}>  
                             <DataTable.Cell>Fax</DataTable.Cell>
                             <DataTable.Cell>{row.fax}</DataTable.Cell>
                         </DataTable.Row>
                         <DataTable.Row key={9}>  
                             <DataTable.Cell>E-Mail</DataTable.Cell>
                             <DataTable.Cell>{row.email}</DataTable.Cell>
                         </DataTable.Row> 
                     </DataTable>   
                    ) )}     
                
               
              </TouchableOpacity> 
           </View>
        )
    }

     
//=============================================================================
    return (
        <ScrollView>
                <View style={appStyles.addButton}>
                {/* <Icon 
                    name='person'
                    type='ionicons'
                    color='#517fa4'
                    onPress={() => setSelectImage(true)}
                /> */}
                <IconButton type = 'EDIT' onPress={() => editData()} />
                </View>
            {/* <Text> Personal Information</Text> */}
            {state.loading ? loading(true) : loading(false)} 
            <PersonalInfoDisplay personaldata={state.data} /> 
             
            <BottomSheet modalProps={{}} isVisible={selectImage}>
                {list.map((l, i) => (
                <ListItem
                    key={i}
                    containerStyle={l.containerStyle}
                    onPress={l.onPress}
                >
                    {l.icon}
                    <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                ))}
             </BottomSheet>
        </ScrollView>
    )
}
 
export default PersonalInfo;
//=============================================================================