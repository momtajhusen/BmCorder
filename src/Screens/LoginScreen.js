//import liraries
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Input from '../Components/input';
import Button from '../Components/button';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import apiClient from '../apiClient';


// create a component
const LoginScreen = () => {
    const navigation = useNavigation();

        // State to hold phone and password
        const [phone, setPhone] = useState('');
        const [password, setPassword] = useState('');
        const [phoneMessage, setPhoneMessage] = useState('');
        const [passwordMessage, setPasswordMessage] = useState('');


    // Login function
    const Login = async () => {
        let formValidation = true; 
    
        // phone Validation
        if (phone === '') {
            setPhoneMessage('Please fill phone');
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
                const response = await apiClient.post('/login', {
                    phone:phone,
                    password,
                });

                if (response.data.status) {
                    navigation.navigate('ProfileScreen',  { data: response.data}); // Navigate to your desired screen
                } else {
                    Alert.alert('Login failed', response.data.message || 'Something went wrong');
                    console.log(response.data);
                }
            } catch (error) {
                Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
                console.log(error.response?.data?.message);

            }
        }
    };


    return (
        <View className='flex-1 align-center justify-between'>

            <View></View>

             <View className="mt-20">
                <View className=' flex-column items-center '>
                <Image 
               source={require('../../assets/images/logo-1.png')} 
               style={{ width: 150, height: 150}}
              />
                </View>

              <View className="p-5">
                  <Text className="mb-3" style={{fontWeight:"bold", fontSize:23}}>Sign In</Text>
                  <View className="mb-3">
                    <Text>Hi ! Welcome back, you</Text>
                    <Text>have been missed </Text>
                  </View>

                   <View>

                   <Input 
                        onChangeText={setPhone}
                        Lefticon="phone-android" 
                        keyboardType="phone-pad"  
                        inputTitle="Phone" 
                        placeholder="9815XXXXXX"  
                        message={phoneMessage} 
                    /> 

                     <View>
                        <Input 
                          onChangeText={setPassword}
                          Lefticon="lock-outline"  
                          secureTextEntry={true}  
                          Righticon="remove-red-eye" 
                          inputTitle="Password" 
                          placeholder="password" 
                          message={passwordMessage} /> 
                        <TouchableOpacity className="items-end">
                           <Text className="text-end font-bold underline underline-offset-2">Forgot password ?</Text>
                        </TouchableOpacity>
                     </View>

                     <Button title="Sign In"  onPress={Login} />
                        

                    {/* Or Line  */}
                    <View className="flex-row justify-center items-center space-x-3">
                       <View className="flex-row mt-5" style={{height:"2px", width:"40%", backgroundColor:"#ddd"}}>
                           <Text style={{fontSize:0}}></Text>
                       </View>
                       <Text className="mt-4">or</Text>
                       <View className="flex-row mt-5" style={{height:"2px", width:"40%", backgroundColor:"#ddd"}}>
                           <Text style={{fontSize:0}}></Text>
                       </View>
                    </View>


                    <View className="flex-row justify-center space-x-5 mt-5">
                        <TouchableOpacity className="rounded-full justify-center items-center"  style={{borderWidth:1, borderColor:"#ddd", width:40, height:40 }}>
                            <MaterialCommunityIcons name='google' size={23} />   
                        </TouchableOpacity>
                        <TouchableOpacity className="rounded-full justify-center items-center"  style={{borderWidth:1, borderColor:"#ddd", width:40, height:40 }}>
                            <MaterialCommunityIcons name='apple' size={23} />   
                        </TouchableOpacity>
                    </View> 

                    <View>

                    <View className="flex-row justify-center mt-8 space-y-6">

                            <View className="flex-row">
                                <Text>Don’t have an account?</Text>
                                <TouchableOpacity>
                                    <Text className="underline underline-offset-2" style={{fontWeight:"bold"}}  onPress={() => navigation.navigate('SignupScreen')}> Sign Up</Text>
                                </TouchableOpacity>
                                </View>
                            </View>

                           <View className="mt-8 text-center flex-column justify-center items-center">
                             <Text>By login or sign up, you agree to our terms of use and</Text>
                             <Text>privacy policy</Text>
                           </View>

                    </View>





                   </View>
                   
              </View>
             </View>

             
              <View className='flex-row justify-between'>
                      <Image
                        source={require('../../assets/images/logo4.png')} 
                        style={{ width: 150, height: 150}}
                        />
                      <View></View>

                </View>
       
        </View>
    );
};
 
//make this component available to the app
export default LoginScreen;
