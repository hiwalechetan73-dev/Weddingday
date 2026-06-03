import { useState, useEffect, useCallback, useRef } from 'react';

interface Petal {
  id: number;
  x: number; // percentage width
  y: number; // percentage height start
  size: number;
  color: 'yellow' | 'orange' | 'gold' | 'red' | 'green' | 'pink';
  duration: number; // animation duration
  delay: number; // animation delay
  shape: 'ring' | 'curved' | 'round';
  spin: number;
  opacity: number;
}

interface MarigoldPetalShowerProps {
  burstTriggerCount: number;
}

export default function MarigoldPetalShower({ burstTriggerCount }: MarigoldPetalShowerProps) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const petalIdCounter = useRef(0);

  // Generate a random petal
  const createPetal = useCallback((isBurst = false): Petal => {
    petalIdCounter.current += 1;
    const colors: ('yellow' | 'orange' | 'gold' | 'red' | 'green' | 'pink')[] = [
      'yellow', 'orange', 'gold', 'orange', 'yellow', 'red', 'green', 'pink', 'green', 'pink'
    ];
    const shapes: ('ring' | 'curved' | 'round')[] = ['ring', 'curved', 'round'];

    return {
      id: petalIdCounter.current,
      x: Math.random() * 100, // random start horizontal
      y: isBurst ? Math.random() * 30 + 10 : -10, // burst starts closer to middle or top
      size: Math.random() * 14 + 8, // 8px to 22px
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: isBurst ? Math.random() * 3 + 2 : Math.random() * 6 + 6, // burst is faster (2-5s), normal is slower (6-12s)
      delay: isBurst ? Math.random() * 0.5 : Math.random() * 5,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      spin: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.6 // 0.6 to 0.9 opacity
    };
  }, []);

  // Continuous background fall
  useEffect(() => {
    // Generate initial petals
    const initialPetals = Array.from({ length: 22 }, () => createPetal(false));
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals((prev) => {
        // Keep active petals (under 40 count for performance)
        const active = prev.filter((p) => Math.random() > 0.05).slice(-35);
        return [...active, createPetal(false)];
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [createPetal]);

  // Handle burst trigger when burstTriggerCount changes
  useEffect(() => {
    if (burstTriggerCount > 0) {
      const burstPetals = Array.from({ length: 45 }, () => createPetal(true));
      setPetals((prev) => [...prev, ...burstPetals]);
    }
  }, [burstTriggerCount, createPetal]);

  const getPetalStyle = (petal: Petal) => {
    let colorHex = '#e11d48'; // default
    if (petal.color === 'yellow') colorHex = '#FBBF24'; // amber-400
    if (petal.color === 'orange') colorHex = '#F97316'; // orange-500
    if (petal.color === 'gold') colorHex = '#D97706'; // amber-600
    if (petal.color === 'red') colorHex = '#DC2626'; // red-600
    if (petal.color === 'pink') colorHex = '#F472B6'; // pink-400 (rose/lotus aesthetic)
    if (petal.color === 'green') colorHex = '#86EFAC'; // green-300 (fresh foliage)

    return {
      left: `${petal.x}%`,
      top: `${petal.y}vh`,
      width: `${petal.size}px`,
      height: `${petal.size * 0.85}px`,
      backgroundColor: colorHex,
      opacity: petal.opacity,
      animationDelay: `${petal.delay}s`,
      animationDuration: `${petal.duration}s`,
      transform: `rotate(${petal.spin}deg)`,
      clipPath: petal.shape === 'ring' 
        ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' // Tulip/marigold leaf shape
        : petal.shape === 'curved'
          ? 'path("M12,0 C18,10 24,15 24,24 C24,28 18,32 12,32 C6,32 0,28 0,24 C0,15 6,10 12,0 Z")' 
          : 'ellipse(25px 20px at 50% 50%)', // simple round petal
    };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" id="petal-shower-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-float-slow rounded-full filter drop-shadow-sm shadow-orange-950/25"
          style={getPetalStyle(petal)}
        />
      ))}
    </div>
  );
}
