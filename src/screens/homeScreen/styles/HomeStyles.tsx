import { StyleSheet } from 'react-native';
import BaseStyles from '../../../base/BaseStyles';
import { commonWidth, heights, widths } from '@utils/scaling';
import CommonColors from '@res/colors/CommonColors';

export default class HomeStyles extends BaseStyles {
  constructor() {
    super();
  }
  public statics = StyleSheet.create({
    mainContainer: {
      width: widths.screenMainContainer,
      height: heights.screenMainContainer,
      backgroundColor: CommonColors.DARK_WHITE,
      paddingTop: 25,
    },
    mainContentContainer: {
      alignItems: 'center',
    },
    quickAccess: {
      flexDirection: 'row',
      width: commonWidth,
      height: heights.quickAccess,
      justifyContent: 'space-between'
    },
    quickAccessGamesContainer: {
      width: widths.profileButton,
      height: heights.quickAccess,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    button: {
      marginTop: 25,
      width: 64,
      height: 48,
      borderWidth: 1,
    },
  });
}
