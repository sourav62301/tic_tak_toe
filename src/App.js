import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const NEW_GAME = { board: Array(9).fill(null), isXNext: true };

function App() {
  const [history, setHistory] = useState([NEW_GAME]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  // console.log('history', history);

  // const [isXNext, setIsXNext] = useState(false);
  // console.log('Board Re-render');

  const { winner, winningSquares } = calculateWinner(current.board);
  // console.log(winner);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : '0';
        }
        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    // setIsXNext(prev => !prev);
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      {/* <h2>{message}</h2> */}
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
}

export default App;
