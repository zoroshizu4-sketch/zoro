import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/cateringData';
import { Phone, MapPin, Mail, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  return (
    <footer className="bg-[#070709] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />
            <p className="font-cinzel text-sm text-[#d4af37] tracking-wider italic">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed pr-4">
              Coimbatore&apos;s luxury catering firm specializing in authentic South Indian royal feasts, live tawa parottas, slow-simmered salnas, traditional Kundi roasts, and grand wedding banquets.
            </p>
            <div className="pt-2">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello Zoro Catering! I would like to inquire about event catering in Coimbatore."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-[#25D366] text-xs font-semibold hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Catering Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">Event Gallery</a>
              </li>
              <li>
                <a href="#estimate" className="hover:text-[#d4af37] transition-colors">Cost Estimator</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Featured Menu items */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Signature Dishes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Golden Flaky Parotta
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Soft Phulka Chapatti
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Authentic Slow-Simmered Salna
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Kongu Coimbatore Kundi Roast
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Seeraga Samba Mutton Biryani
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  24-Dish Royal Elai Saapadu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Coimbatore Office
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.locationDisplay}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-[#d4af37] transition-colors tabular-nums font-semibold"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                Service Radius: RS Puram, Race Course, Peelamedu, Gandhipuram, Saravanampatti, Saibaba Colony & Kongu Region.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-200">ZORO CATERING</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Coimbatore, Tamil Nadu</span>
            <span aria-hidden="true">·</span>
            <span>Taste the Luxury, Experience the Tradition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
