import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../screens/signin';
import SignUp from '../screens/signup';

import DrawerContent from '../components/DrawerContent';


//const AuthStack = createStackNavigator();
const AuthStack = createDrawerNavigator();

const AuthRoutes = () => (
       <AuthStack.Navigator
        drawerContent={DrawerContent}
        initialRouteName="Home"
        overlayColor='rgba(0,0,0,0.6)'
        drawerStyle={{
          backgroundColor: '#fff',
          width: 280,
        }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
      >
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
      </AuthStack.Navigator>
)

export default AuthRoutes;