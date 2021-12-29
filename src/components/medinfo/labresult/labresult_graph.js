import React, { useContext, useEffect } from 'react'
import { Text, View,ScrollView,Dimensions  } from 'react-native'
import { DataTable } from 'react-native-paper';
//import { VictoryBar,VictoryTooltip,VictoryLine, VictoryChart, VictoryTheme,VictoryAxis } from "victory-native";
//import { LineChart, Grid } from 'react-native-svg-charts'
import { LineChart} from "react-native-chart-kit";
// tools
import { loading,messageDisplay } from '../../utils/misc_tools'
// data
import { UserContext } from '../../../store/UserContext'
import {useLabResultGraph} from '../../../store/hooks/useMedinfoData'
// styles
import {appStyles} from '../../../resources/styles/main_styles'

//=============================================================================
// Get LabResultGraph data
//=============================================================================
const LabResultGraph = () => {

    const user = useContext (UserContext)
    const [state,DataLabResultGraphGet] = useLabResultGraph()
    //=============================================================================
    // useEffect - retrieve the data
    //=============================================================================
    useEffect(()=>{
        let labresult_id = user.localStorage.labresult_id
        DataLabResultGraphGet(user.patient_id,labresult_id)
    },[])
    //=============================================================================
    // LabcompareDisplay - displays a comparison of the test results
    //=============================================================================
    const LabResultGraph = ({labtestdata}) => {
    //const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const dataArray = []  
    const categoryArray = []
    const allArray=[]

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };

        if (!labtestdata || !labtestdata.recordset || labtestdata.recordset.length === 0)
           return (<View>
                   </View>)
     
     labtestdata.recordset.filter(item => item.result_value !== null)
     .forEach(item=>{
         dataArray.push(item.result_value)
         categoryArray.push(item.date_reported_display)
         allArray.push({x:item.result_value,y:item.date_reported_display})
     })

 return (
    <View>
    <Text>
      Bezier Line Chart
    </Text>
     {/* <LineChart
        data={data}
        width={350}
        height={220}
         chartConfig={chartConfig}
        />  */}

    {/* <LineChart
      data={linedata}
      width={Dimensions.get('window').width} // from react-native
      //width={'100%'} // from react-native
      height={220}
      yAxisLabel={'$'}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    /> */}
  </View>
 )     
    }
//=============================================================================
    return (
        <ScrollView>
            <Text> Laboratory Result Graph</Text>
            {state.loading ? loading(true) : loading(false)} 
            {state.error ? messageDisplay('error',state.error) : <View></View> }  
            <LabResultGraph labtestdata={state.data} /> 
        </ScrollView>
    )
}
 
export default LabResultGraph;
//=============================================================================
/*
 <LineChart
                style={{ height: 200 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart> 
     <VictoryChart width={350} theme={VictoryTheme.material}
    
    	
      >
      <VictoryAxis  label="Date" />
      <VictoryLine data={dataArray} x="quarter" y="earnings"  
                   style={{  data: { stroke: "blue" }, 
                             parent: { border: "1px solid #ccc"} 
                          }} 
              
                   labelComponent={<VictoryTooltip />}
                   interpolation="natural"
                   name = "LabGraph"
                   />
    </VictoryChart> 
  
    
    <Text style={appStyles.h3} >{labtestdata.recordset[0].cat_test_name}</Text>
        <DataTable style={appStyles.table_frame}>
            <DataTable.Header style={{backgroundColor:'lightblue'}}>
                <DataTable.Title>Date</DataTable.Title>
                <DataTable.Title>Result</DataTable.Title>
                <DataTable.Title>Flag</DataTable.Title>
            </DataTable.Header>
            {labtestdata.recordset.map((row) => (
                <DataTable.Row key={row.labresult_id}>
                    <DataTable.Cell>{row.date_reported_display}</DataTable.Cell>
                    <DataTable.Cell>{row.result_value}</DataTable.Cell>
                    <DataTable.Cell>{row.abnormal_flag_display}</DataTable.Cell>
                </DataTable.Row>
             ))}     
        </DataTable>    
     {labtestdata.recordset.map((row) => (
    <TouchableOpacity key={row.labresult_id} style={appStyles.item}>
        <Text >{row.date_reported_display}</Text>
        <Text >{'Result: '+row.result_value}</Text>
        <Text >{'Flag: '+row.abnormal_flag_display}</Text> 
    </TouchableOpacity> 
   ))} 
   */