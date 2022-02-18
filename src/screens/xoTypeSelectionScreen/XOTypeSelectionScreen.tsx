import React from 'react';
import { View } from 'react-native';
import DataPicker from '@components/DataPicker';
import constants from '@res/constants';

function XOTypeSelectionScreen() {



    return (
        <View>
            <DataPicker headerText='Rounds' data={constants.XO_ROUNDS} style={{ marginTop: 25 }} onChange={(item) => { }} />
        </View>
    );
}

export default XOTypeSelectionScreen;
