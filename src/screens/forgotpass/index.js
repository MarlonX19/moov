import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import styles from './styles';

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


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
                  placeholderTextColor='#ddd'
                  onChangeText={text => setEmail(text)}
                  value={email}
                />
              </View>
              <View style={styles.btnView}>
                <TouchableOpacity
                  onPress={() => false}
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
                keyboardType='numeric'
                placeholderTextColor='#ddd'
                onChangeText={text => setCode(text)}
                value={code}
              />
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => false}
                style={styles.btn}
              >
                <Text style={styles.btnText}>VERIFICAR CÓDIGO</Text>
              </TouchableOpacity>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Nova senha"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            finishBtnText='Concluir'>
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
