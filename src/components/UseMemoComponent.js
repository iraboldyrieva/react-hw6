import React, { useMemo, useState } from "react";

export default function UseMemoComponent() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const total = useMemo(() => {
    console.log("render");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div>
      <h1>useMemo</h1>
      <h2>Total: {total}</h2>
      <button onClick={addNumber}>Add</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
