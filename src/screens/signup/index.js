import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { TextInput, HelperText } from 'react-native-paper';

import AuthContext from '../../contexts/auth';
import { cpfMask, phoneMask } from '../../utils/inputMasks';

import styles from './styles';

export default function SignUp(props) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const { signed, signIn } = useContext(AuthContext);

  const nav = useNavigation();


  function _hasErrors() {
    return !email.includes('@');
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
                      value={email}
                      onChangeText={txt => setEmail(txt)}
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
            label="Senha"
            previousBtnText='Anterior'
            previousBtnTextStyle={styles.previousBtnTextStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            finishBtnText='Concluir'
            onSubmit={() => nav.navigate('Welcome')}>
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
