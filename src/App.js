import { useContext } from "react";
import Navbar from "./components/Navbar.js";
import { ThemeContext } from "./themeContext.js";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Navbar />
    </div>
  );
}

export default App;
