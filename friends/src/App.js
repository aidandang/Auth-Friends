import React from 'react';

// import dependecies
import { Switch, Route } from 'react-router-dom';

// import components
import Login from './components/Login';

function App() {
  return <>
    <div className="container">
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  </>
}

export default App;
