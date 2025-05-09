// src/History.js
import React from 'react';

function History({ history, jumpTo }) {
  return (
    <div>
      <h3>履歴</h3>
      <ul>
        {history.map((step, move) => (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>手 {move}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
