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
                <Text>{props.head}</Text>
            <Icon
                style={[styles.togglerIcon,
                {
                    backgroundColor: 'transparent',
                    elevation: 0
                }]}
                name="home"
                size={22}
                color="#525151" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: WIDTH,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        zIndex: 5,
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

})
