import BaseController from '@base/BaseController';
import {loginActions, loginStates} from '@store/slices/loginSlice';

export default class LoginController extends BaseController {
  public actions;
  public states;

  constructor() {
    super();
    this.states = loginStates;
    this.actions = loginActions;
  }
}
