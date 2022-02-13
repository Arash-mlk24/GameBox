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
  });
}
