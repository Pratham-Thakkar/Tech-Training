import { useState, useEffect } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("Current count value: " + counter);
    }, 3000);
  });
  function increaseCounter() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Click from function</button>
    </div>
  );
}
