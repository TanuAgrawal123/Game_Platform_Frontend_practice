import "./styles.css";
import { useCallback, useMemo, useState } from "react";
import { Snake } from "./Snake.js";
import Board from "./Board";
import { Ladder } from "./Ladder";
import Player from "./Player";
import Dice from "./Dice";
export default function SnakeAndLadder() {
  const boardArray = useMemo(() => {
    let base = 100;
    const arr = Array.from({ length: 100 }, (_, index) => base - index);

    const newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, 10));
    }
    return newArr;
  });
  const Ladders = [Ladder(10, 47), Ladder(35, 88)];
  const Snakes = [Snake(99, 27), Snake(54, 11)];
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [players, setPlayer] = useState([
    Player(1, 0, "pink"),
    Player(2, 0, "blue"),
  ]);
  const [winningStatus, setWinningStatus] = useState("");
  const moveToNextPosition = (diceValue) => {
    let newPlayers = [...players];
    let currentPlayer = newPlayers[activePlayerIndex];
    let newPosition = currentPlayer.position + diceValue;
    Ladders.forEach((ladder) => {
      newPosition = ladder.nextPosition(newPosition);
    });
    Snakes.forEach((snake) => {
      newPosition = snake.nextPosition(newPosition);
    });
    currentPlayer.position = newPosition;
    setPlayer(newPlayers);
    if (newPosition > 100) {
      setWinningStatus(
        `Winner of the game is player  ${activePlayerIndex + 1}`
      );
    }

    setActivePlayerIndex((activePlayerIndex + 1) % players.length);
  };
  const rollDice = useCallback(
    (diceValue) => {
      moveToNextPosition(diceValue);
    },
    [moveToNextPosition]
  );
  const resetHandler = () => {
    setPlayer([Player(1, 0, "pink"), Player(2, 0, "blue")]);
    setActivePlayerIndex(0);
    setWinningStatus("");
  };
  return (
    <div className="App">
      <Board
        boardArray={boardArray}
        snakes={Snakes}
        ladders={Ladders}
        players={players}
      />
      <Dice onRoll={rollDice} />
      <h1> {winningStatus}</h1>
      {players.map((p) => {
        return (
          <p style={{ backgroundColor: p.color }}>
            Player {p.id} represent {p.color} color
          </p>
        );
      })}
      <button onClick={resetHandler}>Reset the Game</button>
    </div>
  );
}
