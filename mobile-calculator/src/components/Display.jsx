import React from 'react';
import { View, Text} from 'react-native';

const Display = ({ num1, num2, op, memoryExists, result }) => {
    return (
        <View style={styles.displayContainer}>
            <Text style={styles.memoryText}>{memoryExists ? 'M' : ''}</Text>
            <Text style={styles.valueText}>{num1} {num2} {op && num2 ? '=' : ''}</Text>
            <Text style={styles.valueText}>{result}</Text>
        </View>
    );
};

const styles = {
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#fcffe7',
        padding: 20,
    },
    valueText: {
        color: '#2b3467',
        fontSize: 40,
    },

    memoryText: {
        color: '#fff',
        fontSize: 20,
    },
};
  
export default Display;
