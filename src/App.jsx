import { useState } from 'react';
import './App.css';

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleSqureClick = (i) => {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    let nextSquares = squares.slice();

    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "0";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return (
    <div className="App">
      <div className="status">{status}</div>
      <div className="board-row">
        <Squre value={squares[0]} handleSqureClick={() => handleSqureClick(0)}/>
        <Squre value={squares[1]} handleSqureClick={() => handleSqureClick(1)}/>
        <Squre value={squares[2]} handleSqureClick={() => handleSqureClick(2)}/>
      </div>
      <div className="board-row">
        <Squre value={squares[3]} handleSqureClick={() => handleSqureClick(3)}/>
        <Squre value={squares[4]} handleSqureClick={() => handleSqureClick(4)}/>
        <Squre value={squares[5]} handleSqureClick={() => handleSqureClick(5)}/>
      </div>
      <div className="board-row">
        <Squre value={squares[6]} handleSqureClick={() => handleSqureClick(6)}/>
        <Squre value={squares[7]} handleSqureClick={() => handleSqureClick(7)}/>
        <Squre value={squares[8]} handleSqureClick={() => handleSqureClick(8)}/>
      </div>
    </div>
  )
};
function Squre({ value, handleSqureClick }) {
  return (
    <button 
      className="squre"
      onClick={handleSqureClick}
    >
      {value}
    </button>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Board;
