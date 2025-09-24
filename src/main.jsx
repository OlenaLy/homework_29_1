import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import counterReducer from './reducers/counterReducer.js';
import App from './App.jsx'
import './index.css'

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
