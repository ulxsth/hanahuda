import Card from "./Card";

class TanCard extends Card {
  constructor(month: number) {
    let points = 5;
    super(month, points);
  }

  show(): void {
    console.log(`タン札: ${this.month}月`);
  }
}

class BlueTanCard extends TanCard {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`青タン札: ${this.month}月`);
  }
}

class RedTanCard extends TanCard {
  constructor(month: number) {
    super(month);
  }

  show(): void {
    console.log(`赤タン札: ${this.month}月`);
  }
}