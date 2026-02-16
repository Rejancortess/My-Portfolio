import { useState } from "react";
import { Sun, MoonStar } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <header className="py-6 text-white px-40 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">&lt; Rejan /&gt;</h1>
      <div className="flex items-center gap-5">
        <nav>
          <ul className="flex space-x-6 text-lg text-gray-300 border-r-2 border-gray-600 pr-6 cursor-pointer">
            <li className="hover:text-white transition-colors">About</li>
            <li className="hover:text-white transition-colors">Projects</li>
            <li className="hover:text-white transition-colors">Contact</li>
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
