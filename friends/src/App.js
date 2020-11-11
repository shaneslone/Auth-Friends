import React, { useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import { GlobalState } from './context/GlobalState';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  );
  const [friends, setFriends] = useState([]);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push('/login');
  };

  return (
    <div>
      <header>
        <h1>Friends List</h1>
        <nav>
          {isLoggedIn ? null : <Link to='/login'>Login</Link>}
          {isLoggedIn ? (
            <Link to='#' onClick={logout}>
              Logout
            </Link>
          ) : null}
          {isLoggedIn ? <Link to='/addfriend'>Add Friend</Link> : null}
          {isLoggedIn ? <Link to='/friendslist'>Friends</Link> : null}
        </nav>
      </header>
      <GlobalState.Provider
        value={{
          history,
          friends,
          setFriends,
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        <Switch>
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <PrivateRoute exact path='/addfriend' component={AddFriend} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </GlobalState.Provider>
    </div>
  );
}

export default App;
