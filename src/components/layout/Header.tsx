import { useState, useEffect } from "react";
import { Sun, MoonStar } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 py-4 text-white px-40 flex items-center justify-between transition-all ${isScrolled ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-600" : "bg-gray-950"}`}
    >
      <h1 className="text-2xl font-semibold">&lt; Rejan /&gt;</h1>
      <div className="flex items-center gap-5">
        <nav>
          <ul className="flex space-x-6 text-lg text-gray-300 border-r-2 border-gray-600 pr-6 cursor-pointer">
            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-white transition-colors"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="hover:text-white transition-colors"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </li>
          </ul>
        </nav>
        <div className="hover:bg-gray-800 p-2 rounded-md">
          {theme === "dark" ? (
            <Sun
              className="w-6 h-6 cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          ) : (
            <MoonStar
              className="w-6 h-6 cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          )}
        </div>
        <button className="bg-white rounded-xl text-black cursor-pointer px-4 py-2 hover:bg-gray-200 transition-colors">
          Download CV
        </button>
      </div>
    </header>
  );
};

export default Header;
