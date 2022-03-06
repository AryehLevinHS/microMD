import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Icon, Button } from 'react-native-elements'
// tools
import { loading,IconButton, AppButton } from '../utils/misc_tools'
// data
import { UserContext } from '../../store/UserContext'
import {useApptCurentList} from '../../store/hooks/useApptData'
// styles
import {appStyles} from '../../resources/styles/main_styles'
//=============================================================================
// Get ApptPastList (curent appointments) data
//=============================================================================
const ApptCurrentList = () => {

    const user = useContext (UserContext)
    const [state,DataApptGetCurrent,DataApptConfirm,DataApptCancel,DataApptCheckIn] = useApptCurentList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataApptGetCurrent(user.patient_id)
    },[])
    //=============================================================================
    // apptCancelHandle - sends a cancel request 
    //=============================================================================
    const apptCheckInHandle = (appointment_id) => {
        let dataToSubmit ={portal_user_id:user.portal_user_id,
                        patient_id:user.patient_id,
                        appointment_id:appointment_id}
        DataApptCheckIn(dataToSubmit)
    }
    //=============================================================================
    // apptCancelHandle - sends a cancel request 
    //=============================================================================
    const apptCancelHandle = (appointment_id) => {
    let dataToSubmit ={portal_user_id:user.portal_user_id,
                        patient_id:user.patient_id,
                        appointment_id:appointment_id}
        DataApptCancel(dataToSubmit)
    }
    //=============================================================================
    // apptConfirmHandle - sends a confirm
    //=============================================================================
    const apptConfirmHandle = (appointment_id) => {
    let dataToSubmit ={portal_user_id:user.portal_user_id,
                        patient_id:user.patient_id,
                        appointment_id:appointment_id}
    DataApptConfirm(dataToSubmit)
    }
    //=============================================================================
    // ApptCurrentDisplay - displays the list of current appointments
    //=============================================================================
    const ApptCurrentDisplay = ({apptdata}) => {

        if (!apptdata || !apptdata.recordset || apptdata.recordset.length === 0)
           return (<View></View>)

        return (
            <View>
                {apptdata.recordset.map((row) => (
                <TouchableOpacity key={row.appointment_id} style={appStyles.item}>
                    <View style={appStyles.listItem_textWithRightButton}>
                         <Text >{'Date: '+row.on_date_display}</Text>
                         {row.confirmed ==='No' ?
                         <Button title='Confirm'  
                                    buttonStyle={{ backgroundColor: 'orange',padding:2 }}
                                    titleStyle={{ fontWeight: 'bold', fontSize: 10,}}
                                    containerStyle={{height: 20, width:  70, }}
                                />
                        :
                        <Button title='Confirmed'  
                                    buttonStyle={{ backgroundColor: 'orange',padding:2 }}
                                    titleStyle={{ fontWeight: 'bold', fontSize: 10,color:'grey'}}
                                    containerStyle={{height: 20, width:  70, }}
                                    onPress={() => apptConfirmHandle(row.appointment_id)} 
                                />
                        }        
                    </View>
                    <View style={appStyles.listItem_textWithRightButton}>
                       <Text>{'For: '+row.appt_with}</Text>
                       {/* need to check if checked in already or not correct date */}
                       <Button title='Check-In'  
                                    buttonStyle={{ backgroundColor: 'green',padding:2 }}
                                    titleStyle={{ fontWeight: 'bold', fontSize: 10,}}
                                    containerStyle={{height: 20, width:  70, }}
                                    onPress={() => apptCheckInHandle(row.appointment_id)} 
                                />
                    </View>
                    <View style={appStyles.listItem_textWithRightButton}>
                        <Text >{'Location: '+row.clinic}</Text> 
                        <Button title='Cancel'  
                                    buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)',padding:2 }}
                                    titleStyle={{ fontWeight: 'bold', fontSize: 10,}}
                                    containerStyle={{height: 20, width:  70, }}
                                    onPress={() => apptCancelHandle(row.appointment_id)} 
                                />
                    </View>
                    { row.instructions ? 
                    <View>
                        <Text>{'Instructions: '+row.instructions}</Text>
                    </View>
                    : <View></View>
                    }
                </TouchableOpacity> 
               ))}
           </View>
        )
    }
//=============================================================================
    return (
        <ScrollView>
            {state.loading ? loading(true) : loading(false)} 
            <ApptCurrentDisplay apptdata={state.data} /> 
        </ScrollView>
    )
}
 
export default ApptCurrentList;
//=============================================================================