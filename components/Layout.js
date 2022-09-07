import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer.js";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class">
      <div className={` font-poppins font-normal tracking-wide`}>
        <div className="dark:bg-gray-900 text-gray-700 dark:text-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
