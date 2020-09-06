import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import Header from '../../components/Header';

import NoRide from '../../assets/no-rides.png';
import { api } from '../../services/auth';

import styles from './styles';

function History(props) {
  const [deliveries, setDeliveries] = useState([]);
  const [user_id, setUserId] = useState(1);
  const [loading, setLoading] = useState(true);


  async function fetchDeliveries() {
    setLoading(true);
    let type = 'users';
    let user_id = 1;
    const response = await api.post('/user/deliveries', { user_id, type })

    if (response.data.messageCode == '200') {
      setDeliveries(response.data.response);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchDeliveries();
  }, [])


  if (loading) {
    return (
      <View style={styles.ActivityIndicatorView}>
        <ActivityIndicator size='large' color='orange' />
      </View>
    )
  }


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