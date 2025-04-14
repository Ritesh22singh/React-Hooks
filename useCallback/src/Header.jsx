import React from "react";

const Header = () => {
  return (
    <div>
      <h1>This is callBAck Hook...</h1>
    </div>
  );
};

export default Header;

// useCallback is same as useMemo, the main diffrence is use useMemo return a memoized value and useCallback return  a memoized function.
