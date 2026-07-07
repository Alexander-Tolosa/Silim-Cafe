"use client";

export default function DeliveryCTA() {
  return (
    <section id="delivery" className="py-24 bg-black relative border-t border-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column: CSS Smartphone Mockup (Foodpanda interface) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start items-end relative lg:-translate-x-44 xl:-translate-x-56 lg:-ml-12">
            {/* Soft backdrop glow to make the phone stand out */}
            <div className="absolute w-72 h-72 bg-white/5 rounded-full filter blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Mascot on laptop, height same as cellphone */}
            <div className="h-[556px] flex-shrink-0 hidden md:block mr-6 z-20 select-none pointer-events-none">
              <img
                src="/images/foodpanda-mascot-laptop.png"
                alt="Foodpanda Mascot on Laptop"
                className="h-full w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* 3D Smartphone Container (Metallic Steel Rim with Bevel Extrusion) */}
            <div className="w-[286px] h-[556px] flex-shrink-0 bg-zinc-800 border-[3.5px] border-zinc-600 rounded-[46px] shadow-2xl relative flex flex-col p-[6px] select-none border-b-[6px] border-r-[4px] border-b-zinc-700 border-r-zinc-700 z-10">

              {/* Metallic Hardware Buttons */}
              <div className="absolute top-20 -left-[3.5px] w-[3px] h-6 bg-zinc-500 rounded-l-xs z-30" /> {/* Ring/Silent */}
              <div className="absolute top-32 -left-[3.5px] w-[3px] h-11 bg-zinc-500 rounded-l-xs z-30" /> {/* Vol Up */}
              <div className="absolute top-46 -left-[3.5px] w-[3px] h-11 bg-zinc-500 rounded-l-xs z-30" /> {/* Vol Down */}
              <div className="absolute top-36 -right-[3.5px] w-[3px] h-16 bg-zinc-500 rounded-r-xs z-30" /> {/* Power */}

              {/* Inner Glass Display Screen Wrapper */}
              <div className="w-full h-full bg-black rounded-[38px] relative overflow-hidden flex flex-col border-[5px] border-black">

                {/* Screen Content Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                  <img
                    src="/images/foodpanda-screen.png"
                    alt="Foodpanda Silim Café Store"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Glass Glare Diagonal Highlight Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10" />

                {/* Screen Inner Shadow Border Glow */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none z-10" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-5 max-w-xl text-center lg:text-left flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3 block">
              Delivery Partner
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 uppercase tracking-widest flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2">
              <span>Order on</span>
              <span className="inline-flex items-center gap-2 text-[#D70F64] font-black lowercase normal-case tracking-tight">
                <img
                  src="/images/foodpanda-logo.png"
                  alt="Foodpanda Mascot Logo"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex-shrink-0 object-cover"
                />
                foodpanda
              </span>
            </h2>
            <div className="h-0.5 w-12 bg-white mb-6 lg:mx-0 mx-auto"></div>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-8">
              In the middle of a major coding block, studying session, or late-night group project? You don't have to break your focus. Find Silim Café on Foodpanda to get your favorite specialty coffee, cold brew, and fresh oven-baked grilled sandwiches delivered straight to your desk.
            </p>

            {/* App Store & Play Store Badges */}
            <div className="mb-10 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
              {/* App Store Badge */}
              <a
                href="https://apps.apple.com/ph/app/foodpanda-food-groceries/id758103884"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              >
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto object-contain"
                />
              </a>

              {/* Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.global.foodpanda.android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              >
                <img
                  src="/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>

            {/* Call to Action Trigger */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.foodpanda.ph/restaurant/jjkp/silim-cafe-greengate-homes"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-md shadow-white/5 flex items-center justify-center group"
              >
                Order Now
                <svg className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
