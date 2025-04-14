import React, { useRef } from "react";

const UseRefHook1 = () => {
  const inputEle = useRef();

  const btnClicked = () => {
    console.log(inputEle.current);
    inputEle.current.style.background = "Red";
  };
  return (
    <div>
      <input type="text" ref={inputEle} />
      <button onClick={btnClicked}>Click me</button>
    </div>
  );
};

export default UseRefHook1;

// With the help of UseRef hook, we can access DOM element directly in your component.
