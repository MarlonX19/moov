import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Header from '../../components/Header';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function Help(props) {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut()
  }

  return (
    <View style={styles.container}>
      <Header head='Ajuda' navigation={props.navigation} />
      <View style={styles.mainView}>

      </View>
      <TouchableOpacity
      style={styles.signOutView}
        onPress={() => handleSignOut()}
      >
          <Text style={styles.signOutText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

