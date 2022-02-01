import React,{useContext, useEffect} from 'react'
import { View,Text,TouchableOpacity,ImageBackground,Image } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { useNavigation } from '@react-navigation/native';
// styles
import { appStyles } from '../../resources/styles/main_styles'
import homepage_image from '../../resources/images/homepage/home_background.png'
import homepage_mail  from '../../resources/images/homepage/Mail.png'
import homepage_medinfo  from '../../resources/images/homepage/Medicalnfo.png'
import homepage_profile  from '../../resources/images/homepage/Profile.png'
import homepage_rxreq   from '../../resources/images/homepage/medication.png'
import homepage_pratice from  '../../resources/images/homepage/Practice.png'
import homepage_appt    from  '../../resources/images/homepage/Appintment.png'
import { homeGridData } from './home_griddata';
import {NAV_MEDINFO_REFILLS,NAV_USER_TERMSOFUSE,
        NAV_MAIL_NAVIGATOR,NAV_APPT_NAVIGATOR,NAV_MEDINFO_NAVIGATOR,
        NAV_PATIENT_NAVIGATOR,NAV_PRACTICE_NAVIGATOR} from '../../navigation/route_types'
// data
import { UserContext } from '../../store/UserContext'
const practice = 0
//=============================================================================
// HomeScreen
//=============================================================================
const HomeScreen = () => {
     
    const user = useContext (UserContext)
    const navigation = useNavigation();   

    //=============================================================================
    // useEffect - if terms of use not Y then open terms of use screen
    //=============================================================================
    useEffect(()=>{
     
        if (user.consent_touse === 'N'){
            navigation.navigate(NAV_USER_TERMSOFUSE)
        }
    },[])
    //=============================================================================
    // Card Pressed
    //=============================================================================
    const cardPressed= (key) => {
  
      switch (key) {
        case 'mail': navigation.navigate(NAV_MAIL_NAVIGATOR);
        break;
        case 'profile': navigation.navigate(NAV_PATIENT_NAVIGATOR);
        break;
        case 'rxreq': navigation.navigate(NAV_MEDINFO_REFILLS);
        break;
        case 'medinfo': navigation.navigate(NAV_MEDINFO_NAVIGATOR);
        break;
        case 'appointment': navigation.navigate(NAV_APPT_NAVIGATOR);
        break;
        case 'practice': navigation.navigate(NAV_PRACTICE_NAVIGATOR);
        break;
        
        default : 

      } 
      
    }
    //=============================================================================
    // HomeScreen
    //=============================================================================
    const RenderCard = ({cardId,imageId}) => {
      let Card = homeGridData.find(item => item.key === cardId)
      if (!Card) return (null)
        return (
          <View>
             <TouchableOpacity  onPress = {() => cardPressed(Card.key)} >
                <Image
                    style={appStyles.homepage_cardimage}
                    source={imageId}
                    //source={{uri: Card.img}}
                />
                <Text style={appStyles.homepage_cardtext}>{Card.title}</Text>
              </TouchableOpacity>
            </View>
        )
    }
//=============================================================================
  return (
         <View style={appStyles.homepage_container}>
             <ImageBackground source={homepage_image} resizeMode="cover" style={appStyles.homepage_image}> 
              {/* <Text style={appStyles.homepage_item}>Home Screen</Text> */}
              <Text style={appStyles.homepage_title1} >Patient Portal</Text>
               <Text style={appStyles.homepage_title2} >{user.clinic_name}</Text>
                       
                <Grid>
                    <Row  style={{ height: 100 }}>
                      <Col>
                          <RenderCard cardId='practice' imageId={homepage_pratice}/>
                      </Col>
                      <Col>
                          <RenderCard cardId='appointment' imageId={homepage_appt}/>
                      </Col>
                      <Col>
                         <RenderCard cardId='mail'imageId={homepage_mail}/>
                      </Col>
                    </Row>
                    <Row style={{height: 40 }}>
                      <Col>
                          <RenderCard cardId='medinfo' imageId={homepage_medinfo}/>
                      </Col>
                      <Col>
                          <RenderCard cardId='profile' imageId={homepage_profile}/>
                      </Col>
                      <Col>
                          <RenderCard cardId='rxreq' imageId={homepage_rxreq}/>
                      </Col>
                    </Row>
                   
                 </Grid> 
             </ImageBackground> 
          </View>
  )
}

export default HomeScreen
//=============================================================================
