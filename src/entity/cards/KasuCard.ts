import Card from './Card';

class KasuCard extends Card {
  constructor(month: number) {
    let points = 1;
    super(month, points);
  }

  show(): void {
    console.log(`カス札: ${this.month}月`);
  }
}

export { KasuCard as PointCard };
