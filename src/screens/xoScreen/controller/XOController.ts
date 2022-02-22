import BaseController from '@base/BaseController';
import { xoActions, xoStates } from '@store/slices/xoSlice';
import store from '@store/store';
import Helper from '@utils/Helper';
import { Block, xoBlockNumber } from '@utils/types/ClientTypes';
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

  private generateBotActIndex = (blocks: Block[]): { i: number, j: number } => {
    const randomOptions: Block[] = [];
    blocks.forEach(el => el.type === '' && randomOptions.push(el))
    const randomElement = randomOptions[Math.floor(Math.random() * randomOptions.length)];
    return { i: randomElement.i, j: randomElement.j };
  }

  private setNewGameAfterPress = (i: number, j: number) => {
    const newBlocks = this.states.xo?.blocks;
    const newGame = this.states.xo;
    newBlocks!.forEach(el => {
      if (el.i === i && el.j === j && el.type === '') {
        el.type = newGame?.nextMove!;
        if (newGame) {
          newGame.nextMove === 'x' ?
            newGame.nextMove = 'o' :
            newGame.nextMove = 'x';
          newGame.blocks = newBlocks!;
        }
      }
    })
    return newGame;
  }

  public handleGamePress = async (i: number, j: number) => {

    const newGame = this.setNewGameAfterPress(i, j);
    this.dispatch(this.actions.setXO({ xo: newGame!, indicator: this.indicator }));

    if (newGame?.users[1].name === 'bot') {
      await Helper.getInstance().sleep(2000);
      console.log(`1`);
      const botActIndex = this.generateBotActIndex(newGame.blocks);
      console.log(`2`);
      const newGameAfterBot = this.setNewGameAfterPress(botActIndex.i, botActIndex.j);
      console.log(`3`);
      this.dispatch(this.actions.setXO({ xo: newGameAfterBot!, indicator: this.indicator }));
    }

  }

}
