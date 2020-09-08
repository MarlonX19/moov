import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_PLACES_API_KEY } from "@env";


import finishMarker from '../../assets/finish.png';
import startMarker from '../../assets/start.png';


import Header from '../../components/Header';

import styles from './styles';

function Request(props) {


  function handleSeeDetails() {
    props.navigation.navigate('Detalhes');
  }

  return (
    <View style={styles.container}>
      <Header head='Detalhes da entrega' navigation={props.navigation} />
      <View style={styles.mapView}>
        <MapView
          style={{ flex: 1 }}
          // initialRegion={{
          //   latitude: location.lat ? location.lat : -22.376422,
          //   longitude: location.long ? location.long : -47.3722709,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
          showsUserLocation
          loadingEnabled
          showsMyLocationButton={false}
          showsCompass={false}
          ref={el => map = el}

        >
          <>
            <MapViewDirections
              origin={{"latitude": -22.5838264, "longitude": -47.40976949999999}}
              destination={{"latitude": -23.9549113, "longitude": -46.3796944}}
              apikey={GOOGLE_PLACES_API_KEY}
              strokeWidth={3}
              strokeColor='purple'
              mode='DRIVING'
              onReady={(result) =>
                map.fitToCoordinates(result.coordinates)}
            />
            <Marker
              title='Ponto de coleta'
              isPreselected
              onPress={e => console.log(e.nativeEvent)}
              draggable
              coordinate={{"latitude": -22.5838264, "longitude": -47.40976949999999}}
              image={startMarker}
            >
            </Marker>
            <Marker
              title='ponto de entrega'
              isPreselected={true}
              coordinate={{"latitude": -23.9549113, "longitude": -46.3796944}}
              image={finishMarker}
            >
            </Marker>
          </>
        </MapView>
      </View>
      <View style={styles.detailsView}>

      </View>
    </View>
  )
}

export default Request;
