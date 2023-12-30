// FILEPATH: /c:/GitHub/hanahuda/tests/unit/Hand.test.ts

import { Hand } from '../../src/entity/Hand';
import Card from '../../src/entity/cards/Card';
import { HikariCard } from '../../src/entity/cards/HikariCard';
import { KasuCard } from '../../src/entity/cards/KasuCard';
import { TaneCard } from '../../src/entity/cards/TaneCard';

describe('Hand', () => {
  let hand: Hand;

  beforeEach(() => {
    hand = new Hand();
  });

  it('手札が手四（てし）である場合、isTeshi()がtrueを返すか', () => {
    hand.addCards([
      new HikariCard(1),
      new TaneCard(1),
      new KasuCard(1),
      new KasuCard(1),
    ]);

    expect(hand.isTeshi()).toBe(true);
  });

  it('手札が手四（てし）でない場合、isTeshi()はfalseを返すべき', () => {
    hand.addCards([
      new KasuCard(1),
      new KasuCard(2),
      new KasuCard(3),
      new KasuCard(4),
    ]);

    expect(hand.isTeshi()).toBe(false);
  });
});
