import { Dimensions } from 'react-native';

export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;

export const commonWidth = width - 50;

export const heights = {
    screenMainContainer: height - 56,
    profileButton: 240,
    quickAccess: 240,
    quickAccessGameButton: 108,
}

export const widths = {
    screenMainContainer: width,
    profileButton: commonWidth / 2 - 12,
    quickAccess: commonWidth,
}