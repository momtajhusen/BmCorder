//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../Components/button';
import { useNavigation } from '@react-navigation/native';

// create a component
const ProfileScreen = ({route}) => {

    const { data } = route.params;

    const name = data?.data?.name;


    const navigation = useNavigation();

    return (
        <View className='flex-1 align-center justify-center'>
 
            <View className='flex-column space-y-20 items-center'>
                <Image 
                source={require('../../assets/images/logo-1.png')} 
                style={{ width: 200, height: 200}}
                />
                
                <View>
                <Text style={{ fontWeight:"bold", fontSize:20}}>{name}</Text>
                </View>

                 <View className="flex-row px-10">
                    <Button title="Logout" onPress={() => navigation.navigate('LoginScreen')} />
                 </View>

            </View>
 
        </View>
    );
};
 

//make this component available to the app
export default ProfileScreen;
