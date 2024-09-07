//import liraries
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Input from '../Components/input';
import Button from '../Components/button';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import apiClient from '../apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';



// create a component
const LoginScreen = () => {
    const navigation = useNavigation();

        // State to hold phone and password
        const [phone, setPhone] = useState('');
        const [password, setPassword] = useState('');
        const [phoneMessage, setPhoneMessage] = useState('');
        const [passwordMessage, setPasswordMessage] = useState('');
        const [isLoading, setIsLoading] = useState(false);



    // Login function
    const Login = async () => {
        let formValidation = true; 
    
        // phone Validation
        if (phone === '') {
            setPhoneMessage('Please fill phone');
            formValidation = false;
        }
        else if (phone.length < 10) {
            setPhoneMessage('Number must be at 10 digit');
            formValidation = false;
          }
        else {
            setPhoneMessage('');
        }
    
        // Password Validation
        if (password === '') {
            setPasswordMessage('Please enter password');
            formValidation = false;
        } else if (password.length < 6) {
            setPasswordMessage('Password must be at least 6 characters long');
            formValidation = false;
        } else {
            setPasswordMessage('');
        }
    
        // If everything is valid, proceed with login action
        if (formValidation) {
            try {
                setIsLoading(true);
                const response = await apiClient.post('/login', {
                    phone:phone,
                    password,
                });

                if (response.data.status) {
                    navigation.navigate('ProfileScreen',  { data: response.data}); 
                    await AsyncStorage.setItem('loginUser', 'true');
                } else {
                    Alert.alert('Login failed', response.data.message || 'Something went wrong');
                    console.log(response.data);
                }
            } catch (error) {
                Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
                console.log(error.response?.data?.message);

            } finally {
                setIsLoading(false);
              } 
        }
    };


    return (
        <View className='flex-1 align-center justify-between'>

            <View></View>

             <View className="mt-20">
                <View className=' flex-column items-center '>
                <Animatable.Image 
                animation="fadeIn"
                duration={2000}
                resizeMode="contain"
               source={require('../../assets/images/logo-1.png')} 
               style={{ width: 200, height: 200}}
              />
                </View>

              <View className="p-5 pt-0">
                  <Text className="mb-3" style={{fontWeight:"bold", fontSize:23}}>Sign In</Text>
                  <View className="mb-3">
                    <Text style={{fontSize:17, color:"#888"}}>Hi ! Welcome back, you {'\n'}have been missed</Text>
                  </View>

                   <View>
                   
                   <Animatable.View
                   animation="fadeInUp"
                   duration={1000} 
                   >
                   <Input 
                        onChangeText={setPhone}
                        Lefticon="phone-android" 
                        keyboardType="phone-pad"  
                        inputTitle="Phone" 
                        placeholder="9815XXXXXX" 
                        value={phone} 
                        showCounter={true}
                        message={phoneMessage} 
                        maxLength={10}
                    /> 

                     <View>
                        <Input 
                          onChangeText={setPassword}
                          Lefticon="lock-outline"  
                          secureTextEntry={true}  
                          Righticon="remove-red-eye" 
                          inputTitle="Password" 
                          placeholder="password" 
                          message={passwordMessage} 
                          value={password}
                          maxLength={20}
                          showCounter={true}
                          /> 
                        <TouchableOpacity className="items-end">
                           <Text className="text-end font-bold underline underline-offset-2">Forgot password ?</Text>
                        </TouchableOpacity>
                     </View>
                     </Animatable.View>

                     <Button 
                       title="Sign In"  
                       onPress={Login} 
                       loading={isLoading}
                    />
                        

                    {/* Or Line  */}
                    <Animatable.View 
                       animation="slideInLeft"
                       duration={1000} 
                    className="flex-row justify-center items-center space-x-3">
                       <View className="flex-row mt-5" style={{height:"2px", width:"40%", backgroundColor:"#ddd"}}>
                           <Text style={{fontSize:0}}></Text>
                       </View>
                       <Text className="mt-4">or</Text>
                       <View className="flex-row mt-5" style={{height:"2px", width:"40%", backgroundColor:"#ddd"}}>
                           <Text style={{fontSize:0}}></Text>
                       </View>
                    </Animatable.View>


                    <Animatable.View    
                        animation="zoomIn"
                        duration={1000} 
                        className="flex-row justify-center space-x-5 mt-5">
                        <TouchableOpacity className="rounded-full justify-center items-center"  style={{borderWidth:1, borderColor:"#ddd", width:40, height:40 }}>
                            <MaterialCommunityIcons name='google' size={23} />   
                        </TouchableOpacity>
                        <TouchableOpacity className="rounded-full justify-center items-center"  style={{borderWidth:1, borderColor:"#ddd", width:40, height:40 }}>
                            <MaterialCommunityIcons name='apple' size={23} />   
                        </TouchableOpacity>
                    </Animatable.View> 

                    <View>

                    <View className="flex-row justify-center mt-8 space-y-6">

                            <View className="flex-row">
                                <Text>Don’t have an account? </Text>
                                <TouchableOpacity>
                                    <Text className="underline underline-offset-2" style={{fontWeight:"bold"}}  onPress={() => navigation.navigate('SignupScreen')}> Sign Up</Text>
                                </TouchableOpacity>
                                </View>
                            </View>

                           <View className="mt-8 text-center flex-column justify-center items-center">
                             <Text className="text-center">By login or sign up, you agree to our terms of use and privacy policy</Text>
                           </View>

                    </View>





                   </View>
                   
              </View>
             </View>

              <View className='flex-row justify-between bg-red-100'>
                      <Animatable.Image
                         animation="slideInLeft"
                         duration={2000}
                        className="absolute bottom-0 left-0"
                        source={require('../../assets/images/logo4.png')} 
                        style={{ width: 200, height: 200}}
                        />
              <View></View>

            </View>
       
        </View>
    );
};
 
//make this component available to the app
export default LoginScreen;
