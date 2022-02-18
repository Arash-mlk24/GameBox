import BaseController from '@base/BaseController';
import { homeActions, homeStates } from '@store/slices/homeSlice';
import store from '@store/store';
import Helper from '@utils/Helper';

export default class HomeController extends BaseController {

  public actions;
  public states;

  constructor() {
    super();
    this.states = homeStates(store.getState());
    this.actions = homeActions;
  }

  public handleOnMePress() {
    Helper.getInstance().tabNavigation.navigate('SETTINGS');
  }

  public handleOnXOPress() {
    Helper.getInstance().mainNavigation.navigate('XO_TYPE_SELECTION');
  }

  public handleOnChessPress() {
    console.log(`CHESS...`);
  }

}
