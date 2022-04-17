import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as MobxProvider } from 'mobx-react';

import App from './App';
import mobxStore from './mobx-stores';

import './tailwind.css';
ReactDOM.render(
  <MobxProvider stores={mobxStore}>
    <Router>
      <App />
    </Router>
  </MobxProvider>,
  document.getElementById('root')
);
