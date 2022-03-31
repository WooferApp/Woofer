import {StyleSheet, TouchableOpacity, Text, Image, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as React from "react";
import NavbarLogo from "./NavbarLogo";


export default function Header () {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ff8b57', '#fd2f7a']}
                style={{ flex: 1,
                    height:'100%',
                    alignItems: 'center',
                    justifyContent:'center'}}

            >
                <NavbarLogo/>
            </LinearGradient>
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        height:115,
    },
});