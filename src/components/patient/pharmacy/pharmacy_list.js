import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import {ListItem,Button} from 'react-native-elements'
// tools
import { loading,ConfirmDialog,IconButton } from '../../utils/misc_tools'
import LookupForm  from '../../utils/lookup/lookup_form';
// data
import { UserContext } from '../../../store/UserContext'
import {usePharmacyList} from '../../../store/hooks/usePatientData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get PharmacyList data
//=============================================================================
const PharmacyList = () => {

    const user = useContext (UserContext)
    const [statePharmacy,DataPharmacyGetList,DataPharmacyAdd,DataPharmacyDelete] = usePharmacyList()
    const [lookupOpen,setLookupOpen] = useState(false)
    //=============================================================================
    // ItemAdd - adds a new item
    //=============================================================================
    const ItemAdd = () =>{
        setLookupOpen(true)
    }
    const handleItemAdd = (lookupValue) =>{
        setLookupOpen(false)
        if (lookupValue.id){
            DataPharmacyAdd(user.patient_id,lookupValue.id)
            // may need to call getlist
            // DataPharmacyGetList(user.patient_id)
        }
    }
    //=============================================================================
    // ItemDeiete - deletes an item
    //=============================================================================
    const ConfirmDelete = (pharmacy_id,pharmacy_name) => {
         ConfirmDialog('yesno','Delete Pharmacy',`Are you sure you want to delete the pharmacy: ${pharmacy_name} ?`,
         (istrue)=>{ItemDelete(istrue,pharmacy_id)} )
    }
    const ItemDelete = (confirmed,pharmacy_id) =>{
       if (confirmed) { 
        DataPharmacyDelete(user.patient_id,pharmacy_id)
        //DataPharmacyGetList(user.patient_id)
       }
    }
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataPharmacyGetList(user.patient_id)
    },[])
    //=============================================================================
    // PharmacyListDisplay - displays the pharmacy list
    //=============================================================================
    const PharmacyListDisplay = ({pharmacydata}) => {

        if (!pharmacydata || !pharmacydata.recordset || pharmacydata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {pharmacydata.recordset.map(row => (
                     <ListItem.Swipeable style={{height:80}} key={row.pharmacy_id}
                        rightContent={
                         <View style={{height:'70%',marginTop:18}}>
                             <Button 
                                 title="Delete"
                                 icon={{ name: 'delete', color: 'white' }}
                                 buttonStyle={{minHeight: '100%', backgroundColor: 'red',alignItems:'center' }}
                                 onPress={() => ConfirmDelete(row.pharmacy_id,row.pharmacy_name)}
                             />
                         </View>
                        }
                     >
                     <View key={row.pharmacy_id} style={appStyles.itemSwipe} >
                        <Text > {row.pharmacy_name}</Text>
                        <Text >{'Phone: '+row.phone}{' Fax: '+row.fax}</Text>
                        {/* <Text >{'hours: '+row.store_hours}</Text> */}
                     </View> 
                 </ListItem.Swipeable>
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <View style={{flex:1}}>
            {statePharmacy.loading ? loading(true) : loading(false)} 
            <ScrollView>
                <PharmacyListDisplay pharmacydata={statePharmacy.data} /> 
            </ScrollView>
            { lookupOpen ?   <LookupForm lookupset='pharmacy' onOk={(lookupvalue)=>{handleItemAdd(lookupvalue)}} 
                                                                onDismiss={()=>{setLookupOpen(false)}}/> : null} 
           <IconButton type = 'ADD_FLOATING' onPress={() => ItemAdd()} />
      </View>
    )
}
 
export default PharmacyList;
//=============================================================================