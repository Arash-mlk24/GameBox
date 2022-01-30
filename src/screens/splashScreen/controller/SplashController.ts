import {splashActions, splashStates} from '@store/slices/splashSlice';
import BaseController from '../../../base/BaseController';

export default class SplashController extends BaseController {
  public states;
  public actions;

  constructor() {
    super();
    this.states = splashStates;
    this.actions = splashActions;
  }
}
