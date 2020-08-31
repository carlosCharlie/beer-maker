import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './menu/Menu';
import BeerDetails from "./beerDetails/BeerDetails";
import './colors.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="index">
      <Menu />
      <BeerDetails />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
