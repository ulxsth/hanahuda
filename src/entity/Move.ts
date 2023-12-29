import Card from "./cards/Card";

/**
 * ゲーム内での行動を示すクラス
 */
class Move {
  private _player: string;
  private _card: Card;
  private _timestamp: Date;

  constructor(player: string, card: Card) {
    this._player = player;
    this._card = card;
    this._timestamp = new Date();
  }

  get player(): string {
    return this._player;
  }

  get card(): Card {
    return this._card;
  }

  get timestamp(): Date {
    return this._timestamp;
  }
}
