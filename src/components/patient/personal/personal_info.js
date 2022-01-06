import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// tools
import { loading } from '../../utils/misc_tools'
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
                <TouchableOpacity style={appStyles.item}>
                  {personaldata.recordset.map(row => (
                     <DataTable style={appStyles.table_frame}>
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

     //  <TouchableOpacity key={row.patient_id} style={appStyles.item}>
                //     <Text >{row.first_name+ ' '+row.last_name}</Text>
                //     <Text></Text>
                //     <Text >{'First Name: '+row.first_name}</Text>
                //     <Text >{'Last Name: '+row.last_name}</Text>
                //     <Text >{'Address: '+row.street_address +' '+row.street_address2}</Text>
                //     <Text >{row.city +' '+row.state_code+' '+row.zip}</Text>  
                //     <Text >{'Home Phone: '+row.home_phone }</Text>
                //     <Text >{'Mobile: '+row.mobile}</Text>
                //     <Text >{'Date of Birth: '+row.date_of_birth }</Text>
                //     <Text >{'Marital status: '+row.marital_status_display}</Text>
                //     <Text >{'Fax: '+row.fax }</Text>
                //     <Text >{'Email: '+row.email}</Text>
                //     onPress={() => editData()}
               // </TouchableOpacity> 
               //))}
//=============================================================================
    return (
        <ScrollView>
                <View style={appStyles.addButton}>
                <Icon 
                    name='edit'
                    type='materialicons'
                    color='#517fa4'
                    onPress={() => editData()}
                />
              </View>
            {/* <Text> Personal Information</Text> */}
            {state.loading ? loading(true) : loading(false)} 
            <PersonalInfoDisplay personaldata={state.data} /> 
        </ScrollView>
    )
}
 
export default PersonalInfo;
//=============================================================================