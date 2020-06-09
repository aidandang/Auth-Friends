import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosAuth';

export default function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(res => {
        setFriends(...friends, res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return <>
    <div className="row my-5">
      <div className="col-6">
        {friends.map(friend =>
          <div key={friend.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{friend.name}</h5>
              <p className="card-text">Age: {friend.age}</p>
              <p className="card-text">Email: {friend.email}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
}