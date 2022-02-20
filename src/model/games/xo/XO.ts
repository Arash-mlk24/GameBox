import { GameType, GameState } from '@utils/enums';
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
  _rounds: number;

  constructor(
    users: User[],
    type: GameType,
    rounds: number,
  ) {
    this._users = users;
    this._type = type;
    this._rounds = rounds;
    this._manager = new XOManager(this);
    this._state = GameState.STARTED;
  }
}
