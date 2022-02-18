import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { width } from '@utils/scaling';
import CommonColors from '@res/colors/CommonColors';
import BaseStyles from '@base/BaseStyles';

interface IGradientIconButton {
  onPress: () => void;
  leftColor: string;
  rightColor: string;
  icon: any;
  title: string;
}

const GradientIconButton = (props: IGradientIconButton) => {

  const styles = new GradientIconButtonStyles();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: width - 128,
        height: 64,
      }}>
      <LinearGradient
        colors={[props.leftColor, props.rightColor]}
        start={{ x: 0.0, y: 0 }}
        end={{ x: 0.0, y: 1 }}
        useAngle={true}
        angle={90}
        style={styles.statics.mainButtonLinear}>
        <props.icon width={32} height={32} />
        <Text style={[styles.baseStatics.baseText, styles.statics.text]}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

class GradientIconButtonStyles extends BaseStyles {
  constructor() { super() }

  public statics = StyleSheet.create({
    mainButtonLinear: {
      position: 'absolute',
      top: 0,
      width: width - 128,
      height: 64,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 24,
    },
    text: {
      color: CommonColors.WHITE,
    }
  })

}


export default GradientIconButton;
