export default function AestheticSideGarlands() {
  const items = Array.from({ length: 12 }); // High density garland sequence

  return (
    <>
      {/* Left side hanging organic garland string */}
      <div className="fixed left-1.5 sm:left-4 md:left-6 lg:left-8 top-0 bottom-0 w-10 pointer-events-none z-20 flex flex-col items-center justify-between py-10 overflow-hidden opacity-95">
        {/* String line */}
        <div className="absolute top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-amber-400/30 via-[#b8860b]/40 to-amber-400/30 left-1/2 -translate-x-1/2" />
        
        {/* Garland elements */}
        {items.map((_, idx) => {
          // Alternating cheerful wedding colors (Lively orange, vibrant yellow, pink lotus, mango leaves)
          const isLotus = idx % 3 === 0;
          const isOrangeMarigold = idx % 3 === 1;
          const isYellowMarigold = idx % 3 === 2;

          return (
            <div 
              key={`left-${idx}`} 
              className="relative flex flex-col items-center justify-center animate-sway"
              style={{ 
                animationDelay: `${idx * 0.3}s`,
                animationDuration: `${3.0 + (idx % 4) * 0.5}s` 
              }}
            >
              {/* String Knot Bead */}
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 border border-amber-300 shadow-xs" />
              
              {/* Custom High-Vibrancy Floral Assembly */}
              {isLotus && (
                <div className="w-8 h-8 flex items-center justify-center select-none text-xl sm:text-2xl filter drop-shadow-[0_2px_4px_rgba(244,114,182,0.45)] transform hover:scale-125 transition-transform duration-300">
                  🪷
                </div>
              )}

              {isOrangeMarigold && (
                <div className="relative group my-0.5">
                  <div className="w-6 h-6 rounded-full bg-orange-500 border border-orange-400 flex items-center justify-center shadow-xs select-none relative animate-pulse" style={{ animationDuration: '3s' }}>
                    <div className="absolute inset-0.5 rounded-full bg-amber-500 flex items-center justify-center border-dashed border-orange-300">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                  </div>
                </div>
              )}

              {isYellowMarigold && (
                <div className="relative group my-0.5">
                  <div className="w-6 h-6 rounded-full bg-amber-400 border border-yellow-300 flex items-center justify-center shadow-xs select-none relative">
                    <div className="absolute inset-0.5 rounded-full bg-yellow-300 flex items-center justify-center border-dashed border-amber-400">
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                    </div>
                  </div>
                </div>
              )}

              {/* Mango Leaf Stem Connector */}
              <div className="w-[1px] h-3 bg-emerald-800/25" />
              <div className="text-sm select-none text-emerald-600 filter drop-shadow-xs transform rotate-12 -my-0.5">
                🍃
              </div>
              <div className="w-[1px] h-3 bg-emerald-800/25" />

              {/* Polished Glass/Gold bead spacer */}
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-300 to-yellow-600 border border-yellow-200 shadow-xs" />

              {/* Bottom Hanging Bell Tassel at the end of the line */}
              {idx === items.length - 1 && (
                <div className="mt-2 flex flex-col items-center">
                  <span className="text-amber-500 text-xs animate-bounce">🔔</span>
                  <span className="text-[10px] text-amber-500 font-bold block -mt-1">✨</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right side hanging organic garland string */}
      <div className="fixed right-1.5 sm:right-4 md:right-6 lg:right-8 top-0 bottom-0 w-10 pointer-events-none z-20 flex flex-col items-center justify-between py-10 overflow-hidden opacity-95">
        {/* String line */}
        <div className="absolute top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-amber-400/30 via-[#b8860b]/40 to-amber-400/30 left-1/2 -translate-x-1/2" />
        
        {/* Garland elements */}
        {items.map((_, idx) => {
          const isLotus = idx % 3 === 2;
          const isOrangeMarigold = idx % 3 === 0;
          const isYellowMarigold = idx % 3 === 1;

          return (
            <div 
              key={`right-${idx}`} 
              className="relative flex flex-col items-center justify-center animate-sway"
              style={{ 
                animationDelay: `${idx * 0.45 + 0.15}s`,
                animationDuration: `${3.2 - (idx % 3) * 0.4}s` 
              }}
            >
              {/* String Knot Bead */}
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 border border-amber-300 shadow-xs" />
              
              {/* Custom High-Vibrancy Floral Assembly */}
              {isLotus && (
                <div className="w-8 h-8 flex items-center justify-center select-none text-xl sm:text-2xl filter drop-shadow-[0_2px_4px_rgba(244,114,182,0.45)] transform hover:scale-125 transition-transform duration-300">
                  🪷
                </div>
              )}

              {isOrangeMarigold && (
                <div className="relative group my-0.5">
                  <div className="w-6 h-6 rounded-full bg-orange-500 border border-orange-400 flex items-center justify-center shadow-xs select-none relative animate-pulse" style={{ animationDuration: '3.5s' }}>
                    <div className="absolute inset-0.5 rounded-full bg-amber-500 flex items-center justify-center border-dashed border-orange-300">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                  </div>
                </div>
              )}

              {isYellowMarigold && (
                <div className="relative group my-0.5">
                  <div className="w-6 h-6 rounded-full bg-amber-400 border border-yellow-300 flex items-center justify-center shadow-xs select-none relative">
                    <div className="absolute inset-0.5 rounded-full bg-yellow-300 flex items-center justify-center border-dashed border-amber-400">
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                    </div>
                  </div>
                </div>
              )}

              {/* Mango Leaf Stem Connector */}
              <div className="w-[1px] h-3 bg-emerald-800/25" />
              <div className="text-sm select-none text-emerald-600 filter drop-shadow-xs transform -rotate-12 -my-0.5">
                🍃
              </div>
              <div className="w-[1px] h-3 bg-emerald-800/25" />

              {/* Polished Glass/Gold bead spacer */}
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-300 to-yellow-600 border border-yellow-200 shadow-xs" />

              {/* Bottom Hanging Bell Tassel at the end of the line */}
              {idx === items.length - 1 && (
                <div className="mt-2 flex flex-col items-center">
                  <span className="text-amber-500 text-xs animate-bounce">🔔</span>
                  <span className="text-[10px] text-amber-500 font-bold block -mt-1">✨</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
