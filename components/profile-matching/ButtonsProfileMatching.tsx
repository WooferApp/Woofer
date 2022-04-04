import React from 'react';
import {View} from '../Themed';
import {GestureResponderEvent, StyleSheet} from 'react-native';
import DislikeButtonProfileMatching
    from '../../components/profile-matching/buttons-profile-matching/DislikeButtonProfileMatching';
import LikeButtonProfileMatching
    from '../../components/profile-matching/buttons-profile-matching/LikeButtonProfileMatching';
import {LinearGradient} from 'expo-linear-gradient';

const onPressLike = () => {
    console.log('Yaaaay');
};

const onPressDislike = () => {
    console.log('Nooooo');
};

function ButtonsProfileMatching() {
    return (
        <View style={styles.buttons}>
            <DislikeButtonProfileMatching onPress={onPressDislike}/>
            <LikeButtonProfileMatching onPress={onPressLike}/>
        </View>


    );
}

const styles = StyleSheet.create({
    buttons: {
        position: 'absolute',
        zIndex: 2,
        bottom: 10,
        left: 17,
        flexDirection: 'row',
        width: '90%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'transparent'
    }
});

export default ButtonsProfileMatching;
