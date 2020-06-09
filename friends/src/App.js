import React from 'react';

// import dependecies
import { Switch, Route, Redirect } from 'react-router-dom';

// import components
import Login from './components/Login';

function App() {
  return <>
    <div className="container">
      <Redirect to="/login" />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  </>
}

export default App;
