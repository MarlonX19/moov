import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth'
import Routes from './routes';


import FlashMessage from "react-native-flash-message";


export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <>
          <Routes />
          <FlashMessage position='bottom' />
        </>
      </AuthProvider>
    </NavigationContainer>
  );
}