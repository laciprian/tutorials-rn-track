import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons'
import {SafeAreaView} from "react-native-safe-area-context";

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer>
                <Text style={{fontSize: 24}}>AccountScreen</Text>
                <Spacer>
                    <Button title="Sign Out" onPress={signout}/>
                </Spacer>
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20}/>
};

const styles = StyleSheet.create({});

export default AccountScreen;
