import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { TabStackParamsList } from '@utils/types/NavigationTypes';
import HomeScreen from '@screens/homeScreen/HomeScreen';
import SettingsScreen from '@screens/settingsScreen/SettingsScreen';

const { Navigator, Screen } = createMaterialBottomTabNavigator<TabStackParamsList>();

export default function TabStack() {
    return (
        <Navigator initialRouteName='HOME'>
            <Screen name='HOME' component={HomeScreen} />
            <Screen name='SETTINGS' component={SettingsScreen} />
        </Navigator>
    );
}
