import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next Player is ${current.isXNext ? 'X' : '0'}`;
  const noMovesLeft = current.board.every(element => element !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{' '}
          <span
            className={current.isXNext === 'X' ? 'text-green' : 'text-orange'}
          >
            {current.isXNext ? 'X' : '0'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">0</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
