import BaseController from '@base/BaseController';
import { homeActions, homeStates } from '@store/slices/homeSlice';
import store from '@store/store';

export default class HomeController extends BaseController {
  public actions;
  public states;

  constructor() {
    super();
    this.states = homeStates(store.getState());
    this.actions = homeActions;
  }
}
