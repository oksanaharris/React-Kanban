import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import myReducer from './reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

