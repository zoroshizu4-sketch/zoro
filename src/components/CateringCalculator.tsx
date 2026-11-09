import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cateringData';
import { Calculator, MessageCircle, Check, Users, Sparkles } from 'lucide-react';

export const CateringCalculator: React.FC = () => {
  const [eventType, setEventType] = useState('Wedding Reception');
  const [guestCount, setGuestCount] = useState(250);
  const [tier, setTier] = useState<'classic' | 'royal' | 'maharaja'>('royal');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Live Parotta & Salna Tawa Counter',
  ]);

  const tiers = {
    classic: {
      name: 'Classic Feast',
      basePrice: 350,
      description: 'Golden Parotta, Phulka Chapatti, Rich Salna, Veg/Chicken Starters, Flavoured Rice, Raita & Payasam.',
      included: ['Golden Parotta & Chapatti', 'Slow-Simmered Salna', 'Jeera / Ghee Rice', 'Elaneer Payasam'],
    },
    royal: {
      name: 'Royal Kongu Feast',
      basePrice: 550,
      description: 'Live Parotta Tawa, Chapatti, Salna, Signature Coimbatore Kundi Pepper Roast, Seeraga Samba Biryani & Royal Dessert.',
      included: ['Live Tawa Parotta Counter', 'Coimbatore Kundi Roast', 'Rich Spiced Salna', 'Kongu Mutton Biryani', 'Chilled Payasam'],
    },
    maharaja: {
      name: 'Maharaja Grand Banquet',
      basePrice: 850,
      description: 'Full 24-dish Traditional Banana Leaf Feast or Grand Multi-Station Buffet, Mutton Biryani, Kundi, Parotta, Live Counters & Ice Cream.',
      included: ['24-Item Traditional Elai Saapadu', 'Live Counter Trio (Parotta, Dosa, Chat)', 'Kongu Biryani & Kundi Roast', 'Silver-Service Table Staff'],
    },
  };

  const addonsList = [
    { id: 'Live Parotta & Salna Tawa Counter', name: 'Live Parotta & Salna Tawa Counter', price: 40 },
    { id: 'Special Coimbatore Kundi Live Wok', name: 'Special Coimbatore Kundi Live Wok', price: 65 },
    { id: 'Tender Coconut Elaneer Payasam Bar', name: 'Tender Coconut Elaneer Payasam Bar', price: 35 },
    { id: 'Traditional Welcome Drinks & Pan', name: 'Traditional Welcome Drinks & Pan', price: 25 },
    { id: 'Uniformed Royal Banquet Attendants', name: 'Uniformed Royal Banquet Attendants', price: 30 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTier = tiers[tier];
  const addonsTotalPerPlate = selectedAddons.reduce((acc, id) => {
    const item = addonsList.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const pricePerPlate = currentTier.basePrice + addonsTotalPerPlate;
  const totalEstimatedCost = pricePerPlate * guestCount;

  const handleSendToWhatsApp = () => {
    const message = `Hello Zoro Catering (+91 9787001896)!
I customized an event catering estimate for Coimbatore:
- Event: ${eventType}
- Estimated Guests: ${guestCount}
- Selected Package: ${currentTier.name} (₹${currentTier.basePrice}/plate)
- Add-ons: ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None'}
- Estimated Rate: ₹${pricePerPlate}/plate
- Approximate Budget: ₹${totalEstimatedCost.toLocaleString('en-IN')}

Please share your availability and official brochure.`;

    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="estimate" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Event Planner</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Instant Catering Cost Estimator
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Tailor your guest count, signature menu selections, and live counters to receive an instant estimate for your celebration in Coimbatore.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls Column */}
          <div className="lg:col-span-7 bg-[#121216] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            {/* Step 1: Event Type */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
                1. Select Occasion Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Wedding Reception', 'Birthday Party', 'Family Function', 'Corporate Gala'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEventType(type)}
                    className={`px-3 py-2.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      eventType === type
                        ? 'bg-zinc-800 border-[#d4af37] text-[#fef08a] font-semibold'
                        : 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  2. Number of Guests
                </label>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[#fef08a] font-semibold text-sm tabular-nums">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{guestCount} Guests</span>
                </div>
              </div>

              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />

              <div className="flex justify-between text-[11px] text-zinc-500 mt-2 font-mono tabular-nums">
                <span>50 Guests</span>
                <span>500 Guests</span>
                <span>1,500 Guests</span>
                <span>3,000+ Guests</span>
              </div>
            </div>

            {/* Step 3: Package Tier */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
                3. Choose Catering Package Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['classic', 'royal', 'maharaja'] as const).map((tKey) => {
                  const t = tiers[tKey];
                  const active = tier === tKey;
                  return (
                    <button
                      key={tKey}
                      onClick={() => setTier(tKey)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        active
                          ? 'bg-[#1a1a24] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                          : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-cinzel text-sm font-bold text-white">
                            {t.name}
                          </span>
                          {tKey === 'royal' && (
                            <span className="text-[10px] text-[#fef08a] font-semibold tracking-wide">
                              ★ POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-zinc-400 line-clamp-2 mb-3">
                          {t.description}
                        </p>
                      </div>
                      <div className="text-sm font-bold text-[#d4af37] tabular-nums pt-2 border-t border-zinc-800">
                        ₹{t.basePrice} <span className="text-[10px] font-normal text-zinc-400">/ plate</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
                4. Live Counters & Royal Add-ons (Optional)
              </label>
              <div className="space-y-2">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-zinc-800/80 border-[#d4af37]/60 text-white'
                          : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? 'bg-[#d4af37] border-[#d4af37] text-black'
                              : 'border-zinc-600 bg-zinc-950'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#fef08a] tabular-nums">
                        +₹{addon.price}/plate
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Card (Sticky) */}
          <div className="lg:col-span-5 bg-[#121216] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Estimate Summary
              </span>
              <span className="text-[11px] text-zinc-400 font-medium">Coimbatore Events</span>
            </div>

            <div className="py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Occasion:</span>
                <span className="text-white font-medium">{eventType}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Total Guests:</span>
                <span className="text-white font-semibold tabular-nums">{guestCount} persons</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Catering Tier:</span>
                <span className="text-[#fef08a] font-medium">{currentTier.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Base Plate Rate:</span>
                <span className="text-zinc-200 font-semibold tabular-nums">₹{currentTier.basePrice}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Live Counters ({selectedAddons.length}):</span>
                  <span className="text-zinc-200 font-semibold tabular-nums">+₹{addonsTotalPerPlate}</span>
                </div>
              )}

              {/* Inclusions summary */}
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                  Package Inclusions:
                </span>
                {currentTier.included.map((inc, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-zinc-300">
                    <span className="text-[#d4af37]">✓</span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Highlight */}
            <div className="pt-4 pb-6 border-t border-zinc-800 space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-zinc-300">Rate per Plate:</span>
                <span className="text-xl font-bold text-white tabular-nums">
                  ₹{pricePerPlate}{' '}
                  <span className="text-xs text-zinc-400 font-normal">/ person</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Approximate Total Budget:
                </span>
                <div className="text-right">
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#fef08a] tabular-nums">
                    ₹{totalEstimatedCost.toLocaleString('en-IN')}
                  </span>
                  <div className="text-[10px] text-zinc-400 font-normal">
                    *Taxes & travel to Kongu venues as applicable
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-4 text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-xl shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer font-sans"
            >
              <MessageCircle className="w-5 h-5 fill-black/20" />
              <span>Send Estimate to WhatsApp (+91 9787001896)</span>
            </button>

            <p className="text-[11px] text-zinc-400 text-center mt-3">
              Direct connection with Zoro Catering management. Immediate response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
