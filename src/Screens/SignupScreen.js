import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Input from '../Components/input';
import Button from '../Components/button';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import apiClient from '../apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';


const SignupScreen = () => {

    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    // State to hold phone and password
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // SignUp function
    const SignUp = async () => {
        let formValidation = true;

        // Name Validation
        if (name === '') {
            setNameMessage('Please fill name');
            formValidation = false;
        } else {
            setNameMessage('');
        }

        // Phone Validation
        if (phone === '') {
            setPhoneMessage('Please fill phone');
            formValidation = false;
        } else if (phone.length < 10) {
            setPhoneMessage('Number must be at 10 digit');
            formValidation = false;
        } else {
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

        if (formValidation) {
            if (!isSelected) {
                Alert.alert('Terms & Condition', 'Please check terms and conditions');
                formValidation = false;
                return false;
            }

            try {
                setIsLoading(true);
                const response = await apiClient.post('/register', {
                    name,
                    phone,
                    password,
                });

                console.log(response);

                if (response.status) {
                    Alert.alert("Message", "Registration Successful");
                    await AsyncStorage.setItem('loginUser', 'false');
                    navigation.navigate('LoginScreen');
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
                <View className='flex-column items-center'>
                <Animatable.Image 
                animation="fadeIn"
                duration={2000}
                        source={require('../../assets/images/logo-1.png')}
                        style={{ width: 160, height: 160 }}
                        resizeMode="contain"
                    />
                </View>

                <View className="p-5 pt-0">
                    <Text className="mb-3" style={{ fontWeight: "bold", fontSize: 23 }}>Sign Up</Text>
                    <View className="mb-3">
                        <Text style={{fontSize:17, color:"#888"}} >Fill in the below form and add life to {'\n'}your car!</Text>
                    </View>

                    <View>
                        <Input
                            onChangeText={setName}
                            inputTitle="Name"
                            Lefticon="person-outline"
                            placeholder="Enter your name"
                            message={nameMessage}
                            maxLength={20}
                            showCounter={true}
                            value={name}
                        />
                        <Input
                            onChangeText={setPhone}
                            Lefticon="phone-android"
                            keyboardType="phone-pad"
                            inputTitle="Phone"
                            placeholder="9815XXXXXX"
                            message={phoneMessage}
                            value={phone}
                            maxLength={10}
                            showCounter={true}
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
                            <View className="mt-4 ml-2" style={styles.checkboxContainer}>
                                <Checkbox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <View className="flex-row">
                                   <Text className="text-end font-bold">Agree with </Text>
                                   <TouchableOpacity>
                                      <Text className="underline underline-offset-2">terms and conditions</Text>
                                   </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                        <Button
                            title="Sign Up"
                            onPress={SignUp}
                            loading={isLoading}
                            className="z-100"
                        />

                        <View>
                            <View className="flex-row justify-center mt-5 space-y-6">
                                <View className="flex-row">
                                    <Text>Already have an account?</Text>
                                    <TouchableOpacity>
                                        <Text className="underline underline-offset-2" style={{ fontWeight: "bold" }} onPress={() => navigation.navigate('LoginScreen')}> Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View className="mt-6 flex-column items-center">
                                <Text className="text-center">By logging in or signing up, you agree to our terms of use and  privacy policy</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
            <Animatable.Image
            animation="slideInRight"
            duration={2000}
                    source={require('../../assets/images/logo3.png')}
                    style={styles.footerImage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 10,
        borderWidth: 1,
    },
    footer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerImage: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 220,
        height: 220,
        zIndex: -1, // Ensure it is behind other content
    },
});

export default SignupScreen;
