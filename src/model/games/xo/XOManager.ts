import IGameManager from '@manager/IGameManager';
import IGame from '../../IGame';
import XO from './XO';

export default class XOManager implements IGameManager {
  game: XO;

  public start() {}
  public cancel() {}
  public pause() {}

  constructor(xo: XO) {
    this.game = xo;
  }
}
