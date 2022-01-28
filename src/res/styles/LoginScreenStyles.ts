import {height, width} from '@utils/scaling';
import {ViewStyleFunction} from '@utils/StyleTypes';

export const getMainContainerStyle: ViewStyleFunction = () => {
  return {
    alignItems: 'center',
    width: width,
    height: height,
  };
};
