//import liraries
import React, { useEffect, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

// create a component
const SplashScreen = () => {

    const navigation = useNavigation();


    useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const loginUser = await AsyncStorage.getItem('loginUser');
    
          if (loginUser === null) {
            // If key doesn't exist, navigate to WelcomeScreen
            navigation.replace('WelcomeScreen');
          } else if (loginUser === 'true') {
            // If key exists and value is 'true', navigate to ProfileScreen
            navigation.replace('ProfileScreen');
          } else {
            // If key exists but value is not 'true', navigate to LoginScreen
            navigation.replace('LoginScreen');
          }
        } catch (error) {
          console.log('Error reading login status', error);
        }
      };
 
      const timer = setTimeout(() => {
        checkLoginStatus();
      }, 3000);
    
      return () => clearTimeout(timer); 
    }, [navigation]);    

    return (
        <View className='flex-1 align-center justify-between'>

            <View className='flex-row justify-between'>

                <Animatable.Image 
                  animation="slideInLeft"
                  duration={1000}
                  source={require('../../assets/images/logo.png')} 
                  style={{ width: 250, height: 250}}
                  />
                  <Animatable.Image 
                  animation="slideInRight"
                  duration={1000}
                  source={require('../../assets/images/Mask group.png')} 
                  style={{ width: 150, height: 150}}
                  />
            </View>

             <Animatable.View
              animation="zoomIn"
              duration={1000}
              className='flex-row justify-center'>
             <Image 
               source={require('../../assets/images/logo-1.png')} 
               style={{ width: 300, height: 300}}
               resizeMode="contain"
              />
             </Animatable.View>

             
              <View className='flex-row justify-between'>
                      <View></View>
                      <Animatable.Image
                        animation="slideInRight"
                        duration={1000}
                        source={require('../../assets/images/logo3.png')} 
                        style={{ width: 220, height: 220}}
                        />
                </View>
       
        </View>
    );
};
 
//make this component available to the app
export default SplashScreen;
