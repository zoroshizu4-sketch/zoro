import React from 'react';
import { TESTIMONIALS } from '../data/cateringData';
import { Star, Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <span>Patron Experiences</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Trusted by Coimbatore&apos;s Esteemed Families & Hosts
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            From premier wedding halls to heritage ancestral homes, hear from those who celebrated their unforgettable moments with Zoro Catering.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#121216] border border-zinc-800 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/30 mb-4" />

              <div className="space-y-4 mb-6">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Event Detail */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="font-cinzel font-bold text-white text-base">
                  {t.name}
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  {t.role} · {t.event}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#d4af37] mt-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
