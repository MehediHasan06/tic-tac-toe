import { useState } from 'react';
import './App.css';

function Board() {
  const [squres, setSqures] = useState(Array(9).fill(null));
  const handleSqureClick = (i) => {
    let nextSqures = squres.slice();
    console.log(nextSqures);
    nextSqures[i] = "X";
    setSqures(nextSqures);
  };


  return (
    <div className="App">
      <div className="board-row">
        <Squre value={squres[0]} handleSqureClick={() => handleSqureClick(0)}/>
        <Squre value={squres[1]} handleSqureClick={() => handleSqureClick(1)}/>
        <Squre value={squres[2]} handleSqureClick={() => handleSqureClick(2)}/>
      </div>
      <div className="board-row">
        <Squre value={squres[3]} handleSqureClick={() => handleSqureClick(3)}/>
        <Squre value={squres[4]} handleSqureClick={() => handleSqureClick(4)}/>
        <Squre value={squres[5]} handleSqureClick={() => handleSqureClick(5)}/>
      </div>
      <div className="board-row">
        <Squre value={squres[6]} handleSqureClick={() => handleSqureClick(6)}/>
        <Squre value={squres[7]} handleSqureClick={() => handleSqureClick(7)}/>
        <Squre value={squres[8]} handleSqureClick={() => handleSqureClick(8)}/>
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
}

export default Board;
