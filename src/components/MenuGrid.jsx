"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { menuData } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

// Category order matching the desired menu structure
const CATEGORY_ORDER = [
  "Popular",
  "Iced Espresso-Based Beverages",
  "Hot Espresso-Based Beverages",
  "Cold Brew Based",
  "Iced Blended Coffee",
  "Ice Blended Cream",
  "Iced Non Coffee",
  "Soda-Based Beverages",
  "Hot Non Coffee",
  "All Day Breakfast",
  "Add Ons",
  "Iced Tea",
  "Snacks",
];

// Navbar height (px) + category bar height estimate for scroll offset
const SCROLL_OFFSET = 140;

/**
 * Returns items for a given category.
 * "Popular" is a virtual category showing items flagged with popular: true.
 */
function getItemsForCategory(category) {
  if (category === "Popular") {
    return menuData.filter((item) => item.popular === true);
  }
  return menuData.filter((item) => item.category === category);
}

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const sectionRefs = useRef({});
  const navRef = useRef(null);
  const activeBtnRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const clickedCategoryRef = useRef(null);

  const [showcaseVisible, setShowcaseVisible] = useState(false);
  const showcaseRef = useRef(null);

  // Scroll the category nav bar to keep the active button visible
  const scrollNavToActive = useCallback(() => {
    if (activeBtnRef.current && navRef.current) {
      const nav = navRef.current;
      const btn = activeBtnRef.current;
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();

      // Calculate how far the button is from the center of the nav
      const navCenter = navRect.left + navRect.width / 2;
      const btnCenter = btnRect.left + btnRect.width / 2;
      const offset = btnCenter - navCenter;

      nav.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, []);

  // IntersectionObserver to track which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Negative top margin accounts for the sticky navbar + category bar
      rootMargin: `-${SCROLL_OFFSET}px 0px -40% 0px`,
      threshold: 0,
    };

    const observerCallback = (entries) => {
      // If we clicked a category and are currently smooth-scrolling to it,
      // ignore observer updates to prevent tab flickering
      if (clickedCategoryRef.current) return;

      // Find the topmost intersecting section
      let topEntry = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (
            !topEntry ||
            entry.boundingClientRect.top < topEntry.boundingClientRect.top
          ) {
            topEntry = entry;
          }
        }
      }

      if (topEntry) {
        const categoryId = topEntry.target.getAttribute("data-category");
        if (categoryId) {
          setActiveCategory(categoryId);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    CATEGORY_ORDER.forEach((category) => {
      const el = sectionRefs.current[category];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll the nav bar when active category changes
  useEffect(() => {
    scrollNavToActive();
  }, [activeCategory, scrollNavToActive]);

  // Release scroll-lock if the user scrolls manually using wheel/touch
  useEffect(() => {
    const handleUserScroll = () => {
      if (clickedCategoryRef.current) {
        clickedCategoryRef.current = null;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      }
    };

    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, []);

  // IntersectionObserver for the featured poster showcase
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowcaseVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (showcaseRef.current) observer.observe(showcaseRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle category click → smooth scroll to section
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    clickedCategoryRef.current = category;

    const el = sectionRefs.current[category];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }

    // Release the observer lock after the smooth scroll completes
    const releaseLock = () => {
      clickedCategoryRef.current = null;
      window.removeEventListener("scrollend", releaseLock);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // Listen to native scrollend event (supported in modern mobile & desktop browsers)
    window.addEventListener("scrollend", releaseLock);

    // Fallback timeout in case browser doesn't trigger scrollend
    scrollTimeoutRef.current = setTimeout(releaseLock, 1000);
  };

  return (
    <section className="bg-black relative">
      {/* Featured Series Commercial Poster Showcase */}
      <div 
        ref={showcaseRef}
        className="max-w-7xl mx-auto px-6 pt-12 pb-6 relative z-10 border-b border-zinc-900/50"
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            Featured Series
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 uppercase tracking-wider">
            Special Releases
          </h2>
          <div className="h-0.5 w-8 bg-zinc-800 mx-auto mt-3"></div>
        </div>

        {/* 4-Column Showcase Grid with Staggered Left-to-Center Entry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
          {[
            { title: "All Day Breakfast", img: "/images/menu-posters/breakfast-poster.png", tag: "Warm & Hearty" },
            { title: "Snacks & Sides", img: "/images/menu-posters/snacks-poster.png", tag: "Perfect Pairs" },
            { title: "Milk Tea Series", img: "/images/menu-posters/milktea-poster.png", tag: "Creamy Blends" },
            { title: "Gourmet Pasta", img: "/images/menu-posters/pasta-poster.png", tag: "Chef's Table" }
          ].map((poster, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${index * 150}ms`,
                transitionDuration: '900ms'
              }}
              className={`group relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 shadow-lg shadow-black/80 hover:shadow-xl hover:shadow-white/[0.02] transition-all ease-out transform-gpu ${
                showcaseVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
            >
              {/* Image */}
              <img
                src={poster.img}
                alt={poster.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75 z-10" />

              {/* Tag and Info overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col justify-end">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                  {poster.tag}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  {poster.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto pt-12 pb-10">
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
      </div>

      {/* Sticky Category Navigation Bar */}
      <div className="sticky top-[72px] z-30 bg-black/90 backdrop-blur-md border-b border-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation - Horizontal Scrollable Row */}
          <nav
            ref={navRef}
            className="hidden md:flex gap-2 py-3 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CATEGORY_ORDER.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  ref={isActive ? activeBtnRef : null}
                  onClick={() => handleCategoryClick(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap ${isActive
                    ? "bg-white text-black shadow-md shadow-white/10"
                    : "bg-transparent hover:bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>

          {/* Mobile Navigation - Styled Dropdown Selection Menu */}
          <div className="flex md:hidden items-center justify-between py-3 px-2">
            <div className="relative w-full">
              <select
                value={activeCategory}
                onChange={(e) => handleCategoryClick(e.target.value)}
                className="w-full bg-zinc-950 text-white border border-zinc-800 rounded px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.15em] appearance-none cursor-pointer focus:outline-none focus:border-white transition-all duration-300 pr-10"
              >
                {CATEGORY_ORDER.map((category) => (
                  <option key={category} value={category} className="bg-black text-white">
                    {category}
                  </option>
                ))}
              </select>
              {/* Custom Chevron Down Indicator */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Category Sections */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-20">
        {CATEGORY_ORDER.map((category) => {
          const items = getItemsForCategory(category);
          if (items.length === 0) return null;

          return (
            <section
              key={category}
              ref={(el) => { sectionRefs.current[category] = el; }}
              data-category={category}
              className="pt-16 pb-8"
            >
              {/* Category Section Title */}
              <div className="mb-10">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wider">
                  {category}
                </h3>
                <div className="h-0.5 w-10 bg-gray-700 mt-3"></div>
              </div>

              {/* Items Grid - Render as text list for Add Ons, card grid for other categories */}
              {category === "Add Ons" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start border-b border-zinc-900 pb-4"
                    >
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-zinc-500 font-light leading-relaxed lowercase">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xs sm:text-[13px] font-extrabold text-white pl-4 whitespace-nowrap">
                        ₱{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <div key={item.id}>
                      <MenuItemCard item={item} />
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}
