import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import StartGame from './screens/start';
import NameScreen from './screens/start/nameScreen'
import allReducers from './reducers';

const store = createStore(
  allReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
     <NameScreen/>

  </Provider>,
  document.getElementById('root'),
);
