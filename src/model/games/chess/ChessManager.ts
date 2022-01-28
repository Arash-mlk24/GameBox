import IGameManager from '@manager/IGameManager';
import Chess from './Chess';

export default class ChessManager implements IGameManager {
  game: Chess;

  public start() {}
  public cancel() {}
  public pause() {}

  constructor(chess: Chess) {
    this.game = chess;
  }
}
