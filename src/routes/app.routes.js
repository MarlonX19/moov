import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/dashboard';
import Help from '../screens/help';
import Profile from '../screens/profile';
import Payments from '../screens/payments';
import History from '../screens/history';
import Update from '../screens/update';
import RequestDetails from '../screens/request';
import DriverProfile from '../screens/driverProfile';
import ConfirmRequest from '../screens/confirmRequest';

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


function HistoryRoot() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Historico"
        component={History} />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Detalhes"
        component={RequestDetails} />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="PerfilMotorista"
        component={DriverProfile} />
    </AppStack.Navigator>
  );
}


function DashboardRoot() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard} />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Confirmar"
        component={ConfirmRequest} />
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
    <AppDrawer.Screen name="Dashboard" component={DashboardRoot} />
    <AppDrawer.Screen name="Profile" component={ProfileRoot} />
    <AppDrawer.Screen name="Pagamentos" component={Payments} />
    <AppDrawer.Screen name="Historico" component={HistoryRoot} />
    <AppDrawer.Screen name="Ajuda" component={Help} />
  </AppDrawer.Navigator>
)

export default AppRoutes;