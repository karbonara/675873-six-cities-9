import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { CITY } from './mocks/city';
import { comments } from './mocks/comments';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { POINTS } from './mocks/points';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { CityTabs, SortPopup } from './const';

const Setting = {
  PLACES_FOUND: 324,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
          placesFound={Setting.PLACES_FOUND}
          offers={offers}
          points={POINTS}
          city={CITY}
          comments={comments}
          cityTabs={CityTabs}
          sortPopup={SortPopup}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
