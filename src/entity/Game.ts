import { YearRecord } from "./YearRecord";
import Player from "./Player";
import { Deck } from "./Deck";

class Game {
  id: number;
  roomName: string;
  createdAt: Date;
  updatedAt: Date;
  status: GameStatus;

  record: YearRecord;
  deck: Deck;
  players: [Player, Player];

  month: number;
  playerTurn: 0 | 1;

  previousWinner: 0 | 1;

  constructor(
    id: number,
    roomName: string,
    createdAt: Date,
    updatedAt: Date,
    playerName1: string,
    playerName2: string
  ) {
    this.id = id;
    this.roomName = roomName;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = GameStatus.Preparation;

    this.record = new YearRecord();
    this.deck = new Deck();
    this.players = [new Player(playerName1), new Player(playerName2)];

    this.month = 1;
    this.playerTurn = Math.floor(Math.random() * 2) % 2 as 0 | 1;
    this.previousWinner = this.playerTurn;
  }

  /**
   * 月を進める
   */
  nextMonth(): void {
    this.month++;
    this.playerTurn = this.previousWinner;

    this.deck = new Deck();
  }
}

enum GameStatus {
  Preparation,
  Playing,
  Finished
}
