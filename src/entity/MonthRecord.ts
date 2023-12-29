import { Move } from './Move';

/**
 * 月ごとの行動記録（ Moveオブジェクト ) を保持するクラス
 */
export class MonthRecord {
  private _month: number;
  private _moves: Move[];

  constructor(month: number) {
    this._month = month;
    this._moves = [];
  }

  get month(): number {
    return this._month;
  }

  get moves(): Move[] {
    return this._moves;
  }

  record(move: Move): void {
    this._moves.push(move);
  }
}
