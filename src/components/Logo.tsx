import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 56 : 40;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Luxury Royal Gold Crest Insignia */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-lg p-1.5 transition-transform duration-300 hover:scale-105"
        style={{
          width: iconSize,
          height: iconSize,
          background: 'radial-gradient(circle at 30% 30%, #27272a 0%, #09090b 100%)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 0 15px -3px rgba(212, 175, 55, 0.25)',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Octagonal Outer Shield */}
          <polygon
            points="50,4 82,18 96,50 82,82 50,96 18,82 4,50 18,18"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeDasharray="2 4"
            opacity="0.6"
          />
          {/* Inner Crest Frame */}
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="8"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            transform="rotate(45 50 50)"
          />
          {/* Crown / Royal Flame on top */}
          <path
            d="M44 26 L50 19 L56 26"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="18" r="2" fill="#fef08a" />
          {/* Stylized Luxury 'Z' */}
          <path
            d="M36 38 H64 L38 62 H64"
            stroke="url(#goldGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Decorative Accent Dots */}
          <circle cx="62" cy="38" r="2.5" fill="#fef08a" />
          <circle cx="38" cy="62" r="2.5" fill="#fef08a" />
          
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#d4af37" />
              <stop offset="70%" stopColor="#b89628" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Mark */}
      <div className="flex flex-col">
        <span 
          className={`font-cinzel font-bold tracking-[0.18em] leading-none text-gold-gradient ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
          }`}
        >
          ZORO CATERING
        </span>
        {showSubtitle && (
          <span 
            className={`font-sans tracking-[0.25em] uppercase text-zinc-400 font-medium ${
              size === 'sm' ? 'text-[9px] mt-0.5' : size === 'lg' ? 'text-xs mt-1' : 'text-[10px] mt-1'
            }`}
          >
            Coimbatore · Luxury Events
          </span>
        )}
      </div>
    </div>
  );
};
