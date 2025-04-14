// useRef Hook: useRef is a react hook that allow us to create mutable variables, which will not re-render the component.

// UseRef is also used for accessing DOM Element.

import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState(0);
  const renderCount = useRef(0); // ✅ UseRef for render tracking

  useEffect(() => {
    renderCount.current = renderCount.current + 1; // ✅ Does NOT cause re-render
  });

  function increaseValue() {
    setValue((prev) => prev + 1);
  }

  function decreaseValue() {
    setValue((prev) => prev - 1);
  }

  return (
    <>
      <h1>This is useRef Hook Example</h1>
      <button onClick={increaseValue}>Increase +</button>
      <h2>{value}</h2>
      <button onClick={decreaseValue}>Decrease -</button>
      <h2>Render Count: {renderCount.current}</h2>
    </>
  );
};

export default UseRefHook;
