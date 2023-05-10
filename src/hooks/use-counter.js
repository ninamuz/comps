import { useState, useEffect } from 'react';

// CUSTOM HOOK
function useCounterAndLog(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count: count,
    increment: increment
  }
}

export default useCounterAndLog;