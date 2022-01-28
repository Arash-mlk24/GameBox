import React from 'react';
import { View, Text } from 'react-native';
import LinearGradientBG from '@components/LinearGradientBG';
import LottieView from 'lottie-react-native';
import CommonColors from '@res/colors/CommonColors';
import SplashController from './controller/SplashController';
import SplashStyles from './styles/SplashStyles';

const SplashScreen = () => {

  const styles = new SplashStyles();
  const controller = new SplashController();

  return (
    <View style={styles.statics.mainContainer}>
      <LinearGradientBG
        gradientType="top-to-bottom"
        topColor={CommonColors.WHITE}
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
