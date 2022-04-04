import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import Form from '../login/Form';
import GradientText from '../components/GradientText';

export default function LoginScreen() {
  const [isRegistered, setIsRegistered] = useState(true);
  
  return (
    <View style={styles.container}>
        <View style={styles.headContainer}>
          <GradientText text={isRegistered ? "Login" : "Sign Up"} style={styles.title}/>
          <TouchableOpacity onPress={() => setIsRegistered(!isRegistered)}>
              <GradientText text={isRegistered ? "Sign Up" : "Login"} style={styles.gradientText} />
          </TouchableOpacity>
        </View>
        <Form isRegistered={isRegistered}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop: 30
  },
  headContainer : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
      fontSize: 22,
      fontWeight: 'bold',
  },
  gradientText: {
      fontSize: 14,
  }  
});