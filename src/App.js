import React, { Component } from 'react';

import { Provider } from 'react-redux'

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import reduxThunk from 'redux-thunk';
import reducer from './reducets/reducers';

import Sidebar from './components/Sidebar/index';
import Details from './components/Details/index';

import styles from './App.sass';

const logMiddleware = store => next => action => {
  console.debug(action);
  return next(action)
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(reduxThunk, logMiddleware)
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main className={styles.wrap}>
          <Sidebar/>
          <Details/>
        </main>
      </Provider>
    );
  }
}

export default App;
