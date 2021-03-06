import { FlatList, StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import React, { useReducer, useState } from "react";
import InputText from "../common/InputText";
import StyledButton from "../common/StyledButton";
import LoginReducer from "./reducers/LoginReducer";
import { userLogin, setLoginError } from "./store/user.store";
import * as yup from "yup";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .min(6, "Your email must contain at least six characters")
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must have at least eight characters")
    .required("Password is required"),
});
type FormProps = {
  isRegistered: boolean;
};

export default function Form({ isRegistered }: FormProps) {
  const REGISTRATION = [
    { name: "Name", type: "setName", textContentType: "name" },
    { name: "Email", type: "setEmail", textContentType: "emailAddress" },
    { name: "Password", type: "setPassword", textContentType: "password" },
  ];
  const LOGIN = [
    { name: "Email", type: "setEmail", textContentType: "emailAddress" },
    { name: "Password", type: "setPassword", textContentType: "password" },
  ];
  const { value: user, error } = useSelector((state: RootState) => state.user);
  const [userToSign, setUserToSign] = useReducer(LoginReducer, {
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState([]);

  async function setToken(token: { token: string; deadline: number }) {
    return await SecureStore.setItemAsync("token", JSON.stringify(token));
  }

  async function getToken() {
    return await SecureStore.getItemAsync("token");
  }
  const submit = async () => {
    const { email, password, name } = userToSign;
    setErrorMessage([]);
    schema.validate(userToSign).catch(function (err) {
      setErrorMessage(err.errors);
    });

    if (isRegistered) {
      try {
        const response = await axios.post(API_URL, {
          username: email,
          password,
        });
        const { data } = response;
        dispatch(userLogin({ token: data.access_token, email }));
        // navigation.navigate('ProfileScreen');
        await setToken({
          token: data.access_token,
          deadline: Date.now() + 6000000,
        });
        const token = await getToken();
        if (typeof token === "string") {
          const tokenJSON = await JSON.parse(token);
          console.log(token);
          console.log("is valid", Date.now() < tokenJSON.deadline);
        }
      } catch (e) {
        dispatch(setLoginError());
      }
    } else {
      //post to route subscribe
      schema.isValid(userToSign).then(function (isValid) {
        console.log(isValid);
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={isRegistered ? LOGIN : REGISTRATION}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => {
          return (
            <InputText
              term={item.name}
              onTermChange={(newTerm: React.SetStateAction<string>) =>
                setUserToSign({ type: item.type, payload: newTerm })
              }
              onTermSubmit={() => {}}
              // @ts-ignore
              textContentType={item.textContentType}
            />
          );
        }}
      />
      {errorMessage.length < 0 ? null : (
        <FlatList
          data={errorMessage}
          keyExtractor={(index) => index}
          renderItem={({ item }) => {
            return <Text style={styles.errorMessage}>{item}</Text>;
          }}
        />
      )}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <StyledButton text="Submit" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    marginBottom: 20,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  flatlist: {
    width: 340,
    marginBottom: 40,
  },
});
