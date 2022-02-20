import BaseController from '@base/BaseController';
import { xoActions } from '@store/slices/xoSlice';
import { xoTypeSelectionActions, xoTypeSelectionStates } from '@store/slices/xoTypeSelectionSlice';
import store from '@store/store';
import { GameType } from '@utils/enums';
import Helper from '@utils/Helper';
import { Dispatch, SetStateAction } from 'react';
import XO from '../../../model/games/xo/XO';
import User from '../../../model/User';

export default class XOTypeSelectionController extends BaseController {

  public actions;
  public states;
  public dispatch;
  public indicator;
  private xoActions;

  constructor(dispatch: Dispatch<any>, indicator: [boolean, Dispatch<SetStateAction<boolean>>]) {
    super();
    this.states = xoTypeSelectionStates(store.getState());
    this.actions = xoTypeSelectionActions;
    this.dispatch = dispatch;
    this.indicator = indicator;
    this.xoActions = xoActions;
  }

  public handleOnRoundChange = (item: string) => {
    this.dispatch(this.actions.setRoundsCount({ roundsCount: +item, indicator: this.indicator }))
  }

  public handleSinglePlayerPress = () => {
    // console.log(this.states);
    if (this.states.roundsCount) {
      this.dispatch(this.xoActions.setXO({
        xo: new XO(
          [new User('Mahdis'), new User('bot')],
          GameType.XO,
          this.states.roundsCount!
        ), indicator: undefined
      }))
      Helper.getInstance().mainNavigation.navigate('XO');
    }
  }

  public handleMultiPlayerPress = () => {
    console.log(`multi...`);
  }

}
