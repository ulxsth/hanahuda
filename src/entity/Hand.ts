import Card from './cards/Card';

export class Hand {
  private _cards: Card[];

  constructor() {
    this._cards = [];
  }

  get length() {
    return this._cards.length;
  }

  get cards() {
    return this._cards;
  }

  public from(cards: Card[]): void {
    this._cards = cards;
  }

  /**
 * 手札にカードを加える
 * @param card 加えるカード
 */
  addCard(card: Card): void {
    this._cards.push(card);
  }

  /**
   * 手札に複数のカードを加える
   * @param cards 加えるカード
   */
  addCards(cards: Card[]): void {
    this._cards = this._cards.concat(cards);
  }

  /**
   * 手札からカードを取り除く
   * @param card 取り除くカード
   */
  removeCard(card: Card): void {
    this._cards = this._cards.filter(c => !c.equals(card));
  }

  public concat(cards: Card[]): Hand {
    const arr = this._cards.concat(cards);
    const hand = new Hand();
    hand.from(arr);
    return hand;
  }

  public filter(callbackfn: (value: Card, index: number, array: Card[]) => unknown): Hand {
    const arr = this._cards.filter(callbackfn);
    const hand = new Hand();
    hand.from(arr);
    return hand;
  }

  public show(): void {
    this._cards.forEach(card => card.show());
  }

  public sort(): void {
    this._cards.sort((a, b) => a.month - b.month);
  }

  /**
   * 手四があるかどうかを判定する
   * @return boolean 手四があるかどうか
   */
  public isTeshi(): boolean {
    let count = 0;
    for (let i = 0; i < this._cards.length - 1; i++) {
      if (this._cards[i].month === this._cards[i + 1].month) {
        count++;
      } else {
        count = 0;
      }

      if (count >= 3) {
        return true;
      }
    }
    return false;
  }

  /**
   * くっつきがあるかどうかを判定する
   * @return boolean くっつきがあるかどうか
   */
  public isKuttsuki(): boolean {
    let pairCount = 0;
    for (let i = 0; i < this._cards.length - 1; i++) {
      if (this._cards[i].month === this._cards[i + 1].month) {
        pairCount++;
        i++;
      }
    }

    return false;
  }
}
