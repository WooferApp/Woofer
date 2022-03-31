import React, {useState} from 'react';
import {Text, View} from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import {Image, ScrollView, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import {LinearGradient} from "expo-linear-gradient";
import GradientText from "../components/GradientText";
import Message from "../components/Message";

export default function ProfileMessagingScreen() {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();

    return (
        <View style={styles.container}>
            <SearchBar searchPhrase={searchPhrase}
                       setSearchPhrase={setSearchPhrase}
                       clicked={clicked}
                       setClicked={setClicked} />
            <GradientText text="Nouveaux matchs" style={styles.title}/>
            <View style={styles.matchContainer}>
                <ScrollView horizontal={true} style={styles.scrollView}>
                    <Image style={styles.matchImage} source={require("../assets/images/chien1.jpeg")} />
                    <Image style={styles.matchImage} source={require("../assets/images/chien2.jpeg")} />
                    <Image style={styles.matchImage} source={require("../assets/images/chien3.jpeg")} />
                    <Image style={styles.matchImage} source={require("../assets/images/chien4.jpeg")} />
                    <Image style={styles.matchImage} source={require("../assets/images/chien5.jpeg")} />
                </ScrollView>
            </View>

            <GradientText text="Messages" style={styles.title}/>
            <ScrollView>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:15
    },
    title: {
        marginTop:25,
        fontSize: 20,
        fontWeight: 'bold',
    },
    matchContainer:{
        width:'100%',
        flexDirection:'row',
        height:120
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
    text: {
        fontSize: 42,
    },
});
