// Board.js
import "./styles.css";

export default function Board({ boardArray, snakes, ladders, players }) {
  //console.log(players);
  return (
    <div className="App">
      Welcome to The Game: Saap Siddi
      <table>
        <tbody>
          {boardArray.map((subArray, rowIndex) => (
            <tr key={`tr-${rowIndex}`}>
              {subArray.map((item, colIndex) => {
                // Determine if the current cell has a snake or ladder
                const snake = snakes.find((s) => s.hasSnake(item));
                const ladder = ladders.find((l) => l.hasLadder(item));
                const player = players.find((p) => p.position == item);
                const backgroundColor = player
                  ? player.color
                  : snake
                  ? "red"
                  : ladder
                  ? "green"
                  : "grey";

                return (
                  <td
                    key={item}
                    // className={`cell ${snake ? "snake" : ""} ${
                    //   ladder ? "ladder" : ""
                    // } `}
                    style={{ backgroundColor }}
                  >
                    {item}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
