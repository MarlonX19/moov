import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topText}>Entrar</Text>
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
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor='#ddd'
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.forgotPass}>
        <Text style={styles.forgotPassText}>Esqueceu senha?</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => false}
          style={styles.btn}
        >
          <Text style={styles.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>Não tem conta? <Text style={styles.signUpText2}>Criar</Text></Text>
      </View>
    </View>
  );
}
