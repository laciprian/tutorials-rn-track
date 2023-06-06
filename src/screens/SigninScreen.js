import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';
import {SafeAreaView} from "react-native-safe-area-context";

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <SafeAreaView forceInset={{top: 'always'}}>
                <NavigationEvents onWillFocus={clearErrorMessage}/>
                <AuthForm
                    headerText="Sign In to Your Account"
                    errorMessage={state.errorMessage}
                    onSubmit={signin}
                    submitButtonText="Sign In"
                />
                <NavLink
                    text="Dont have an account? Sign up instead"
                    routeName="Signup"
                />
            </SafeAreaView>
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: () => false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
});

export default SigninScreen;
