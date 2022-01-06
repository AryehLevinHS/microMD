import 'react-native-gesture-handler';
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Routes} from './src/navigation/routes'
import { Provider as PaperProvider } from 'react-native-paper';

//=============================================================================
// AppSetup (custominzation and setings for a partivcular practice including login screen)
//=============================================================================
const AppSetup = () => {
   // const user = useContext (UserContext)
    // setup Tenant 
     let tenant_id = 1 //process.env.REACT_APP_TENANT_ID || '1'
    // user.tenant_id = tenant_id
     axios.defaults.headers.common['Tenant_id'] = tenant_id
  
    // setup base URL 
   // let baseURL = 'http://localhost:5000'
   let baseURL = 'https://patportalserver.azurewebsites.net' // process.env.REACT_APP_PROXYSERVER || 'https://patportalserver.azurewebsites.net'
   axios.defaults.baseURL =  baseURL

   return
}
//=============================================================================
// App - main app
//=============================================================================
 function App() {
  AppSetup()

   return (
    <PaperProvider>
       <NavigationContainer>
         {Routes()}
      </NavigationContainer>
      </PaperProvider>
    );
 }

export default App;
//=============================================================================
