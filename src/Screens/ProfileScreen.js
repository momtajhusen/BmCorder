//import liraries
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../Components/button';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import TypeWriter from 'react-native-typewriter';




// create a component
const ProfileScreen = ({route}) => {

    const data = route?.params?.data;
    
    const name = data?.data?.name;
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);


    const LogOut = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem('loginUser');
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.error('Failed to remove the key from AsyncStorage:', error);
        } finally {
            setIsLoading(false);
        }
    }
    

    return (
        <View className='flex-1 align-center justify-center'>
 
            <View className='flex-column space-y-20 items-center'>
                <Animatable.Image 
                animation="fadeIn"
                duration={2000}
                source={require('../../assets/images/logo-1.png')} 
                style={{ width: 200, height: 200}}
                />
                
                <View>
                <TypeWriter
                        style={{ fontWeight: 'bold', fontSize: 20 }}
                        typing={1}
                        minDelay={100} // Adjust typing speed here
                        maxDelay={150}
                    >
                        {name}
                    </TypeWriter>
                </View>

                 <View className="flex-row px-10">
                    <Button 
                     title="Logout" 
                     onPress={LogOut} 
                     loading={isLoading}
                    />
                 </View>

            </View>
 
        </View>
    );
};
 

//make this component available to the app
export default ProfileScreen;
