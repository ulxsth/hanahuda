import Card from "./Card";

class TaneCard extends Card {
  constructor(month: number) {
    let points = 10;
    super(month, points);
  }

  show(): void {
    console.log(`タネ札: ${this.month}月`);
  }
}

class InoShikaChoCard extends TaneCard {
  constructor(month: number) {
    super(month);
  }
}

class SakeCard extends TaneCard {
  constructor(month: number) {
    super(month);
  }
}
