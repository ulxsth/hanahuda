import { YearRecord } from "./YearRecord";
import Player from "./Player";
import { Deck } from "./Deck";
import { UUID } from "crypto";

const crypto = require('crypto');

export class Game {
  private _id: UUID;
  private _roomName: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _status: GameStatus;

  private record: YearRecord;
  private _deck: Deck;
  private _players: [Player, Player];

  private _month: number;
  private _playerTurn: 0 | 1;

  private previousWinner: 0 | 1;

  constructor(
    roomName: string,
    playerName1: string,
    playerName2: string
  ) {
    this._id = crypto.randomUUID();
    this._roomName = roomName;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._status = GameStatus.Preparation;

    this.record = new YearRecord();
    this._deck = new Deck();
    this._players = [new Player(playerName1), new Player(playerName2)];

    this._month = 1;
    this._playerTurn = Math.floor(Math.random() * 2) % 2 as 0 | 1;
    this.previousWinner = this._playerTurn;
  }

  get id(): UUID {
    return this._id;
  }

  get roomName(): string {
    return this._roomName;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get status(): GameStatus {
    return this._status;
  }

  get deck(): Deck {
    return this._deck;
  }

  get players(): [Player, Player] {
    return this._players;
  }

  get month(): number {
    return this._month;
  }

  get playerTurn(): 0 | 1 {
    return this._playerTurn;
  }

  /**
   * ターンの始めに行う初期化処理を行う。
   */
  prepareTurn(): void {
    this._playerTurn = this.previousWinner;

    this.deck.init();
    this.players.forEach(player => {
      player.hand.addCards(this.deck.draw(8));
      player.hand.sort();
    });

    if (this._status !== GameStatus.Preparation) {
      this._status = GameStatus.Playing;
    }
  }

  /**
   * 月を進める。
   */
  nextMonth(): void {
    this._month++;
  }
}

export enum GameStatus {
  Preparation,
  Playing,
  Finished
}
