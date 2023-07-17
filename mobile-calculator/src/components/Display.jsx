import React from 'react';
import { View, Text} from 'react-native';

const Display = ({memoryExists, value, memoryValue, expression }) => {
    return (
        <View style={styles.displayContainer}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.memoryText}>{memoryExists ? 'M=' : ''}</Text>
                <Text style={styles.memoryText}>{memoryExists ? memoryValue : ' '}</Text>
            </View>
            <Text style={styles.memoryText}>{expression}</Text>
            <Text style={styles.valueText}>{value}</Text>
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
        color: '#2b3467',
        fontSize: 20,
    },
};
  
export default Display;
