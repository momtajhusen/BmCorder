//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../Components/button';
import { useNavigation } from '@react-navigation/native';

// create a component
const WelcomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View className='flex-1 align-center'>
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

            <View className='flex-column space-y-4 items-center'>
                <Image 
                source={require('../../assets/images/logo-1.png')} 
                style={{ width: 200, height: 200}}
                />
                <View>
                <Text>Sparkle & Shine  Transform </Text>
                <Text>Your Drive with Every Wash!</Text>
                </View>

                 <View className="flex-row px-10">
                    <Button title="Let’s Start" onPress={() => navigation.navigate('LoginScreen')} />
                 </View>


                
                <View className="flex-row">
                  <Text>Already  have an account</Text>

                  <TouchableOpacity>
                     <Text onPress={() => navigation.navigate('LoginScreen')} style={{fontWeight:"bold"}}>? Sign in</Text>
                  </TouchableOpacity>
                </View>

            </View>

            <View></View>
        </View>
    );
};
 

//make this component available to the app
export default WelcomeScreen;
