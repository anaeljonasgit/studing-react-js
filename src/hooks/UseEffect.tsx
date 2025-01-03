import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("UseEffect");
  }, [count]);

  return (
    <>
      <p>useEffect</p>
      <h1>Total: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  );
};

export default UseEffect;
