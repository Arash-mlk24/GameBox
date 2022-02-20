import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import XOController from './controller/XOController';

export default function XOScreen() {

    const dipatch = useDispatch();
    const indicator = useState(false);
    const styles = '';
    const controller = new XOController(dipatch, indicator);

    return (
        <ScrollView>
            <Text>
                {controller.states.xo?._rounds}
            </Text>
        </ScrollView>
    );
}
