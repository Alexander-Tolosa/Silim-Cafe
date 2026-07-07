"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
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
              <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-900 flex-shrink-0">
                <img src="/images/logo.png" alt="Silim Café Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm sm:text-base font-bold text-white tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">
                Silim Café
              </span>
            </a>
            <p className="text-[11px] sm:text-xs text-gray-400 font-light tracking-wide italic pl-1.5">
              Kape at kwento sa bawat takipsilim.
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {["menu", "delivery", "visit"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-widest transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a href="https://www.instagram.com/silimcafe?fbclid=IwY2xjawS5oRRleHRuA2FlbQIxMABicmlkETFzSGFBOGcxS1U2ZHdTRzVrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqKKAC1xisQopQVo833521-p7jhiTKoQPBq-4hfW4pAwGjeoIblJNP3OGrL9_aem_N-o2BOEEZdSUmCFbN0GgTA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.facebook.com/Silimcafe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@silimcafe?fbclid=IwY2xjawS5oTRleHRuA2FlbQIxMABicmlkETFzSGFBOGcxS1U2ZHdTRzVrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp3kYSOJpZglTEkJhtIi-G-ZuG_5wqy7ZUqF5thK_5Jk23GKkmH5adI_g21z_aem_ND792dHtOXW7QZYBLcasjg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a72.82 72.82 0 1 0 38.66 99.8V0h89.89a101.42 101.42 0 0 0 14.65 56.88 101.9 101.9 0 0 0 46 38.67 102.3 102.3 0 0 0 73.81 4.64Z" />
              </svg>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-900/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silim Café. All rights reserved.</p>
          <p className="font-light">Sip of Twilight, sanctuary of code.</p>
        </div>
      </div>
    </footer>
  );
}
