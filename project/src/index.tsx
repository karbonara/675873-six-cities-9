import App from './components/app/app';
import browserHistory from './browser-history';
import ErrorMessage from './components/error-message/error-message';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import HistoryRouter from './history-route';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        <ErrorMessage />
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
  document.getElementById('root'));
