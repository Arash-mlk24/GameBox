import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamsList } from '@utils/types/NavigationTypes';
import SplashScreen from '@screens/splashScreen/SplashScreen';
import LoginScreen from '@screens/loginScreen/LoginScreen';
import TabStack from './TabStack';

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamsList>();

export default function MainNavigation() {
    return (
        <Navigator initialRouteName="LOGIN" screenOptions={{ headerShown: false }}>
            <Screen name='SPLASH' component={SplashScreen} />
            <Screen name='LOGIN' component={LoginScreen} />
            <Screen name='TAB' component={TabStack} />
        </Navigator>
    );
}
