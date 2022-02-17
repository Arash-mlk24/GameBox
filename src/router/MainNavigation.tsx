import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamsList } from '@utils/types/NavigationTypes';
import SplashScreen from '@screens/splashScreen/SplashScreen';
import LoginScreen from '@screens/loginScreen/LoginScreen';
import TabStack from './TabStack';
import XOScreen from '@screens/xoScreen/XOScreen';

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamsList>();

export default function MainNavigation() {
    return (
        <Navigator initialRouteName="SPLASH" screenOptions={{ headerShown: false }}>
            <Screen name='SPLASH' component={SplashScreen} />
            <Screen name='LOGIN' component={LoginScreen} />
            <Screen name='TAB' component={TabStack} />
            <Screen
                name='XO'
                component={XOScreen}
                options={{
                    presentation: 'card',
                    animation: 'slide_from_left'
                }}
            />
        </Navigator>
    );
}
