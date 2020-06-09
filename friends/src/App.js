import React from 'react';

// import dependecies
import { Switch, Route } from 'react-router-dom';

// import components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';

function App() {
  return <>
    <div className="container">
      <Switch>
        <PrivateRoute exact path='/' component={FriendList} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  </>
}

export default App;
