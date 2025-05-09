// src/History.js
import React from 'react';

function History({ history, jumpTo }) {
  return (
    <div>
      <h3>履歴</h3>
      <ul>
        {history.map((step, move) => (
          <li key={move}>
            <button
              type="button"
              onClick={() => {
                if (typeof jumpTo === 'function') {
                  jumpTo(move);
                } else {
                  console.error('jumpTo is not a function');
                }
              }}
            >
              手 {move}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
