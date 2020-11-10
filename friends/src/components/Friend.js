import React from 'react';

export default function Friend(props) {
  const { name, age, email } = props.friend;
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
