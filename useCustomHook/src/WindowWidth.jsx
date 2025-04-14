import React from "react";
import useWindowWidth from "./useWindowWidth";

const WindowWidth = () => {
  const width = useWindowWidth();
  return (
    <div>
      <h1>The width is: {width}</h1>
    </div>
  );
};

export default WindowWidth;
