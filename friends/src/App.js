import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route component={Login} />
    </Switch>
  );
}

export default App;
