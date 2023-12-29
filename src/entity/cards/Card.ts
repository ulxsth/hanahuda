export default abstract class Card {
  private _month: number;

  constructor(month: number) {
    this._month = month;
  }


  get month(): number {
    return this._month;
  }

  abstract show(): void;
  abstract equals(card: Card): boolean;
}
