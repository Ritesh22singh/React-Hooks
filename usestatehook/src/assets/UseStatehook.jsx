// UseState Hook: This is react hook, which create a "state variable", which helps us to track state in component & updates the user interface when state changes.

import React, { useState } from "react";

const UseStatehook = () => {
  let [hooks, setCounts] = useState("Hooks In React"); // this is good for when u have one state variable .....

  let [car, setCar] = useState({
    brand: "Tata",
    model: "Nexon",
    Make: 2025,
  });

  const changeModel = () => {
    setCar((prev) => {
      return { ...prev, model: "Pumch" };
    });

    // For obejct case u can not set value -->setCounts("useState hooks, we are learning...");
    // to upate we need updater function with previous values like above
  };

  // const reactHook = () => {
  //   setCounts("useState hooks, we are learning...");
  //   console.log(setCounts);
  // };
  return (
    <div>
      {/* <h1>This is demo for useState {hooks}</h1>
      <button onClick={reactHook}>Click me</button> */}

      <h1> I want to buy car {car.brand}</h1>
      <h2>
        which is {car.model} & manufature {car.Make}
      </h2>
      <button onClick={changeModel}>Click me to change the model....</button>
    </div>
  );
};

export default UseStatehook;
