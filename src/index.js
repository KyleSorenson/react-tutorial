import ReactDOM from 'react-dom';
import { TicTacToe } from './tic-tac-toe.js';
import { RouterTutorial} from './router-tutorial.js'

//=========TIC TAC TOE==========//

// ReactDOM.render(
//   <TicTacToe />,
//   document.getElementById('root')
// );

//=========React Docs==========//

let elementArray = [<h1>Element 1</h1>, <h1>Element 2</h1>];

ReactDOM.render(
  <div>{elementArray}</div>,
  document.getElementById('root')
);