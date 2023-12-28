class Move {
  private _player: string;
  private _card: string;
  private _timestamp: Date;

  constructor(player: string, card: string) {
    this._player = player;
    this._card = card;
    this._timestamp = new Date();
  }

  get player(): string {
    return this._player;
  }

  get card(): string {
    return this._card;
  }

  get timestamp(): Date {
    return this._timestamp;
  }
}
