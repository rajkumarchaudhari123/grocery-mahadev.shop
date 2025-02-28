"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  

  return (
    <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <Link href="/">
          <img src="/vegetable logo.jpg" alt="Vegetable Logo" className="h-12" />
        </Link>

        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex flex-col lg:flex-row items-center lg:space-x-8 py-4 lg:py-0 transition-all duration-300 z-50 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/aboutus" },
            { name: "Contacts", path: "/contacts" },
            { name: "Feedback", path: "/feedback" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="block px-6 py-3 text-black lg:text-white hover:text-slate-900 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Shop Now Dropdown */}
          <li className="relative dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
              className="block px-6 py-3 text-black lg:text-white hover:text-slate-900 transition-all duration-300 focus:outline-none"
            >
              Shop Now ▼
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg overflow-hidden z-50">
                {[{ name: "Vegetables", path: "/vegetable" }, { name: "Fruits", path: "/fruits" }].map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
