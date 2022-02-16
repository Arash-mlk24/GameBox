import React from 'react';
import { View, Text } from 'react-native';
import HomeController from './controller/HomeController';
import HomeStyles from './styles/HomeStyles';

export default function HomeScreen() {

    const styles = new HomeStyles();
    const controller = new HomeController();

    return (
        <View style={styles.statics.mainContainer}>
            {/* <TextButton /> */}
        </View>
    );
}
