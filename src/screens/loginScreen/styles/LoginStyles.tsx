import { StyleSheet } from 'react-native';
import BaseStyles from '../../../base/BaseStyles';
import { height, width } from '@utils/scaling';

export default class LoginStyles extends BaseStyles {
    constructor() {
        super();
    }

    public statics = StyleSheet.create({
        mainContainer: {
            alignItems: 'center',
            width: width,
            height: height,
        }
    })

}