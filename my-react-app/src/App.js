// src/App.js
import React, { useState } from 'react';
import Board from './Board';
import History from './History';
import './App.css';

function App() {
  const [history, setHistory] = useState([Array(25).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const calculateWinner = (squares) => {
    // 勝利判定ロジック（仮で常にnullを返す）
    return null;
  };

  const currentSquares = history[stepNumber];

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <History history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}

export default App;
