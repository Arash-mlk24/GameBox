import React, { useState } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { ViewStyleFunction } from '@utils/types/StyleTypes';
import BaseStyles from '@base/BaseStyles';
import { width } from '@utils/scaling';
import ArrowLeft from '@res/svg/arrow-left.svg';
import ArrowRight from '@res/svg/arrow-right.svg';
import CommonColors from '@res/colors/CommonColors';

interface IDataPicker {
    headerText: string;
    data: string[];
    onChange: (item: string, index: number) => void;
    defaultIndex?: number;
    minValue?: number;
    maxValue?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
}

export default function DataPicker(props: IDataPicker) {

    const styles = new DataPickerStyles();
    const [index, setIndex] = useState(props.defaultIndex ?? 0);

    const handlePress = (action: 'previous' | 'next') => {
        const newIndex = action === 'next' ? index === props.data.length - 1 ? 0 : index + 1
            :
            index === 0 ? props.data.length - 1 : index - 1;
        setIndex(newIndex);
        props.onChange(props.data[newIndex], newIndex);
    }

    return (
        <View style={[styles.statics.mainContainer, props.style]}>
            <Text style={[styles.baseStatics.baseText, styles.statics.headerText]}>{props.headerText}</Text>
            <View style={styles.getActionsContainerStyle(props)}>
                <TouchableOpacity activeOpacity={0.4} onPress={() => handlePress('previous')} >
                    <ArrowLeft fill={CommonColors.PRIMARY} style={styles.statics.leftArrow} height={props.height ?? 48} width={props.height ?? 48} />
                </TouchableOpacity>
                <Text style={[styles.baseStatics.baseText, styles.statics.mainText]}>{props.data[index]}</Text>
                <TouchableOpacity activeOpacity={0.4} onPress={() => handlePress('next')} >
                    <ArrowRight fill={CommonColors.PRIMARY} style={styles.statics.rightArrow} height={props.height ?? 48} width={props.height ?? 48} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

class DataPickerStyles extends BaseStyles {
    constructor() { super() }

    public statics = StyleSheet.create({
        mainContainer: {
            alignItems: 'center',
        },
        mainText: {
            color: CommonColors.SECONDARY,
        },
        headerText: {
            color: CommonColors.PRIMARY,
        },
        leftArrow: {},
        rightArrow: {}
    })

    public getActionsContainerStyle: ViewStyleFunction = (props: IDataPicker) => {
        return {
            height: props.height ?? 48,
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: '18%'
        }
    }

}
