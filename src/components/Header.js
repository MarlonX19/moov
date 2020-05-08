import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Header(props) {


    return props.head == 'header' ?
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.toggleDrawer()}
            >
                <Icon style={styles.togglerIcon} name="navicon" size={22} color="#525151" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Test')}
            >
                <Icon style={styles.questionicon} name="question" size={22} color="#525151" />
            </TouchableOpacity>
        </View>
        : <View style={[styles.container, { backgroundColor: '#fff', }]}>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
            >
                <Icon
                    style={[styles.togglerIcon,
                    {
                        backgroundColor: 'transparent',
                        elevation: 0
                    }]}
                    name="arrow-left"
                    size={22}
                    color="#525151" />
            </TouchableOpacity>
            <Text>Ajuda</Text>
            <Icon
                style={[styles.togglerIcon,
                {
                    backgroundColor: 'transparent',
                    elevation: 0
                }]}
                name="home"
                size={22}
                color="#525151" />
        </View>;
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: WIDTH,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
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
    },

})
