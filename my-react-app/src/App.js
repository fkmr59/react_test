// src/App.js
import React, { useState } from 'react';
import Board from './Board';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(25).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([]);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
    setHistory([...history, squaresCopy]);
  };

  const calculateWinner = (squares) => {
    // 五目並べの勝利判定ロジックをここに実装
    return null;
  };

  return (
    <div className="game">
      <Board squares={squares} onClick={handleClick} />
      {/* 履歴表示などのコンポーネントを追加 */}
    </div>
  );
}

export default App;
