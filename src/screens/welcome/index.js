import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Welcome() {

  const nav = useNavigation();



  return (
   <View style={styles.container}>
     <Image style={{ width: 200, height: 200}}  source={require('../../assets/welcome.png')} />
     <Text style={styles.welcomeText}>BEM VINDO</Text>
     <TouchableOpacity
      onPress={() => nav.navigate('SignIn')}
      style={styles.btn}
     >
       <Text style={styles.btnText}>Entrar</Text>
     </TouchableOpacity>
   </View>
  );
}
