import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.toggleDrawer()}
            >
                <Icon name="navicon" size={30} color="#0EAF51" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
