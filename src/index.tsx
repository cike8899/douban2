import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'babel-polyfill';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieApp from '../packages/web-movie/src/index';

import reducer from './reducers';
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/movie" component={MovieApp} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
