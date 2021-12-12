import ReactDOM from 'react-dom';
// import { TicTacToe } from './tic-tac-toe.js';
import { RouterTutorial, Expenses, Invoices, Invoice } from './router-tutorial.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//=========TIC TAC TOE==========//

// ReactDOM.render(
//   <TicTacToe />,
//   document.getElementById('root')
// );

//========= React Router Dom ==========//

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RouterTutorial />} >
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

//=========React Docs==========//

// let elementArray = [<h1>Element 1</h1>, <h1>Element 2</h1>];

// ReactDOM.render(
//   <div>{elementArray}</div>,
//   document.getElementById('root')
// );