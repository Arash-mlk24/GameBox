import { Token } from '@appTypes/ClientTypes';
import XO from '../../model/games/xo/XO';

export type BaseState = {
  token?: Token;
};

export type SplashState = {};

export type LoginState = {
  phoneNumber?: string;
  password?: string;
  count?: number;
};

export type XOTypeSelectionState = {
  roundsCount?: number;
}

export type XOState = {
  xo?: XO;
}

export type HomeState = {
  count?: number;
};
