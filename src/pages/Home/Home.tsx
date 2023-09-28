import { useState } from 'react';

export const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Home Page</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};
