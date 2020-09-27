import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { TextInput, HelperText } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { showMessage } from "react-native-flash-message";

import AuthContext from '../../contexts/auth';
import { cpfMask, phoneMask } from '../../utils/inputMasks';

import { api } from '../../services/auth';

import styles from './styles';

export default function SignUp(props) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [number_starts, setNumber_starts] = useState(5);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [image, setImage] = useState('https://www.gravatar.com/avatar/?d=retro');
  const { signed, signIn, push_id_player } = useContext(AuthContext);

  const nav = useNavigation();

  function _hasErrors() {
    return !email.includes('@');
  }


  async function handleLogin() {
    uploadImageAsync(image)
  }


  function handleImageChange() {
    ImagePicker.openPicker({
      width: 350,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path)
    });
  }

  async function uploadImageAsync(uri) {
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();

    formData.append("userphoto", {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });
    formData.append("first_name", name);
    formData.append("last_name", surname);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("push_id", push_id_player);
    formData.append("number_starts", number_starts);
    formData.append("document", cpf);


    let options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    api.post("/users", formData, options)
      .then(function (response) {
        console.log(response.data);
        nav.navigate('Welcome');
      })
      .catch(function (error) {
        console.log(error);
        showMessage({
          message: "Erro ao criar conta",
          type: "danger",
        });
      });
  }


  function checkEmailExistence() {
    let type = 'users'
    api.post('/checkEmail', {
      email,
      type
    })
      .then(response => {
        if (response.data.messageCode == '200') {
          showMessage({
            message: "Email informado já está cadastrado",
            type: "info",
          });
        }

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FA960F' />
      <View style={styles.topView}>
        <Text style={styles.topText}>Cadastre-se</Text>
        <Text style={[styles.topText, { fontSize: 14, fontWeight: 'normal' }]}>Fazer mudança nunca foi tão fácil!</Text>
      </View>
      <ScrollView>
        <ProgressSteps isComplete={false} >
          <ProgressStep
            label="Dados gerais"
            nextBtnText='Próximo'
            nextBtnTextStyle={styles.nextBtnTextStyle}
          >
            <View>
              <View style={styles.inputsView}>
                <View style={styles.inputViewsContainer}>
                  <View style={styles.nameTxtInput}>
                    <TextInput
                      style={{ backgroundColor: '#fff' }}
                      label='Nome'
                      value={name}
                      onChangeText={txt => setName(txt)}
                    />
                  </View>
                  <View style={styles.nameTxtInput}>
                    <TextInput
                      style={{ backgroundColor: '#fff' }}
                      label='Sobrenome'
                      autoCapitalize='words'
                      autoCorrect={false}
                      value={surname}
                      onChangeText={txt => setSurname(txt)}
                    />
                  </View>
                </View>
                <View style={styles.inputViewsContainer}>
                  <View style={styles.nameTxtInput}>
                    <TextInput
                      style={{ backgroundColor: '#fff' }}
                      label='Telefone'
                      keyboardType='phone-pad'
                      autoCorrect={false}
                      value={phone}
                      onChangeText={txt => setPhone(phoneMask(txt))}
                    />
                    <HelperText
                      type="error"
                      visible={phone.length > 1 && phone.length < 7}
                    >
                      Telefone inválido!
                    </HelperText>
                  </View>
                  <View style={styles.nameTxtInput}>
                    <TextInput
                      style={{ backgroundColor: '#fff' }}
                      label='Email'
                      keyboardType='email-address'
                      autoCapitalize='none'
                      value={email}
                      onChangeText={txt => setEmail(txt)}
                      onBlur={() => checkEmailExistence()}
                    />
                    <HelperText
                      type="error"
                      visible={_hasErrors() && email.length > 1}
                    >
                      E-mail inválido!
                    </HelperText>
                  </View>
                </View>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Documento"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnText='Próximo'
            nextBtnTextStyle={styles.nextBtnTextStyle}
            nextBtnStyle={styles.nextBtnStyle}
          >
            <View style={styles.inputsView}>
              <View style={{ flex: 1, paddingHorizontal: 50 }}>
                <TextInput
                  style={{ backgroundColor: '#fff', paddingHorizontal: 5 }}
                  label='CPF'
                  keyboardType='numeric'
                  value={cpf}
                  onChangeText={txt => setCpf(cpfMask(txt))}
                />
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Avatar"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            nextBtnText='próximo'>
            <View style={styles.inputsView}>

              <Image
                source={{ uri: image }}
                style={{ alignSelf: 'center', borderRadius: 15, width: 110, height: 110 }} />
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => handleImageChange()}
              >
                <Text style={{ fontSize: 18, color: 'grey', textAlign: 'center' }}>Escolher foto</Text>
              </TouchableOpacity>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Senha"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            finishBtnText='Concluir'
            onSubmit={() => handleLogin()}>
            <View style={styles.inputsView}>
              <View style={styles.passwordInputView}>
                <TextInput
                  style={styles.passwordText}
                  label='Senha'
                  value={password}
                  autoCapitalize='none'
                  secureTextEntry
                  onChangeText={txt => setPassword(txt)}
                  key={0}
                />
              </View>
              <View style={styles.passwordInputView}>
                <TextInput
                  style={styles.passwordText}
                  label='Confirme senha'
                  value={confirmPass}
                  autoCapitalize='none'
                  secureTextEntry
                  onChangeText={txt => setConfirmPass(txt)}
                  key={1}
                />
              </View>
              {password != confirmPass ? <Text style={styles.wrongPass}>Senhas diferentes</Text> : <View />}
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}
