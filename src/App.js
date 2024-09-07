import React, { useState } from "react";
import SnakeAndLadder from "../src/SnakeAndLadder/Game.js";
import TicTacToe from "../src/TicTacToe/tictactoe.js";
import SnakeEatGame from "./SnakeEat/SnakeEat.js";
const App = () => {
  const [selectedGame, setSelectedGame] = useState("");

  const renderGameComponent = () => {
    switch (selectedGame) {
      case "SnakeAndLadder":
        return <SnakeAndLadder />;
      case "TicTacToe":
        return <TicTacToe />;
      case "SnakeEatGame":
        return <SnakeEatGame />;

      default:
        return <div>Please select a game.</div>;
    }
  };

  return (
    <div>
      <h1>Select a Game</h1>
      <button onClick={() => setSelectedGame("SnakeAndLadder")}>
        Snake And Ladder
      </button>
      <button onClick={() => setSelectedGame("TicTacToe")}>Tic and Toe</button>
      <button onClick={() => setSelectedGame("SnakeEatGame")}>
        Snake Eat Game
      </button>
      <div>{renderGameComponent()}</div>
    </div>
  );
};

export default App;
