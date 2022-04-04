import React, {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {View} from '../../Themed';
import {StyleSheet, Image} from 'react-native';

type ImageProps = {
    onPress: ((event: GestureResponderEvent) => void) | undefined
};

function DislikeButtonProfileMatching(props: ImageProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>

            <Image style={styles.image} source={require("../../../assets/images/dislike.png")}/>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    image: {
        width: 68,
        height: 68
    }
});

export default DislikeButtonProfileMatching;
