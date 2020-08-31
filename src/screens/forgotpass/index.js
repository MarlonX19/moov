import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { showMessage } from "react-native-flash-message";

import styles from './styles';

import { api } from '../../services/auth';

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function checkEmailExistence() {
    api.post('/checkEmail', {
      email
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
        showMessage({
          message: "Email informado não existe em nosso sistema",
          type: "info",
        });
      })
  }

  async function handleForgotPass() {
    const res = await api.post('/forgot', {
      email
    })

    if (res.status === 200) {
      showMessage({
        message: res.data.message,
        type: "success",
      });
    } else {
      showMessage({
        message: 'Erro ao gerar ou enviar código',
        type: "warning",
      });
    }
  }


  function handleUpdatePassword() {
    api.post('/reset', {
      email: email,
      token: code,
      password: password
    })
      .then(response => {
        showMessage({
          message: 'Senha alterada com sucesso!',
          type: "success",
        });
      })
      .catch(error => {
        showMessage({
          message: 'Falha ao tentar alterar senha',
          type: "warning",
        });
      })
  }


  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topText}>Esqueceu a senha?</Text>
        <Text style={[styles.topText, { fontSize: 14, fontWeight: 'normal' }]}>relaxa, a gente te ajuda!</Text>
      </View>
      <View style={{ height: 400 }}>
        <ProgressSteps isComplete={false} >
          <ProgressStep
            label="Informar email"
            nextBtnText='Próximo'
            nextBtnTextStyle={styles.nextBtnTextStyle}
          >
            <View>
              <View style={styles.inputsView}>
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  textContentType='emailAddress'
                  autoCapitalize='none'
                  placeholderTextColor='#ddd'
                  onChangeText={text => setEmail(text)}
                  value={email}
                  onBlur={() => checkEmailExistence()}
                />
              </View>
              <View style={styles.btnView}>
                <TouchableOpacity
                  onPress={() => handleForgotPass()}
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>ENVIAR CÓDIGO</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.forgotPass}>
                <Text style={styles.forgotPassText}>Enviaremos um código em seu email</Text>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Digite o código"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnText='Próximo'
            nextBtnTextStyle={styles.nextBtnTextStyle}
            nextBtnStyle={styles.nextBtnStyle}
          >
            <View style={styles.inputsView}>
              <TextInput
                style={[styles.input, { paddingLeft: 0, fontSize: 18 }]}
                placeholder='_ _ _ _'
                textAlign={'center'}
                keyboardType='default'
                autoCapitalize='none'
                placeholderTextColor='#ddd'
                onChangeText={text => setCode(text)}
                value={code}
              />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Nova senha"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            finishBtnText='Concluir'
            onSubmit={() => handleUpdatePassword()}>
            <View style={styles.inputsView}>
              <TextInput
                style={[styles.input, { paddingLeft: 0 }]}
                placeholder='nova senha'
                textAlign={'center'}
                secureTextEntry
                placeholderTextColor='#ddd'
                onChangeText={text => setPassword(text)}
                value={password}
                key={0}
              />
              <TextInput
                style={[styles.input, { paddingLeft: 0 }]}
                placeholder='Confirmar nova senha'
                textAlign={'center'}
                secureTextEntry
                placeholderTextColor='#ddd'
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                key={1}
              />
            </View>
            {password != confirmPassword ? <Text style={styles.wrongPass}>Senhas diferentes</Text> : <View />}
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
}
