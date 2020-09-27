import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import OneSignal from 'react-native-onesignal';

import { ONESIGNAL_APP_ID } from '../../constants';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


import AuthContext from '../contexts/auth';

const Routes = () => {
  const { signed, loading, setPushId } = useContext(AuthContext);


  const onIds = (device) => {
    console.log('Device info: ', device.userId);
    setPushId(device.userId);
  }


  useEffect(() => {
    OneSignal.init(ONESIGNAL_APP_ID);
    OneSignal.inFocusDisplaying(2);
    OneSignal.addEventListener('ids', onIds);
  }, [])



  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Carregando dados</Text>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txt: {
    fontFamily: 'sans-serif-thin',
    fontSize: 24
  }
})