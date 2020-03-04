import React from 'react';
import { View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';

import Header from '../components/Header';

export default function Home(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
            <Header navigation={props.navigation} />
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
}
