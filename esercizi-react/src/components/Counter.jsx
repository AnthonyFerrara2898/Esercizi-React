import { useState, useEffect } from "react";

const Counter = ({ initialValue, incrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`Counter value: ${counter}`);
  }, [counter]); // Logs counter value on change

  const increment = () => {
    setCounter(prevCounter => prevCounter + incrementAmount);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
