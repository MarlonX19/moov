import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Header(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.toggleDrawer()}
            >
                <Icon style={styles.togglerIcon} name="navicon" size={22} color="#525151" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.toggleDrawer()}
            >
                <Icon style={styles.questionicon} name="question" size={22} color="#525151" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: WIDTH,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        zIndex: 2,
    },
    togglerIcon: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: '#fff',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0,
        shadowRadius: 30,
        elevation: 20
    },
    questionicon: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: '#fff',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0,
        shadowRadius: 30,
        elevation: 20
    }
})
