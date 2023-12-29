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
  }

  /**
   * 山札からカードを1枚引く
   */
  draw(): Card {
    const card = this._cards.shift();
    if (!card) throw new Error('山札が空です。');
    return card;
  }
}
