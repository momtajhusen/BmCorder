//import liraries
import React, { Component } from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

// create a component
const Button =  ({ onPress, title, loading }) => {
    return (
        <TouchableOpacity 
           onPress={onPress} 
           className="mt-3 p-2 py-4 px-5 items-center z-100" 
           style={{backgroundColor:"#A3CFFF", width:"100%", borderRadius:50}}
           disabled={loading}
           >
           {loading ? (
                <ActivityIndicator size={25} color="white" />
            ) : (
                <Text style={{fontWeight:'bold', fontSize:17}}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

//make this component available to the app
export default Button;
