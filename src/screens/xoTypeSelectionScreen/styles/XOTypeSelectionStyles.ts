import { StyleSheet } from 'react-native';
import BaseStyles from '../../../base/BaseStyles';
import { height, width } from '@utils/scaling';
import CommonColors from '@res/colors/CommonColors';

export default class XOTypeSelectionStyles extends BaseStyles {
    constructor() { super() }

    public statics = StyleSheet.create({
        mainContainer: {
            width: width,
            height: height,
            backgroundColor: CommonColors.DARK_WHITE,
        },
        mainContentContainer: {
            alignItems: 'center',
        },
        button: {
            marginTop: 25,
            width: 64,
            height: 48,
            borderWidth: 1,
        },
    });
}
