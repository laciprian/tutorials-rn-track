import '../_mockLocation';
import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from "react-native-safe-area-context";
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from "expo-location";
import Map from '../components/Map';
import {Context as LocationContext} from "../context/locationContext";

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            await requestForegroundPermissionsAsync();
            await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                (location) => {
                    addLocation(location);
                }
            )
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>TrackCreateScreen</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
