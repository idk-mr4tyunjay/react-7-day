// eslint-disable-next-line no-unused-vars
import React, { useState, useMemo } from 'react';

const MemoDemo = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <p>Other Count: {otherCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other Count</button>
    </div>
  );
};

export default MemoDemo;
