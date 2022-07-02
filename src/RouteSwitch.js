import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";

export default function RouteSwitch() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
    </Routes>
  );
}
