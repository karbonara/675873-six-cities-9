import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { offers } from './mocks/offers';
import { CITY } from './mocks/city';
import { POINTS } from './mocks/points';

const Setting = {
  PLACES_FOUND: 324,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        placesFound={Setting.PLACES_FOUND}
        offers={offers}
        points={POINTS}
        city={CITY}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
