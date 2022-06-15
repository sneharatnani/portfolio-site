import { useContext, useState } from "react";
import Navbar from "./components/Navbar.js";
import { ThemeContext } from "./themeContext.js";
import Example from "./components/HamburgerMenu.js";
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      {/* <Navbar /> */}
      <Example />
    </div>
  );
}

export default App;
