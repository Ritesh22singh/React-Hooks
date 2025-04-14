import React, { useEffect, useState } from "react";

// Custom Hook: useWindowWidth
const useWindowWidth = () => {
  // 1️⃣ Initialize state with the current window width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 2️⃣ Define the function that updates the state when window is resized
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("Window width:", newWidth); // ✅ Always logs the latest value
    };

    // 3️⃣ Add the event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // 4️⃣ Cleanup: remove the event listener when the component using this hook unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // ✅ Runs only on mount and cleanup on unmount

  // 5️⃣ Return the width so components using this hook can use it
  return width;
};

export default useWindowWidth;
