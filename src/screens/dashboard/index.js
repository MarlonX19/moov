import React, { useState, useEffect } from 'react';
import { View, Text, Button, PermissionsAndroid, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

import finishMarker from '../../assets/finish.png'
import startMarker from '../../assets/start.png'

import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';

export default function Home(props) {
    const [location, setLocation] = useState({});
    const [destination, setDestination] = useState({})

    async function getLocation() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Permissão de localização',
                    message: 'Necessário para funcionar',
                    buttonNeutral: 'Depois',
                    buttonNegative: 'Cancelar',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(
                    ({ coords: { latitude, longitude } }) => {
                        setLocation({ 'latitude': latitude, 'longitude': longitude })
                        console.log(latitude, longitude)
                    },
                    (error) => {
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 }
                );

            } else {
                console.log('Fine Location permission denied');
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleLocationSelected = async (data, { geometry }) => {
        const { location } = geometry;
        setLocation({ 'latitude': location.lat, 'longitude': location.lng })
    }

    const handleDestinationSelected = async (data, { geometry }) => {
        const { location } = geometry;
        setDestination({ 'latitude': location.lat, 'longitude': location.lng })
    }

    useEffect(() => {
        getLocation()

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
            <Header navigation={props.navigation} />
            <SearchBox direction='from' onLocation={handleLocationSelected} />
            <SearchBox direction='to' onLocation={handleDestinationSelected} />
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: location.lat ? location.lat : -22.376422,
                    longitude: location.long ? location.long : -47.3722709,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation
                loadingEnabled
                showsMyLocationButton={false}
                showsCompass={false}
                ref={el => map = el}

            >
                {destination.latitude ?
                    <>
                        <MapViewDirections
                            origin={location}
                            destination={destination}
                            apikey='AIzaSyBxrHIlkzVvQLoQuRHBI-46AMuJm5GyffA'
                            strokeWidth={3}
                            strokeColor='purple'
                            onReady={(result) =>
                                map.fitToCoordinates(result.coordinates)}
                        />
                        <Marker
                            title='Coleta será aqui'
                            isPreselected
                            onPress={e => console.log(e.nativeEvent)}
                            draggable
                            coordinate={location}
                            image={startMarker}
                        >
                        </Marker>
                        <Marker
                            title='Entrega será aqui'
                            isPreselected={true}
                            coordinate={destination}
                            image={finishMarker}
                        >
                        </Marker>
                    </>
                    : <View></View>}
            </MapView>
        </View >
    );
}
