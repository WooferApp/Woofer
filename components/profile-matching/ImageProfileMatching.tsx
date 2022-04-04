import React from "react";
import { View } from "../Themed";
import { StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function ImageProfileMatching() {
  return (
    <Image
      style={styles.image}
      source={require("../../assets/images/golden-retriever.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    position: "relative",
    width: 360,
    height: 550,
    borderRadius: 5,
    backgroundColor: "transparent",
  },
});

export default ImageProfileMatching;
