import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/dashboard';
import Test from '../screens/test';
import Profile from '../screens/profile';

import DrawerContent from '../components/DrawerContent';

//const AppStack = createStackNavigator();
const AppStack = createDrawerNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    drawerContent={DrawerContent}
    initialRouteName="Dashboard"
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
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Profile" component={Profile} />
    <AppStack.Screen name="Test" component={Test} />
  </AppStack.Navigator>
)

export default AppRoutes;