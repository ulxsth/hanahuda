import Card from "./Card";

export class TaneCard extends Card {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`タネ札: ${this.month}月`);
  }

  equals(card: Card): boolean {
    return card instanceof TaneCard && this.month === card.month;
  }
}

export class InoShikaChoCard extends TaneCard {
  constructor(month: number) {
    super(month);
  }
}

export class SakeCard extends TaneCard {
  constructor(month: number) {
    super(month);
  }
}
