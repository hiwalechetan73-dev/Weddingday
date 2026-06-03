import React from 'react';

export default function FestiveToran() {
  // A dense garland sequence for a full screen-wide festive festoon
  const garlandPoints = Array.from({ length: 32 });

  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden z-25 h-28" id="festive-toran-banner">
      {/* 1. Scalloped background shadow strings */}
      <svg className="absolute top-0 left-0 w-full h-16 opacity-30 text-amber-500/40" preserveAspectRatio="none">
        <path 
          d="M 0,15 Q 150,45 300,15 Q 450,45 600,15 Q 750,45 900,15 Q 1050,45 1200,15 Q 1350,45 1500,15 Q 1650,45 1800,15 L 1800,0 L 0,0 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeDasharray="4 4"
        />
      </svg>
      {/* Scalloped bright gold main line */}
      <svg className="absolute top-0 left-0 w-full h-16 text-amber-500/70" preserveAspectRatio="none">
        <path 
          d="M 0,10 Q 150,38 300,10 Q 450,38 600,10 Q 750,38 900,10 Q 1050,38 1200,10 Q 1350,38 1500,10 Q 1650,38 1800,10" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
        />
      </svg>

      {/* 2. Hanging Cheerful Floral Elements */}
      <div className="w-full flex justify-around px-2 sm:px-6 md:px-12 pt-2 gap-1 sm:gap-2">
        {garlandPoints.map((_, idx) => {
          // Determine alternating cheerful patterns
          const isBell = idx % 8 === 4;
          const isLotus = idx % 4 === 2;
          const isMangoLeaf = idx % 3 === 0;
          
          // Generate a varied hanging height to emulate actual hanging florals
          const offsets = [24, 38, 48, 38, 24, 38, 48, 38];
          const heightOffset = offsets[idx % offsets.length];

          // Alternating colors for marigold balls: vibrant orange, bright sunshine yellow, rich gold
          const colors = [
            'bg-orange-500 border-orange-400 text-amber-100', // orange
            'bg-amber-400 border-yellow-300 text-orange-150', // yellow
            'bg-yellow-500 border-yellow-400 text-amber-200', // golden
            'bg-rose-500 border-rose-400 text-rose-100' // deep rose
          ];
          const colorClass = colors[idx % colors.length];

          return (
            <div 
              key={`toran-item-${idx}`} 
              className="flex flex-col items-center shrink-0 transition-transform duration-500 hover:scale-110 active:scale-95"
              style={{ 
                height: `${heightOffset + 20}px`,
                transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (idx % 3)}deg)` 
              }}
            >
              {/* String thread element */}
              <div className="w-[1.5px] bg-gradient-to-b from-amber-500 to-amber-600/60 grow shadow-xs" />

              {/* Decorative Beads with cheerful colors */}
              <div className="flex flex-col items-center -space-y-0.5">
                {/* Brass bead */}
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 border border-yellow-200" />
                {/* Red vermillion bead */}
                <div className="w-1.5 h-1.5 rounded-full bg-rose-600" />
              </div>

              {/* Dynamic Hanging Blossom / Accent */}
              {isBell ? (
                <div className="mt-1 flex flex-col items-center animate-[bounce_3s_infinite]" style={{ animationDelay: `${idx * 0.25}s` }}>
                  <span className="text-amber-500 text-sm filter drop-shadow-sm select-none">🔔</span>
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                </div>
              ) : isLotus ? (
                <div className="w-7 h-7 flex items-center justify-center select-none text-base filter drop-shadow-[0_2px_4px_rgba(244,114,182,0.4)] my-0.5 transform rotate-180">
                  🪷
                </div>
              ) : (
                /* Beautiful double fluff marigold sphere */
                <div className={`w-5 h-5 rounded-full ${colorClass} border flex items-center justify-center shadow-xs select-none relative`}>
                  <div className="absolute inset-0.5 rounded-full bg-white/20 border-dotted border-white/40 flex items-center justify-center">
                    <span className="text-[5px] opacity-80">🌸</span>
                  </div>
                </div>
              )}

              {/* Hanging Mango leaf symbol representing fresh beginnings */}
              {isMangoLeaf && (
                <div className="flex flex-col items-center -mt-0.5">
                  <div className="w-[1px] h-2 bg-emerald-800/40" />
                  <div className="text-stone-800 text-xs sm:text-sm drop-shadow-xs transform rotate-6 select-none -translate-x-[1px] hover:text-emerald-500 transition-colors">
                    🍃
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Decorative floral band at the bottom of the line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 via-orange-400 via-yellow-400 via-emerald-400 to-rose-500 opacity-60" />
    </div>
  );
}
