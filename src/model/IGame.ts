import IGameManager from '@manager/IGameManager';
import {GameState, GameType} from '@utils/enums';
import Time from './Time';
import User from './User';

export default interface IGame {
  _users: User[];
  _manager: IGameManager;
  _type: GameType;
  _state: GameState;
  _time: Time;
}
