import React, { useCallback, useState } from "react";

const ListComponent = React.memo(({ items, removeItem }) => {
  console.log("render ListComponent");

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => removeItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

export default function ReactMemoComponent() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);
  const [count, setCount] = useState(0);

  const removeItem = useCallback((index) => {
    setItems((currentItems) => {
      const newItems = [...currentItems];
      newItems.splice(index, 1);
      return newItems;
    });
  }, []);

  return (
    <div>
      <h1>React.memo</h1>
      <ListComponent items={items} removeItem={removeItem} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
