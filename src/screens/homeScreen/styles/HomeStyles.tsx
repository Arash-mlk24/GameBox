import { StyleSheet } from 'react-native';
import BaseStyles from '../../../base/BaseStyles';
import { height, width } from '@utils/scaling';
import CommonColors from '@res/colors/CommonColors';

export default class HomeStyles extends BaseStyles {
  constructor() {
    super();
  }
  public statics = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      width: width,
      height: height - 56,
      backgroundColor: CommonColors.WHITE
    },
    button: {
      marginTop: 25,
      width: 64,
      height: 48,
      borderWidth: 1,
    },
  });
}
