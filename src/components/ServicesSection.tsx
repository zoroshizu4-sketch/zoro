import React, { useState } from 'react';
import { SERVICES, CateringService, BUSINESS_INFO } from '../data/cateringData';
import { Award, Sparkles, Users, UtensilsCrossed, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenOrderModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenOrderModal }) => {
  const [selectedService, setSelectedService] = useState<CateringService>(SERVICES[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Award': return Award;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      default: return UtensilsCrossed;
    }
  };

  const handleBookService = (service: CateringService) => {
    const text = `Hello Zoro Catering! I would like to inquire about booking catering for "${service.title}" in Coimbatore.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-24 bg-[#0c0c0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Grand Occasions</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Bespoke Catering for Every Auspicious Milestone
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            From intimate gatherings to massive 5,000+ guest wedding spectacles across Coimbatore and Tamil Nadu, we provide end-to-end culinary management and unmatched hospitality.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            const isSelected = selectedService.id === service.id;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`text-left p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#18181f] border-[#d4af37] shadow-xl shadow-[#d4af37]/10 -translate-y-1'
                    : 'bg-[#121216] border-zinc-800/80 hover:border-zinc-700 hover:bg-[#15151a]'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors ${
                      isSelected
                        ? 'bg-[#d4af37] text-black'
                        : 'bg-zinc-900 border border-zinc-800 text-[#d4af37]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#d4af37]">{service.guestCapacity}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#d4af37]' : 'text-zinc-500'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Deck */}
        <div className="bg-[#121216] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-1 block">
                  Service Spotlight · {selectedService.guestCapacity}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Inclusions & Highlights */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  What Zoro Catering Delivers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature Menu Highlight for this event */}
              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] block mb-2">
                  Recommended Course Highlights
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300">
                  {selectedService.popularDishes.map((dish, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-200 border border-zinc-700/60 font-medium"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => handleBookService(selectedService)}
                  className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-gold-gradient rounded-md shadow-lg shadow-[#d4af37]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer font-sans"
                >
                  <MessageCircle className="w-4 h-4 fill-black/20" />
                  <span>Book via WhatsApp</span>
                </button>

                <button
                  onClick={onOpenOrderModal}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md transition-all cursor-pointer"
                >
                  Request Custom Quote
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl relative">
                <img
                  src="/src/assets/images/hero_catering_banquet_1794236574468.jpg"
                  alt={`${selectedService.title} by Zoro Catering`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-700/60">
                  <p className="text-xs text-white font-medium">
                    &ldquo;Impeccable dining setup, hot live counters, and courteous staff made our celebration seamless.&rdquo;
                  </p>
                  <p className="text-[10px] text-[#d4af37] mt-1 font-semibold uppercase tracking-wider">
                    — Coimbatore Client Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
