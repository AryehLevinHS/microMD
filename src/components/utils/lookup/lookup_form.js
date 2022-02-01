import React,{useState, useEffect} from 'react';
import { View,Text,VirtualizedList ,Modal,SafeAreaView,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
//import { DataTable } from 'react-native-paper';
// tools
import { loading,AppMessage,AppButton,IconButton } from '../misc_tools'
// data
import { useLookup } from '../../../store/hooks/useReferenceData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'
import colors from '../../../resources/themes/colors';

//=============================================================================
// LookupForm - the lookup window
//=============================================================================
export const LookupForm = ({lookupset,onOk,onDismiss}) =>{
    const [searchString,setSearchString] = useState('')
    //const [lookupValue,setLookupValue] = useState({id:'',description:''})
    const [lookupTitle,setLookupTitle] = useState('')
    const [state,DataLookupPharmacy,DataLookupProvider,DataLookupApptBooks] = useLookup()

    //=============================================================================
    // handleOk (returns the result)
    //=============================================================================
    const handleOk = (id,description) => {
        onOk({id,description})
        //let value = true
        //console.log('selected',lookupValue)
        // if (value === true)
        //     onOk(lookupValue)
        // else
        //     onOk({id:'',description:''})
     };
    //=============================================================================
    // retrieveLookup - retreives the data
    //============================================================================= 
    const retrieveLookup = () =>{
  
        switch(lookupset ){
            case 'pharmacy': 
                DataLookupPharmacy(searchString)
                setLookupTitle('Lookup Pharmacy')
                break;
            case 'providers': 
                DataLookupProvider(searchString)
                setLookupTitle('Lookup Providers')
                break;
            case 'staff': // NEED TO FIX LOOKUP - use providers for staff
                DataLookupApptBooks(searchString)
                setLookupTitle('Lookup Clinic Staff')
                break;
            case 'apptbook':
                DataLookupApptBooks(searchString)
                break;  
            default: 
                handleClose(false);
        }
     }  
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
       retrieveLookup()
    },[])
    //=============================================================================
    // FilterSearch - filters the search
    //============================================================================= 
    const FilterSearch = (text) => {
          setSearchString(text)
          retrieveLookup()
    }
    //=============================================================================
    // SearchBar - displays the search bar
    //============================================================================= 
    const SearchBarContainer = () => {
        return (   <View style={{marginHorizontal:10,height:70,}}>
                      <SearchBar 
                        round
                        lightTheme={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="Search..."
                        onChangeText={(text) =>{FilterSearch(text) } }
                        value={searchString}
                        containerStyle={{backgroundColor: '#c8e9fc', borderWidth: 0, borderRadius:10,
                        borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
                        // inputStyle={{backgroundColor: 'white'}}
                        /> 
                    </View>
        ) 
    }
    //=============================================================================
    // DisplayLookupList
    //============================================================================= 
    const DisplayLookupList = (lookup) => {
     
        if (!lookup || !lookup.recordset || lookup.recordset.length === 0)
            return  (<View  style={appStyles.lookup_container}>  
                     </View> )

        //============================================================================= 
        const getItem = (data, index) => ({
            code: data[index].code,
            description: data[index].description
        });

        const getItemCount = (data) => data.length; 
        //============================================================================= 
        // ItemRender - renders the item
        //=============================================================================             
        const ItemRender = ({description,id,index }) => {
          let colorlist = [colors.lookup_background,colors.lookup_background2]
        
          return ( <TouchableOpacity  onPress={()=>{handleOk(id,description)} } > 
                    <View style={[appStyles.lookup_item,{backgroundColor:colorlist[index % 2]}]}> 
                        <Text style={appStyles.lookup_item_text}>{description}</Text>
                    </View>
                   </TouchableOpacity>
          )
        }
        //============================================================================= 
           
        return (
                <View style={appStyles.lookup_container}> 
                    <VirtualizedList
                        data={lookup.recordset}
                        initialNumToRender={10}
                        renderItem={({ item,index }) => <ItemRender description={item.description} id={item.code} index={index} />}
                        keyExtractor={item => item.code}
                        getItemCount={getItemCount}
                        getItem={getItem}
                       
                    />
                </View> 
        )
      };
    //=============================================================================   
    return ( <Modal animationType='slide'>
                {state.loading ? loading(true) : loading(false)} 
                <SafeAreaView  style={appStyles.lookup_screen}>
                    <Text style={appStyles.lookup_title}>{lookupTitle}</Text>
                    {SearchBarContainer()}
                    {DisplayLookupList(state.data)} 
                    
                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}> 
                        {/* <AppButton type='ok' title='OK' onPress={() =>handleOk()}/>   */}
                        <AppButton type='cancel' title='Cancel' onPress={onDismiss}/>  
                    </View>
                </SafeAreaView>
             </Modal>
    )
}

export default LookupForm;
//=============================================================================

/*

 {lookup.recordset.map((l, i) => (
                            <ListItem
                                key={i}
                                // containerStyle={l.containerStyle}
                                // onPress={handleOk()}
                            >
                                <ListItem.Content>
                                <ListItem.Title >{l.description}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                         ))} 


                    {/* <DataTable style={appStyles.table_frame}>
                        <DataTable.Header style={{backgroundColor:'lightblue'}}>
                            <DataTable.Title>Description</DataTable.Title>
                        </DataTable.Header>
                        {lookup.recordset.map((row) => (
                            <DataTable.Row key={row.code}>
                                <DataTable.Cell>{row.description}</DataTable.Cell>
                            </DataTable.Row>
                            ))}     
                    </DataTable>    
 {lookup.recordset.map((l, i) => (
                            <ListItem
                                key={i}
                                // containerStyle={l.containerStyle}
                                onPress={handleOk()}
                            >
                              
                                <ListItem.Content>
                                <ListItem.Title >{l.description}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                         ))} 
                       */
