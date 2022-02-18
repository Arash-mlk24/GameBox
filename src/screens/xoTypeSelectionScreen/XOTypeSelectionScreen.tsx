import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import DataPicker from '@components/DataPicker';
import constants from '@res/constants';
import XOTypeSelectionStyles from './styles/XOTypeSelectionStyles';
import XOTypeSelectionController from './controller/XOTypeSelectionController';
import GradientTextButton from '@components/GradientTextButton';
import { commonWidth } from '@utils/scaling';
import { useDispatch } from 'react-redux';

function XOTypeSelectionScreen() {

    const indicator = useState(false);
    const styles = new XOTypeSelectionStyles();
    const controller = new XOTypeSelectionController(useDispatch(), indicator);

    return (
        <ScrollView style={styles.statics.mainContainer} contentContainerStyle={styles.statics.mainContentContainer} >
            <DataPicker
                headerText='Rounds'
                data={constants.XO_ROUNDS}
                style={{ marginTop: 50, marginBottom: 400 }}
                onChange={(item) => controller.handleOnRoundChange(item)}
            />
            <GradientTextButton onPress={controller.handleSinglePlayerPress} text='Single Player' width={commonWidth - 50} color='blue' />
            <GradientTextButton onPress={controller.handleMultiPlayerPress} style={{ marginTop: 25 }} text='Multi Player' width={commonWidth - 50} color='blue' />
            <View style={{ height: 25 }} />
        </ScrollView>
    );
}

export default XOTypeSelectionScreen;
