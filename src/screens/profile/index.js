import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { showMessage } from "react-native-flash-message";

import { phoneMask } from '../../utils/inputMasks';

import { BASE_URL } from '../../../constants';

import Header from '../../components/Header'
import styles from './styles';

import AuthContext from '../../contexts/auth';

export default function profile(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');

  const { user, updateUser } = useContext(AuthContext);


  useEffect(() => {
    if (user?.first_name && user?.last_name) {
      setName(user.first_name)
      setLastName(user.last_name)
      setAvatar(`${BASE_URL}/files/${user.avatar_path}`)
    }
  }, [])

  useEffect(() => {
    setAvatar(`${BASE_URL}/files/${user.avatar_path}`)

  }, [user.avatar_path])


  async function handleUpdate() {
    let newUserData = { ...user, ...{ first_name: name, last_name: lastName } };
    const res = await updateUser(newUserData);

    if (res?.message == 'updated') {
      showMessage({
        message: "Dado atualizado!",
        type: "success",
      });
    } else {
      showMessage({
        message: "Erro ao atualizar!",
        type: "warning",
      });
    }
  }



  return (
    <>
      <Header head='Perfil' navigation={props.navigation} handleFun={() => false} />
      <View style={styles.container}>
        <View style={styles.topCard}>
          <View >
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Atualizar', { forUpdate: 'image' })}
              style={styles.imageView}
            >
              <Image source={{ uri: avatar }} style={{ borderRadius: 15, width: 90, height: 90 }} />
              <Text style={styles.imageText}>Mudar foto de perfil</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputs}>
            <Text style={{ color: 'grey' }}>Nome</Text>
            <TextInput
              style={styles.inputsTxt}
              placeholder={user?.first_name}
              placeholderTextColor='black'
              onChangeText={text => setName(text)}
              value={name}
              onBlur={() => handleUpdate()}
            />
          </View>
          <View style={styles.inputs}>
            <Text style={{ color: 'grey' }}>Sobrenome</Text>
            <TextInput
              style={styles.inputsTxt}
              placeholder={user?.last_name}
              placeholderTextColor='black'
              onChangeText={text => setLastName(text)}
              value={lastName}
              onBlur={() => handleUpdate()}
            />
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.fieldsView}>
            <Text style={styles.phoneText}>Número de telefone</Text>
            <Text style={styles.phoneValue}>{phoneMask(user?.phone)}</Text>
          </View>
          <View style={styles.fieldsView}>
            <Text style={styles.phoneText}>E-mail</Text>
            <Text style={styles.phoneValue}>{user?.email}</Text>
          </View>
          <View style={styles.fieldsView}>
            <Text style={styles.phoneText}>Senha</Text>
            <Text style={styles.phoneValue}>Alterar</Text>
          </View>
        </View>
      </View>
    </>
  )
}

