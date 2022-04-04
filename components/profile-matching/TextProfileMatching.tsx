import React from 'react';
import {View} from '../Themed';
import {StyleSheet, Text} from 'react-native';


function TextProfileMatching() {
    return (
        <View style={styles.container}>
            <Text style={styles.textName}>
                James
            </Text>
            <Text style={styles.textAge}>
                3 ans
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "85%",
        height: 100,
        backgroundColor: 'transparent',
    },

    textName: {
        position: 'absolute',
        right: 260,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

    textAge: {
        position: 'absolute',
        top: 35,
        right: 310,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },

});

export default TextProfileMatching;
