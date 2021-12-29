import React, { useContext, useEffect, useCallback } from 'react'
import { Text, View,ScrollView,TouchableOpacity,Linking} from 'react-native'

// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useResourceList} from '../../../store/hooks/usePracticeData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get practice info data
//=============================================================================
const PracticeInfo = () => {

    const user = useContext (UserContext)
    const [state,DataPracticeResourcesGet] = useResourceList()
    let last_resource_group_id = 0
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataPracticeResourcesGet(user.practice_id)
    },[])
    //=============================================================================
    // OpenUrl - displays the resource detail
    //=============================================================================
    const OpenUrl = async (url) => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
       
    };
    //=============================================================================
    // ResourceListDisplay - displays the resource detail
    //=============================================================================
    const ResourceListDetail = (resourcedata,resource_group_id,group_name) => {
        if (last_resource_group_id === resource_group_id) 
           return  
        
         last_resource_group_id = resource_group_id   
        let display = null
        {display = resourcedata.recordset
            .filter(rowdetail => rowdetail.resource_group_id === resource_group_id)
            .map(rowdetail => (
                     rowdetail.resource_type === 'LINK' 
                    ?  <Text key={rowdetail.resource_id} onPress={()=>OpenUrl(rowdetail.url)} style={appStyles.general_link}>{rowdetail.description}</Text>
                    :  <Text  key={rowdetail.resource_id}>{rowdetail.description}</Text>
            ))
          }
       return display
    }
    //=============================================================================
    // PracticeInfoDisplay - displays the practice info
    //=============================================================================
    const PracticeInfoDisplay = ({practiceinfodata}) => {

        if (!practiceinfodata || !practiceinfodata.recordset || practiceinfodata.recordset.length === 0)
           return (<View> 
                   </View>)

        return (
            <View>
                {practiceinfodata.recordset.map((row) => (
                  last_resource_group_id !== row.resource_group_id ?  
                    <TouchableOpacity key={row.resource_id} style={appStyles.item}>
                        <Text style={{fontWeight:"bold"}}>{row.group_name}</Text>
                        {ResourceListDetail(practiceinfodata,row.resource_group_id,row.group_name)}
                    </TouchableOpacity>
                 : null  
               ))}
           </View>
        )

      
    }

//=============================================================================
 return (
    <ScrollView>
        {state.loading ? loading(true) : loading(false)}
        <PracticeInfoDisplay practiceinfodata={state.data} />
        <Text>Clinics</Text>
    </ScrollView>
 )

}
 
export default PracticeInfo;
//=============================================================================