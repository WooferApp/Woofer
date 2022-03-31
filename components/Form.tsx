import {FlatList, StyleSheet} from "react-native";
import {View} from "./Themed";
import React, {useReducer} from "react";
import InputText from "./InputText";
import StyledButton from "./StyledButton";
import LoginReducer from "../reducers/LoginReducer";

type FormProps = {
    isRegistred: boolean
}

export default function Form ({isRegistred}: FormProps){
    const LOGIN = [{name: 'Name', type: 'setName', textContentType: 'name'}, {name:'Email', type:'setEmail', textContentType: 'emailAddress'}, {name: 'Password', type: 'setPassword', textContentType: 'password'}];
    const REGISTRATION = [{name:'Email', type:'setEmail', textContentType: 'emailAddress'}, {name: 'Password', type: 'setPassword', textContentType: 'password'}];

    const [state, dispatch] = useReducer(LoginReducer, {
        name: '',
        email: '',
        password: ''
    });

    const submit = () => {
        console.log(state);
    }

    return(
        <View >
            <FlatList
                data={isRegistred ? LOGIN : REGISTRATION}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({item}) => { 
                    return <InputText 
                        term={item.name} 
                        onTermChange={(newTerm: React.SetStateAction<string>) => dispatch({type: item.type, payload: newTerm})}
                        onTermSubmit={() => {}} 
                        textContentType={item.textContentType}
                />}}
            />
            <StyledButton text="Submit" onPress={submit}/>
        </View>
    );
}

const styles = StyleSheet.create({

})