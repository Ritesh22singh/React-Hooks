// Importing necessary hooks and styles
import { useReducer } from "react";
import "./App.css";

function App() {
  // Initial state for our counter
  const initialState = { count: 0 };

  // Reducer function to handle different actions
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        // Increase count by 1
        return { count: state.count + 1 };
      case "decrease":
        // Decrease count by 1
        return { count: state.count - 1 };
      default:
        // For any unknown action, return the current state unchanged
        return state;
    }
  };

  // useReducer returns the current state and a dispatch function to trigger actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* Display the current count value */}
      <h1>{state.count}</h1>

      {/* Button to dispatch an 'increase' action */}
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase by 1
      </button>

      {/* Button to dispatch a 'decrease' action */}
      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrease by 1
      </button>
    </>
  );
}

export default App;

// The useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
