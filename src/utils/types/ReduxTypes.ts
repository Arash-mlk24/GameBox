import { Token } from '@appTypes/ClientTypes';

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

export type HomeState = {
  count?: number;
};
