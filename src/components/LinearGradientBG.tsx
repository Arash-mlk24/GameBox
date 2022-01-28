import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface ILinearGradientBG {
  topColor?: any;
  bottomColor?: any;
  leftColor?: any;
  rightColor?: any;
  gradientType: 'left-to-right' | 'top-to-bottom';
}

const LinearGradientBG = (props: ILinearGradientBG) => {
  return props.gradientType === 'left-to-right' ? (
    <LinearGradient
      colors={[props.leftColor, props.rightColor]}
      start={{x: 0, y: 0.0}}
      end={{x: 1, y: 0.0}}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
      }}
    />
  ) : (
    <LinearGradient
      colors={[props.topColor, props.bottomColor]}
      start={{x: 0.0, y: 0.4}}
      end={{x: 0.0, y: 1}}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
      }}
    />
  );
};

export default LinearGradientBG;
