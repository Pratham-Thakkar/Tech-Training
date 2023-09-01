import { useState } from "react";
import { Square } from "./Square";
import { Restart } from "./Restart";

function calculateWinner(squares: Array<string>) {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < possibilities.length; i++) {
    const [a, b, c] = possibilities[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const Matrix: React.FC = (): JSX.Element => {
  const [xIsNext, setXIsNext]: [boolean, Function] = useState(true);
  const [squares, setSquares]: [Array<string>, Function] = useState(
    Array<string>(9).fill("")
  );
  let status;
  const winner = calculateWinner(squares);
  const remSquare = squares.some((squareVal) => {
    return squareVal === "";
  });
  if (winner) {
    status = `Winner is: ${winner}`;
  } else if (!winner && !remSquare) {
    status = "Match Drawn";
  } else {
    status = xIsNext ? "Turn for X" : "Turn for 0";
  }
  function handleClick(index: number) {
    if (squares[index] || winner) {
      return;
    }
    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[index] = "X";
      setXIsNext(false);
    } else {
      nextSquares[index] = "0";
      setXIsNext(true);
    }
    setSquares(nextSquares);
  }

  function handleRestart() {
    setSquares(Array<string>(9).fill(""));
    setXIsNext(true);
  }
  return (
    <>
      <h3>{status}</h3>
      <div className="matrix">
        {squares.map((squareValue, index) => {
          return (
            <Square
              value={squareValue}
              onSquareClick={() => handleClick(index)}
            />
          );
        })}
      </div>
      <Restart onRestart={() => handleRestart()} />
    </>
  );
};
