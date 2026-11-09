import React from 'react';
import { BUSINESS_INFO } from '../data/cateringData';
import { MessageCircle, Utensils, Calendar, Phone, MapPin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background Image with Cinematic Luxury Dark Overlay Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_catering_banquet_1794236574468.jpg"
          alt="Zoro Catering Royal Banquet Feast in Coimbatore"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured Luxury Obsidian & Gold Tint Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#09090b]/40 to-[#09090b]/90" />
      </div>

      {/* Decorative Golden Hairline Frame */}
      <div className="absolute inset-x-6 top-24 bottom-8 border border-[#d4af37]/15 pointer-events-none rounded-2xl hidden md:block" />

      {/* Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center my-auto">
        {/* Location & Authenticity Trust Badge (Unboxed clean metadata) */}
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#d4af37] tracking-[0.2em] uppercase mb-4 py-1 border-b border-[#d4af37]/30">
          <MapPin className="w-3.5 h-3.5" />
          <span>Coimbatore, Tamil Nadu</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Royal Kongu Catering</span>
        </div>

        {/* Royal Crest Insignia Accent */}
        <div className="mb-4">
          <div className="w-14 h-14 mx-auto rounded-full p-2.5 bg-[#0e0e12]/90 border border-[#d4af37]/50 shadow-lg shadow-[#d4af37]/20 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <polygon points="50,6 80,20 94,50 80,80 50,94 20,80 6,50 20,20" stroke="#d4af37" strokeWidth="2.5" />
              <path d="M35 36 H65 L37 64 H65" stroke="#fef08a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Brand Name Supertitle */}
        <p className="font-cinzel text-sm sm:text-base tracking-[0.35em] text-zinc-300 uppercase mb-2 font-semibold">
          ZORO CATERING
        </p>

        {/* Primary Headline */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl [text-wrap:balance]">
          Taste the Luxury,{' '}
          <span className="text-gold-gradient block sm:inline">
            Experience the Tradition
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Coimbatore&apos;s premier bespoke catering company. Renowned for authentic golden flaky Parottas, slow-simmered rich Salnas, traditional Kongu Kundi, and opulent wedding banquets.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Working Order via WhatsApp Button */}
          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              "Hello Zoro Catering! I would like to order / inquire about catering services for an upcoming event in Coimbatore."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-black bg-gold-gradient rounded-md shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer font-sans"
          >
            <MessageCircle className="w-5 h-5 fill-black/20" />
            <span>Order via WhatsApp</span>
          </a>

          {/* Explore Menu Button */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wider text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-[#d4af37]/60 rounded-md backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-sans"
          >
            <Utensils className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Menu</span>
          </a>

          {/* Quick Quote Calculator Button */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium tracking-wide text-zinc-300 hover:text-[#d4af37] bg-transparent hover:bg-zinc-900/40 border border-transparent hover:border-zinc-700 rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>Plan Event</span>
          </button>
        </div>

        {/* Quick Phone Callout */}
        <div className="mt-7 flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
          <span>Direct Catering Hotline:</span>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="font-semibold text-[#fef08a] hover:underline tracking-wide tabular-nums"
          >
            {BUSINESS_INFO.displayPhone}
          </a>
        </div>
      </div>

      {/* Trust & Proof Strip (Adjacent Full-Width Row) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-[#121216]/90 border border-zinc-800/90 rounded-xl backdrop-blur-md shadow-2xl">
          <div className="flex flex-col items-center text-center p-2">
            <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#d4af37] tabular-nums">
              {BUSINESS_INFO.eventsCompleted}
            </span>
            <span className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
              Grand Events Catered
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-2 border-l border-zinc-800">
            <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#d4af37] tabular-nums">
              5,000+
            </span>
            <span className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
              Guest Capacity per Event
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-2 border-t md:border-t-0 md:border-l border-zinc-800">
            <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#d4af37]">
              100% Authentic
            </span>
            <span className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
              Kongu & Tamil Heritage
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-2 border-t md:border-t-0 border-l border-zinc-800">
            <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#d4af37] tabular-nums">
              4.9 / 5.0
            </span>
            <span className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
              Customer Satisfaction
            </span>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#about"
            className="text-zinc-500 hover:text-[#d4af37] transition-colors p-1 animate-bounce"
            aria-label="Scroll to About Section"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
