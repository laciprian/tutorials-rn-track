import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SigninScreen = () => {
    console.log('------------------------');
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText="Sign In to your Account"
                submitBtnText="Sign In"
                errorMsg={state.errorMsg}
                onSubmit={signin}
            />
            <NavLink
                text="dont have an account? Sign up instead!"
                routeName="Signup"
            />
        </View>
    );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
