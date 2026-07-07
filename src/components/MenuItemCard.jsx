"use client";

export default function MenuItemCard({ item }) {
  const { name, description, price, image } = item;

  return (
    <div className="group relative bg-black hover:bg-gray-900/50 border border-gray-850 hover:border-gray-700 rounded overflow-hidden transition-all duration-500 flex flex-col h-full shadow-lg shadow-black/60">
      {/* Image Wrapper */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-950">
        {/* Grayscale overlay that fades out on hover */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-550 z-10" />
        
        {/* Menu Item Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 contrast-[1.1] scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />
      </div>

      {/* Card Info */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-base font-bold text-white tracking-wide group-hover:text-gray-300 transition-colors duration-300">
            {name}
          </h3>
          <span className="text-sm font-bold text-white tracking-wider ml-4">
            ₱{price.toFixed(2)}
          </span>
        </div>

        <p className="text-xs text-gray-400 font-light leading-relaxed mb-2 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}
