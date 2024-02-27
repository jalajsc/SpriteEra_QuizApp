import React from "react";
import Logo from "../img/logo.png";

function Header() {
  return (
    <header className="flex top-0 z-10">
      <nav className="w-full h-18 bg-white shadow-sm shadow-black flex flex-row items-center justify-center space-between">
        <img className="h-20 w-36 rounded-sm" src={Logo} alt="image" />
      </nav>
    </header>
  );
}

export default Header;
