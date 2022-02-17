import BaseStyles from '@base/BaseStyles';
import CommonColors from '@res/colors/CommonColors';
import { heights, widths } from '@utils/scaling';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import AccountIcon from '@res/svg/account-circle.svg';

interface IProfileButton {
    onPress: () => void;
}

function ProfileButton(props: IProfileButton) {

    const styles = new ProfileButtonStyles();

    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6} style={styles.statics.mainContainer}>
            <AccountIcon width={64} height={64} fill={CommonColors.TERTIARY} />
            <Text style={[styles.baseStatics.baseText, styles.statics.text]}>Me</Text>
        </TouchableOpacity>
    );

}

class ProfileButtonStyles extends BaseStyles {
    constructor() { super() }

    public statics = StyleSheet.create({
        mainContainer: {
            // borderWidth: 1,
            width: widths.profileButton,
            height: heights.profileButton,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: CommonColors.PRIMARY,
            borderRadius: 20,
            overflow: 'hidden'
        },
        text: {
            fontSize: 36,
            color: CommonColors.TERTIARY,
        }
    })

}

export default ProfileButton;
