import { useState } from 'react'
import './App.css'

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const buttonClicked = (i) => {
    console.log(i);
    const nextsquare = square.slice();

    if (square[i] || calculateWinner(lines)) {
      return;
    }

    if (xIsNext) {
      nextsquare[i] = 'X';
    } else {
      nextsquare[i] = 'O';
    }

    setSquare(nextsquare);
    setXIsNext(!xIsNext);
  }

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

  const calculateWinner = (lines) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (square[a] && square[a] == square[b] && square[a] == square[c]) {
        return square[a];
      }
    }
  }

  const winner = calculateWinner(lines);
  const draw = !square.includes(null) && !winner;

  let status;

  if (winner) {
    status = 'WINNER IS : ' + winner;
  }
  else if (draw) {
    status = 'MATCH IS DRAW';
  }
  else {
    status = 'NEXT PLAYER : ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div id='container'>
      <div id='status'>
        {status}
      </div>
      <div className='row'>
        <button value={square[0]} onClick={()=>buttonClicked(0)}>{square[0]}</button>
        <button value={square[1]} onClick={()=>buttonClicked(1)}>{square[1]}</button>
        <button value={square[2]} onClick={()=>buttonClicked(2)}>{square[2]}</button>
      </div>
      <div className='row'>
        <button value={square[3]} onClick={()=>buttonClicked(3)}>{square[3]}</button>
        <button value={square[4]} onClick={()=>buttonClicked(4)}>{square[4]}</button>
        <button value={square[5]} onClick={()=>buttonClicked(5)}>{square[5]}</button>
      </div>
      <div className='row'>
        <button value={square[6]} onClick={()=>buttonClicked(6)}>{square[6]}</button>
        <button value={square[7]} onClick={()=>buttonClicked(7)}>{square[7]}</button>
        <button value={square[8]} onClick={()=>buttonClicked(8)}>{square[8]}</button>
      </div>
    </div>
  )
}

export default App
