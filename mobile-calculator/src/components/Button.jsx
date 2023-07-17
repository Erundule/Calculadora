import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

const Button = ({ value, handlePress, theme }) => (
    <TouchableOpacity style={[styles.button, styles[`${theme}`]]} onPress={() => handlePress(value)}>
        <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
);

const styles = {
    button: {
        flex: 1,
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 80,
    },
    primary: {
        backgroundColor: "#eb455f",
       
      },
    
      secondary: {
        backgroundColor: "#bad7e9",
        
      },

    

      memory: {
        backgroundColor: "#84d2c5",
       
      },
      
    buttonText: {
        fontSize: 36,
        color: '#2b3467'
    }
};


export default Button;