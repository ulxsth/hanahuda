import Card from "./Card";

export class HikariCard extends Card {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`光札: ${this.month}月`);
  }

  equals(card: Card): boolean {
    return card instanceof HikariCard && this.month === card.month;
  }

  toString(): string {
    return `hikari-${this.month}`;
  }
}

export class OnoDofuCard extends HikariCard {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`光札: ${this.month}月 (小野道風)`);
  }
}


