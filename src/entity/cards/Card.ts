export default abstract class Card {
  private _month: number;
  private _points: number;

  constructor(month: number, points: number) {
    this._month = month;
    this._points = points;
  }


  get month(): number {
    return this._month;
  }

  get points(): number {
    return this._points;
  }

  abstract show(): void;
}
