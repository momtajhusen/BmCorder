//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SignupScreen from '../Screens/SignupScreen';
 


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// create a component
const StackNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown:false}}/>
             <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown:false}}/>
             <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
};

//make this component available to the app
export default StackNavigation;
