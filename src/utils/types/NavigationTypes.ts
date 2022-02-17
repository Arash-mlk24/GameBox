import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainStackParamsList = {
  SPLASH: undefined;
  LOGIN: undefined;
  TAB: undefined;
  XO: undefined;
};
export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamsList>;

export type TabStackParamsList = {
  HOME: undefined;
  SETTINGS: undefined;
}
export type TabStackNavigationProp =
  NativeStackNavigationProp<TabStackParamsList>;
