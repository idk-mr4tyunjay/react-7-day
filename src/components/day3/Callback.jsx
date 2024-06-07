// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';

const CallbackDemo = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CallbackDemo;
