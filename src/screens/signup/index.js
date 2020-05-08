import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { TextInput } from 'react-native-paper';

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
                    label='Nome'
                    value={name}
                    onChangeText={txt => setName(txt)}
                  />
                  <TextInput
                    label='Sobrenome'
                    value={surname}
                    onChangeText={txt => setSurname(txt)}
                  />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TextInput
                    label='Telefone'
                    value={phone}
                    onChangeText={txt => setPhone(txt)}
                  />
                  <TextInput
                    label='Email'
                    value={email}
                    onChangeText={txt => setEmail(txt)}
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
                label='CPF'
                value={email}
                onChangeText={txt => setEmail(txt)}
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
                label='Email'
                value={email}
                onChangeText={txt => setEmail(txt)}
              />
              <TextInput
                style={{ fontSize: 22, height: 60 }}
                label='Email'
                value={email}
                onChangeText={txt => setEmail(txt)}
              />
              {password != confirmPass ? <Text style={styles.wrongPass}>Senhas diferentes</Text> : <View />}
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}
