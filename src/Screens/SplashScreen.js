//import liraries
import React, { useEffect, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// create a component
const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('WelcomeScreen');
        }, 3000); 
        
        return () => clearTimeout(timer);
      }, [navigation]);

    return (
        <View className='flex-1 align-center justify-between'>

            <View className='flex-row justify-between'>
       
                <Image 
                  source={require('../../assets/images/logo.png')} 
                  style={{ width: 250, height: 250}}
                  />
                  <Image 
                  source={require('../../assets/images/Mask group.png')} 
                  style={{ width: 130, height: 130}}
                  />
            </View>

             <View className='flex-row justify-center'>
             <Image 
               source={require('../../assets/images/logo-1.png')} 
               style={{ width: 200, height: 200}}
              />
             </View>

             
              <View className='flex-row justify-between'>
                      <View></View>
                      <Image
                        source={require('../../assets/images/logo3.png')} 
                        style={{ width: 200, height: 200}}
                        />
                </View>
       
        </View>
    );
};
 
//make this component available to the app
export default SplashScreen;
