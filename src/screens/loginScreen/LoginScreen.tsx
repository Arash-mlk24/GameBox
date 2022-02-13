import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import LoginController from './controller/LoginController';
import LoginStyles from './styles/LoginStyles';

const LoginScreen = () => {

  const dispatch = useDispatch();
  const styles = new LoginStyles();
  const controller = new LoginController();
  const indicator = useState(false);

  return (
    <View style={styles.statics.mainContainer}>
      <Text>{controller.states.count}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(`hi`, controller.states.count);
          dispatch(controller.actions.setCount({ count: controller.states.count! + 1, indicator }));
        }}
        style={[styles.baseStatics.centeredView, styles.statics.button]}>
        <Text>click to change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
