import { useState } from "react";

export default function Dice({ onRoll }) {
  const [dice, setDice] = useState(1);

  const handleRoll = () => {
    const val = Math.floor(Math.random() * 6 + 1);
    setDice(val);
    onRoll(val);
  };
  return (
    <div>
      <button className="diceButton" onClick={handleRoll}>
        {dice}
      </button>
    </div>
  );
}
