import React from 'react';
import { View } from 'react-native';
import LoginController from './controller/LoginController';
import LoginStyles from './styles/LoginStyles';

const LoginScreen = () => {

  const styles = new LoginStyles();
  const controller = new LoginController();

  controller.actions.setPassword('d');

  return <View style={styles.statics.mainContainer}>{controller.states}</View>;
};

export default LoginScreen;
