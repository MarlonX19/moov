import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

import Header from '../../components/Header';

import { BASE_URL } from '../../../constants';

import styles from './styles';

function DriverProfile(props) {
  const { driverData } = props.route.params;

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
            rating={4}
            starSize={18}
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
            onPress={() => Linking.openURL(`tel:${driverData.phone}`)}
            style={styles.callButton}
          >
            <>
              <Icon name="star-half" size={35} color="#FA960F" />
              <Text style={styles.buttonText}>Avaliar</Text>
            </>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DriverProfile;
