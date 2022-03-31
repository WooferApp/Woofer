import {Image, StyleSheet} from "react-native";
import {Text, View} from "./Themed";
import React from "react";

export default function Message(){
    return(
        <View style={styles.messageContainer}>
            <Image style={styles.messageImage} source={require("../assets/images/chien1.jpeg")} />
            <View style={styles.message}>
                <View style={styles.messageHeader}>
                    <Text style={styles.messageSender}>Kiki</Text>
                    <Text style={styles.messageDate}>1 day ago</Text>
                </View>
                <Text>Hello ! You are very pretty !</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer:{
        flexDirection:'row',
        marginTop:10,
    },
    message:{
        flex:1,
        justifyContent:'space-between',
        padding:5,
    },
    messageHeader:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    messageImage:{
        margin:5,
        width:50,
        height:50,
        borderRadius:50,
    },
    messageSender:{
        fontWeight:'bold'
    },
    messageDate:{
        color:'#BDBDBD',
    },
})