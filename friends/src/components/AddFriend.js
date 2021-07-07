import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utilis/axiosWithAuth';

import { GlobalState } from '../context/GlobalState';

export default function AddFriend() {
  const {
    history,
    isEditing,
    setIsEditing,
    valuesToEdit,
    setValuesToEdit,
    setFriends,
  } = useContext(GlobalState);
  const initialValues = {
    name: '',
    age: '',
    email: '',
  };
  const [values, setValues] = useState(
    isEditing ? valuesToEdit : initialValues
  );

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      axiosWithAuth()
        .put(`/friends/${values.id}`, values)
        .then(res => {
          setIsEditing(false);
          setValuesToEdit({});
          history.push('/friendslist');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axiosWithAuth()
        .post('/friends', values)
        .then(res => {
          history.push('/friendslist');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              name='name'
              type='test'
              value={values.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              name='age'
              type='test'
              value={values.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              name='email'
              type='email'
              value={values.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button>{isEditing ? 'Edit Friend' : 'Add Friend'}</button>
      </form>
    </div>
  );
}
