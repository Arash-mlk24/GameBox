import BaseStyles from '@res/styles/BaseStyles';
import {height} from '@utils/scaling';
import {StyleSheet} from 'react-native';

export default class SplashStyles extends BaseStyles {
  constructor() {
    super();
  }

  public statics = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      height: height,
    },
    text: {
      position: 'absolute',
      top: height * 0.35,
      fontSize: 36,
    },
    powered: {
      position: 'absolute',
      bottom: height * 0.1,
      fontSize: 20,
    },
    lottieContainer: {
      position: 'absolute',
      bottom: height * 0.06,
    },
  });
}
