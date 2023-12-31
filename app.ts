import { ReadLine } from "readline";
import { Game } from "./src/entity/Game";
import Player from "./src/entity/Player";

const POINTS = {
  "teshi": 6,
  "kuttsuki": 6,
}

console.log("ゲームを初期化します");
const game = new Game("test", "playerName1", "playerName2");

console.log("ゲームを開始します...");
console.log("ゲームID: " + game.id);
console.log("部屋名: " + game.roomName);
console.log("プレイヤー1: " + game.players[0].name);
console.log("プレイヤー2: " + game.players[1].name);

for (let i = 1; i <= 1; i++) {
  console.log("月: " + i);
  console.log("プレイヤー1のスコア: " + game.players[0].score);
  console.log("プレイヤー2のスコア: " + game.players[1].score);

  console.log("ターンを始める準備を行います...");
  game.prepareTurn();

  console.log("お互いの手札を表示します");
  console.log("プレイヤー1: ");
  game.players[0].hand.show();
  console.log();
  console.log("プレイヤー2: ");
  game.players[1].hand.show();

  // 手四・くっつき札の判定
  let flag = false;
  game.players.forEach(player => {
    if (player.hand.isTeshi()) {
      console.log("【役成立】" + player.name + ": 手四");
      console.log(player.name + " に" + POINTS.teshi + "点を加算します");
      player.addScore(6);
      console.log(player.name + " のスコア: " + player.score);
      flag = true;
      return;

    } else if (player.hand.isKuttsuki()) {
      console.log("【役成立】" + player.name + ": くっつき");
      console.log(player.name + " に" + POINTS.kuttsuki + "点を加算します");
      player.addScore(6);
      console.log(player.name + " のスコア: " + player.score);
      flag = true;
      return;
    }
  });
  if (flag) continue;

  const question = (player: Player) => {
    const rl: ReadLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log(player.name + " のターンです");
    player.hand.cards.forEach((card, index) => {
      console.log(`${index}: ${card.month}`);
    });
    rl.question("捨てるカードを選択してください: ", (answer: string) => {
      const index = parseInt(answer);
      if (isNaN(index)) {
        console.log("数値を入力してください");
        rl.close();
        question(player);
        return;
      }

      try {
        player.hand.removeAt(index);
      } catch (e) {
        console.log("そのインデックスのカードは存在しません");
        rl.close();
        question(player);
        return;
      }

      game.nextTurn();
      question(game.players[game.playerTurn]);
      rl.close();
    });
  }

  question(game.players[game.playerTurn]);
}
