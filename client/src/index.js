import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserFilmFinder from './FilmFinder/UserFilmFinder'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserFilmFinder()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);