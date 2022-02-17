import TextIconButton from '@components/TextIconButton';
import React from 'react';
import { View, ScrollView } from 'react-native';
import ProfileButton from './components/profileButton/ProfileButton';
import HomeController from './controller/HomeController';
import HomeStyles from './styles/HomeStyles';
import { heights, widths } from '@utils/scaling';
import CommonColors from '@res/colors/CommonColors';
import XOIcon from '@res/svg/tic-tac-toe.svg';
import ChessIcon from '@res/svg/chess.svg';

export default function HomeScreen() {

    const styles = new HomeStyles();
    const controller = new HomeController();

    return (
        <ScrollView contentContainerStyle={styles.statics.mainContentContainer} style={styles.statics.mainContainer}>
            <View style={styles.statics.quickAccess}>
                <View style={styles.statics.quickAccessGamesContainer}>
                    <TextIconButton
                        text='XO'
                        icon={XOIcon}
                        width={widths.profileButton}
                        height={heights.quickAccessGameButton}
                        textColor={CommonColors.TERTIARY}
                        iconColor={CommonColors.TERTIARY}
                        buttonColor={CommonColors.SECONDARY}
                        onPress={controller.handleOnXOPress}
                        fontSize={32}
                    />
                    <TextIconButton
                        text='Chess'
                        icon={ChessIcon}
                        width={widths.profileButton}
                        height={heights.quickAccessGameButton}
                        textColor={CommonColors.TERTIARY}
                        iconColor={CommonColors.TERTIARY}
                        buttonColor={CommonColors.SECONDARY}
                        onPress={controller.handleOnChessPress}
                        fontSize={32}
                    // disabled
                    />
                </View>
                <ProfileButton onPress={controller.handleOnMePress} />
            </View>
            <View></View>
        </ScrollView>
    );
}
