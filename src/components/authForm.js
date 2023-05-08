import React, {useState} from 'react';
import {Text, Button, Input} from 'react-native-elements';
import {StyleSheet} from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({headerText, errorMsg, onSubmit, submitBtnText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer>
                <Input label="Email"
                       value={email}
                       onChangeText={(newEmail) => setEmail(newEmail)}
                       autoCapitalize="none"
                       autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input
                    secureTextEntry={true}
                    label="Password"
                    value={password}
                    onChangeText={(newPassword) => setPassword(newPassword)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            {errorMsg ?
                <Text style={styles.errorMsg}>{errorMsg}</Text>
                : null}
            <Spacer>
                <Button title={submitBtnText} onPress={() => onSubmit({email, password})}/>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15
    },
    link: {
        color: 'blue'
    }
});

export default AuthForm;