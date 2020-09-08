import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import moment from 'moment';

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
      console.log(response.data.response)
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


  const renderItem = ({ item }) => {
    console.log('=======aqui========');
    console.log(item)
    return (
      <View style={styles.cardBody}>
        <View style={styles.cardHead}>
          <Text style={[styles.headText,
          {
            color: item.delivered === 'Concluído' ?
              'green' :
              'orange'
          }]}>{item.delivered ? 'Concluído' : 'em andamento'}</Text>
          <Text style={styles.headText}>R${parseFloat(item.value).toFixed(2)}</Text>
        </View>
        <View style={styles.mainInfo}>
          <Text style={styles.mainText}>Solicitado em: </Text>
          <Text style={styles.mainText}>{moment(item.date).format("DD/MM/YYYY")}</Text>
        </View>
        <View style={styles.bottomCard}>
          <View style={styles.fromTown}>
            <View style={[styles.markerView, { backgroundColor: 'red' }]}></View>
            <Text style={styles.fromLocationText}>{item.fromTown}</Text>
          </View>
          <View style={styles.toTown}>
            <View style={[styles.markerView, { backgroundColor: 'green' }]}></View>
            <Text style={styles.fromLocationText}>{item.toTown}</Text>
          </View>
        </View>
      </View >
    )
  }


  return (
    <View style={styles.container}>
      <Header head='Histórico' navigation={props.navigation} />
      {
        deliveries.length < 1 ?
          <View style={styles.NoRides}>
            <Image source={NoRide} style={{ width: 150, height: 150 }} />
            <Text style={styles.NoRidesText}>Nada para mostrar</Text>
          </View> :
          <FlatList
            data={deliveries}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
      }

    </View>
  )
}

export default History;