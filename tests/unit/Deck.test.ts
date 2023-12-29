import fs from 'fs';
import path from 'path';

import { Deck } from '../../src/entity/Deck';

describe('Deck', () => {
  let deck: Deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('デッキが正しく初期化されるか', () => {
    let filePath = path.join(__dirname, '../../resource/deck.json');
    let fileContents = fs.readFileSync(filePath, 'utf8');
    let data = JSON.parse(fileContents);

    expect(deck.length).toBe(data.month.flat().length);

    data.month.forEach((set: string[], i: number) => {
      const month = i + 1;
      set.forEach((cardName: string) => {
        expect(deck.cards).toContainEqual(expect.objectContaining({ month }));
      });
    });
  });
});
