import { GameType, GameState } from '@utils/enums';
import { Block } from '@utils/types/ClientTypes';
import IGame from '../../IGame';
import Time from '../../Time';
import User from '../../User';
import XOManager from './XOManager';

export default class XO implements IGame {

  // properties
  private _users: User[];
  private _manager: XOManager;
  private _type: GameType;
  private _state: GameState;
  private _time: Time;
  private _rounds: number;
  private _currentRound: number;
  private _wins: string[];
  private _blocks: Block[];
  private _nextMove: 'x' | 'o';

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
    this._currentRound = 1;
    this._wins = [];


    const list: Block[] = [];
    [1, 2, 3].forEach(el => {
      [1, 2, 3].forEach(innerEl => {
        list.push(new Block(el, innerEl, ''))
      })
    })

    this._blocks = list;
  }

  // setter and getters
  public get users(): User[] {
    return this._users;
  }
  public set users(value: User[]) {
    this._users = value;
  }
  public get manager(): XOManager {
    return this._manager;
  }
  public set manager(value: XOManager) {
    this._manager = value;
  }
  public get type(): GameType {
    return this._type;
  }
  public set type(value: GameType) {
    this._type = value;
  }
  public get state(): GameState {
    return this._state;
  }
  public set state(value: GameState) {
    this._state = value;
  }
  public get time(): Time {
    return this._time;
  }
  public set time(value: Time) {
    this._time = value;
  }
  public get rounds(): number {
    return this._rounds;
  }
  public set rounds(value: number) {
    this._rounds = value;
  }
  public get currentRound(): number {
    return this._currentRound;
  }
  public set currentRound(value: number) {
    this._currentRound = value;
  }
  public get wins(): string[] {
    return this._wins;
  }
  public set wins(value: string[]) {
    this._wins = value;
  }
  public get blocks(): Block[] {
    return this._blocks;
  }
  public set blocks(value: Block[]) {
    this._blocks = value;
  }
  public get nextMove(): 'x' | 'o' {
    return this._nextMove;
  }
  public set nextMove(value: 'x' | 'o') {
    this._nextMove = value;
  }

}
