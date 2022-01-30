import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from '@utils/types/NavigationTypes';
import SplashScreen from '@screens/splashScreen/SplashScreen';
import LoginScreen from '@screens/loginScreen/LoginScreen';

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

export default function MainNavigation() {
    return (
        <Navigator initialRouteName="SPLASH" screenOptions={{ headerShown: false }}>
            <Screen name='SPLASH' component={SplashScreen} />
            <Screen name='LOGIN' component={LoginScreen} />
        </Navigator>
    );
}
