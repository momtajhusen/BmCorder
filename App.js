import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 
      <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown:false}}/>
           <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown:false}}/>
           <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown:false}}/>
           <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown:false}}/>
           <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown:false}}/>
           
      </Stack.Navigator>
      </NavigationContainer>
 

  );
}
 