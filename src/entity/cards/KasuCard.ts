import Card from './Card';

export class KasuCard extends Card {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`カス札: ${this.month}月`);
  }

  equals(card: Card): boolean {
    return card instanceof KasuCard && this.month === card.month;
  }
}
