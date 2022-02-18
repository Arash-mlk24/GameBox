import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LinearGradientBG from './LinearGradientBG';
import CommonColors from '@res/colors/CommonColors';
import BaseStyles from '@base/BaseStyles';
import { TextStyleFunction, ViewStyleFunction } from '@utils/types/StyleTypes';
import { heights } from '@utils/scaling';

interface IGradientTextButton {
  textColor?: string;
  text?: string;
  width: number;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  onPress?: () => void;
  color: 'orange' | 'purple' | 'pink' | 'blue';
}

const GradientTextButton = (props: IGradientTextButton) => {

  const styles = new GradientTextButtonStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={props.loading ? true : false}
      onPress={props.onPress}
      style={[styles.getMainContainerStyle(props), props.style]}>
      <LinearGradientBG
        gradientType="left-to-right"
        leftColor={getLeftColor(props.color)}
        rightColor={getRightColor(props.color)}
      />
      {props.loading ? (
        <ActivityIndicator
          size={heights.gradientTextButton * 0.4}
          color={CommonColors.WHITE}
        />
      ) : (
        <Text
          style={[
            styles.baseStatics.baseText,
            styles.getTextStyle(props),
          ]}>
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

class GradientTextButtonStyles extends BaseStyles {
  constructor() { super() }

  public statics = StyleSheet.create({

  })

  public getTextStyle: TextStyleFunction = (props: IGradientTextButton) => {
    return {
      color: props.textColor ? props.textColor : CommonColors.WHITE
    }
  }

  public getMainContainerStyle: ViewStyleFunction = (
    props: IGradientTextButton,
  ) => {
    return {
      width: props.width,
      height: heights.gradientTextButton,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      overflow: 'hidden',
      borderWidth: props.color === 'pink' ? 1 : 0,
      borderColor: '#FF8C8280',
    };
  };

}

const getLeftColor = (color: IGradientTextButton['color']) => {
  if (color === 'orange') return CommonColors.ORANGE_BUTTON_START;
  else if (color === 'purple') return CommonColors.PURPLE_BUTTON_START;
  else if (color === 'blue') return CommonColors.SECONDARY;
  else return CommonColors.PINK_BUTTON;
};

const getRightColor = (color: IGradientTextButton['color']) => {
  if (color === 'orange') return CommonColors.ORANGE_BUTTON_END;
  else if (color === 'purple') return CommonColors.PURPLE_BUTTON_END;
  else if (color === 'blue') return CommonColors.PRIMARY;
  else return CommonColors.PINK_BUTTON;
};


export default GradientTextButton;
