import React, {useContext} from 'react';
import {StyleSheet, ActivityIndicator} from "react-native";
import MapView, {Polyline, Circle} from "react-native-maps";
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state: {currentLocation, locations}} = useContext(LocationContext);
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>;
    }

    console.log(currentLocation);
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01
            // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={15}
                strokeColor="rgba(158, 158, 225, 1.0)"
                fillColor="rgba(158, 158, 225, 0.3)"
            />
            <Polyline coordinates={locations.map(loc=>loc.coords)} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 280
    }
});

export default Map;