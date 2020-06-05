import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/dashboard';
import Test from '../screens/test';
import Profile from '../screens/profile';
import Payments from '../screens/payments';
import History from '../screens/history';

import DrawerContent from '../components/DrawerContent';
import CustomDrawerContent from '../components/CustomDrawerContent';

//const AppStack = createStackNavigator();
const AppStack = createDrawerNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    // drawerContent={DrawerContent}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    initialRouteName="Dashboard"
    overlayColor='rgba(0,0,0,0.6)'
    drawerStyle={{
      backgroundColor: '#fff',
      width: 280,
    }}
    drawerContentOptions={{
      activeTintColor: '#FA960F',
      itemStyle: { marginVertical: 10 },
    }}
  >
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Profile" component={Profile} />
    <AppStack.Screen name="Pagamentos" component={Payments} />
    <AppStack.Screen name="Historico" component={History} />
    <AppStack.Screen name="Test" component={Test} />
  </AppStack.Navigator>
)

export default AppRoutes;