import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Home from './screens/Home';
import Profile from './screens/Profile';
import DrawerContent from './components/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#fff' barStyle="dark-content" />
      <Drawer.Navigator
        drawerContent={DrawerContent}
        initialRouteName="Home"
        overlayColor='transparent'
        drawerStyle={{
          backgroundColor: '#fff',
          width: 280,
        }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ccc"
  },

  drawerContent: {
    flex: 1,
    flexDirection: 'column'
  },

  menuOption: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  menuOptionText: {
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 24,
    color: '#525151',
    marginVertical: 5
  }
});

export default App;
