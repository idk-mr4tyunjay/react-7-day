// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Stateful = () => {
  const [message, setMessage] = useState('Hello, World!');

  const updateMessage = () => {
    setMessage('The content has been updated!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Update Content</button>
    </div>
  );
};

export default Stateful;
