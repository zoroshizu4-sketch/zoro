import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cateringData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#121216] border border-[#d4af37]/50 shadow-2xl animate-in slide-in-from-right duration-300">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#fef08a] uppercase tracking-wider">
              Zoro Catering Hotline
            </span>
            <span className="text-xs text-zinc-300 font-medium">
              Chat on WhatsApp · +91 9787001896
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-500 hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
          "Hello Zoro Catering! I would like to inquire about booking catering services in Coimbatore."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Contact Zoro Catering on WhatsApp (+91 9787001896)"
      >
        {/* Subtle Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow-md" />

        {/* Status indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#fef08a] border-2 border-[#09090b]" />
      </a>
    </div>
  );
};
