import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function DrawerContent() {
    return (
        <View style={styles.drawerContent}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: 20, borderBottomWidth: 0.5, borderBottomColor: '#ddd' }}>
                <Image source={require('../assets/profile.png')} style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 1, borderColor: '#525151' }} />
                <Text style={{ color: '#525151', fontWeight: '700', fontSize: 22, fontFamily: 'sans-serif-thin' }}>Marlon Englemam</Text>
                <Text style={{ color: '#999', fontFamily: 'sans-serif-thin' }}>marlon@gmail.com</Text>
            </View>
            <View style={{ flex: 3, padding: 10 }}>
                <View style={styles.menuOption}>
                    <Icon name="user" size={18} color="#ddd" />
                    <Text style={styles.menuOptionText}>Perfil</Text>
                </View>
                <View style={styles.menuOption}>
                    <Icon name="money-bill-alt" size={18} color="#ddd" />
                    <Text style={styles.menuOptionText}>Pagamentos</Text>
                </View>
                <View style={styles.menuOption}>
                    <Icon name="map-marked-alt" size={18} color="#ddd" />
                    <Text style={styles.menuOptionText}>Acompanhar</Text>
                </View>
                <View style={styles.menuOption}>
                    <Icon name="history" size={18} color="#ddd" />
                    <Text style={styles.menuOptionText}>Histórico</Text>
                </View>
                <View style={styles.menuOption}>
                    <Icon name="cog" size={18} color="#ddd" />
                    <Text style={styles.menuOptionText}>Configurações</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
