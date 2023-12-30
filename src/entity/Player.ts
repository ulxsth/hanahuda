import { Hand } from './Hand';
import Card from './cards/Card';

/**
 * 花札のプレイヤーを示すクラス
 */
export default class Player {
  private _name: string;
  private _hand: Hand;
  private _score;

  constructor(name: string) {
    this._name = name;
    this._hand = new Hand();
    this._score = 0;
  }

  get name(): string {
    return this._name;
  }

  get hand(): Hand {
    return this._hand;
  }

  get score(): number {
    return this._score;
  }

  /**
   * スコアを加算する
   */
  addScore(score: number): void {
    this._score += score;
  }
}
