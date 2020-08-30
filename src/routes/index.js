import React, { useContext } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


import AuthContext from '../contexts/auth';

const Routes = () => {
  const { signed, loading } = useContext(AuthContext);


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