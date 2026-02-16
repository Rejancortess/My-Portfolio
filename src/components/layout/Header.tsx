import React from "react";

function Header() {
  return (
    <header className="py-6 text-white px-40 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">&lt; Rejan /&gt;</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
