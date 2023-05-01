import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from './src/scrrens/AccountScreen';
import SignupScreen from './src/scrrens/SignupScreen';
import SigninScreen from './src/scrrens/SigninScreen';
import TrackListScreen from './src/scrrens/TrackListScreen';
import TrackDetailScreen from './src/scrrens/TrackDetailScreen';
import TrackCreateScreen from './src/scrrens/TrackCreateScreen';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createMaterialBottomTabNavigator({
        trackListFlow: createStackNavigator({
           TrackList:TrackListScreen,
           TrackDetail: TrackDetailScreen
        }),
        TrackCreate:TrackCreateScreen,
        Account: AccountScreen
    })
});

export default createAppContainer(switchNavigator);