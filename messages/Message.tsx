import {Image, StyleSheet} from "react-native";
import {Text, View} from "../components/Themed";
import React from "react";

interface Props {
    sender:string,
    date:string,
    message:string
}
export default function Message(props:Props){
    return(
        <View style={styles.messageContainer}>
            <Image style={styles.messageImage} source={require("../assets/images/dogs/chien1.jpeg")} />
            <View style={styles.message}>
                <View style={styles.messageHeader}>
                    <Text style={styles.messageSender}>{props.sender}</Text>
                    <Text style={styles.messageDate}>{props.date}</Text>
                </View>
                <Text>{props.message}</Text>
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