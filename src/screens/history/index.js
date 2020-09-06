import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

function History(props) {
  return (
    <View>
      <Header head='Histórico' navigation={props.navigation} />
      <Text>history</Text>
    </View>
  )
}

export default History;