import Card from "./Card";

class HikariCard extends Card {
  constructor(month: number) {
    let points = 10;
    super(month, points);
  }

  show(): void {
    console.log(`光札: ${this.month}月`);
  }
}

class OnoDofuCard extends HikariCard {
  constructor(month: number) {
    super(month);
  }
}


