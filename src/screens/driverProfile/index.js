import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

function DriverProfile(props) {
  return (
    <View>
      <Header head='Perfil do motorista' navigation={props.navigation} />
      <Text>Driver profile</Text>
    </View>
  )
}

export default DriverProfile;
