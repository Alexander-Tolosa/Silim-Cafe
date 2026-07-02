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
          
          {/* Details */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Address
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                123 Twilight Boulevard,<br />
                Dusk District, Manila,<br />
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
                  <span className="text-white font-semibold">4:00 PM - 12:00 AM</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Saturday - Sunday</span>
                  <span className="text-white font-semibold">3:00 PM - 1:00 AM</span>
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
                <a href="mailto:hello@silimcafe.com" className="text-white hover:underline">
                  hello@silimcafe.com
                </a>
              </p>
              <p className="text-sm text-gray-400 font-light">
                Phone:{" "}
                <a href="tel:+639123456789" className="text-white hover:underline">
                  +63 912 345 6789
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              On the Map
            </h3>
            <div className="relative w-full h-64 rounded overflow-hidden border border-gray-900 shadow-inner group">
              <iframe
                title="Silim Café Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8402482329864!2d120.9785501758552!3d14.597652777484437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca172b0e6dfb%3A0xe543e3ff70fb1f56!2sIntramuros%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
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
