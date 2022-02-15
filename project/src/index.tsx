import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
const Setting = {
  PLACES_FOUND: 324,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placesFound={Setting.PLACES_FOUND} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
