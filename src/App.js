import { useContext } from "react";
import { ThemeContext } from "./themeContext.js";
import Navbar from "./components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} font-poppins font-normal tracking-wide`}>
      <div className="dark:bg-gray-900 text-gray-700 dark:text-white">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
