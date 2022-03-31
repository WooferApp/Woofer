import {StyleSheet, TouchableOpacity, Text, Image, View} from "react-native";

export interface Props {
    path: any;
    isBig: boolean;
    text: string;
    handleOnPress?: any;
}

export default function RoundedButton({path, isBig, text, handleOnPress}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleOnPress}
                style={isBig ? styles.bigButton : styles.littleButton}>
                <Image style={isBig ? styles.bigIcon : styles.littleIcon} source={path}/>
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection:"column",
        alignItems: "center"
    },
    text: {
        color: "#8E8E8E",
        marginTop: 5,
        fontWeight: "500"
    },
    littleButton: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
},
    bigButton: {
        width: 140,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},

    },
    littleIcon : {
        width: 50,
        height: 50,
    },
    bigIcon : {
        width: 70,
        height: 70,
    }
})

