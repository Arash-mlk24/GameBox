import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { TabStackParamsList } from '@utils/types/NavigationTypes';
import HomeScreen from '@screens/homeScreen/HomeScreen';
import SettingsScreen from '@screens/settingsScreen/SettingsScreen';
import AccountIcon from '@res/svg/account-circle.svg';
import CommonColors from '@res/colors/CommonColors';
import BaseStyles from '@base/BaseStyles';
import { width } from '@utils/scaling';

const { Navigator, Screen } = createMaterialBottomTabNavigator<TabStackParamsList>();

export default function TabStack() {

    const styles = new TabStackStyles();

    return (
        <Navigator
            initialRouteName='HOME'
            backBehavior={'initialRoute'}
            shifting={false}
            barStyle={{
                backgroundColor: CommonColors.WHITE,
                height: 56,
            }}
            inactiveColor={CommonColors.GREY}
            activeColor={CommonColors.PRIMARY}
            labeled={false}
        >
            <Screen
                name='SETTINGS'
                component={SettingsScreen}
                options={{
                    tabBarIcon: props => (
                        <View style={styles.statics.barIcon}>
                            <AccountIcon
                                width={28}
                                height={28}
                                fill={props.color}
                            />
                            <Text style={[styles.baseStatics.baseText, styles.getTextStyle(props.focused, props.color)]}>Settings</Text>
                        </View>
                    ),
                }}
            />
            <Screen
                name='HOME'
                component={HomeScreen}
                options={{
                    tabBarIcon: props => (
                        <View style={styles.statics.barIcon}>
                            <AccountIcon
                                width={28}
                                height={28}
                                fill={props.color}
                            />
                            <Text style={[styles.baseStatics.baseText, styles.getTextStyle(props.focused, props.color)]}>Home</Text>
                        </View>
                    ),
                }}
            />
        </Navigator>
    );
}

class TabStackStyles extends BaseStyles {
    constructor() { super() }

    public statics = StyleSheet.create({
        barIcon: {
            width: 120,
            height: 54,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: -15,
        }
    })

    public getTextStyle(isFocused: boolean, color: string): StyleProp<TextStyle> {
        return {
            color,
            fontSize: isFocused ? 20 : 14,
        }
    }

}
