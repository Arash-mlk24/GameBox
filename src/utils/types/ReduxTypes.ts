import {Token} from '@types/ClientTypes';

export type BaseState = {
  token?: Token;
};

export type SplashState = {};

export type LoginState = {
  phoneNumber?: string;
  password?: string;
};
