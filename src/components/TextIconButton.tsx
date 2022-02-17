import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import BaseStyles from '@base/BaseStyles';
import { TextStyleFunction, ViewStyleFunction } from '@utils/types/StyleTypes';
import CommonColors from '@res/colors/CommonColors';

interface ITextIconButton {
  text: string;
  icon: FC<SvgProps>;
  onPress: any;
  width: any;
  height: any;
  textColor: any;
  buttonColor: any;
  iconToRight?: boolean;
  style?: StyleProp<ViewStyle>;
  iconColor: any;
  borderColor?: any;
  disabled?: boolean;
  fontSize?: any;
}

function TextIconButton(props: ITextIconButton) {

  const styles = new TextIconButtonStyles();

  return <TouchableOpacity
    disabled={props.disabled}
    activeOpacity={0.6}
    onPress={props.onPress}
    style={[styles.getMainContainerStyle(props), props.style]}>
    <props.icon width={36} height={36} fill={props.disabled ? CommonColors.WHITE : props.iconColor} />
    <Text style={styles.getTextStyle(props)}>{props.text}</Text>
  </TouchableOpacity>
}

class TextIconButtonStyles extends BaseStyles {
  constructor() { super() }

  public statics = StyleSheet.create({

  })

  public getMainContainerStyle: ViewStyleFunction = (
    props: ITextIconButton,
  ) => {
    return {
      flexDirection: props.iconToRight ? 'row-reverse' : 'row',
      height: props.height,
      width: props.width,
      backgroundColor: props.disabled ? CommonColors.LIGHT_GREY : props.buttonColor,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.2,
      borderColor: props.disabled ? CommonColors.LIGHT_GREY : props.borderColor ?? props.buttonColor,
    };
  };

  public getTextStyle: TextStyleFunction = (props: ITextIconButton) => {
    return {
      color: props.disabled ? CommonColors.WHITE : props.textColor,
      marginLeft: '5%',
      fontSize: props.fontSize ?? 24,
    };
  };

}

export default TextIconButton;
