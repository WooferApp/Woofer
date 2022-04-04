import { FlatList, StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import React, { useReducer } from "react";
import InputText from "../common/InputText";
import StyledButton from "../common/StyledButton";
import LoginReducer from "./reducers/LoginReducer";
import { userLogin, setLoginError } from "./store/user.store";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { API_URL } from "@env";
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

  const submit = async () => {
    const { email, password, name } = userToSign;
    if (isRegistered) {
      try {
        const response = await axios.post(API_URL, {
          username: email,
          password,
        });
        dispatch(userLogin({ token: response.data.access_token, email }));
      } catch (e) {
        dispatch(setLoginError());
      }
    } else {
      //post to route subscribe
    }
  };

  return (
    <View>
      <FlatList
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
      <StyledButton text="Submit" onPress={submit} />
      {error && <Text>{error}</Text>}
    </View>
  );
}
