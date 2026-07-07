"use client";

import { useEffect, useRef, useState } from "react";

const DRINK_CATEGORIES = [
  "Iced Espresso-Based Beverages",
  "Hot Espresso-Based Beverages",
  "Cold Brew Based",
  "Iced Blended Coffee",
  "Ice Blended Cream",
  "Iced Non Coffee",
  "Soda-Based Beverages",
  "Hot Non Coffee",
  "Iced Tea",
];

export default function MenuItemCard({ item }) {
  const { name, description, price, image, category } = item;
  const isDrink = DRINK_CATEGORIES.includes(category);
  
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of the card is visible
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before full entry
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-zinc-950/40 hover:bg-zinc-900/50 border border-zinc-900/80 hover:border-zinc-800/80 rounded-xl overflow-hidden transition-all duration-700 flex flex-col h-full shadow-md shadow-black/80 hover:shadow-xl hover:shadow-black/95 transform-gpu ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-[0.98] pointer-events-none"
      }`}
    >
      {/* Image Container with responsive aspect ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950 border-b border-zinc-900/30">
        {/* Ambient vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-50 z-10" />
        
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      {/* Info Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div className="space-y-3">
          {/* Title & Price Header */}
          <div className="flex justify-between items-start gap-4">
            <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-wide group-hover:text-zinc-300 transition-colors duration-300 leading-snug">
              {name}
            </h4>
            <span className="flex-shrink-0 text-[10px] font-extrabold text-white bg-zinc-900/90 border border-zinc-800/80 px-2.5 py-1 rounded tracking-wider shadow-sm flex items-center gap-1.5">
              {isDrink && <span className="text-[9px] font-medium text-zinc-400 lowercase tracking-wider">from</span>}
              <span>₱{price}</span>
            </span>
          </div>
          
          {/* Product Description */}
          <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
