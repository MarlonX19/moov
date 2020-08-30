import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { api } from '../services/auth';


const AuthContext = createContext({ signed: false, user: {} });


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }

    }

    loadStorageData();
  }, [])

  async function signIn(email, password) {
    // const response = await auth.Signin(email, password);
    // console.log(response)
    // console.log('response aqui')
    // if (response !== 404) {
    //   setUser(response.user);

    //   await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    //   await AsyncStorage.setItem('@RNAuth:token', response.push_id);
    // }


    api.post("/login", { email, password })
      .then(async response => {
        console.log('response aqui')
        console.log(response.data[0].push_id)
        console.log(response.data[0])
        try {
          await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data[0]));
          await AsyncStorage.setItem('@RNAuth:token', response.data[0].push_id);
        } catch (error) {
          console.log(error);
        }
        setUser(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  async function updateUser(userData) {
    return api.put("/users", { userData })
      .then(async response => {
        console.log('========response da atualização aqui=======')
        console.log(response.data[0])
        try {
          await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data[0]));
          await AsyncStorage.setItem('@RNAuth:token', response.data[0].push_id);
        } catch (error) {
          console.log(error);
        }
        setUser(response.data[0]);
        return { message: 'updated' }
      })
      .catch((error) => {
        console.log(error);
        return { message: 'error' }
      });
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }


  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading, updateUser }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;