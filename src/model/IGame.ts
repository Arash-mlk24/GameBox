import IGameManager from '@manager/IGameManager';
import { GameState, GameType } from '@utils/enums';
import Time from './Time';
import User from './User';

export default interface IGame {
  users: User[];
  manager: IGameManager;
  type: GameType;
  state: GameState;
  time: Time;
}
