import {StyleSheet, TextInput} from "react-native";

type InputTextProps = {
    term: string,
    onTermChange: any, 
    onTermSubmit: any,
    textContentType: "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" |  'jobTitle' | 'location' | 'middleName' | 'name' | 'namePrefix' | 'nameSuffix' | 'nickname' | 'organizationName' | 'postalCode' | 'streetAddressLine1' | 'streetAddressLine2' | 'sublocality' | 'telephoneNumber' | 'username' | 'password';
};

export default function InputText ({term, onTermChange, onTermSubmit, textContentType}: InputTextProps) {
    return (
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={textContentType === 'password' ? true : false}
            style={styles.inputStyle}
            placeholder={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            textContentType={textContentType}
        />
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        margin: 10,
        padding: 10,
        backgroundColor: '#E8E8E8',
        borderRadius: 15
    }
});