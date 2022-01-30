/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '@router/MainNavigation';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
