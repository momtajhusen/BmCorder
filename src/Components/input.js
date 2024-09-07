import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
    inputType
  }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry); // State to manage visibility

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible); // Toggle visibility state
    };

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {inputTitle && (
            <View style={styles.titleContainer}>
              <Text className="mb-1" style={{ color: "black", fontWeight: "bold" }}>
                {inputTitle}
              </Text>
              {showCounter && maxLength && (
                <Text style={[styles.charCount, { color: "#888" }]}>
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
              placeholderTextColor="#888"
              keyboardType={keyboardType}
              secureTextEntry={isPasswordVisible} // Control visibility
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              maxLength={maxLength}
            />
            {Righticon && (
              <TouchableOpacity
                onPress={togglePasswordVisibility} // Toggle visibility on press
              >
                <MaterialIcons
                  name={isPasswordVisible ? "visibility-off" : "visibility"} // Change icon based on visibility
                  size={20}
                  color="#ccc"
                  style={styles.icon}
                />
              </TouchableOpacity>
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
      marginBottom: 8
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
      fontWeight: "bold"
    },
    charCount: {
      fontSize: 14,
      color: 'grey',
    },
    inputMain: {
      height: 50,
      borderRadius: 5,
      fontSize: 15,
      color: 'black',
      borderWidth: 1,
      borderColor: '#888',
      marginBottom: 2,
    },
    input: {
      height: 50,
      fontSize: 15,
      color: 'black',
    },
});

export default Input;
