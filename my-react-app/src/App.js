import React, { useState } from 'react';
import Board from './Board';
import History from './History';  // ここでインポート
import './App.css';

function App() {
  // ここに必要なstateなど
  const [history, setHistory] = useState([Array(25).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  // ゲームの進行に関するロジック（例：クリックされた場所に記号を入れる）
  const handleClick = (i) => {
    // ゲームの進行ロジック
  };

  // ジャンプ（履歴から戻る）
  const jumpTo = (move) => {
    // 履歴に戻るロジック
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </div>
      <div className="game-info">
        <History history={history} jumpTo={jumpTo} /> {/* ここで履歴を表示 */}
      </div>
    </div>
  );
}

export default App;
