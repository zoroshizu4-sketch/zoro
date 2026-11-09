import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/cateringData';
import { Sparkles, MessageCircle, X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'banquets' | 'dishes' | 'weddings'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'banquets', label: 'Grand Banquets' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'weddings', label: 'Weddings' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0c0c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Splendour</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Our Catering & Event Gallery
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            A glimpse into the feasts we orchestrate across Coimbatore. Royal banquet halls, live tawa counters, and exquisite South Indian culinary plating.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#d4af37]/60 cursor-pointer shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-[#d4af37] group-hover:scale-110 transition-all">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title and Caption at Bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#d4af37] mb-1 block">
                  {item.category.toUpperCase()}
                </span>
                <h4 className="font-cinzel text-base font-bold text-white group-hover:text-[#fef08a] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121216] border border-[#d4af37]/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#d4af37] cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#121216]">
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {lightboxItem.caption}
                </p>
              </div>

              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  `Hello Zoro Catering! I saw your gallery photograph "${lightboxItem.title}" and would love to arrange a similar catering setup for my event in Coimbatore.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-lg shadow-md hover:scale-105 transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer font-sans"
              >
                <MessageCircle className="w-4 h-4 fill-black/20" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
