import React from 'react';

const Square = ({ value, onClick }) => {
  // console.log('Square Re-render');
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
