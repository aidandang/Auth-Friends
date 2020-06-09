import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const login = e => {
    e.preventDefault();
    setIsFetching(true);
    axiosWithAuth().post('login/endpoint', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/');
      })
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  return <>

    <form onSubmit={login}>
      
      <div className="row">
        <div className="col-6">
          {isFetching === true && '...Loading'}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Log in</button>
        </div>
      </div>
      
    </form>

  </>
}

export default Login;