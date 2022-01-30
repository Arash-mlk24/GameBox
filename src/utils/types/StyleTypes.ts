import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ViewStyleFunction = (props?: any) => StyleProp<ViewStyle>;

export type TextStyleFunction = (
  props?: any | undefined,
) => StyleProp<TextStyle>;

export type ImageStyleFunction = (
  props?: any | undefined,
) => StyleProp<ImageStyle>;
