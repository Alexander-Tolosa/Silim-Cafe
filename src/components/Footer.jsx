"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 border-t border-gray-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-900 flex-shrink-0">
              <img src="/images/logo.png" alt="Silim Café Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-bold text-white tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">
              Silim Café
            </span>
          </Link>

          {/* Quick Route Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {["menu", "delivery", "visit"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="text-[10px] font-semibold text-gray-400 hover:text-white uppercase tracking-widest transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-900/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-600">
          <p>&copy; {new Date().getFullYear()} Silim Café. All rights reserved.</p>
          <p className="font-light">Sip of Twilight, sanctuary of code.</p>
        </div>
      </div>
    </footer>
  );
}
