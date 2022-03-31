import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, GestureResponderEvent} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

type TextProps = {
    text:string,
    onPress:((event: GestureResponderEvent) => void) | undefined
};
export function StyledButton(props:TextProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                <LinearGradient
                    colors={['#ff8b57', '#fd5068', '#fd2f7a']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>{props.text}</Text>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button:{
        padding: 15,
        borderRadius: 25,
        width: 340,
    }, 
    buttonText: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 16, 
        textAlign: 'center'
    }
});
export default StyledButton;