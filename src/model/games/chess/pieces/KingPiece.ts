import {KingState} from '@utils/enums';
import Piece from '../Piece';

export default class KingPiece extends Piece {
  state: KingState;

  constructor() {
    super();
  }
}
