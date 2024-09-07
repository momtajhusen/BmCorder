//import liraries
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


// create a component
const Input = ({
    inputTitle,
    value,
    onChangeText,
    placeholder,
    Lefticon,
    Righticon,
    keyboardType,
    secureTextEntry,
    style,
    placeholderStyle,
    message,
    maxLength,
    showCounter = false,
    inputType // New prop for input type
  }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        {inputTitle && (
          <View style={styles.titleContainer}>
            <Text className="mb-1" style={{ color: "black", fontWeight:"bold" }}>
              {inputTitle}
            </Text>
            {showCounter && maxLength && (
              <Text style={[styles.charCount, { color: "#888"}]}>
                {value.length}/{maxLength}
              </Text>
            )}
          </View>
        )}

        <View className="flex-row items-center px-4" style={styles.inputMain}>
        {Lefticon && (
          <MaterialIcons
            name={Lefticon}
            size={20}
            color="#ccc"
            style={styles.icon}
          />
        )}
        <TextInput
          className="flex-1"
          style={[
            styles.input,
            style,
          ]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor= "#888"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
        />
                {Righticon && (
          <MaterialIcons
            name={Righticon}
            size={20}
            color="#ccc"
            style={styles.icon}
          />
        )}
        </View>

        {message && <Text className="px-1" style={{ color: "red" }}>{message}</Text>}
      </View>
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 0,
      marginBottom:8
    },
    icon: {
      marginRight: 10,
    },
    inputContainer: {
      flex: 1,
      position: 'relative',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 1,
      fontWeight:"bold"
    },
    charCount: {
      fontSize: 14,
      color: 'grey',
    },
    inputMain:{
      height: 50,
      borderRadius: 5,
      fontSize: 15,
    //   fontWeight: 'bold',
      color:  'black',
      borderWidth: 1,
      borderColor: '#888',
      marginBottom:2,
    },
    input: {
      height: 50,
      fontSize: 15,
      color:  'black',
      // borderWidth:1
    },
    placeholder: {
      position: 'absolute',
      top: 20,
      left: 10,
      fontSize: 15,
      fontWeight: 'normal',
      color: 'grey',
    },
  });

 

//make this component available to the app
export default Input;
