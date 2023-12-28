import Card from './cards/Card';

/**
 * 花札のプレイヤーを示すクラス
 */
export default class Player {
  private _name: string;
  private _hand: Card[];
  private _score;

  constructor(name: string) {
    this._name = name;
    this._hand = [];
    this._score = 0;
  }

  get name(): string {
    return this._name;
  }

  get hand(): Card[] {
    return this._hand;
  }

  get score(): number {
    return this._score;
  }

  /**
   * 手札にカードを加える
   * @param card 加えるカード
   */
  addCard(card: Card): void {
    this._hand.push(card);
  }

  /**
   * 手札に複数のカードを加える
   * @param cards 加えるカード
   */
  addCards(cards: Card[]): void {
    this._hand = this._hand.concat(cards);
  }

  /**
   * 手札からカードを取り除く
   * @param card 取り除くカード
   */
  removeCard(card: Card): void {
    this._hand = this._hand.filter(c => !c.equals(card));
  }

  /**
   * スコアを加算する
   */
  addScore(score: number): void {
    this._score += score;
  }
}
