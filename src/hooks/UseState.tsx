import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <p>useState</p>
      <h1>Total: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  );
};

export default UseState;
