import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer.js";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
