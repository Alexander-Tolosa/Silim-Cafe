"use client";

import { useEffect, useState } from "react";

export default function Template({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay of 100ms for a refined, late pop-up transition effect
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out transform-gpu ${
        mounted
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.99] pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}
