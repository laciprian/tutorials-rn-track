import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import AccountScreen from './src/scrrens/AccountScreen';
import SignupScreen from './src/scrrens/SignupScreen';
import SigninScreen from './src/scrrens/SigninScreen';
import TrackListScreen from './src/scrrens/TrackListScreen';
import TrackDetailScreen from './src/scrrens/TrackDetailScreen';
import TrackCreateScreen from './src/scrrens/TrackCreateScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
    RezolveAuth: RezolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createMaterialBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
});

const App = createAppContainer(switchNavigator);
export default () => {
    return (
        <AuthProvider>
            <App ref={(navigator) => {
                setNavigator(navigator)
            }}/>
        </AuthProvider>
    );
};