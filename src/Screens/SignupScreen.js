//import liraries
import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Input from '../Components/input';
import Button from '../Components/button';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';  // New import for CheckBox
import apiClient from '../apiClient';

// create a component
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


          // Login function
    const SignUp = async () => {
      let formValidation = true; 

        // phone Validation
          if (name === '') {
            setNameMessage('Please fill name');
            formValidation = false;
        }
        else {
          setNameMessage('');
        }
  
      // phone Validation
      if (phone === '') {
          setPhoneMessage('Please fill phone');
          formValidation = false;
      } else if (phone.length < 10) {
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

      if(formValidation){
        if(!isSelected){
          Alert.alert('Terms & Condition',  'please check terms and condition');
          formValidation = false;
          return false;
        }

        try {
          const response = await apiClient.post('/register', {
              name,
              phone,
              password,
          });
 
          if(response.status){
            Alert.alert("Message", "Registration Sucess");
            navigation.navigate('LoginScreen');
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
                  <Text className="mb-3" style={{fontWeight:"bold", fontSize:23}}>Sign Up</Text>
                  <View className="mb-3">
                    <Text>Fill in the below form and add life to</Text>
                    <Text>your car!</Text>
                  </View>

                   <View>
                     <Input 
                       onChangeText={setName}
                       inputTitle="Name" 
                       Lefticon="person-outline" 
                       placeholder="Enter your name" 
                       message={nameMessage} 
                    /> 
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
                                message={passwordMessage} 
                          />  
                          <View className="mt-4 ml-2" style={styles.checkboxContainer}>
                          <Checkbox
                          value={isSelected}
                          onValueChange={setSelection}
                          style={styles.checkbox}
                        />
                          <Text className="text-end font-bold">Agree with terms and conditions</Text>
                        </View>
                     </View>

                     <Button title="Sign Up" onPress={SignUp} />
                        
                    <View>
                      <View className="flex-row justify-center mt-5 space-y-6">
                          <View className="flex-row">
                              <Text>Already have an account?</Text>
                              <TouchableOpacity>
                                  <Text className="underline underline-offset-2" style={{fontWeight:"bold"}} onPress={() => navigation.navigate('LoginScreen')}> Sign In</Text>
                              </TouchableOpacity>
                          </View>
                       </View>

                       <View className="mt-6 text-center flex-column justify-center items-center">
                         <Text>By login or sign up, you agree to our terms of use and</Text>
                         <Text>privacy policy</Text>
                       </View>
                    </View>
                    
                   </View>
              </View>
             </View>
             <View className='flex-row justify-between'>
                <View></View>
                <Image
                  source={require('../../assets/images/logo3.png')} 
                  style={{ width: 150, height: 150}}
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
});
 
//make this component available to the app
export default SignupScreen;
