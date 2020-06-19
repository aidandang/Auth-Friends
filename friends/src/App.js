import React from 'react';

// import dependecies
import { Switch, Route } from 'react-router-dom';

// import components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';

function App() {
  return <>
    <div className="container">
      <Switch>
        <PrivateRoute exact path='/' component={FriendList} />
        <PrivateRoute exact path='/friends' component={AddFriend} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  </>
}

export default App;
