import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const initialValues = {
    username: '',
    password: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', values)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.data.payload);
        setValues(initialValues);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              name='username'
              type='text'
              onChange={handleChange}
              value={values.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              name='password'
              type='password'
              onChange={handleChange}
              value={values.password}
            />
          </label>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
