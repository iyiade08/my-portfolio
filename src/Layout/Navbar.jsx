import React, { useEffect } from "react";
import Button from "../common/Button";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    {
      id: "01",
      href: "#about",
      label: "About",
    },
    {
      id: "02",
      href: "#projects",
      label: "Projects",
    },
    {
      id: "03",
      href: "#experience",
      label: "Experience",
    },
    {
      id: "04",
      href: "#testimonial",
      label: "Testimonial",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0  right-0 z-50 transition-all duration-500  ${isScroll ? "glass py-3" : "bg-transparent py-5"}`}
    >
      <nav className="genLayout mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-pryColor"
        >
          Vandal
          <span className="text-pryColor">.</span>
        </a>
        {/* desktop Nav */}
        <div className="hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 ">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="px-4 py-2 text-sm text-mutedForeGroundColor hover:text-white rounded-full hover:bg-surfaceColor"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA button */}
        <div className="hidden md:block">
          <Button onClick={() => isMobileMenuOpen(false)} size="sm">
            contact Me
          </Button>
        </div>
        {/* mobile Menu */}
        <button
          className=" md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="genLayout px-6 py-6 flex flex-col gap-4 ">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-lg text-mutedForeGroundColor hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)} size="sm">
              contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
