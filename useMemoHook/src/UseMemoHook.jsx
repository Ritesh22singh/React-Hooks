// useMemo Hook: Its help you prevent unneccasry Re-render, perfromation optimization.
import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [number, SetNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const powCube = (num) => {
    console.log("Calculation is done..!");
    return Math.pow(num, 3);
  };

  const Result = useMemo(() => powCube(number), [number]);

  return (
    <div>
      <h1>This is useMemo Hook....!</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          SetNumber(e.target.value);
        }}
      />
      <h2>
        Cube of the the {number} : {Result}
      </h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter++
      </button>
      <h3>The Counter value is: {counter}</h3>
    </div>
  );
};

export default UseMemoHook;
