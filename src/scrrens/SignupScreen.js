import React, {useState, useContext} from 'react';
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log('----------', state);
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
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
            {state.errorMessage ?
                <Text style={styles.errorMsg}>{state.errorMessage}</Text>
                : null}
            <Spacer>
                <Button title="Sign Up" onPress={() => signup({email, password})}/>
            </Spacer>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    errorMsg: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15
    }
});

export default SignupScreen;