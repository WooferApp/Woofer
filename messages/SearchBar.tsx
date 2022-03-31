import React from "react";
import {StyleSheet, TextInput, View, Keyboard, Button, GestureResponderEvent} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
type SearchProps = {
    clicked:boolean,
    searchPhrase:string, 
    setSearchPhrase:any,
    setClicked:any,
};

export default function SearchBar ({clicked, searchPhrase, setSearchPhrase, setClicked}:SearchProps) {
    return (
        <View>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Recherchez dans vos matchs"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }}/>
                )}
            </View>
        </View>
    );
};

// styles
const styles = StyleSheet.create({

    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});
