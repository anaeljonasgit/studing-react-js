import { useState, useMemo } from "react";

// We use useMemo when a value is so complex to recalculate on component and it don't change (to avoid recalculate).

const UseMemo = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [newNumber, setNewNumber] = useState<string>("");

  console.log("Component Rendered");

  const totalSum = useMemo(() => {
    console.log("Calculating total sum...");
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  const addNumber = () => {
    const number = parseFloat(newNumber);

    if (!isNaN(number)) {
      setNumbers((prev) => [...prev, number]);
    }

    setNewNumber("");
  };

  return (
    <>
      <p>useMemo</p>
      <h3>Numbers: {numbers.join(", ")}</h3>
      <h3>Total Sum: {totalSum}</h3>
      <input
        type="text"
        value={newNumber}
        placeholder="Enter a number"
        onChange={(event) => setNewNumber(event.target.value)}
      />
      <button onClick={addNumber}>Add Number</button>
    </>
  );
};

export default UseMemo;
