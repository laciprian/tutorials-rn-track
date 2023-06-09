import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {SafeAreaView} from "react-native-safe-area-context";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <SafeAreaView forceInset={{top: 'always'}}>
                <NavigationEvents onWillFocus={clearErrorMessage}/>
                <AuthForm
                    headerText="Sign Up for Tracker"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign Up"
                    onSubmit={signup}
                />
                <NavLink
                    routeName="Signin"
                    text="Already have an account? Sign in instead!"
                />
            </SafeAreaView>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
});

export default SignupScreen;
