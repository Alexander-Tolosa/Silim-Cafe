"use client";

import { useState } from "react";
import { menuData } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories and add "All" at the beginning
  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  // Filter items based on selected category
  const filteredItems = activeCategory === "All"
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-12 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Curation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 uppercase tracking-wider">
            Menu Selection
          </h2>
          <div className="h-0.5 w-12 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
            Our curated daily brews and oven preparations, designed to keep you focused and refreshed.
          </p>
        </div>

        {/* Categories Tab Selector (Sticky) */}
        <div className="sticky top-[72px] z-30 -mx-6 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-gray-900/50 mb-16">
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-black hover:bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="animate-fade-in-up duration-500"
            >
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
