import React from 'react';
import { BUSINESS_INFO } from '../data/cateringData';
import { Award, Flame, HeartHandshake, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: "Stone-Ground Kongu Masalas",
      description: "We roast whole spices daily—fennel, kalpasi, star anise, and Tellicherry pepper—using slow wood-fired roasting and stone grinding for uncompromised aroma.",
    },
    {
      icon: Award,
      title: "Master Tawa Craftsmen",
      description: "Our veteran parotta and bread masters bring decades of theatrical culinary expertise, spinning and tossing each layered parotta fresh before your guests.",
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Purity & Hygiene",
      description: "Strict five-star hygiene protocols, fresh daily farm ingredients, cold-pressed oils, and 100% pure desi ghee with zero artificial food additives or flavors.",
    },
    {
      icon: HeartHandshake,
      title: "Regal Banquet Hospitality",
      description: "From traditional 24-dish Banana Leaf Muhurtham seating to modern opulent buffet layouts, our uniformed staff delivers warm South Indian hospitality.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0c0c0f] relative overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <span>Our Heritage</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Coimbatore, Tamil Nadu</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Crafting Unforgettable Feasts for Coimbatore&apos;s Grandest Moments
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Born in the heart of Coimbatore, <strong className="text-[#fef08a] font-medium">ZORO CATERING</strong> was founded on a singular passion: to elevate South Indian and Kongu Nadu culinary traditions into a luxury dining experience.
          </p>
        </div>

        {/* 2-Column Split: Story & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <p>
                In Coimbatore and the Kongu region, food is not merely served—it is an expression of deep honor, family pride, and heartfelt celebration. Whether it is an intimate family gathering or a 3,000-guest royal wedding reception, every dish we prepare reflects meticulous attention to taste, aroma, and visual elegance.
              </p>
              <p>
                We specialize in perfecting the iconic favourites of our land: flaky, golden, layered <strong className="text-white font-medium">Parottas</strong> prepared live on searing tawas; piping hot, fragrant <strong className="text-white font-medium">Salnas</strong> simmered with secret coastal and Kongu spices; delicate whole-wheat <strong className="text-white font-medium">Chapattis</strong> brushed with ghee; and our signature <strong className="text-white font-medium">Coimbatore Kundi</strong> roast with caramelized country shallots.
              </p>
            </div>

            {/* Service Region Highlights */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
                    Serving Coimbatore & Beyond
                  </h4>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Active catering operations in RS Puram, Race Course, Peelamedu, Gandhipuram, Saravanampatti, Saibaba Colony, Pollachi, Tiruppur, Erode, and all luxury convention centers across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% On-Site Live Cooking Available",
                "Custom Menu Tasting Available Upon Request",
                "Pure Desi Cow Ghee & Cold-Pressed Oils",
                "Complete Banquet Crockery & Staffing",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src="/src/assets/images/menu_coimbatore_kundi_1794236577517.jpg"
                alt="Zoro Catering signature Kundi culinary preparation"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#09090b]/90 border border-[#d4af37]/30 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-1 font-sans">
                  The Zoro Distinction
                </p>
                <p className="text-sm font-cinzel font-semibold text-white">
                  &ldquo;Every plate tells the story of our heritage. We never compromise on spice quality, cooking time, or generous hospitality.&rdquo;
                </p>
                <div className="mt-3 text-xs text-zinc-400 font-medium">
                  — Master Culinary Director, Zoro Catering
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121216] border border-zinc-800/80 hover:border-[#d4af37]/40 hover:bg-[#15151b] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-700/80 group-hover:border-[#d4af37]/50 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 font-cinzel">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
