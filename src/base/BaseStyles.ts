import CommonColors from '@res/colors/CommonColors';
import { height, width } from '@utils/scaling';
import { StyleSheet } from 'react-native';

export default class BaseStyles {
  constructor() { }

  public baseStatics = StyleSheet.create({
    baseText: {
      fontSize: 24,
      fontFamily: 'Storytime',
    },
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainContainer: {
      width: width,
      height: height,
      backgroundColor: CommonColors.DARK_WHITE,
    },
    mainContentContainer: {
      alignItems: 'center',
    },
  });
}
