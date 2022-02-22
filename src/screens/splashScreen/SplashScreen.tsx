import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { View, Text } from 'react-native';
import LinearGradientBG from '@components/LinearGradientBG';
import LottieView from 'lottie-react-native';
import CommonColors from '@res/colors/CommonColors';
import SplashController from './controller/SplashController';
import SplashStyles from './styles/SplashStyles';
import Helper from '@utils/Helper';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationProp, TabStackNavigationProp } from '@utils/types/NavigationTypes';

const SplashScreen = () => {

  const styles = new SplashStyles();
  const controller = new SplashController();

  const tabNav = useNavigation<TabStackNavigationProp>();
  const mainNav = useNavigation<MainStackNavigationProp>();

  const actOnIndicator = (indicator: [boolean, Dispatch<SetStateAction<boolean>>]) => {
    indicator && indicator[1](!indicator[0]);
  }

  const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

  useEffect(() => {
    setTimeout(() => {
      // initialize helper
      Helper.getInstance().mainNavigation = mainNav;
      Helper.getInstance().tabNavigation = tabNav;
      Helper.getInstance().actOnIndicator = actOnIndicator;
      Helper.getInstance().sleep = sleep;

      mainNav.replace('TAB');
    }, 3000)
  }, []);

  return (
    <View style={styles.statics.mainContainer}>
      <LinearGradientBG
        gradientType="top-to-bottom"
        topColor={CommonColors.DARK_WHITE}
        bottomColor={CommonColors.LIGHT_BACK_BLUE}
      />
      <Text style={[styles.baseStatics.baseText, styles.statics.text]}>
        Welcome To GameBox
      </Text>
      <View style={styles.statics.lottieContainer}>
        <LottieView
          source={require('@res/animations/pacman-loading.json')}
          autoPlay
          loop
          style={{ height: 200 }}
          speed={1}
        />
      </View>
      <Text style={[styles.baseStatics.baseText, styles.statics.powered]}>
        Powered By NewSoft
      </Text>
    </View>
  );
};

export default SplashScreen;
