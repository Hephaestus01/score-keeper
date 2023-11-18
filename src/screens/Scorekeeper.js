import React, { useState } from "react";

export default function Scorekeeper({ players, gameDetails }) {
  const [round, setRound] = useState(1);
  const [scores, setScores] = useState({});

  const handleScoreInputChange = (player, round, score) => {
    const updatedScores = { ...scores };
    updatedScores[player][round - 1] = parseInt(score);
    setScores(updatedScores);
  };

  const handleRoundSubmit = () => {
    const roundScores = Object.values(scores).map(
      (playerScores) => playerScores[round - 1] || 0
    );
    const roundTotal = roundScores.reduce((total, score) => total + score, 0);

    setRound(round + 1);
  };

  return (
    <div className="flex flex-col h-screen m-2 text-lg">
      <header>Round {round}</header>
      <table className="table-auto self-center">
        <thead>
          <tr className="border p-2">
            <th className="border p-2 w-1/3">Player</th>
            <th className="border p-2 w-1/3">Round Score</th>
            {/* <th className="border p-2 w-1/3">Total Score</th> */}
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => (
            <tr className="border p-2">
              <td className="border p-2">{player.name}</td>
              <td className="border p-2">
                <input
                  type="number"
                  className="w-full bg-violet-300 text-black"
                  onChange={handleScoreInputChange}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="font-bold rounded-lg w-36 p-2 mt-4 bg-violet-600 border-2 border-white "
        onClick={handleRoundSubmit}
      >
        Submit Round
      </button>
      <div className="flex flex-col mx-auto">
        <header>Summary</header>
        <table className="table-auto self-center">
          <thead>
            <tr className="border p-2">
              <th className="border p-2 w-1/3">Player</th>
              <th className="border p-2 w-1/3">Total Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, i) => (
              <tr className="border p-2">
                <td className="border p-2">{player.name}</td>
                <td className="border p-2">
                  {player.scores.reduce((total, score) => total + score, 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
    </div>
  );
}
