import React from 'react';
import ReactDOM from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from './reducers/cartReducer.js';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';

import './index.css';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
