import { useContext } from "react";
import { ThemeContext } from "./themeContext.js";
import Navbar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
