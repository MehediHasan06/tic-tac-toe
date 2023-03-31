import { useState } from 'react';
import './App.css';

function Board() {

  return (
    <div className="App">
      <div className="board-row">
        <Squre/>
        <Squre/>
        <Squre/>
      </div>
      <div className="board-row">
        <Squre/>
        <Squre/>
        <Squre/>
      </div>
      <div className="board-row">
        <Squre/>
        <Squre/>
        <Squre/>
      </div>
    </div>
  )
};
function Squre() {

  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue('X');
  };

  return (
    <button 
      className="squre"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Board;
