import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, TouchableOpacity, Modal, FlatList,Alert, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { showMessage } from "react-native-flash-message";

import Header from '../../components/Header';

import { api } from '../../services/auth';

import { BASE_URL } from '../../../constants';

import styles from './styles';

function DriverProfile(props) {
  let { driverData } = props.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [number_stars, setNumberStars] = useState(1);
  const [commentRate, setCommentRate] = useState('');
  const [comments, setComments] = useState([]);


  async function handleRateUser() {
    if(commentRate.length < 1) {
      Alert.alert('Não esqueça de comentar!');
      return;
    }
    setModalVisible(false);
    console.log('driver data');
    console.log(driverData);
    driverData = { ...driverData, number_stars }
    const response = await api.put('/drivers', { driverData })

    if (response.data.messageCode === '200') {
      showMessage({
        message: "Avaliação dada com sucesso!",
        type: "success",
      });
    }

    const res = await api.post('/rate', {
      "driver_id": driverData.id,
      commentRate
    });

  }


  async function fetchCommentRate() {
    const res = await api.post('/user/rate', {
      driver_id: driverData.id
    })

    res.data.response.sort(function (a, b) {
      return new Date(b.id) - new Date(a.id);
    });
    setComments(res.data.response);
  }


  useEffect(() => {
    props.navigation.addListener('focus', () => {
      fetchCommentRate();
    });

  }, [props.navigation]);


  function handleCommentRate(e) {
    setCommentRate(e);
  }


  const renderItem = ({ item }) => (
    <View style={styles.viewComment}>
      <View style={styles.commentRateCard}>
        <Text style={styles.commentStyle}>{item.comment}</Text>
        <Icon name="comments-o" size={20} color="#FA960F" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header head='Perfil do motorista' navigation={props.navigation} />
      <View style={styles.topView}>
        <View style={{ width: '100%', height: 200 }}>
          <Image source={{ uri: `${BASE_URL}/files/${driverData.avatar_path}` }} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={styles.avatarView}>
          <Image source={{ uri: `${BASE_URL}/files/${driverData.avatar_path}` }} style={styles.profilePic} />
          <Text style={styles.avatarText}>{`${driverData.first_name} ${driverData.last_name}`}</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={driverData.number_stars}
            starSize={18}
            halfStarEnabled
            fullStarColor={'#FA960F'}
            selectedStar={(rating) => { }}
          />
        </View>
        <View style={styles.contactView}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${driverData.phone}`)}
            style={styles.callButton}
          >
            <>
              <Icon name="phone" size={35} color="#FA960F" />
              <Text style={styles.buttonText}>Ligar</Text>
            </>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${driverData.email}?subject=Contato através do aplicativo Moov&`)}
            style={styles.callButton}
          >
            <>
              <Icon name="envelope-square" size={35} color="#FA960F" />
              <Text style={styles.buttonText}>E-mail</Text>
            </>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.callButton}
          >
            <>
              <Icon name="star-half" size={35} color="#FA960F" />
              <Text style={styles.buttonText}>Avaliar</Text>
            </>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
              <Text style={styles.modalText}>Avalie o seu motorista</Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={number_stars}
                starSize={40}
                halfStarEnabled
                fullStarColor={'#FA960F'}
                selectedStar={(rating) => setNumberStars(rating)}
              />
            </View>
            <View>
              <Text style={styles.commentRate}>{`${commentRate.length}/70`}</Text>
              <TextInput
                numberOfLines={3}
                placeholder='Deixe um comentário aqui'
                multiline
                textAlign='center'
                underlineColorAndroid='#000'
                maxLength={70}
                onChangeText={(e) => handleCommentRate(e)}
                style={{ width: 200 }}
              />
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

export default DriverProfile;
