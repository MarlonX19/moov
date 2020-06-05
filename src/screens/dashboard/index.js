import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, PermissionsAndroid, Modal, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from 'geolib';
import Icon from 'react-native-vector-icons/FontAwesome';
import io from 'socket.io-client';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


import finishMarker from '../../assets/finish.png';
import startMarker from '../../assets/start.png';

import AuthContext from '../../contexts/auth';

import MainHeader from '../../components/MainHeader';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';

import styles from './styles';

export default function Home(props) {
    const [location, setLocation] = useState({});
    const [destination, setDestination] = useState({});
    const [distanceBetween, setDistanceBetween] = useState('');
    const [socket, setSocket] = useState(null);
    const { signOut, user } = useContext(AuthContext);




    function handleSignOut() {
        signOut();
    }

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
        setDestination({ 'latitude': location.lat, 'longitude': location.lng });

    }

    //Distance between two coordinates
    const _getDistance = () => {
        let dis = 0;
        dis = getDistance(
            { latitude: location.latitude, longitude: location.longitude },
            { latitude: destination.latitude, longitude: destination.longitude }
        );

        setDistanceBetween((dis / 1000).toString());
    }

    const resetSearch = () => {
        setLocation({});
        setDestination({});
        setDistanceBetween('');
    }

    useEffect(() => {
        getLocation()

        let skt = io('http://192.168.15.13:3000/usuarios')
        setSocket(skt);

    }, [])


    useEffect(() => {
        if (socket) {
            socket.on('connected', (data, name) => {
                //alert('conectou aquiii')
            })

        }

    }, [socket])


    useEffect(() => {

        destination.latitude && destination.longitude ? _getDistance() : false;

    }, [destination])

    function handleContinue() {
        socket.emit('continue')
    }


    return (
        <View style={styles.container}>
            <MainHeader head='header' navigation={props.navigation} handleFun={() => handleSignOut()} />
            {distanceBetween ? <View></View> : <View>
                <SearchBox direction='from' onLocation={handleLocationSelected} />
                <SearchBox direction='to' onLocation={handleDestinationSelected} />
            </View>}
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
                            mode='DRIVING'
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
            {distanceBetween ?
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() => resetSearch()}
                        style={{ position: 'absolute', top: 15, left: 15 }}
                    >
                        <Icon name="times" size={25} color="#ddd" />
                    </TouchableOpacity>
                    <Icon style={styles.togglerIcon} name="truck" size={30} color="#FA960F" />
                    <View style={styles.distanceView}>
                        <Text style={styles.distanceTxt}>Distância</Text>
                        <Text style={styles.distanceValue}>{parseInt(distanceBetween)} km</Text>
                    </View>
                    <View style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: '#ddd' }}></View>
                    <View>
                        <TouchableOpacity
                            onPress={() => handleContinue()}
                            style={styles.btn}
                        >
                            <Text style={styles.btnText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View> : <View></View>}

        </View >
    );
}
