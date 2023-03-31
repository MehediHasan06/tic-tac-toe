import { useState } from 'react';
import './App.css';

function Board() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="board-row">
        <Squre value={1}/>
        <Squre value={2}/>
        <Squre value={3}/>
      </div>
      <div className="board-row">
        <Squre value={4}/>
        <Squre value={5}/>
        <Squre value={6}/>
      </div>
      <div className="board-row">
        <Squre value={7}/>
        <Squre value={8}/>
        <Squre value={9}/>
      </div>
    </div>
  )
};
function Squre({value}) {
  return <button className="squre">{value}</button>
}

export default Board;
