"use client";

import { useState, useEffect } from "react";

export default function CustomerLove() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      stars: 5,
      text: "Every sip of the Dusk Spanish Latte feels like a warm hug. This coffee shop has made my late-night study blocks much brighter.",
      initials: "SK",
      name: "Samantha K.",
    },
    {
      id: 2,
      stars: 5,
      text: "An absolute sanctuary. Incredibly fast fiber connection, silent desks, and top-tier cold brew served past midnight. A developer's dream.",
      initials: "JR",
      name: "John R.",
    },
    {
      id: 3,
      stars: 5,
      text: "Minimalist, moody, and highly focused. The flat white is dialed in perfectly, and the truffle honey grilled cheese is legendary.",
      initials: "AM",
      name: "ABC M.",
    },
    {
      id: 4,
      stars: 5,
      text: "Silim Café has nailed the workspace aesthetic. It is quiet, premium, and welcoming. Highly recommended for students on a grind.",
      initials: "IT",
      name: "Ina Tiongson",
    },
    {
      id: 5,
      stars: 5,
      text: "The ceremonial matcha latte is outstanding. It is so hard to find a quiet coffee shop open late with consistent quality like this.",
      initials: "DL",
      name: "Daniel L.",
    },
    {
      id: 6,
      stars: 5,
      text: "The cinnamon scroll paired with a hot flat white is my go-to combo. Absolute perfection for early mornings or late-night revision.",
      initials: "LT",
      name: "Liam T.",
    },
    {
      id: 7,
      stars: 5,
      text: "Extremely responsive staff and a silent workspace. I can finally focus on writing my research paper without distractions.",
      initials: "BV",
      name: "Beatrice V.",
    },
    {
      id: 8,
      stars: 5,
      text: "Top-tier specialty coffee. The dark, moody atmosphere sets the perfect tone for long coding sessions and product design blocks.",
      initials: "MC",
      name: "Marcus C.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  // Auto-slide effect cycling reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const getOffset = (idx) => {
    let diff = idx - activeIndex;
    const len = reviews.length;
    if (diff < -len / 2) diff += len;
    if (diff > len / 2) diff -= len;
    return diff;
  };

  const getItemClass = (idx) => {
    const offset = getOffset(idx);
    if (offset === 0) {
      // Center Card (Active)
      return "scale-100 md:scale-110 z-30 opacity-100 translate-x-0 grayscale-0 pointer-events-auto border-gray-700 shadow-2xl";
    }
    if (offset === -1) {
      // Left Card (Preview)
      return "scale-85 md:scale-90 z-20 opacity-30 -translate-x-32 md:-translate-x-72 grayscale blur-[1px] cursor-pointer pointer-events-auto border-gray-900";
    }
    if (offset === 1) {
      // Right Card (Preview)
      return "scale-85 md:scale-90 z-20 opacity-30 translate-x-32 md:translate-x-72 grayscale blur-[1px] cursor-pointer pointer-events-auto border-gray-900";
    }
    // Hidden Cards
    return "scale-75 z-10 opacity-0 pointer-events-none translate-x-0";
  };

  const marqueeText = "10K+ cups brewed • 4.9/5 star average rating • Designed for focus • Locally sourced beans • Fast fiber study spots • 2000+ happy coders • ";

  return (
    <section className="bg-concrete-wall py-20 relative overflow-hidden border-t border-gray-950">

      {/* Infinite Scrolling Ticker Banner */}
      <div className="w-full bg-zinc-900 border-t border-b border-zinc-800 py-5 overflow-hidden flex whitespace-nowrap mb-16 relative z-10">
        <div className="flex animate-marquee text-xs sm:text-sm tracking-[0.2em] font-semibold text-gray-300 uppercase select-none">
          <span>{marqueeText.repeat(8)}</span>
          <span>{marqueeText.repeat(8)}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 uppercase tracking-widest">
            CUSTOMER LOVE
          </h2>
          <div className="h-0.5 w-12 bg-white mx-auto"></div>
        </div>

        {/* 3D Perspective Slider Carousel */}
        <div className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden mb-8">

          {/* Carousel Frame Wrapper */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            {reviews.map((review, idx) => {
              const offset = getOffset(idx);
              return (
                <div
                  key={review.id}
                  onClick={() => {
                    if (offset === -1) handlePrev();
                    if (offset === 1) handleNext();
                  }}
                  className={`absolute w-[280px] md:w-[320px] h-64 bg-white text-black p-6 rounded flex flex-col justify-between transition-all duration-500 ease-in-out border ${getItemClass(idx)}`}
                >
                  <div>
                    {/* 5 Monochromatic Rating Stars */}
                    <div className="flex space-x-0.5 text-xs text-gray-900">
                      {Array.from({ length: review.stars }).map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-xs text-gray-700 leading-relaxed font-light mt-4">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Profile Details footer */}
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px] tracking-wide uppercase flex-shrink-0">
                      {review.initials}
                    </div>
                    <span className="text-xs font-bold text-black ml-3">
                      {review.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
