import React, { useContext } from 'react';
import { axiosWithAuth } from '../utilis/axiosWithAuth';
import { GlobalState } from '../context/GlobalState';

export default function Friend(props) {
  const { name, age, email, id } = props.friend;
  const { setFriends, setIsEditing, setValuesToEdit, history } = useContext(
    GlobalState
  );

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

  const handleEdit = () => {
    setValuesToEdit(props.friend);
    setIsEditing(true);
    history.push('/addfriend');
  };

  return (
    <div className='friend'>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button onClick={handleDelete}>Delete Friend</button>
      <button onClick={handleEdit}>Edit Friend</button>
    </div>
  );
}
