import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function DrawerContent() {
    return (
        <View style={styles.drawerContent}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 10, paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#ddd' }}>
                <View style={{ flexDirection: 'row', width: 200, alignItems: 'center'}}>
                    <Image source={require('../assets/profile.png')} style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 1, borderColor: '#525151', marginRight: 5 }} />
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={5}
                        starSize={25}
                        fullStarColor={'black'}
                        selectedStar={(rating) => { }}
                    />
                </View>
                <Text style={{ color: '#525151', fontWeight: '700', fontSize: 20, fontFamily: 'sans-serif-thin' }}>Marlon Englemam</Text>
                <Text style={{ color: '#999', fontFamily: 'sans-serif-thin' }}>marlon@gmail.com</Text>
            </View>
            <View style={{ flex: 3, padding: 10 }}>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="user" size={16} color="#ddd" />
                    </View>
                    <Text style={styles.menuOptionText}>Perfil</Text>
                </View>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="money-bill-alt" size={16} color="#ddd" />
                    </View>
                    <Text style={styles.menuOptionText}>Pagamentos</Text>
                </View>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="map-marked-alt" size={16} color="#ddd" />
                    </View>
                    <Text style={styles.menuOptionText}>Acompanhar</Text>
                </View>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="history" size={16} color="#ddd" />
                    </View>
                    <Text style={styles.menuOptionText}>Histórico</Text>
                </View>
                <View style={styles.menuOption}>
                    <View style={{ width: 25 }}>
                        <Icon name="cog" size={16} color="#ddd" />
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
        fontSize: 19,
        color: '#525151',
        marginVertical: 5
    }
});
