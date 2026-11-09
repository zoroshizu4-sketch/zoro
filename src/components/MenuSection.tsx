import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem, BUSINESS_INFO } from '../data/cateringData';
import { Flame, MessageCircle, Sparkles, Check } from 'lucide-react';

interface MenuSectionProps {
  onSelectDishForQuote?: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDishForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'breads' | 'gravies' | 'banquet'>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'breads', label: 'Signature Breads (Parotta & Chapatti)' },
    { id: 'gravies', label: 'Royal Gravies (Salna & Kundi)' },
    { id: 'banquet', label: 'Banquets & Biryani' },
  ];

  const handleInquireDish = (dish: MenuItem) => {
    const message = `Hello Zoro Catering! I would like to inquire about including "${dish.name}" in our upcoming event menu in Coimbatore.`;
    const url = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Masterpieces</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Our Signature Royal Menu
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Every dish is an artisanal creation prepared by seasoned tawa masters and masala artisans. Experience the gold standard of Parotta, Chapatti, Salna, and Kundi in Coimbatore.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-2xl mx-auto bg-zinc-900/90 border border-zinc-800 rounded-xl mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-black font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-[#121216] border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container with 4:3 Aspect Ratio and Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={`${item.name} - Zoro Catering Coimbatore`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/20" />

                  {/* Clean Specialty Tag Top Left */}
                  {item.specialtyTag && (
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded text-[11px] font-semibold text-[#fef08a] uppercase tracking-wider font-sans">
                      {item.specialtyTag}
                    </div>
                  )}

                  {/* Spice Indicator Top Right */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-700/80 flex items-center gap-1">
                    <span className="text-[10px] text-zinc-300 uppercase tracking-wider mr-1">Spice</span>
                    {[...Array(item.spiceLevel)].map((_, i) => (
                      <Flame key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Name and Tamil Name */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-[#fef08a] transition-colors">
                      {item.name}
                    </h3>
                    {item.tamilName && (
                      <span className="text-xs font-medium text-[#d4af37] tracking-wider">
                        {item.tamilName}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Ingredients Unboxed Text with Separators */}
                  <div className="mb-5 pt-3 border-t border-zinc-800/80">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                      Artisanal Inclusions
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300">
                      {item.highlightIngredients.map((ing, idx) => (
                        <React.Fragment key={idx}>
                          <span className="text-zinc-200">{ing}</span>
                          {idx < item.highlightIngredients.length - 1 && (
                            <span aria-hidden="true" className="text-zinc-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Pairing Recommendation */}
                  {item.pairsWith && (
                    <div className="text-xs text-zinc-400 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/60 flex items-center gap-2">
                      <span className="text-[#d4af37] font-semibold uppercase tracking-wider text-[10px]">
                        Best Paired:
                      </span>
                      <span className="text-zinc-200 font-medium">{item.pairsWith}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="px-6 pb-6 pt-2 border-t border-zinc-800/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedDish(item)}
                  className="text-xs font-semibold text-[#d4af37] hover:text-white transition-colors cursor-pointer py-1"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleInquireDish(item)}
                  className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-black bg-gold-gradient rounded-md shadow-md hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all flex items-center gap-2 cursor-pointer font-sans"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black/20" />
                  <span>Inquire for Event</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner for Custom Menu Requests */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#18181f] to-zinc-900 border border-[#d4af37]/30 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Have a Specific Wedding or Family Menu in Mind?
            </h4>
            <p className="text-sm text-zinc-300">
              We curate custom multi-course menus tailored to your community traditions, vegetarian preferences, and guest scale across Coimbatore.
            </p>
          </div>
          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              "Hello Zoro Catering! I would like to discuss a customized catering menu for my event in Coimbatore."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-gold-gradient rounded-md shadow-lg shadow-[#d4af37]/20 hover:scale-105 transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer font-sans"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>Customize Menu on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121216] border border-[#d4af37]/50 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/60 rounded-full cursor-pointer"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216] to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  {selectedDish.name}
                </h3>
                {selectedDish.tamilName && (
                  <span className="text-sm font-medium text-[#d4af37]">
                    {selectedDish.tamilName}
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                {selectedDish.description}
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase text-zinc-400 block mb-1">
                    Authentic Preparation Method
                  </span>
                  <div className="flex flex-wrap gap-1 text-xs text-zinc-200">
                    {selectedDish.highlightIngredients.map((ing, i) => (
                      <span key={i} className="bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedDish.pairsWith && (
                  <div>
                    <span className="text-xs font-semibold uppercase text-zinc-400 block mb-1">
                      Chef&apos;s Recommendation
                    </span>
                    <span className="text-xs text-[#fef08a]">
                      Pairs best with: {selectedDish.pairsWith}
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  handleInquireDish(selectedDish);
                  setSelectedDish(null);
                }}
                className="w-full py-3 text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <MessageCircle className="w-4 h-4 fill-black/20" />
                <span>Inquire via WhatsApp (+91 9787001896)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
