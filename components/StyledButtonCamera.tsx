import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, GestureResponderEvent} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Camera} from "expo-camera";


export function StyledButtonCamera({hasPermission, setHasPermission, text, setCameraIsOpen}: any) {

    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <TouchableOpacity  style={styles.cameraContainer} onPress={() => {
            setType(
                type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
            );
            setCameraIsOpen(true);
        }}>
            <View>
                <LinearGradient
                    colors={['#ff8b57', '#fd5068', '#fd2f7a']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button:{
        padding: 15,
        alignItems: 'center',
        borderRadius: 25,
        width:340
    }, buttonText:{
        color:'white', fontWeight:'bold', fontSize:16, textAlign:'center'
    },
    cameraContainer : {
        flex:1,
        position:"absolute",
        top:24,
        left:0,
        right:0,
        width:"100%",
        height:600,
        zIndex:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-start"
    }
});
export default StyledButtonCamera;