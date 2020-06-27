import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, DefaultNav } from './App';

ReactDOM.render(
  <div>
    <DefaultNav />
    <App />
  </div>,
  document.getElementById('root')
);


//qui si rederizza la pagina, come si vede tutto sara' in un div e iniziera' sempre con la default nav; l'elemento che viene renderizzato e' root in index.html

/*
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

sinceramente non so a che serva quindi ve lo lascio ma non e' attivo

*/
