import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RoundedButton from "../components/RoundedButton";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ProfileScreen({navigation}: any){

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Image style={styles.imageProfile} source={require('../assets/images/dogs/Caniche.jpg')}/>
                <Text style={styles.name}>Poupette</Text>
                <Text>3 ans</Text>
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.littleButtonContainer}>
                    <RoundedButton isBig={false} text={"RÉGLAGES"} path={require('../assets/images/settings.png')} />
                    <RoundedButton isBig={false} text={"SÉCURITÉ"} path={require('../assets/images/security.png')} />
                </View>
                <View style={styles.updateProfilContainer}>
                    <RoundedButton handleOnPress={() => navigation.navigate('EditProfile')} isBig={true} text={"MODIFIER LE PROFIL"} path={require('../assets/images/edit.png')} />
                </View>

            </View>
        </View>
    );
};

export const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    firstContainer : {
        height: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    secondContainer : {
        height: "50%"
    },
    littleButtonContainer:{
        flexDirection: "row",
        justifyContent: "space-around"

    },
    updateProfilContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
    },
    imageProfile : {
        width: 140,
        height: 140,
        borderRadius: 70,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    name:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5
    }
})


