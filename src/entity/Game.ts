import { YearRecord } from "./YearRecord";
import Player from "./Player";
import { Deck } from "./Deck";

class Game {
  private _id: number;
  private _roomName: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _status: GameStatus;

  private record: YearRecord;
  private _deck: Deck;
  private _players: [Player, Player];

  private _month: number;
  private _playerTurn: 0 | 1;

  constructor(
    id: number,
    roomName: string,
    createdAt: Date,
    updatedAt: Date,
    playerName1: string,
    playerName2: string
  ) {
    this._id = id;
    this._roomName = roomName;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._status = GameStatus.Preparation;

    this.record = new YearRecord();
    this._deck = new Deck();
    this._players = [new Player(playerName1), new Player(playerName2)];

    this._month = 1;
    this._playerTurn = Math.floor(Math.random() * 2) % 2 as 0 | 1;
  }

  get id(): number {
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

  
}

enum GameStatus {
  Preparation,
  Playing,
  Finished
}
