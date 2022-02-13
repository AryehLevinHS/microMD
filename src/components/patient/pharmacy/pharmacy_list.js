import React, { useContext, useEffect, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
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
                 <TouchableOpacity key={row.pharmacy_id} style={appStyles.item}
                                   >
                    <View style={appStyles.listItem_textWithDelete}>                 
                        <Text >{row.pharmacy_name}</Text>
                        <IconButton type = 'DELETE' onPress={() => ConfirmDelete(row.pharmacy_id,row.pharmacy_name)} />
                    </View>
                    <Text >{'Phone: '+row.phone}{' Fax: '+row.fax}</Text>
                    <Text >{'hours: '+row.store_hours}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            <View style={appStyles.addButton}>
                <IconButton type = 'ADD' onPress={() => ItemAdd()} />
            </View>
            {statePharmacy.loading ? loading(true) : loading(false)} 
            <PharmacyListDisplay pharmacydata={statePharmacy.data} /> 
            { lookupOpen ?   <LookupForm lookupset='pharmacy' onOk={(lookupvalue)=>{handleItemAdd(lookupvalue)}} 
                                                              onDismiss={()=>{setLookupOpen(false)}}/> : null} 
    
        </ScrollView>
    )
}
 
export default PharmacyList;
//=============================================================================