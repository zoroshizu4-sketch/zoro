import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/cateringData';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Estimate', href: '#estimate' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="whitespace-nowrap shrink-0 group focus:outline-none">
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Quick Phone */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-xs text-zinc-300 hover:text-[#d4af37] transition-colors px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60"
              title="Call Zoro Catering"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-semibold tracking-wide tabular-nums">{BUSINESS_INFO.displayPhone}</span>
            </a>

            <button
              onClick={onOpenOrderModal}
              className="relative px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-gold-gradient rounded-md shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer font-sans"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenOrderModal}
              className="px-3 py-1.5 text-xs font-semibold text-black bg-gold-gradient rounded-md whitespace-nowrap shrink-0 sm:hidden flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Order</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-[#d4af37] rounded-lg border border-zinc-800 bg-zinc-900/70 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e11] border-b border-zinc-800 px-4 pt-3 pb-5 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-2 border-b border-zinc-800/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-[#d4af37] hover:bg-zinc-800/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 text-sm text-zinc-200 py-2.5 rounded-lg border border-zinc-700 bg-zinc-800/50 font-medium"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call: {BUSINESS_INFO.displayPhone}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-2.5 text-sm font-semibold tracking-wider uppercase text-black bg-gold-gradient rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
