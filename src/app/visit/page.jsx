"use client";

export default function VisitPage() {
  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 uppercase tracking-wider">
            Visit Us
          </h2>
          <div className="h-0.5 w-12 bg-white mx-auto"></div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Details & Storefront Column */}
          <div className="space-y-8">
            {/* Storefront Photo */}
            <div className="relative w-full aspect-[16/10] rounded overflow-hidden border border-gray-900 shadow-lg group bg-gray-950">
              <img
                src="/images/silim-storefront.png"
                alt="Silim Café Storefront"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Address
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Ground Floor Block 9 Lot 18 Greengate Homes Phase 3,<br />
                Malagasang 2-A, Imus, Cavite,<br />
                Philippines
              </p>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Operating Hours
              </h3>
              <ul className="space-y-2 text-sm text-gray-400 font-light">
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
              <p className="text-sm text-gray-400 font-light mb-1">
                Email:{" "}
                <a href="mailto:byrecorporation@gmail.com" className="text-white hover:underline">
                  byrecorporation@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-400 font-light">
                Phone:{" "}
                <a href="tel:09537830491" className="text-white hover:underline">
                  0953 783 0491
                </a>
              </p>

              {/* Social Media Links */}
              <div className="flex items-center space-x-5 mt-5">
                <a
                  href="https://www.instagram.com/silimcafe?fbclid=IwY2xjawS5oRRleHRuA2FlbQIxMABicmlkETFzSGFBOGcxS1U2ZHdTRzVrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqKKAC1xisQopQVo833521-p7jhiTKoQPBq-4hfW4pAwGjeoIblJNP3OGrL9_aem_N-o2BOEEZdSUmCFbN0GgTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
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
                  className="text-gray-400 hover:text-white transition-colors duration-300"
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
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a72.82 72.82 0 1 0 38.66 99.8V0h89.89a101.42 101.42 0 0 0 14.65 56.88 101.9 101.9 0 0 0 46 38.67 102.3 102.3 0 0 0 73.81 4.64Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map Column (Map Only) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              On the Map
            </h3>
            <div className="relative w-full h-[480px] rounded overflow-hidden border border-gray-900 shadow-inner group">
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
