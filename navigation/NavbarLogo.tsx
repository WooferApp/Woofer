import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavbarLogo() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", left: 0 }}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Image
          style={styles.imageProfile}
          source={require("../assets/images/dogs/Caniche.jpg")}
        />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require("../assets/images/logo-white.png")}
      />
      <Text style={styles.text}>Woofer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  image: {
    marginRight: 5,
    width: 30,
    height: 30,
  },
  imageProfile: {
    marginLeft: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
  },
});
