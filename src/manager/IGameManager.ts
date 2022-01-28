import IGame from '../model/IGame';

export default interface IGameManager {
  game: IGame;
  start: () => void;
  pause: () => void;
  cancel: () => void;
}
