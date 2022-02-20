import BaseController from '@base/BaseController';
import { xoActions, xoStates } from '@store/slices/xoSlice';
import store from '@store/store';
import Helper from '@utils/Helper';
import { Dispatch, SetStateAction } from 'react';

export default class XOController extends BaseController {

  public actions;
  public states;
  public dispatch;
  public indicator;

  constructor(dispatch: Dispatch<any>, indicator: [boolean, Dispatch<SetStateAction<boolean>>]) {
    super();
    this.states = xoStates(store.getState());
    this.actions = xoActions;
    this.dispatch = dispatch;
    this.indicator = indicator;
  }

  public handleOnRoundChange(item: string) {
    // this.dispatch(this.actions.setXO({ roundsCount: +item, indicator: this.indicator }))
  }

  public handleSinglePlayerPress() {
    // if (this.states.roundsCount) {
    // Helper.getInstance().mainNavigation.navigate('XO');
    // }
  }

  public handleMultiPlayerPress() {
    // console.log(`multi...`);
  }

}
