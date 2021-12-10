import ReactDOM from 'react-dom';
import { TicTacToe } from './tic-tac-toe.js';
import { RouterTutorial } from './router-tutorial.js';
import { BrowserRouter } from 'react-router-dom';

//=========TIC TAC TOE==========//

// ReactDOM.render(
//   <TicTacToe />,
//   document.getElementById('root')
// );

//========= React Router Dom ==========//

ReactDOM.render(
  <BrowserRouter>
    <RouterTutorial />
  </BrowserRouter>,
  document.getElementById('root')
);

//=========React Docs==========//

// let elementArray = [<h1>Element 1</h1>, <h1>Element 2</h1>];

// ReactDOM.render(
//   <div>{elementArray}</div>,
//   document.getElementById('root')
// );