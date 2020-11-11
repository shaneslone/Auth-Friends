import React, { useContext } from 'react';
import { axiosWithAuth } from '../utilis/axiosWithAuth';
import { GlobalState } from '../context/GlobalState';

export default function Friend(props) {
  const { name, age, email, id } = props.friend;
  const { setFriends } = useContext(GlobalState);

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button onClick={handleDelete}>Delete Friend</button>
    </div>
  );
}
