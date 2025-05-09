// src/Board.js
import React from 'react';
import Square from './Square';

function Board({ squares, onClick }) {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      {[0, 1, 2, 3, 4].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2, 3, 4].map((col) => renderSquare(row * 5 + col))}
        </div>
      ))}
    </div>
  );
}

export default Board;
