import { Game } from "./src/entity/Game";

console.log("ゲームを初期化します");
const game = new Game("test", "playerName1", "playerName2");

console.log("ゲームを開始します...");
console.log("ゲームID: " + game.id);
console.log("部屋名: " + game.roomName);
console.log("プレイヤー1: " + game.players[0].name);
console.log("プレイヤー2: " + game.players[1].name);

for (let i = 1; i <= 1; i++) {
  console.log("月: " + i);
  console.log("ターンを始める準備を行います...");
  game.prepareTurn();

  console.log("お互いの手札を表示します");
  console.log("プレイヤー1: ");
  game.players[0].hand.show();
  console.log();
  console.log("プレイヤー2: ");
  game.players[1].hand.show();

  // 手四・くっつき札の判定

  console.log(game.players[game.playerTurn].name + " のターンです");
}
