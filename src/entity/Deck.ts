import Card from './cards/Card';
import { HikariCard, OnoDofuCard } from './cards/HikariCard';
import { InoShikaChoCard, SakeCard, TaneCard } from './cards/TaneCard';
import { AkatanCard, AotanCard, TanCard } from './cards/TanCard';
import { KasuCard } from './cards/KasuCard';

import fs from 'fs';
import path from 'path';

/**
 * 山札を示すクラス
 */
export class Deck {
  private _cards: Card[];

  constructor() {
    this._cards = [];
    this.init();
  }

  get length(): number {
    return this._cards.length;
  }

  get cards(): Card[] {
    return this._cards;
  }

  /**
   * 山札を初期化する
   */
  public init(): void {
    this._cards = [];

    try {
      let filePath = path.join(__dirname, '../../resource/deck.json');
      let fileContents = fs.readFileSync(filePath, 'utf8');
      let data = JSON.parse(fileContents);

      if (!data.month) throw new Error('山札の初期化に失敗しました。');

      data.month.forEach((set: string[], i: number) => {
        const month = i + 1;
        set.forEach((cardName: string) => {
          switch (cardName) {
            case 'hikari':
              this._cards.push(new HikariCard(month));
              break;
            case 'onodofu':
              this._cards.push(new OnoDofuCard(month));
              break;

            case 'tane':
              this._cards.push(new TaneCard(month));
              break;
            case 'sake':
              this._cards.push(new SakeCard(month));
              break;
            case 'inosikatyo':
              this._cards.push(new InoShikaChoCard(month));
              break;

            case 'tan':
              this._cards.push(new TanCard(month));
              break;
            case 'akatan':
              this._cards.push(new AkatanCard(month));
              break;
            case 'aotan':
              this._cards.push(new AotanCard(month));
              break;

            case 'kasu':
              this._cards.push(new KasuCard(month));
              break;
          }
        });
      });
    } catch (e) {
      console.error(e);
    }

    this.shuffle();
  }

  /**
   * 山札をシャッフルする
   */
  private shuffle(): void {
    for (let i = this._cards.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this._cards[i];
      this._cards[i] = this._cards[r];
      this._cards[r] = tmp;
    }
  }

  /**
   * 山札からカードを引く。
   * 指定枚数に達する山札がない場合は、残りのカードを返す。
   * @param count 引く枚数
   * @returns 引いたカード
   */
  draw(count: number): Card[] {
    if (count > this._cards.length) {
      count = this._cards.length;
    }

    return this._cards.splice(0, count);
  }
}
