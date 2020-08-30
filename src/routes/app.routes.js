import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/dashboard';
import Help from '../screens/help';
import Profile from '../screens/profile';
import Payments from '../screens/payments';
import History from '../screens/history';
import Update from '../screens/update';

import DrawerContent from '../components/DrawerContent';
import CustomDrawerContent from '../components/CustomDrawerContent';

const AppStack = createStackNavigator();

function ProfileRoot() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile} />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Atualizar"
        component={Update} />
    </AppStack.Navigator>
  );
}


const AppDrawer = createDrawerNavigator();

const AppRoutes = () => (
  <AppDrawer.Navigator
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
    <AppDrawer.Screen name="Dashboard" component={Dashboard} />
    <AppDrawer.Screen name="Profile" component={ProfileRoot} />
    <AppDrawer.Screen name="Pagamentos" component={Payments} />
    <AppDrawer.Screen name="Historico" component={History} />
    <AppDrawer.Screen name="Ajuda" component={Help} />
  </AppDrawer.Navigator>
)

export default AppRoutes;