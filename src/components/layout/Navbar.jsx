import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./navbar/Logo";
import NavLinks from "./navbar/NavLinks";
import NavButton from "./navbar/NavButton";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <NavButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <MobileMenu closeMenu={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;