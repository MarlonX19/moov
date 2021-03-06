import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome5';

let res = null;

export default function DrawerContent(props) {

    (async function () {
        try {
            res = await AsyncStorage.getItem('@RNAuth:user');

            console.log('aqui dados do user dentro do content drawer')
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    })()



    return (
        <View style={styles.drawerContent}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 10, paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#ddd' }}>
                <View style={{ flexDirection: 'row', width: 200, alignItems: 'center' }}>
                    <Image source={require('../assets/profile.png')} style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 1, borderColor: '#525151', marginRight: 5 }} />
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={5}
                        starSize={25}
                        fullStarColor={'#FA960F'}
                        selectedStar={(rating) => { }}
                    />
                </View>
                <Text style={{ color: '#525151', fontWeight: '700', fontSize: 20, fontFamily: 'sans-serif-thin' }}>{res?.first_name}</Text>
                <Text style={{ color: '#999', fontFamily: 'sans-serif-thin' }}>marlon@gmail.com</Text>
            </View>
            <View style={{ flex: 3, padding: 10 }}>
                <TouchableOpacity
                    style={styles.menuOption}
                    onPress={() => props.navigation.navigate('Profile')}
                >
                    <View style={{ width: 25, marginLeft: 2 }}>
                        <Icon name="user" size={16} color="#FA960F" />
                    </View>
                    <Text style={styles.menuOptionText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuOption}
                    onPress={() => props.navigation.navigate('Payments')}
                >
                    <View style={{ width: 25 }}>
                        <Icon name="money-bill-alt" size={16} color="#FA960F" />
                    </View>
                    <Text style={styles.menuOptionText}>Pagamentos</Text>
                </TouchableOpacity>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="map-marked-alt" size={16} color="#FA960F" />
                    </View>
                    <Text style={styles.menuOptionText}>Acompanhar entregas</Text>
                </View>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="history" size={16} color="#FA960F" />
                    </View>
                    <Text style={styles.menuOptionText}>Histórico</Text>
                </View>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="question-circle" size={18} color="#FA960F" />
                    </View>
                    <Text style={styles.menuOptionText}>Ajuda</Text>
                </View>
                <View style={styles.menuOption}>
                    <View style={{ width: 25, marginLeft: 2 }}>
                        <Icon name="cog" size={16} color="#FA960F" />
                    </View>
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
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    menuOptionText: {
        marginLeft: 10,
        fontFamily: 'Roboto',
        fontSize: 17,
        color: '#525151',
        marginVertical: 5
    },

    signOutText: {
        marginLeft: 10,
        fontFamily: 'Roboto',
        fontSize: 17,
        color: 'red',
        marginVertical: 5
    }
});
