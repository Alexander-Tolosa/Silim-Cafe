"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-900 py-4 shadow-lg shadow-black/40"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Link to Home */}
        <a 
          href={pathname === "/" ? "#" : "/"}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-800 flex-shrink-0">
            <img src="/images/logo.png" alt="Silim Café Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold text-white tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">
            Silim Café
          </span>
        </a>

        {/* Desktop Navigation Link Routes */}
        <div className="hidden md:flex items-center space-x-8">
          {["menu", "delivery", "visit"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-widest relative py-1 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link
            href="/menu"
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest bg-white hover:bg-gray-200 text-black rounded transition-all duration-300 shadow-md shadow-white/5"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-gray-400 transition-colors duration-300 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-gray-900 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {["menu", "delivery", "visit"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-widest py-2 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 text-xs font-bold uppercase tracking-widest bg-white hover:bg-gray-200 text-black rounded transition-all duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
