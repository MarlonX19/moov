import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import moment from 'moment';

import Header from '../../components/Header';

import styles from './styles';

function ConfirmRequest(props) {
  const [value, setValue] = useState('');
  const [observation, setObservation] = useState('');

  const { user, socket, fromTown,
    toTown, fromLatitude, fromLongitude,
    toLatitude, toLongitude } = props.route.params;

  function handleValue(value) {
    setValue(value)
  }


  function handleSearch() {
    let now = moment().valueOf().toString();

    socket.emit('continue', {
      user, value, fromTown, toTown,
      fromLatitude, fromLongitude, toLatitude,
      toLongitude, observation, date: now
    })

  }


  return (
    <View style={styles.container}>
      <Header head='Fazer pedido' navigation={props.navigation} />
      <View style={styles.valueView}>
        <Text style={styles.valueText}>Valor que está disposto a pagar:</Text>
        <TextInput
          style={{ fontSize: 18 }}
          placeholder='ex: R$95.80'
          keyboardType='numeric'
          underlineColorAndroid='green'
          onChangeText={text => handleValue(text)}
          value={value}
        />
      </View>

      <View style={styles.valueView}>
        <Text style={styles.valueText}>Insira uma observação:</Text>
        <TextInput
          style={{ fontSize: 18 }}
          placeholder='ex: entregar na portaria do prédio'
          keyboardType='default'
          underlineColorAndroid='green'
          onChangeText={text => setObservation(text)}
          value={observation}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleSearch()}
        style={styles.searchButton}
      >
        <Text style={styles.buttonText}>Confirmar e buscar entregador</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmRequest;
