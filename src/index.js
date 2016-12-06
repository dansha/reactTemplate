import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux';
import store from './store/createStore';


ReactDOM.render(
  <Provider store = {store} >
  <App />
  </Provider>,
  document.getElementById('root')
);
