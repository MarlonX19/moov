import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { api } from '../services/auth';


const AuthContext = createContext({ signed: false, user: {} });


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [push_id_player, setPushIdPlayer] = useState('');


  function setPushId(id){
    setPushIdPlayer(id)
  }


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

    return api.post("/login", { email, password })
      .then(async response => {
        try {
          await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data[0]));
          await AsyncStorage.setItem('@RNAuth:token', response.data[0].push_id);
        } catch (error) {
          console.log(error);

          return { message: 'logged' }
        }
        setUser(response.data[0]);
      })
      .catch((error) => {
        console.log(error);

        return { message: 'failed' }
      });
  }


  async function updateUser(userData) {
    return api.put("/users", { userData })
      .then(async response => {
        try {
          await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data.response[0]));
          await AsyncStorage.setItem('@RNAuth:token', response.data.response[0].push_id);
        } catch (error) {
          console.log(error);
        }
        setUser(response.data.response[0]);
        return { message: 'updated' }
      })
      .catch((error) => {
        console.log(error);
        return { message: 'error' }
      });
  }


  async function updateUserPhoto(formData) {

    let options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    return api.put("/userPhoto", formData, options)
      .then(async function (response) {
        console.log('response.data[0] foto atualizada');
        console.log(response.data[0]);
        try {
          await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data[0]));
          await AsyncStorage.setItem('@RNAuth:token', response.data[0].push_id);
        } catch (error) {
          console.log(error);
        }
        setUser(response.data[0]);
        return { message: 'updated' }

      })
      .catch(function (error) {
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
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading, updateUser, updateUserPhoto, setPushId, push_id_player }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;