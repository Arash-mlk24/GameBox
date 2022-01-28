export default class Piece {
  private _userId: string;
  private _position: [number, number];

  public get userId(): string {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public get position(): [number, number] {
    return this._position;
  }
  public set position(value: [number, number]) {
    this._position = value;
  }

  constructor() {}
}
