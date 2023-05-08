import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/authForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText="Sign Up for Tracker"
                submitBtnText="Sign Up"
                errorMsg={state.errorMsg}
                onSubmit={signup}
            />
            <NavLink
            text="Already have an account? Sign in instead!"
            routeName="Signin"
            />
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
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
});

export default SignupScreen;