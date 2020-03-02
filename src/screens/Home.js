import React from 'react';
import { View, Text, Button } from 'react-native';

import Header from '../components/Header';

export default function Home(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff"}}>
            <Header navigation={props.navigation} />
            <Button
                title="Mudar de tela"
                onPress={() => props.navigation.navigate('Profile')}
            >
            </Button>
        </View>
    );
}
