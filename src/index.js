import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import { Router, Route, browserHistory } from 'react-router';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Todolist from './pages/todo';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(

  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="page1" component={Page1}/>
        <Route path="page2" component={Page2}/>
        <Route path="todolist" component={Todolist}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
