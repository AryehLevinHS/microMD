//import MapView from 'react-native-maps';
import { Text, View } from 'react-native'

//=============================================================================
// Get ClinicMap
//=============================================================================
const ClinicMap = (clinic_id) => {

    //https://blog.logrocket.com/react-native-maps-introduction/
    let latitude = 37.78825
    let longitude = -122.4324
    let latitudeDelta = 0.0922
    let longitudeDelta = 0.0421



//=============================================================================
return (
    <View>
        <Text>Clinic Map </Text>
       {/* <MapView
            initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta:latitudeDelta,
                        longitudeDelta: longitudeDelta,
            }}
        /> */}
    </View>
)
}

export default ClinicList;
