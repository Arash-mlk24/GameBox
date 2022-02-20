import BaseController from '@base/BaseController';
import { xoActions, xoStates } from '@store/slices/xoSlice';
import store from '@store/store';
import Helper from '@utils/Helper';
import { xoBlockNumber } from '@utils/types/ClientTypes';
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

  public getPlayerWins = (playerNumber: 1 | 2) => {
    const wins = this.states.xo?.wins;
    if (wins?.length === 0) {
      return 0;
    } else {
      const user = this.states.xo?.users[playerNumber - 1];
      return this.getCountInList<string>(user?.name!, wins!);
    }
  }

  public handleGamePress = (i: number, j: number) => {
    console.log(`i: ${i}, j: ${j}`);
    const newBlocks = this.states.xo?.blocks;
    newBlocks!.forEach(el => {
      el.i === i && el.j === j && el.type === '' && (
        el.type = this.states.xo?.nextMove!,
        this.states.xo?.nextMove === 'x' ?
          this.states.xo?.nextMove = 'o' :
          this.states.xo?.nextMove = 'x'
      );
    })
  }

}
