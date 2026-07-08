"use client";

import { useState, useEffect } from "react";

export default function CustomerLove() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      stars: 5,
      text: "Highly recommended coffee shop. Great blends and staff. Cozy and warm atmosphere.",
      initials: "JML",
      name: "John Mark Lacanlale",
    },
    {
      id: 2,
      stars: 5,
      text: "Love the ambiance and the staff are friendly and approachable. You can discuss your preference of your coffee. They accept gcash!",
      initials: "ST",
      name: "Stan",
    },
    {
      id: 3,
      stars: 5,
      text: "Good service and friendly staff! Badly wanna drink all-day their Ice-blended Matcha also I would recommend their coffee! Just Hoping for more snacks & kid-friendly foods! Praying for your business succession! 🙏🙌",
      initials: "RR",
      name: "Rex Ramos",
    },
    {
      id: 4,
      stars: 5,
      text: "I tried this place since its been a hell of busy weeks for me, i only tried the matcha frappe, it was great. The atmosphere is quiet when i visited there, talagang hinintay kong magtakipsilim after i went home and that was a fantastic sight.",
      initials: "AG",
      name: "Ashley Gomez",
    },
    {
      id: 5,
      stars: 5,
      text: "I like the Matcha Latte not too tangy and just the right amount of sweetness. The service was fast, friendly and professional. We highly recommend you try it!",
      initials: "RV",
      name: "Ritchelle Villagracia",
    },
    {
      id: 6,
      stars: 5,
      text: "Nice place. Nasa dulo ng street and medyo tago so it's less crowded. Food and service is nice. Simple atmosphere.",
      initials: "LR",
      name: "Lilac Ruiz",
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
      return "scale-85 md:scale-90 z-20 opacity-20 -translate-x-36 md:-translate-x-96 grayscale blur-[1px] cursor-pointer pointer-events-auto border-gray-900";
    }
    if (offset === 1) {
      // Right Card (Preview)
      return "scale-85 md:scale-90 z-20 opacity-20 translate-x-36 md:translate-x-96 grayscale blur-[1px] cursor-pointer pointer-events-auto border-gray-900";
    }
    // Hidden Cards
    return "scale-75 z-10 opacity-0 pointer-events-none translate-x-0";
  };

  const marqueeText = "Silim Cafe    •    4.8/5 star average rating    •    Designed for focus    •    Locally sourced beans    •    Coffee Deals    •    50+ Happy Customers    •    ";

  return (
    <section className="bg-concrete-wall py-20 relative overflow-hidden border-t border-gray-950">

      {/* Infinite Scrolling Ticker Banner */}
      <div className="w-full bg-zinc-900 border-t border-b border-zinc-800 py-5 overflow-hidden flex whitespace-nowrap mb-16 relative z-10">
        <div className="flex animate-marquee text-xs sm:text-sm tracking-[0.2em] font-semibold text-gray-300 uppercase select-none whitespace-pre">
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
        <div className="relative w-full h-[380px] md:h-[450px] flex items-center justify-center overflow-hidden mb-8">

          {/* Carousel Frame Wrapper */}
          <div className="relative w-full max-w-xl h-full flex items-center justify-center">
            {reviews.map((review, idx) => {
              const offset = getOffset(idx);
              return (
                <div
                  key={review.id}
                  onClick={() => {
                    if (offset === -1) handlePrev();
                    if (offset === 1) handleNext();
                  }}
                  className={`absolute w-[310px] md:w-[420px] h-[340px] md:h-[320px] bg-white text-black p-6 md:p-8 rounded-2xl flex flex-col justify-between transition-all duration-500 ease-in-out border ${getItemClass(idx)}`}
                >
                  <div>
                    {/* 5 Monochromatic Rating Stars */}
                    <div className="flex space-x-0.5 text-sm text-gray-900">
                      {Array.from({ length: review.stars }).map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal mt-3 md:mt-4">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Profile Details footer */}
                  <div className="flex items-center mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-100">
                    <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs tracking-wide uppercase flex-shrink-0">
                      {review.initials}
                    </div>
                    <span className="text-sm font-bold text-black ml-3.5">
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
