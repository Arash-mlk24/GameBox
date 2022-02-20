import IGameManager from '@manager/IGameManager';
import IGame from '../../IGame';
import XO from './XO';

export default class XOManager implements IGameManager {
  private _game: XO;

  constructor(xo: XO) {
    this.game = xo;
  }

  public start() { }
  public cancel() { }
  public pause() { }


  public get game(): XO {
    return this._game;
  }
  public set game(value: XO) {
    this._game = value;
  }
}
