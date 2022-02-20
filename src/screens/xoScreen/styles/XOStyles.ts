import { StyleSheet } from 'react-native';
import BaseStyles from '../../../base/BaseStyles';
import CommonColors from '@res/colors/CommonColors';
import { ViewStyleFunction } from '@utils/types/StyleTypes';
import { heights } from '@utils/scaling';

export default class XOStyles extends BaseStyles {
    constructor() { super() }

    public statics = StyleSheet.create({
        header: {
            height: heights.xoHeaderHeight,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: CommonColors.PRIMARY,
        },
        roundsText: {
            color: CommonColors.DARK_WHITE,
        },
        player1WinsText: {
            color: CommonColors.BLUE,
            fontSize: 20,
        },
        player2WinsText: {
            color: CommonColors.RED,
            fontSize: 20,
        },
        circleContainer: {
            height: heights.xoHeaderHeight * 0.7,
            width: heights.xoHeaderHeight * 0.7,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: CommonColors.DARK_WHITE,
        },
        xoComponent: {
            marginTop: 50,
        }
    });

}
