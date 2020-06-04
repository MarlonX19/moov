import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signed, signIn } = useContext(AuthContext);

  const nav = useNavigation();

  function handleLogin() {
    signIn(email, password);


  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FA960F' />
      <View style={styles.topView}>
        <Text style={styles.topText}>Entrar</Text>
        <Text style={[styles.topText, { fontSize: 14, fontWeight: 'normal' }]}>Que bom que está aqui!</Text>
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
        <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPass')}>
          <Text style={styles.forgotPassText}>Esqueceu senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={styles.btn}
        >
          <Text style={styles.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpView}>
        <TouchableOpacity onPress={() => nav.navigate('SignUp')}>
          <Text style={styles.signUpText}>Não tem conta? <Text style={styles.signUpText2}>Criar</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
