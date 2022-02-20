import { heights } from '@utils/scaling';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import XOComponent from './components/xoComponent/XOComponent';
import XOController from './controller/XOController';
import XOStyles from './styles/XOStyles';

export default function XOScreen() {

    const dipatch = useDispatch();
    const indicator = useState(false);
    const styles = new XOStyles();
    const controller = new XOController(dipatch, indicator);

    return (
        <ScrollView style={styles.baseStatics.mainContainer} contentContainerStyle={styles.baseStatics.mainContentContainer} >
            <View style={styles.statics.header}>
                <View style={styles.statics.circleContainer}>
                    <Text style={[styles.baseStatics.baseText, styles.statics.player1WinsText]}>{controller.getPlayerWins(1)}</Text>
                </View>
                <Text style={[styles.baseStatics.baseText, styles.statics.roundsText]}>{`Round ${controller.states.xo?.currentRound} / ${controller.states.xo?.rounds}`}</Text>
                <View style={styles.statics.circleContainer}>
                    <Text style={[styles.baseStatics.baseText, styles.statics.player2WinsText]}>{controller.getPlayerWins(2)}</Text>
                </View>
            </View>
            <XOComponent
                style={styles.statics.xoComponent}
                size={heights.xoComponentSize}
                blocks={controller.states.xo?.blocks!}
                onPress={(i, j) => controller.handleGamePress(i, j)}
            />
        </ScrollView>
    );
}
