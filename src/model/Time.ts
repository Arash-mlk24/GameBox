export default class Time {
  // count of milliseconds (needs pipe)
  private _elapsedTime: number;
  private _startTime: Date;
  private _endTime: Date;
  // shows seconds remaining for a turn
  private _remainingTurnTime: Date;
  private _turnTime: Date;

  public get elapsedTime(): number {
    return this._elapsedTime;
  }
  public set elapsedTime(value: number) {
    this._elapsedTime = value;
  }
  public get startTime(): Date {
    return this._startTime;
  }
  public set startTime(value: Date) {
    this._startTime = value;
  }
  public get endTime(): Date {
    return this._endTime;
  }
  public set endTime(value: Date) {
    this._endTime = value;
  }
  public get remainingTurnTime(): Date {
    return this._remainingTurnTime;
  }
  public set remainingTurnTime(value: Date) {
    this._remainingTurnTime = value;
  }
  public get turnTime(): Date {
    return this._turnTime;
  }
  public set turnTime(value: Date) {
    this._turnTime = value;
  }

  constructor(turnTime: Date) {
    this.turnTime = turnTime;
  }
}
