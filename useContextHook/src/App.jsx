import { ThemeProvider } from "./context/ThemeContext";
import ThemedChange from "./ThemedChange";

function App() {
  return (
    <ThemeProvider>
      <ThemedChange />
    </ThemeProvider>
  );
}

export default App;
