import BaseController from '@base/BaseController';
import { xoTypeSelectionActions, xoTypeSelectionStates } from '@store/slices/xoTypeSelectionSlice';
import store from '@store/store';
import { Dispatch, SetStateAction } from 'react';

export default class XOTypeSelectionController extends BaseController {

  public actions;
  public states;
  public dispatch;
  public indicator;

  constructor(dispatch: Dispatch<any>, indicator: [boolean, Dispatch<SetStateAction<boolean>>]) {
    super();
    this.states = xoTypeSelectionStates(store.getState());
    this.actions = xoTypeSelectionActions;
    this.dispatch = dispatch;
    this.indicator = indicator;
  }

  public handleOnRoundChange(item: string) {
    this.dispatch(this.actions.setRoundsCount({ roundsCount: +item, indicator: this.indicator }))
  }

  public handleSinglePlayerPress() {
    console.log(`single...`);
  }

  public handleMultiPlayerPress() {
    console.log(`multi...`);
  }

}
