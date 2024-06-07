// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const State = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>This content is visible.</p>}
    </div>
  );
};

export default State;
