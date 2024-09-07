//import liraries
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// create a component
const Button =  ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} className="mt-3 p-2 py-4 px-5 items-center" style={{backgroundColor:"#A3CFFF", width:"100%", borderRadius:50}}>
           <Text style={{fontWeight:'bold', fontSize:17}}>{title}</Text>
        </TouchableOpacity>
    );
};


//make this component available to the app
export default Button;
