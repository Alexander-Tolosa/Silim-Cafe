"use client";

import { useState } from "react";
import { menuData } from "@/data/menuData";

export default function SignaturesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + menuData.length) % menuData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % menuData.length);
  };

  const getOffset = (idx) => {
    let diff = idx - activeIndex;
    const len = menuData.length;
    if (diff < -len / 2) diff += len;
    if (diff > len / 2) diff -= len;
    return diff;
  };

  const getItemClass = (idx) => {
    const offset = getOffset(idx);
    if (offset === 0) {
      // Center Item (Active)
      return "scale-100 md:scale-110 z-30 opacity-100 translate-x-0 grayscale-0 pointer-events-auto border-gray-700 shadow-2xl";
    }
    if (offset === -1) {
      // Left Item (Preview)
      return "scale-80 md:scale-90 z-20 opacity-30 -translate-x-24 md:-translate-x-48 grayscale blur-[1px] cursor-pointer pointer-events-auto border-gray-900";
    }
    if (offset === 1) {
      // Right Item (Preview)
      return "scale-80 md:scale-90 z-20 opacity-30 translate-x-24 md:translate-x-48 grayscale blur-[1px] cursor-pointer pointer-events-auto border-gray-900";
    }
    // Hidden Items
    return "scale-75 z-10 opacity-0 pointer-events-none translate-x-0";
  };

  return (
    <section id="signatures" className="py-24 bg-black relative border-t border-gray-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Signatures
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 uppercase tracking-wider">
            Our Signatures
          </h2>
          <div className="h-0.5 w-12 bg-white mx-auto"></div>
        </div>

        {/* 3D Perspective Slider Carousel */}
        <div className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center overflow-hidden mb-8">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-12 z-40 w-10 h-10 rounded-full border border-gray-800 bg-black/55 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Previous signature"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Frame Wrapper */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            {menuData.map((item, idx) => {
              const offset = getOffset(idx);
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (offset === -1) handlePrev();
                    if (offset === 1) handleNext();
                  }}
                  className={`absolute w-44 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden border bg-gray-950 transition-all duration-500 ease-in-out ${getItemClass(idx)}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {offset === 0 && item.tags && item.tags[0] && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest bg-white text-black rounded z-10 shadow-lg">
                      {item.tags[0]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-12 z-40 w-10 h-10 rounded-full border border-gray-800 bg-black/55 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Next signature"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Selected Signature Item Details */}
        <div className="text-center max-w-xl mx-auto min-h-[120px] px-4 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wider mb-2 transition-all duration-300">
            {menuData[activeIndex].name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4 transition-all duration-300">
            {menuData[activeIndex].description}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 transition-all duration-300">
            <span className="text-xs font-bold text-white border border-gray-800 px-3 py-1 rounded">
              ${menuData[activeIndex].price.toFixed(2)}
            </span>
            {menuData[activeIndex].ingredients && (
              <span className="text-[10px] text-gray-500 tracking-wider">
                {menuData[activeIndex].ingredients.join("  •  ")}
              </span>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
