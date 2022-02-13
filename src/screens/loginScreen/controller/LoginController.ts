import { Dispatch, SetStateAction } from 'react';
import BaseController from '@base/BaseController';
import {loginActions, loginStates} from '@store/slices/loginSlice';
import store from '@store/store';

export default class LoginController extends BaseController {
  public actions;
  public states;

  constructor() {
    super();
    this.states = loginStates(store.getState());
    this.actions = loginActions;
  }
}
