import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "./themeContext.js";
import ScrollToTop from "./components/ScrollToTop.js";
import "./assets/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>
);
