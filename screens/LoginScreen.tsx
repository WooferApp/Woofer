import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import Form from "../components/login/Form";
import GradientText from "../components/common/GradientText";

export default function LoginScreen() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <GradientText
          text={isRegistered ? "Login" : "Sign Up"}
          style={styles.title}
        />
        <TouchableOpacity onPress={() => setIsRegistered(!isRegistered)}>
          <GradientText
            text={isRegistered ? "Sign Up" : "Login"}
            style={styles.gradientText}
          />
        </TouchableOpacity>
      </View>
      <Form isRegistered={isRegistered} />
      {isRegistered ? <View style={styles.containerForgot}>
          <GradientText text="Forgot your password?" style={styles.forgotPassword}/>
        </View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  headContainer : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  title: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingHorizontal: 80
  },
  gradientText: {
      fontSize: 14,
  },
  containerForgot : {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10
  },
  forgotPassword: {
    textAlign: 'center'
  } 
});
