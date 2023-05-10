// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './Static/Css/index.css';
import './Static/Css/App.css';
import App from './Parents/App';
import reportWebVitals from './reportWebVitals';

// react-redux
import { Provider } from 'react-redux';
import { settingsReducer } from './Reducer/reducer';
import { legacy_createStore as createStore } from 'redux';

// inspinia css packages
import './Static/inspinia/style/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css/';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/animate.css/animate.min.css';

const store = createStore(settingsReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
