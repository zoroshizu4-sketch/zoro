import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cateringData';
import { X, MessageCircle, Phone, Check, Calendar, Users, Utensils } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDish?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedDish,
}) => {
  const [eventType, setEventType] = useState('Wedding Reception');
  const [guestCount, setGuestCount] = useState('200');
  const [eventDate, setEventDate] = useState('');
  const [selectedDishes, setSelectedDishes] = useState<string[]>(
    preselectedDish ? [preselectedDish] : ['Golden Flaky Parotta', 'Authentic Slow-Simmered Salna']
  );
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

  const dishOptions = [
    'Golden Flaky Parotta',
    'Soft Phulka Chapatti',
    'Authentic Slow-Simmered Salna',
    'Coimbatore Traditional Kundi',
    'Royal Seeraga Samba Mutton Biryani',
    'Traditional Banana Leaf Feast',
    'Live Tawa Counter Setup',
    'Tender Coconut Elaneer Payasam',
  ];

  const toggleDish = (dish: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dish) ? prev.filter((d) => d !== dish) : [...prev, dish]
    );
  };

  const handleSendOrderWhatsApp = () => {
    const formatted = `*ZORO CATERING - Direct Order / Event Inquiry*
*Host / Client:* ${clientName || 'Valued Guest'}
*Phone:* ${clientPhone || 'Not provided'}
*Occasion:* ${eventType}
*Tentative Date:* ${eventDate || 'Immediate / To be discussed'}
*Guest Count:* ${guestCount} guests
*Selected Specialties:*
${selectedDishes.map((d) => `• ${d}`).join('\n')}

*Location:* Coimbatore, Tamil Nadu
Please share package quote and check availability.`;

    const url = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121216] border border-[#d4af37]/50 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-[#d4af37] cursor-pointer"
          aria-label="Close Order Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">
            ZORO CATERING · COIMBATORE
          </div>
          <h3 className="font-cinzel text-2xl font-bold text-white">
            Order & Catering Booking
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Connect instantly with our master catering team on WhatsApp (+91 9787001896).
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Anand Kumar"
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="e.g. +91 97870 01896"
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Occasion Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="Wedding Reception">Wedding Reception</option>
                <option value="Muhurtham Feast">Muhurtham Feast</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Family Function">Family Function</option>
                <option value="Housewarming">Housewarming</option>
                <option value="Corporate Gala">Corporate Gala</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Estimated Guests
              </label>
              <input
                type="number"
                min="25"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300 block mb-1">
              Tentative Event Date
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* Select Desired Dishes */}
          <div>
            <label className="text-xs font-medium text-zinc-300 block mb-2">
              Select Signature Dishes to Include:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto p-1">
              {dishOptions.map((dish) => {
                const isSelected = selectedDishes.includes(dish);
                return (
                  <button
                    type="button"
                    key={dish}
                    onClick={() => toggleDish(dish)}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-800 border-[#d4af37] text-white font-medium'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span>{dish}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleSendOrderWhatsApp}
            className="w-full py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-xl shadow-lg shadow-[#d4af37]/25 hover:shadow-[#d4af37]/50 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
          >
            <MessageCircle className="w-5 h-5 fill-black/20" />
            <span>Connect on WhatsApp (+91 9787001896)</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
            <span>Or call directly:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-[#fef08a] font-semibold hover:underline tabular-nums"
            >
              {BUSINESS_INFO.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
