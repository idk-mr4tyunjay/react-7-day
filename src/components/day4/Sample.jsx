import React, { useState, useMemo, useCallback, Suspense, lazy } from 'react';
import { FixedSizeList as List } from 'react-window';

// Lazy loading component
const LazyComponent = lazy(() => import('./components/LazyComponent'));

// Memoized child component
const MemoizedChild = React.memo(({ onClick }) => {
  console.log('MemoizedChild re-render');
  return <button onClick={onClick}>Click me</button>;
});

function Sample() {
  const [count, setCount] = useState(0);
  const [items] = useState(Array.from({ length: 1000 }, (_, i) => i));

  // useMemo to prevent unnecessary calculations
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value');
    return count * 2;
  }, [count]);

  // useCallback to prevent function recreation
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  // Function to update count
  const increment = () => setCount(count + 1);

  // Virtualized list row renderer
  const Row = ({ index, style }) => (
    <div style={style}>Row {items[index]}</div>
  );

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <p>Expensive value: {expensiveValue}</p>
      <button onClick={increment}>Increment count</button>
      <MemoizedChild onClick={handleClick} />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <List
        height={150}
        itemCount={items.length}
        itemSize={35}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
}

export default Sample;
