import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

import Header from '../../components/Header'
import styles from './styles';

export default function profile(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <Header head='Perfil' navigation={props.navigation} handleFun={() => false} />
      <View style={styles.container}>
          <View style={styles.topCard}>
            <View style={styles.imageView}>
              <Image source={require('../../assets/profile.png')} style={{ borderRadius: 50, width: 90, height: 90 }} />
              <Text style={styles.imageText}>Mudar foto de perfil ></Text>
            </View>
            <View style={styles.inputs}>
              <Text style={{ color: 'grey' }}>Nome</Text>
              <TextInput
                style={styles.inputsTxt}
                placeholder='Marlon'
                placeholderTextColor='black'
                onChangeText={text => setName(text)}
                value={name}
              />
            </View>
            <View style={styles.inputs}>
              <Text style={{ color: 'grey' }}>Sobrenome</Text>
              <TextInput
                style={styles.inputsTxt}
                placeholder='Englemam'
                placeholderTextColor='black'
                onChangeText={text => setLastName(text)}
                value={lastName}
              />
            </View>
          </View>

          <View style={styles.bottomCard}>
            <View style={styles.fieldsView}>
              <Text style={styles.phoneText}>Número de telefone</Text>
              <Text style={styles.phoneValue}>(19) 999****51 ></Text>
            </View>
            <View style={styles.fieldsView}>
              <Text style={styles.phoneText}>E-mail</Text>
              <Text style={styles.phoneValue}>marlon.eng******@gmail.com ></Text>
            </View>
            <View style={styles.fieldsView}>
              <Text style={styles.phoneText}>Senha</Text>
              <Text style={styles.phoneValue}>Alterar ></Text>
            </View>
          </View>
      </View>
    </>
  )
}

