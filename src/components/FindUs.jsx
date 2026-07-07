"use client";

export default function FindUs() {
  return (
    <section id="visit" className="py-20 bg-black relative border-t border-gray-950 overflow-hidden">
      {/* Subtle red ambient glow centering around the marker location */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 uppercase tracking-wider">
            Find Us
          </h2>
          <div className="h-0.5 w-12 bg-white mx-auto"></div>
        </div>

        {/* Map Container - Taller portrait aspect ratio to fit the vertical map of the Philippines */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl aspect-[3/4] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
            {/* Dark Mode Map Image with seamless black background blending */}
            <img
              src="/images/philippines-map-silim-dark.png"
              alt="Silim Café Location Map"
              className="w-full h-full object-contain scale-[1.15] transition-transform duration-700 ease-out hover:scale-[1.2] filter contrast-[1.05]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
