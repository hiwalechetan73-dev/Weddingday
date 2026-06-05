import { useEffect, useState, useCallback } from 'react';
import { COUPLE } from '../data';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export default function CountdownTimer() {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const targetDate = new Date(COUPLE.weddingDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isComplete: false,
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Initial sync
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (timeLeft.isComplete) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center" id="countdown-timer-completed">
        <div className="text-xl md:text-2xl font-serif font-semibold text-[#6a8270] animate-pulse tracking-wider">
          ☸ शुभ क्षण आला आहे. ☸
        </div>
        <p className="text-stone-700 font-sans text-xs mt-2 italic">{COUPLE.groom.firstName} &amp; {COUPLE.bride.firstName} विवाहबद्ध झाले आहेत! त्यांना तुमच्या असीम प्रेमाचा आशीर्वाद द्या..</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center" id="countdown-timer-container">
      {/* Sub-heading decoration */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#b8860b]" />
        <span className="text-[#1e2f24] font-serif-display uppercase text-xs tracking-[0.25em] font-black">शुभ काउंटडाउन</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#b8860b]" />
      </div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg w-full px-2">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative flex flex-col items-center justify-center bg-[#fcfbf9] border border-[#dfc59a]/50 p-3 sm:p-5 rounded-2xl shadow-sm hover:border-[#b8860b] transition-all duration-300 backdrop-blur-md"
            id={`countdown-item-${item.label.toLowerCase()}`}
          >
            {/* Corner Decorative Dots */}
            <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-[#b8860b]/40 rounded-full" />
            <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-[#b8860b]/40 rounded-full" />
            <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-[#b8860b]/40 rounded-full" />
            <div className="absolute bottom-1.5 right-1.5 w-1 h-1 bg-[#b8860b]/40 rounded-full" />

            {/* Circle overlay behind value */}
            <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#b8860b]/10 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            {/* Display digits */}
            <span className="text-2xl sm:text-4xl font-serif-display font-medium text-amber-700 tracking-tight">
              {String(item.value).padStart(2, '0')}
            </span>

            {/* Custom line separator */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfc59a]/45 to-transparent my-1 sm:my-1.5" />

            {/* Label */}
            <span className="text-[9px] sm:text-[11px] font-serif-display text-amber-900 uppercase tracking-widest font-black">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
