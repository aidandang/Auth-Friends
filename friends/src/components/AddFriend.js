import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth';

const AddFriend = (props) => {
  const [friend, setFriend] = useState({name: '', age: '', email: ''});
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  const addFriend = e => {
    e.preventDefault();
    setIsFetching(true);
    axiosWithAuth().post('http://localhost:5000/api/friends', friend)
      .then(res => {
        console.log(res.data)
        props.history.push('/');
      })
      .catch(err => {
        console.log(err)
        setIsFetching(false);
        setError(err.message);
      })
  }

  const handleChange = e => {
    e.persist();
    setFriend({
      ...friend,
      [e.target.name]: e.target.name === 'age' ? parseInt(e.target.value) : e.target.value,
    })
  }

  return <>

    <form onSubmit={addFriend}>

      <div className="row">
        <div className="col-6">
          {isFetching === true && '...Loading'}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={friend.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              className="form-control"
              type="text"
              name="age"
              value={friend.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={friend.email}
              onChange={handleChange}
            />
          </div>
          
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          {isFetching === true && <small>...Loading</small>}
          {error === 'Request failed with status code 403' && <small className="text-danger">Login and password are invalid</small>}
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-4">Add Friend</button>
      
    </form>

  </>
}

export default AddFriend;