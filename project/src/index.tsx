import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
const Setting = {
  PLACES_TO_STAY: 324,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placesToStay={Setting.PLACES_TO_STAY} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
