import React, { useContext, useEffect, useCallback } from 'react'
import { Text, View,ScrollView,TouchableOpacity,Linking,StyleSheet} from 'react-native'
//import YouTube from 'react-native-youtube';
// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useResourceList} from '../../../store/hooks/usePracticeData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get resource data
//=============================================================================
const ResourceList = () => {

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
                    ?  <Text key={rowdetail.resource_id} 
                             onPress={()=>OpenUrl(rowdetail.url)} 
                             style={appStyles.general_link}>{rowdetail.description}
                       </Text>
                    :  <View style={{width:50,padding:5,}}
                             key={rowdetail.resource_id}
                        >
                                   {/* spanish guy lecture 77 
                                     AIzaSyC5rjc_816TEmxFNVz5qehrh-u_1nFCyRk
                           apiKey='AIzaSyAw7dmlSLQamGdq7noiZCiMxIP0UzCc-Ao */}
                          {/* <YouTube apiKey ='AIzaSyC5rjc_816TEmxFNVz5qehrh-u_1nFCyRk'
                                   videoId ='ANdSdIlgsEw' 
                                   style={{alignSelf:'stretch',height:300}}
                          />   */}
                        
                        </View> 
                       
            ))
          }
       return display
    }
    //=============================================================================
    // ResourceListDisplay - displays the list of resources
    //=============================================================================
    const ResourceListDisplay = ({resourcedata}) => {

        if (!resourcedata || !resourcedata.recordset || resourcedata.recordset.length === 0)
           return (<View> 
                   </View>)

        return (
            <View>
                {resourcedata.recordset.map((row) => (
                  last_resource_group_id !== row.resource_group_id ?  
                    <TouchableOpacity key={row.resource_id} style={appStyles.item}>
                        <Text style={{fontWeight:"bold"}}>{row.group_name}</Text>
                        {ResourceListDetail(resourcedata,row.resource_group_id,row.group_name)}
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
        <ResourceListDisplay resourcedata={state.data} />
    </ScrollView>
 )

}

export default ResourceList;

//=============================================================================