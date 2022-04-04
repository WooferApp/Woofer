import React from "react";
import { View } from "../components/Themed";
import { StyleSheet } from "react-native";
import ImageProfileMatching from "../components/profile-matching/ImageProfileMatching";
import TextProfileMatching from "../components/profile-matching/TextProfileMatching";
import ButtonsProfileMatching from "../components/profile-matching/ButtonsProfileMatching";
import ButtonAndName from "../components/profile-matching/ButtonAndName";

function ProfileMatchingPage() {
  return (
    <View style={styles.page}>
      <ImageProfileMatching />
      <ButtonAndName />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ProfileMatchingPage;
