// The useEffect Hook allows you to perform side effect in your component.

//Example: Fetching data from API, Directly updating the DOM, Timmer like--setTimeOut and setInterval.

import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log(count);
    }, 2000);
  }, [count]);
  return (
    <div>
      <h1>Here we will learn UseEffect Hook...</h1>
      <h2>This Use Effect hook will render {count}</h2>
    </div>
  );
};

export default Effect;

// 1) Runs Only Once (Empty Dependency Array [])
// When the dependency array is empty ([]), the effect runs only once, after the initial render.
// This is useful for setup logic like API calls, event listeners, or initializing data.

// 2) Runs on Specific Dependency Changes
// If you provide dependencies (state variables or props) inside the array, the effect only runs when those dependencies change.
// This ensures the effect is executed only when needed, improving performance.
// Ex: ..--> [count]);

// 3) Handling Cleanup (return function)
// When dependencies change or the component unmounts, useEffect can clean up by returning a function.
// This is useful for removing event listeners, canceling API requests, or clearing timers.

// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("Interval running...");
//   }, 1000);

//   return () => {
//     clearInterval(interval); // Cleanup when component unmounts or dependency changes
//   };
// }, [count]); // Runs when 'count' changes
