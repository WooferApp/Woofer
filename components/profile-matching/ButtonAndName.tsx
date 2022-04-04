import React from 'react';
import {View} from '../Themed';
import {StyleSheet, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import TextProfileMatching from './TextProfileMatching';
import ButtonsProfileMatching from './ButtonsProfileMatching';


function ImageProfileMatching() {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.gradient}
            >

                <TextProfileMatching/>
                <ButtonsProfileMatching/>

            </LinearGradient>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        backgroundColor: 'transparent',
        width: '100%',
        height: '25%',
    },

    gradient: {
        flex: 1,
        alignItems: 'flex-end',
    }

});

export default ImageProfileMatching;
