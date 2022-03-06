import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,TouchableOpacity} from 'react-native'

// tools
import { loading } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useNewsList} from '../../../store/hooks/usePracticeData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
// navigation
//import { BottomNav } from '../../../navigation/bottom_navigation'
//import { DrawerNavigation } from '../../../navigation/drawer_navigation'

//=============================================================================
// Get news data
//=============================================================================
const NewsList = () => {

    const user = useContext (UserContext)
    const [state,DataNewsGetList] = useNewsList()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        DataNewsGetList(user.practice_id)
    },[])
    //=============================================================================
    // NewsListDisplay - displays the list of news articles
    //=============================================================================
    const NewsListDisplay = ({newsdata}) => {

        if (!newsdata || !newsdata.recordset || newsdata.recordset.length === 0)
           return (<View> 
                   </View>)
          

        return (
            <View>
                {newsdata.recordset.map((row) => (
                <TouchableOpacity key={row.news_id} style={appStyles.item}>
                    <Text style={appStyles.bold}>{row.document_title}</Text>
                    <Text>{row.description}</Text>
                    <Text style={appStyles.italic}>{'Published: '+row.published_on_display}{'  By: '+row.published_by_name}</Text>
                </TouchableOpacity> 
               ))}
           </View>
        )

      
    } 
//=============================================================================
 return (
    <ScrollView>
        {state.loading ? loading(true) : loading(false)}
        <NewsListDisplay newsdata={state.data} />
    </ScrollView>
 )

}
 
export default NewsList;
//=============================================================================