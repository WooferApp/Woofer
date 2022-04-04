import {FlatList, StyleSheet} from "react-native";
import {View, Text} from "./Themed";
import React, {useReducer, useState} from "react";
import InputText from "./InputText";
import StyledButton from "./StyledButton";
import LoginReducer from "../reducers/LoginReducer";
import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().min(6, "Your email must contain at least six characters").email("Invalid email").required("Email is required"),
    password: yup.string().trim().min(8, "Password must have at least eight characters").required("Password is required")
});

type FormProps = {
    isRegistered: boolean
}

export default function Form ({isRegistered}: FormProps){
    const REGISTRATION = [{name: 'Name', type: 'setName', textContentType: 'name'}, {name:'Email', type:'setEmail', textContentType: 'emailAddress'}, {name: 'Password', type: 'setPassword', textContentType: 'password'}];
    const LOGIN = [{name:'Email', type:'setEmail', textContentType: 'emailAddress'}, {name: 'Password', type: 'setPassword', textContentType: 'password'}];

    const [state, dispatch] = useReducer(LoginReducer, {
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState([]);

    const submit = () => {  
        setErrorMessage([]);

        schema.validate(state).catch(function (err) {
            setErrorMessage(err.errors);
        });
        // Case sign up:  
        if(!isRegistered) {
            schema.isValid(state)
                .then(function (isValid) {
                    console.log(isValid);
                });
        // Case login:
        } else {
            
        }
    }

    return(
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={isRegistered ? LOGIN : REGISTRATION}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({item}) => { 
                    return <InputText 
                        term={item.name} 
                        onTermChange={(newTerm: React.SetStateAction<string>) => dispatch({type: item.type, payload: newTerm})}
                        onTermSubmit={() => {}} 
                        textContentType={item.textContentType}
                />}}
            />
            {errorMessage.length < 0 ? null : <FlatList
                data={errorMessage}
                keyExtractor={(index) => index}
                renderItem={({item}) => { 
                    return <Text style={styles.errorMessage}>{item}</Text>}}
            />}
            <StyledButton text="Submit" onPress={submit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        marginBottom: 20
    },
    container: {
        display: "flex",
        alignItems: "center"
    }, 
    flatlist: {
        width: 340,
        marginBottom: 40
    }
})