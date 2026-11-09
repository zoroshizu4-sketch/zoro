import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cateringData';
import { Phone, MapPin, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    eventType: 'Wedding Reception',
    guestCount: '250',
    venue: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const formattedMessage = `*New Catering Inquiry - ZORO CATERING*
*Client Name:* ${formData.name}
*Phone:* ${formData.phone}
*Occasion:* ${formData.eventType}
*Tentative Date:* ${formData.eventDate || 'Not specified'}
*Estimated Guests:* ${formData.guestCount}
*Venue / Location:* ${formData.venue || 'Coimbatore'}
*Notes / Special Requests:* ${formData.message || 'None'}`;

    const url = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Let Us Cater Your Royal Feast
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Reach out to our event banquet directors in Coimbatore. Call us directly or message via WhatsApp for immediate dates availability and custom quotes.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Contact Information Card */}
          <div className="lg:col-span-5 bg-[#121216] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] block mb-2">
                Direct Contact Details
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                ZORO CATERING
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Luxury Banquet & Event Catering in Coimbatore, Tamil Nadu
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">
                    Phone & WhatsApp Hotline
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-cinzel text-lg font-bold text-white hover:text-[#d4af37] transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.displayPhone}
                  </a>
                  <div className="mt-1">
                    <a
                      href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                        "Hello Zoro Catering! I would like to inquire about booking catering services in Coimbatore."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline font-medium"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp (+91 9787001896)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">
                    Location & Hub
                  </div>
                  <div className="font-medium text-white text-sm sm:text-base">
                    Coimbatore, Tamil Nadu, India
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Primary service centers: RS Puram, Race Course, Peelamedu, Gandhipuram, Saravanampatti, Saibaba Colony, and surrounding Kongu region.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-medium text-white hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">
                    Service Hours
                  </div>
                  <div className="font-medium text-white text-sm">
                    {BUSINESS_INFO.hours}
                  </div>
                  <div className="text-xs text-[#d4af37] font-medium mt-0.5">
                    Live Event Counters Operating 24/7 as scheduled
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-800/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                  <MessageCircle className="w-5 h-5 fill-black" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Fastest Response on WhatsApp
                  </h4>
                  <span className="text-[11px] text-emerald-400">Usually replies in &lt; 15 mins</span>
                </div>
              </div>
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello Zoro Catering! I would like to inquire about event catering in Coimbatore."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-sans shadow-md"
              >
                <span>Direct WhatsApp: +91 9787001896</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121216] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] block mb-2">
              Book An Event Date
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
              Request Your Catering Proposal
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill in your celebration specifications below. This form directly connects you to our senior event director on WhatsApp.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-700/60 flex items-center gap-3 text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <div>
                  <strong>Thank you!</strong> Your catering inquiry has been composed. If WhatsApp did not open automatically, click the WhatsApp button below.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                    Your Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                    Phone / WhatsApp Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Event Type */}
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                    Occasion Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Muhurtham Feast">Muhurtham Feast</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Family Function">Family Function</option>
                    <option value="Housewarming / Grihapravesam">Housewarming</option>
                    <option value="Corporate Gala">Corporate Gala</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                    Tentative Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    min="25"
                    step="25"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    placeholder="e.g. 250"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Venue */}
              <div>
                <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                  Venue / Hall Location in Coimbatore (or outside)
                </label>
                <input
                  type="text"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  placeholder="e.g. Codissia / Hall in RS Puram / Home in Race Course"
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                  Menu Preferences & Notes (Parotta, Salna, Kundi, Biryani, Live Counters, etc.)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your favourite dishes, live counter requirements, or timing..."
                  className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-xl shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/45 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <Send className="w-4 h-4 fill-black/20" />
                <span>Submit Inquiry via WhatsApp (+91 9787001896)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
