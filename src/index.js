import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import AppRouter from './containers/router';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(

  <Provider store={store}>
    <AppRouter history={history} />
  </Provider>,
  document.getElementById('app')
);
