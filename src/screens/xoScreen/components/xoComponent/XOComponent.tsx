import BaseStyles from '@base/BaseStyles';
import { Block, xoBlockNumber } from '@utils/types/ClientTypes';
import { ViewStyleFunction } from '@utils/types/StyleTypes';
import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, ImageBackground, TouchableOpacity } from 'react-native';
import X from '@res/svg/x.svg';
import O from '@res/svg/o.svg';
import CommonColors from '@res/colors/CommonColors';

interface IXOComponent {
    size: number,
    onPress: (i: number, j: number) => void;
    style?: StyleProp<ViewStyle>;
    blocks: Block[];
}

const getXO = (blocks: Block[], i: number, j: number): 'x' | 'o' | '' => {

    let result: 'x' | 'o' | '' = '';
    blocks.forEach(el => {
        el.i === i && el.j === j && (result = el.type);
    })
    return result;

}

function XOComponent(props: IXOComponent) {

    const styles = new XOComponentStyles();

    return (
        <View style={[styles.getMainContainerStyle(props.size), props.style]}>
            <ImageBackground
                resizeMode='stretch'
                style={styles.getImageBackgroundStyle(props.size)}
                source={require('@res/images/xo-board.png')}
            >
                {
                    [1, 2, 3].map(el =>
                        <View key={el} style={styles.getRowStyles(props.size)}>
                            {[1, 2, 3].map(innerEl =>
                                <TouchableOpacity
                                    onPress={() => props.onPress(el, innerEl)}
                                    key={innerEl * 4}
                                    style={styles.getBlockStyles(props.size)}
                                >
                                    {
                                        getXO(props.blocks, el, innerEl) === 'x' ?
                                            <X fill={CommonColors.PRIMARY} width={props.size * 0.20} height={props.size * 0.20} /> :
                                            getXO(props.blocks, el, innerEl) === 'o' ?
                                                <O fill={CommonColors.SECONDARY} width={props.size * 0.16} height={props.size * 0.16} /> :
                                                null
                                    }
                                </TouchableOpacity>
                            )}
                        </View>
                    )
                }
            </ImageBackground>
        </View>
    );
}

class XOComponentStyles extends BaseStyles {
    constructor() { super() }

    public statics = StyleSheet.create({

    })

    public getImageBackgroundStyle: ViewStyleFunction = (size: number) => {
        return {
            width: size,
            height: size,
        }
    }

    public getBlockStyles: ViewStyleFunction = (size: number) => {
        return {
            width: size * 0.3,
            height: size * 0.3,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }



    public getRowStyles: ViewStyleFunction = (size: number) => {
        return {
            height: size / 3,
            width: size,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }

    public getMainContainerStyle: ViewStyleFunction = (size: number) => {
        return {
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

}

export default XOComponent;
