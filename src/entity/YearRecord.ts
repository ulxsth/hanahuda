import { MonthRecord } from './MonthRecord';

export class YearRecord {
  private _monthRecords: MonthRecord[];

  constructor() {
    this._monthRecords = [];
    for (let i = 1; i <= 12; i++) {
      const monthRecord = new MonthRecord(i);
      this._monthRecords.push(monthRecord);
    }
  }
}
