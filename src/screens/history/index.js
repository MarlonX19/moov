import React from 'react';
import { View, Text, Image } from 'react-native';

import Header from '../../components/Header';

import NoRide from '../../assets/no-rides.png';


import styles from './styles';

function History(props) {
  return (
    <View style={styles.container}>
      <Header head='Histórico' navigation={props.navigation} />
      <View style={styles.NoRides}>
        <Image source={NoRide} style={{ width: 150, height: 150 }} />
        <Text style={styles.NoRidesText}>Nada para mostrar</Text>
      </View>
    </View>
  )
}

export default History;