import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import GradientText from "../components/common/GradientText";
import StyledButton from "../components/common/StyledButton";
import { Camera } from "expo-camera";
import { StyledButtonCamera } from "../components/common/StyledButtonCamera";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

export default function EditProfile() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraIsOpen, setCameraIsOpen] = useState(false);

  const userStore = useSelector((state: RootState) => state.user);
  return (
    <View style={styles.container}>
      {cameraIsOpen && <Camera style={styles.cameraContainer}></Camera>}
      <View style={styles.containerText}>
        <GradientText text="Modifier mes photos" style={styles.title} />
      </View>
      <View style={styles.containerImage}>
        <Image
          style={styles.matchImage}
          source={require("../assets/images/dogs/chien1.jpeg")}
        />
        <Image
          style={styles.matchImage}
          source={require("../assets/images/dogs/chien2.jpeg")}
        />
        <Image
          style={styles.matchImage}
          source={require("../assets/images/dogs/chien3.jpeg")}
        />
      </View>
      <View style={styles.containerImage}>
        <Image
          style={styles.matchImage}
          source={require("../assets/images/dogs/chien4.jpeg")}
        />
        <Image
          style={styles.matchImage}
          source={require("../assets/images/dogs/chien5.jpeg")}
        />
      </View>
      <View>
        <StyledButtonCamera
          setHasPermission={setHasPermission}
          hasPermission={hasPermission}
          setCameraIsOpen={setCameraIsOpen}
          text="Ajouter une photo"
        />
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    alignItems: "center",
  },
  title: {
    marginVertical: 25,
    fontSize: 20,
    fontWeight: "bold",
  },
  matchImage: {
    flex: 1,
    margin: 5,
    width: 80,
    height: 100,
    borderRadius: 5,
  },
  containerImage: {
    flexDirection: "row",
  },
  cameraContainer: {
    flex: 1,
    position: "absolute",
    top: 24,
    left: 0,
    right: 0,
    width: "100%",
    height: 600,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  cameraSubContainer: {
    backgroundColor: "transparent",
  },
  cameraButton: {
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 12,
    fontSize: 24,
    color: "white",
  },
});
