import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function ForgotPass() {
  const [email, setEmail] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topText}>Esqueceu a senha?</Text>
        <Text style={[styles.topText, { fontSize: 14, fontWeight: 'normal' }]}>relaxa, a gente te ajuda!</Text>
      </View>
      <View style={styles.inputsView}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          textContentType='emailAddress'
          placeholderTextColor='#ddd'
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.forgotPass}>
          <Text style={styles.forgotPassText}>Enviaremos um código de recuperação de senha para seu email</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => false}
          style={styles.btn}
        >
          <Text style={styles.btnText}>ENVIAR CÓDIGO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
