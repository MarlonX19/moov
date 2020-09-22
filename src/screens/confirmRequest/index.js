import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Modal, TouchableHighlight } from 'react-native';
import moment from 'moment';

import Header from '../../components/Header';

import ConfirmImage from '../../assets/confirm.png';

import styles from './styles';

function ConfirmRequest(props) {
  const [modalVisible, setModalVisible] = useState(false);
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

    setModalVisible(true);

    // socket.emit('continue', {
    //   user, value, fromTown, toTown,
    //   fromLatitude, fromLongitude, toLatitude,
    //   toLongitude, observation, date: now
    // })

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
      <View style={styles.iconView}>
        <Image style={{ width: 200, height: 150 }} source={ConfirmImage} />
      </View>
      <TouchableOpacity
        onPress={() => handleSearch()}
        style={styles.searchButton}
      >
        <Text style={styles.buttonText}>Confirmar e buscar entregador</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ backgroundColor: 'red', flex: 1 }}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.rateView}>
              <Text style={styles.modalText}>Avalie o seu cliente</Text>

            </View>
            <TouchableHighlight
              style={{ ...styles.openButton }}
              onPress={() => {
                handleRateUser();
              }}
            >
              <Text style={styles.textStyle}>Avaliar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


    </View>
  )
}

export default ConfirmRequest;
