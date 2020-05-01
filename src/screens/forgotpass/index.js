import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import styles from './styles';

export default function ForgotPass() {
  const [email, setEmail] = useState('');


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
                style={[styles.input, { paddingLeft: 0 }]}
                placeholder='_ _ _ _'
                textAlign={'center'}
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
                onChangeText={text => setEmail(text)}
                value={email}
              />
              <TextInput
                style={[styles.input, { paddingLeft: 0 }]}
                placeholder='Confirmar nova senha'
                textAlign={'center'}
                secureTextEntry
                placeholderTextColor='#ddd'
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
}
