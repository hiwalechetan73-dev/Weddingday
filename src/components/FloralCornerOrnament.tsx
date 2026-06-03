import React from 'react';

interface FloralCornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function FloralCornerOrnament({ position }: FloralCornerOrnamentProps) {
  // Determine CSS classes for rotation and absolute placements
  let placementClasses = '';
  let rotateSvg = '';

  switch (position) {
    case 'top-left':
      placementClasses = 'top-1 sm:top-2 left-1 sm:left-2';
      rotateSvg = '';
      break;
    case 'top-right':
      placementClasses = 'top-1 sm:top-2 right-1 sm:right-2';
      rotateSvg = 'rotate-90';
      break;
    case 'bottom-left':
      placementClasses = 'bottom-1 sm:bottom-2 left-1 sm:left-2';
      rotateSvg = '-rotate-90';
      break;
    case 'bottom-right':
      placementClasses = 'bottom-1 sm:bottom-2 right-1 sm:right-2';
      rotateSvg = 'rotate-180';
      break;
  }

  return (
    <div className={`absolute w-12 h-12 sm:w-20 sm:h-20 pointer-events-none select-none z-15 ${placementClasses} ${rotateSvg}`} id={`floral-corner-${position}`}>
      {/* Decorative Vector Swirls and Blooming Marigold/Lotus Ornaments in Saffron Orange, Gold, and Emerald */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-full h-full drop-shadow-xs"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved corner background flourish */}
        <path
          d="M 12,12 C 40,12 80,16 80,55"
          stroke="#dfc59a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 2"
          opacity="0.7"
        />
        {/* Main double-border line bracket */}
        <path
          d="M 8,8 L 88,8"
          stroke="#6a8270"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M 8,8 L 8,88"
          stroke="#6a8270"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Floral Leaves in Emerald Green */}
        {/* Leaf 1 */}
        <path
          d="M 8,24 C 18,24 22,14 18,6 C 10,12 8,18 8,24"
          fill="#10b981"
          fillOpacity="0.85"
        />
        {/* Leaf 2 */}
        <path
          d="M 24,8 C 24,18 14,22 6,18 C 12,10 18,8 24,8"
          fill="#10b981"
          fillOpacity="0.85"
        />

        {/* Small Mango Leaf curves */}
        <path
          d="M 8,8 Q 35,35 65,30"
          stroke="#047857"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 8,8 Q 35,35 30,65"
          stroke="#047857"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Cheerful Orange Flower Blossom at the exact pivot apex */}
        <circle cx="28" cy="28" r="11" fill="#f97316" className="animate-pulse" style={{ animationDuration: '4s' }} />
        {/* Layered concentric petals of rich gold */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const cx = 28 + Math.cos(angle) * 7;
          const cy = 28 + Math.sin(angle) * 7;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4.5"
              fill="#fbbf24"
              opacity="0.95"
            />
          );
        })}
        {/* Inner center of the flower (crimson seed) */}
        <circle cx="28" cy="28" r="4.5" fill="#dc2626" />
        <circle cx="28" cy="28" r="1.5" fill="#fef08a" />

        {/* Tiny sweet rose buds along the bracket arms */}
        <circle cx="58" cy="8" r="4" fill="#ec4899" />
        <path d="M 58,8 Q 63,4 66,8" stroke="#10b981" strokeWidth="1" />
        
        <circle cx="8" cy="58" r="4" fill="#ec4899" />
        <path d="M 8,58 Q 4,63 8,66" stroke="#10b981" strokeWidth="1" />

        {/* Accent gold sparkle dots */}
        <circle cx="48" cy="48" r="2.5" fill="#f59e0b" />
        <circle cx="72" cy="22" r="2.2" fill="#fbbf24" />
        <circle cx="22" cy="72" r="2.2" fill="#fbbf24" />
      </svg>
    </div>
  );
}
