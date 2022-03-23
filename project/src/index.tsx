import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import ErrorMessage from './components/error-message/error-message';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorMessage />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
