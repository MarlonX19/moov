import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StatusBar, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function SignUp(props) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const { signed, signIn } = useContext(AuthContext);

  const nav = useNavigation();

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
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    textContentType='name'
                    autoCapitalize='words'
                    placeholderTextColor='#ddd'
                    onChangeText={text => setName(text)}
                    value={name}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder='Sobrenome'
                    textContentType='familyName'
                    autoCapitalize='words'
                    placeholderTextColor='#ddd'
                    onChangeText={text => setSurname(text)}
                    value={surname}
                  />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TextInput
                    style={styles.input}
                    placeholder='Telefone'
                    textContentType='telephoneNumber'
                    keyboardType='phone-pad'
                    autoCapitalize='words'
                    placeholderTextColor='#ddd'
                    onChangeText={text => setPhone(text)}
                    value={phone}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder='Email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholderTextColor='#ddd'
                    onChangeText={text => setEmail(text)}
                    value={email}
                  />
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
              <TextInput
                style={[styles.input, { alignSelf: 'center' }]}
                placeholder='CPF'
                textAlign={'center'}
                keyboardType='numeric'
                keyboardAppearance='dark'
                placeholderTextColor='#ddd'
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Senha"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            finishBtnText='Concluir'
            onSubmit={() => nav.navigate('Welcome')}>
            <View style={styles.inputsView}>
              <TextInput
                style={[styles.input, { alignSelf: 'center' }]}
                placeholder='Crie uma senha'
                textAlign={'center'}
                secureTextEntry
                placeholderTextColor='#ddd'
                onChangeText={text => setPassword(text)}
                value={password}
                key={1}
              />
              <TextInput
                style={[styles.input, { alignSelf: 'center' }]}
                placeholder='Confirmar senha'
                textAlign={'center'}
                secureTextEntry
                placeholderTextColor='#ddd'
                onChangeText={text => setConfirmPass(text)}
                value={confirmPass}
                key={2}
              />
              {password != confirmPass ? <Text style={styles.wrongPass}>Senhas diferentes</Text> : <View />}
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}
