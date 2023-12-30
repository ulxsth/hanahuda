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

  public push(card: Card): void {
    this._cards.push(card);
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
}
