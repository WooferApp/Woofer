import React from "react";
import {StyleProp, Text, TextStyle} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

type TextProps = {
    text:string,
    style:StyleProp<TextStyle>
}
const GradientText = ({text, style}:TextProps) => {
    return (
        <MaskedView maskElement={<Text style={style}>{text}</Text>}>
            <LinearGradient
                colors={['#fd5068', '#fd2f7a','#ff8b57']}
                end={{ x: 0.4, y: 0.2 }}
            >
                <Text style={[style, { opacity: 0 }]}>{text}</Text>
            </LinearGradient>
        </MaskedView>
    );
};

export default GradientText;