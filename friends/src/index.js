import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

import App from './App';

import './index.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
