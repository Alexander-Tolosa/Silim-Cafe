"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image with grayscale filter and moody overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100 grayscale brightness-[0.25]"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
        }}
      />
      
      {/* Vignette mask to darken edges */}
      <div className="absolute inset-0 bg-radial-vignette opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-gray-900 border border-gray-800 mb-6 animate-fade-in-down">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300">
            Premium Study Spot & Workspace
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 animate-fade-in-up uppercase">
          Silim Café
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto mb-8 animate-fade-in-up delay-200">
          A minimalist sanctuary engineered for focus. Premium specialty coffee, silent study spaces, and high-speed fiber for students and late-night builders.
        </p>

        {/* Minimalist Facebook and Instagram icons */}
        <div className="flex justify-center space-x-6 mb-10 animate-fade-in-up delay-200">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
          <Link
            href="/menu"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-200 text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 text-center"
          >
            View Menu
          </Link>
          
          <Link
            href="/delivery"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-gray-900 text-white border border-gray-700 hover:border-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 text-center"
          >
            Order Delivery
          </Link>
        </div>
      </div>
    </section>
  );
}
