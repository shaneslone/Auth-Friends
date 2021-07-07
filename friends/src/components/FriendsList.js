import React, { useEffect, useContext } from 'react';
import { axiosWithAuth } from '../utilis/axiosWithAuth';

import Friend from './Friend';
import { GlobalState } from '../context/GlobalState';

export default function FriendsList() {
  const { friends, setFriends } = useContext(GlobalState);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='friendsList'>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
