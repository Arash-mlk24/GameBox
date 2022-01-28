import {GameType, GameState} from '@utils/enums';
import Time from '../../Time';
import User from '../../User';
import IGame from '../../IGame';
import ChessManager from './ChessManager';

export default class Chess implements IGame {
  _manager: ChessManager;
  _users: User[];
  _type: GameType;
  _state: GameState;
  _time: Time;
  constructor() {
    this._manager = new ChessManager(this);
  }
}
