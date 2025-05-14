// src/Square.js
import React from 'react';

function Square({ value, onClick }) {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
