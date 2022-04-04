import React, { useState } from "react";
import { View } from "../components/Themed";
import { Image, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/messages/SearchBar";
import GradientText from "../components/common/GradientText";
import Matches from "../components/messages/Matches";
import MessageList from "../components/messages/MessageList";

export default function ProfileMessagingScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  return (
    <View style={styles.container}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Matches />
      <MessageList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
  },
  matchContainer: {
    width: "100%",
    flexDirection: "row",
    height: 120,
  },
  matchImage: {
    flex: 1,
    margin: 5,
    width: 80,
    height: 100,
    borderRadius: 5,
  },
  scrollView: {
    height: 110,
    // paddingVertical: 5,
  },
  text: {
    fontSize: 42,
  },
});
