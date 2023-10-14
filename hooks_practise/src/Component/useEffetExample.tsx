import { useState, useEffect } from "react";

export function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("useEffect called!");
  });
  return (
    <>
      {[1].map((e) => {
        console.log("Rendered");
      })}
      <div className="App">
        <label>count </label>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
        <hr />
        <label>data </label>
        <button
          onClick={() => {
            setData(data + 1);
          }}
        >
          {data}
        </button>
      </div>
    </>
  );
}
