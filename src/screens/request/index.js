import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Request(props) {


  function handleSeeDetails() {
    props.navigation.navigate('Detalhes');
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => handleSeeDetails()}
      >
        <Text>ola request</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Request;
