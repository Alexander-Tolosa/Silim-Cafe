"use client";

export default function DeliveryCTA() {
  return (
    <section id="delivery" className="py-24 bg-black relative border-t border-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: CSS Smartphone Mockup (Foodpanda interface) */}
          <div className="flex justify-center relative">
            {/* Soft backdrop glow to make the phone stand out */}
            <div className="absolute w-72 h-72 bg-white/5 rounded-full filter blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            {/* 3D Smartphone Container (Metallic Steel Rim with Bevel Extrusion) */}
            <div className="w-[286px] h-[556px] bg-zinc-800 border-[3.5px] border-zinc-600 rounded-[46px] shadow-2xl relative flex flex-col p-[6px] select-none border-b-[6px] border-r-[4px] border-b-zinc-700 border-r-zinc-700">
              
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
          <div className="max-w-xl text-center lg:text-left flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3 block">
              Delivery Partner
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 uppercase tracking-widest flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2">
              <span>Order on</span>
              <span className="inline-flex items-center gap-2 text-[#D70F64] font-black lowercase normal-case tracking-tight">
                <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex-shrink-0 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="22" fill="#D70F64"/>
                    
                    {/* Ears */}
                    <circle cx="31" cy="30" r="11" fill="white" />
                    <circle cx="69" cy="30" r="11" fill="white" />
                    <circle cx="31" cy="30" r="6" fill="#D70F64" />
                    <circle cx="69" cy="30" r="6" fill="#D70F64" />
                    
                    {/* Head Body */}
                    <path d="M 50 25 C 28 25, 20 39, 20 59 C 20 77, 32 83, 50 83 C 68 83, 80 77, 80 59 C 80 39, 72 25, 50 25 Z" fill="white" />
                    
                    {/* Eye Patches */}
                    <path d="M 39 46 C 33 46, 30 51, 30 57 C 30 63, 34 67, 39 67 C 44 67, 46 62, 46 57 C 46 51, 43 46, 39 46 Z" fill="#D70F64" />
                    <path d="M 61 46 C 56 46, 54 51, 54 57 C 54 62, 56 67, 61 67 C 66 67, 70 63, 70 57 C 70 51, 67 46, 61 46 Z" fill="#D70F64" />
                    
                    {/* Pupils */}
                    <circle cx="39" cy="56" r="3" fill="white" />
                    <circle cx="61" cy="56" r="3" fill="white" />
                    
                    {/* Nose */}
                    <path d="M 46 64.5 C 46 63, 54 63, 54 64.5 C 54 66, 52 67.5, 50 67.5 C 48 67.5, 46 66, 46 64.5 Z" fill="#D70F64" />
                    
                    {/* Open Smile Crescent */}
                    <path d="M 42.5 70 Q 50 78, 57.5 70 Q 50 72.5, 42.5 70 Z" fill="#D70F64" />
                  </svg>
                </div>
                foodpanda
              </span>
            </h2>
            <div className="h-0.5 w-12 bg-white mb-6 lg:mx-0 mx-auto"></div>
            
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-8">
              In the middle of a major coding block, studying session, or late-night group project? You don't have to break your focus. Find Silim Café on Foodpanda to get your favorite specialty coffee, cold brew, and fresh oven-baked grilled sandwiches delivered straight to your desk.
            </p>

            {/* Delivery details list */}
            <div className="flex flex-col space-y-4 mb-10 text-gray-400 max-w-sm lg:mx-0 mx-auto">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white border border-zinc-800 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-light">Delivered hot & fresh in 20-30 minutes</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white border border-zinc-800 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-xs font-light">Tamper-proof, spill-resistant custom packaging</span>
              </div>
            </div>

            {/* Call to Action Trigger */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.foodpanda.com"
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
