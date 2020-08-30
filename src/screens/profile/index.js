import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { showMessage } from "react-native-flash-message";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Header from '../../components/Header'
import styles from './styles';

import AuthContext from '../../contexts/auth';

export default function profile(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const { user, updateUser } = useContext(AuthContext);

  console.log(user)

  useEffect(() => {
    if (user?.first_name && user?.last_name) {
      setName(user.first_name)
      setLastName(user.last_name)
    }
  }, [])


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
          <View style={styles.imageView}>
            <Image source={{ uri: `http://192.168.15.13:3000/files/${user.avatar_path}` }} style={{ borderRadius: 15, width: 90, height: 90 }} />
            <Text style={styles.imageText}>Mudar foto de perfil ></Text>
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
            <Text style={styles.phoneValue}>{user?.phone}></Text>
          </View>
          <View style={styles.fieldsView}>
            <Text style={styles.phoneText}>E-mail</Text>
            <Text style={styles.phoneValue}>{user?.email}></Text>
          </View>
          <View style={styles.fieldsView}>
            <Text style={styles.phoneText}>Senha</Text>
            <Text style={styles.phoneValue}>Alterar></Text>
          </View>
        </View>
      </View>
    </>
  )
}

