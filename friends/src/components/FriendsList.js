import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utilis/axiosWithAuth';

import Friend from './Friend';

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
