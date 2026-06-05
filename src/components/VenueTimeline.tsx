import { MapPin, Clock, Calendar, Sparkles, Shirt } from 'lucide-react';
import { WEDDING_EVENTS } from '../data';
import { WeddingEvent } from '../types';

export default function VenueTimeline() {
  return (
    <div className="w-full font-sans" id="venue-timeline-component">
      {/* Decorative header */}
      <div className="text-center mb-8">
        <span className="font-script text-[#b8860b] text-4xl sm:text-5xl block mb-2">शुभ विवाह</span>
        <h2 className="font-serif-display text-3xl md:text-4xl text-[#1e2f24] font-bold tracking-widest uppercase">
          विवाह समारंभ
        </h2>
        <p className="text-stone-500 font-sans text-xs tracking-[0.25em] uppercase mt-2 font-semibold">
          आमच्या पवित्र विधींच्या उत्सवात सहभागी व्हा.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4 select-none">
          <span className="text-orange-500 text-sm animate-pulse">🏵️</span>
          <div className="h-[1.5px] w-14 bg-gradient-to-r from-transparent via-[#dfc59a] to-orange-400" />
          <span className="text-rose-500 text-xl animate-bounce">🪷</span>
          <div className="h-[1.5px] w-14 bg-gradient-to-l from-transparent via-[#dfc59a] to-orange-400" />
          <span className="text-amber-500 text-sm animate-pulse">🏵️</span>
        </div>
      </div>

      {/* Events layout */}
      <div className="relative border-l-2 border-dashed border-[#6a8270]/30 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
        {WEDDING_EVENTS.map((event: WeddingEvent) => {
          // Determine stylized icon based on event ID
          let iconColor = 'text-amber-600';
          let iconChar = '☸';
          if (event.id === 'haldi') {
            iconColor = 'text-yellow-600';
            iconChar = '🪷';
          } else if (event.id === 'wedding') {
            iconColor = 'text-rose-600';
            iconChar = '☸';
          } else if (event.id === 'reception') {
            iconColor = 'text-emerald-600';
            iconChar = '✨';
          }

          return (
            <div 
              key={event.id} 
              className="relative group transition-all duration-300"
              id={`timeline-event-${event.id}`}
            >
              {/* Vertical timeline knot check (flashing diya / flower) */}
              <div 
                className={`absolute -left-[35px] sm:-left-[51px] top-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold border-2 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110 
                ${event.id === 'haldi' ? 'bg-amber-100 border-amber-400 text-amber-800' : ''}
                ${event.id === 'wedding' ? 'bg-rose-100 border-rose-400 text-rose-800' : ''}
                ${event.id === 'reception' ? 'bg-emerald-100 border-emerald-400 text-emerald-800' : ''}
                `}
              >
                <span>{iconChar}</span>
              </div>

              {/* Card Container */}
              <div className={`p-6 sm:p-8 rounded-3xl border bg-gradient-to-br ${event.colorTheme.cardBg} ${event.colorTheme.border} shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-3xl relative overflow-hidden`}>
                
                {/* Decorative Cheerful Floral Corner Highlights */}
                <div className="absolute -top-1 -right-1 w-10 h-10 select-none opacity-90 pointer-events-none flex items-center justify-center">
                  {event.id === 'haldi' && <span className="text-xl animate-pulse">🏵️</span>}
                  {event.id === 'wedding' && <span className="text-xl animate-bounce" style={{ animationDuration: '3.5s' }}>🪷</span>}
                  {event.id === 'reception' && <span className="text-xl animate-spin-slow">✨</span>}
                </div>
                <div className="absolute -bottom-1 -left-1 w-10 h-10 select-none opacity-90 pointer-events-none flex items-center justify-center">
                  {event.id === 'haldi' && <span className="text-xl">🌼</span>}
                  {event.id === 'wedding' && <span className="text-xl">🌹</span>}
                  {event.id === 'reception' && <span className="text-xl">🍃</span>}
                </div>
                
                {/* Event Badge & Title */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                    {event.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/70 shadow-sm border border-stone-200/50 ${event.colorTheme.text}`}>
                    Shubh Muhurat
                  </span>
                </div>

                <p className="text-stone-700 font-sans text-sm sm:text-[15px] leading-relaxed mb-6 italic">
                  "{event.description}"
                </p>

                {/* Event Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-stone-200/40 pt-5">
                  <div className="space-y-3">
                    {/* Time Slot */}
                    <div className="flex items-start gap-2.5 text-stone-700">
                      <Clock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm font-sans">
                        <span className="block font-semibold text-stone-900">Date & Time</span>
                        <span>{event.time}</span>
                        <span className="block text-stone-500 mt-0.5 text-[11px] font-medium flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 inline text-stone-400" />
                          {event.date}
                        </span>
                      </div>
                    </div>

                    {/* Dress Code Slot */}
                    <div className="flex items-start gap-2.5 text-stone-700">
                      <Shirt className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm font-sans">
                        <span className="block font-semibold text-stone-900">Dress Attire</span>
                        <span className="text-amber-800 font-medium">
                          {event.id === 'haldi' && 'Vibrant Yellow / Sunny Ethnic'}
                          {event.id === 'wedding' && 'Formal Indian Traditional Saree/Sherwani'}
                          {event.id === 'reception' && 'Indo-Western Glitz / Evening formal Gown / Suit'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Location Block */}
                    <div className="flex items-start gap-2.5 text-stone-700">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm font-sans">
                        <span className="block font-semibold text-stone-900">Venue</span>
                        <span className="font-medium text-stone-800">{event.venueName}</span>
                        <span className="block text-stone-550 text-[11px] leading-relaxed mt-0.5">{event.address}</span>
                      </div>
                    </div>

                    {/* Location CTA Link */}
                    <div className="pl-6.5">
                      <a 
                        href={event.mapUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold bg-stone-900 text-amber-400 hover:bg-stone-800 transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
                      >
                        <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
                        <span>गुगल मॅप्सवर मार्गक्रमण करा</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
