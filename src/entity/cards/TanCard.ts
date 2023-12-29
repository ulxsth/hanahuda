import Card from "./Card";

export class TanCard extends Card {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`タン札: ${this.month}月`);
  }

  equals(card: Card): boolean {
    return card instanceof TanCard && this.month === card.month;
  }
}

export class AotanCard extends TanCard {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`青タン札: ${this.month}月`);
  }
}

export class AkatanCard extends TanCard {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`赤タン札: ${this.month}月`);
  }
}
