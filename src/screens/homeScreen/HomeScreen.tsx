import React from 'react';
import { View, ScrollView } from 'react-native';
import ProfileButton from './components/profileButton/ProfileButton';
import HomeController from './controller/HomeController';
import HomeStyles from './styles/HomeStyles';

export default function HomeScreen() {

    const styles = new HomeStyles();
    const controller = new HomeController();

    return (
        <ScrollView contentContainerStyle={styles.statics.mainContentContainer} style={styles.statics.mainContainer}>
            {/* <TextButton /> */}
            <View style={styles.statics.quickAccess}>
                <View style={styles.statics.quickAccessGamesContainer}></View>
                <ProfileButton onPress={controller.handleOnMePress} />
            </View>
            <View></View>
        </ScrollView>
    );
}
