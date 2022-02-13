import 'react-native-gesture-handler';
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Routes} from './src/navigation/routes'
import { Provider as PaperProvider } from 'react-native-paper';
import {REACT_APP_PROXYSERVER_AZURE,REACT_APP_PROXYSERVER} from '@env'; // see babel.config module name
import { GlobalProvider } from './src/store/globalStateProvider';
//rimport { navigationRef } from './src/navigation/root_navigator';
//=============================================================================
// AppSetup (custominzation and setings for a partivcular practice including login screen)
//=============================================================================
const AppSetup = () => {
   // const user = useContext (UserContext)
    // setup Tenant 
     let tenant_id = 1 //process.env.REACT_APP_TENANT_ID || '1'
    // user.tenant_id = tenant_id
     axios.defaults.headers.common['Tenant_id'] = tenant_id
    //console.log('app',REACT_APP_PROXYSERVER_AZURE)
    // setup base URL 
   let baseURL =  REACT_APP_PROXYSERVER //'http://localhost:5000' 
  // let baseURL =  REACT_APP_PROXYSERVER_AZURE //'https://patportalserver.azurewebsites.net' 
   axios.defaults.baseURL =  baseURL

   return
}
//=============================================================================
// App - main app
//=============================================================================
 function App() {
   //<NavigationContainer ref={navigationRef}>
  AppSetup()

   return (
    <PaperProvider>
       <GlobalProvider>
       <NavigationContainer>
          
            {Routes()}
         </NavigationContainer>
      </GlobalProvider>
      </PaperProvider>
    );
 }

export default App;
//=============================================================================
