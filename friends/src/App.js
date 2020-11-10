import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App(props) {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div>
      <header>
        <h1>Friends List</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='#' onClick={logout}>
            Logout
          </Link>
          <Link to='/friendslist'>Friends</Link>
        </nav>
      </header>
      <Switch>
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
