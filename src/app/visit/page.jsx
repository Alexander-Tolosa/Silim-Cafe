"use client";

import Link from "next/link";

export default function VisitPage() {
  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 uppercase tracking-wider">
            Visit Us
          </h2>
          <div className="h-0.5 w-12 bg-white mx-auto"></div>
        </div>

        {/* Large Storefront Banner - Placed Above all info */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl group bg-zinc-950 mb-12 transform-gpu transition-all duration-500">
          <img
            src="/images/silim-storefront.png"
            alt="Silim Café Storefront"
            className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content grid below the storefront picture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details (Address, Hours, Contact) */}
          <div className="lg:col-span-5 space-y-10 bg-zinc-950/30 border border-zinc-900/60 rounded-2xl p-8 sm:p-10 shadow-lg shadow-black/40">
            
            {/* Address */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Address
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                Ground Floor Block 9 Lot 18 Greengate Homes Phase 3,<br />
                Malagasang 2-A, Imus, Cavite,<br />
                Philippines
              </p>
              <a 
                href="https://maps.google.com/?q=Silim%20Caf%C3%A9,%2014.3758739,120.9252299" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white hover:text-zinc-300 transition-colors duration-250 gap-1.5"
              >
                <span>Open in Google Maps</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Operating Hours
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-400 font-light">
                <li className="flex justify-between max-w-xs">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">11AM - 11PM</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Saturday - Sunday</span>
                  <span className="text-white font-semibold">1PM - 11PM</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Contact Info
              </h3>
              <p className="text-sm text-zinc-400 font-light mb-1">
                Email:{" "}
                <a href="mailto:byrecorporation@gmail.com" className="text-white hover:underline font-normal">
                  byrecorporation@gmail.com
                </a>
              </p>
              <p className="text-sm text-zinc-400 font-light">
                Phone:{" "}
                <a href="tel:09537830491" className="text-white hover:underline font-normal">
                  0953 783 0491
                </a>
              </p>

              {/* Social Media Links */}
              <div className="flex items-center space-x-5 mt-5">
                <a
                  href="https://www.instagram.com/silimcafe?fbclid=IwY2xjawS5oRRleHRuA2FlbQIxMABicmlkETFzSGFBOGcxS1U2ZHdTRzVrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqKKAC1xisQopQVo833521-p7jhiTKoQPBq-4hfW4pAwGjeoIblJNP3OGrL9_aem_N-o2BOEEZdSUmCFbN0GgTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Silimcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@silimcafe?fbclid=IwY2xjawS5oTRleHRuA2FlbQIxMABicmlkETFzSGFBOGcxS1U2ZHdTRzVrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp3kYSOJpZglTEkJhtIi-G-ZuG_5wqy7ZUqF5thK_5Jk23GKkmH5adI_g21z_aem_ND792dHtOXW7QZYBLcasjg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a72.82 72.82 0 1 0 38.66 99.8V0h89.89a101.42 101.42 0 0 0 14.65 56.88 101.9 101.9 0 0 0 46 38.67 102.3 102.3 0 0 0 73.81 4.64Z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-7 h-full">
            <div className="relative w-full h-[450px] lg:h-[490px] rounded-2xl overflow-hidden border border-zinc-900 shadow-xl group">
              <iframe
                title="Silim Café Location Map"
                src="https://maps.google.com/maps?q=Silim%20Caf%C3%A9,%2014.3758739,120.9252299&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) brightness(0.7)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
