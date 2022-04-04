import React from 'react';
import {Image, ScrollView, StyleSheet} from "react-native";
import {View} from "../components/Themed";
import GradientText from "../components/GradientText";

export default function Matches() {
    const images=[
        {source:require("../assets/images/dogs/chien3.jpeg")},
        {source:require("../assets/images/dogs/chien4.jpeg")},
        {source:require("../assets/images/dogs/chien2.jpeg")},
        {source:require("../assets/images/dogs/chien1.jpeg")},
        {source:require("../assets/images/dogs/chien5.jpeg")},
    ];
    return (
        <View style={styles.matchContainer}>
            <GradientText text="Nouveaux matchs" style={styles.title}/>
            <ScrollView horizontal={true} style={styles.scrollView}>
                {images.map(({source}, index)=>(
                    <Image style={styles.matchImage} source={source} key={index}/>
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        marginTop:25,
        fontSize: 20,
        fontWeight: 'bold',
    },
    matchContainer:{
        width:'100%',
        height:160,
    },
    matchImage:{
        flex:1,
        margin:5,
        width:80,
        height:100,
        borderRadius:5,
    },
    scrollView: {
        height:110,
        // paddingVertical: 5,
    },
});

