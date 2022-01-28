import IGameManager from '@manager/IGameManager';
import {GameType, GameState} from '@utils/enums';
import IGame from '../../IGame';
import Time from '../../Time';
import User from '../../User';
import XOManager from './XOManager';

export default class XO implements IGame {
  _users: User[];
  _manager: XOManager;
  _type: GameType;
  _state: GameState;
  _time: Time;

  constructor() {
    this._manager = new XOManager(this);
  }
}
