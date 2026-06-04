import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, MapPin } from 'lucide-react';

// Data
import { COUPLE } from './data';

// Components
import MarigoldPetalShower from './components/MarigoldPetalShower';
// import AudioPlayerControl from './components/AudioPlayerControl';
import CountdownTimer from './components/CountdownTimer';
import VenueTimeline from './components/VenueTimeline';
import AestheticSideGarlands from './components/AestheticSideGarlands';
import EngagementGallery from './components/EngagementGallery';
import FestiveToran from './components/FestiveToran';
import FloralCornerOrnament from './components/FloralCornerOrnament';

export default function App() {
  const [burstTriggerCount, setBurstTriggerCount] = useState(0);

  return (
    <div className="min-h-screen relative crimson-gradient-bg text-[#2d4234] overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-950 pb-20" id="main-scroller-node">
      
      {/* 1. Traditional Floating Flower Petal Shower backdrop */}
      <MarigoldPetalShower burstTriggerCount={burstTriggerCount} />

      {/* 2. Side-running aesthetic hanging garlands with high-vibrancy marigold & lotus beads */}
      <AestheticSideGarlands />

      {/* 3. Audio control for Sitar Ambient track */}
      {/* <AudioPlayerControl /> */}

      {/* Decorative Ornate Border Framing at the extreme top of the invitation */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-orange-400 via-[#dfc59a] to-emerald-400 z-30" />
      
      {/* Hanging Festive Toran/Marigold Scalloped Garlands on top */}
      <FestiveToran />

      {/* HERO SECTION / BANNER COVER FRAME */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-24 pb-14 min-h-[85vh] px-4 md:px-6 z-10"
        id="wedding-hero-section"
      >
        
        {/* Ornate Mandala Floating backdrop with subtle rotate */}
        <div className="absolute w-[280px] h-[280px] sm:w-[580px] sm:h-[580px] rounded-full border border-[#6a8270]/15 flex items-center justify-center pointer-events-none opacity-40 animate-[spin_120s_linear_infinite]" id="mandala-watermark">
          <div className="w-[85%] h-[85%] rounded-full border border-dashed border-[#6a8270]/15 flex items-center justify-center">
            <div className="w-[70%] h-[70%] rounded-full border border-[#6a8270]/5" />
          </div>
        </div>

        {/* Outer Editorial Main Wedding Card Border Frame - Pinterest styling */}
        <div className="relative z-10 w-full max-w-4xl bg-white/90 border-double border-4 border-[#6a8270]/40 p-6 sm:p-12 md:p-16 rounded-3xl shadow-xl shadow-[#6a8270]/10 text-center max-w-4xl mx-auto overflow-hidden backdrop-blur-md">
          
          {/* Corner Ornaments with Cheerful Floral Designs */}
          <FloralCornerOrnament position="top-left" />
          <FloralCornerOrnament position="top-right" />
          <FloralCornerOrnament position="bottom-left" />
          <FloralCornerOrnament position="bottom-right" />

          {/* Subtle floral emblem inside container */}
          <div className="flex justify-center mb-6">
            <button 
              onClick={() => setBurstTriggerCount((c) => c + 1)}
              className="text-[#6a8270] border border-[#6a8270]/35 w-12 h-12 rounded-full flex items-center justify-center text-sm font-sans font-bold shadow-sm shadow-[#6a8270]/10 bg-white/95 animate-diya-glow cursor-pointer hover:scale-105 transition-transform focus:outline-none animate-spin-slow"
              title="Click to shower petals!"
            >
              ☸
            </button>
          </div>

          <span className="text-[#2d4234]/80 font-serif-display text-xs tracking-[0.25em] block mb-2 font-bold uppercase max-w-xl mx-auto leading-relaxed">
            With the sacred blessings of Buddha, Dhamma, and Sangha, we invite you to celebrate the auspicious union of
          </span>

          {/* Parental honors header */}
          <div className="text-[11px] sm:text-sm text-[#2d4234]/95 font-serif max-w-lg mx-auto tracking-wide leading-relaxed bg-[#dfc59a]/10 p-5 rounded-2xl border-double border-4 border-[#dfc59a]/40 mb-8 relative">
            <div className="absolute top-1 left-1.5 w-1.5 h-1.5 border-t border-l border-[#dfc59a]" />
            <div className="absolute top-1 right-1.5 w-1.5 h-1.5 border-t border-r border-[#dfc59a]" />
            <div className="absolute bottom-1 left-1.5 w-1.5 h-1.5 border-b border-l border-[#dfc59a]" />
            <div className="absolute bottom-1 right-1.5 w-1.5 h-1.5 border-b border-r border-[#dfc59a]" />
            <span className="block font-serif-display font-black text-[#b8860b] uppercase tracking-[0.3em] text-[9px] mb-1.5">Crest of Parental Honors</span>
            <p className="font-serif-display font-extrabold text-[15px] text-[#1e2f24] tracking-wider uppercase mb-1">
              {COUPLE.groom.parents} &nbsp;&amp;&nbsp; {COUPLE.bride.parents}
            </p>
            <p className="text-stone-600 text-xs sm:text-[13px] mt-1 italic font-serif">
              cordially request your gracious participation in celebrating the marriage of their beloved children
            </p>
          </div>

          {/* Couple's visual names in beautiful script */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 my-6" id="couple-banner-names">
            <div>
              <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-amber-700 font-normal tracking-wide leading-none pb-1 select-none hover:scale-105 transition-transform duration-500">
                {COUPLE.groom.firstName}
              </h1>
              <span className="text-[9px] sm:text-xs font-serif-display text-[#6a8270] tracking-[0.25em] font-bold uppercase block mt-1">Son of {COUPLE.groom.parents}</span>
            </div>

            <div className="my-2 md:my-0 flex items-center justify-center select-none">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#dfc59a] hidden md:block" />
              <div className="text-rose-500 mx-4 animate-[pulse_1.8s_infinite] transform hover:scale-125 transition-transform">
                <Heart className="w-7 h-7 fill-rose-500 text-rose-500" />
              </div>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#dfc59a] hidden md:block" />
            </div>

            <div>
              <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-amber-700 font-normal tracking-wide leading-none pb-1 select-none hover:scale-105 transition-transform duration-500">
                {COUPLE.bride.firstName}
              </h1>
              <span className="text-[9px] sm:text-xs font-serif-display text-[#6a8270] tracking-[0.25em] font-bold uppercase block mt-1">Daughter of {COUPLE.bride.parents}</span>
            </div>
          </div>

          {/* Saffron, Gold, and Pink festive floral divider string */}
          <div className="flex items-center justify-center gap-2 select-none mx-auto mb-8 w-2/3">
            <div className="h-[1.5px] grow bg-gradient-to-r from-transparent via-orange-400 to-amber-400" />
            <span className="text-orange-500 text-sm transform hover:scale-125 transition-transform">🏵️</span>
            <span className="text-pink-500 text-base transform hover:scale-125 transition-transform">🪷</span>
            <span className="text-amber-400 text-sm transform hover:scale-125 transition-transform">🌼</span>
            <div className="h-[1.5px] grow bg-gradient-to-l from-transparent via-orange-400 to-amber-400" />
          </div>

          {/* Location summary & Date info */}
          <div className="space-y-2 mb-10">
            <div className="flex items-center justify-center gap-1.5 text-[#1e2f24]">
              <Calendar className="w-4 h-4 text-[#6a8270]" />
              <span className="font-serif-display font-semibold text-base tracking-wide sm:text-lg text-[#1e2f24]">
                June 19th 2026
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-stone-600 text-xs sm:text-sm font-sans tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#6a8270]" />
              <span className="font-semibold text-[#566c5d]">{COUPLE.locationText}</span>
            </div>
          </div>

          {/* DIGITAL AUSPICIOUS COUNTDOWN FLOATING CARDS */}
          <div className="mt-8">
            <CountdownTimer />
          </div>

        </div>

        {/* Scroll helper */}
        <div className="absolute bottom-4 flex flex-col items-center gap-1 select-none pointer-events-none text-[#6a8270] text-[10px] tracking-widest uppercase mt-6">
          <span className="animate-bounce">Scroll Down for Timelines</span>
          <ChevronDownLoader />
        </div>
      </motion.header>

      {/* MEET THE BRIDE & GROOM PANEL */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 py-12 z-10 relative"
        id="about-couple-section"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/80 border border-[#6a8270]/20 p-6 sm:p-10 rounded-3xl shadow-lg relative backdrop-blur-xs">
          
          {/* Subtle middle knot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4f7f4] border border-[#6a8270]/30 rounded-full w-10 h-10 flex items-center justify-center text-xs hidden md:flex z-10 text-[#6a8270] shadow-sm font-bold">
            🪷
          </div>

          {/* Groom details banner */}
          <div className="text-center md:text-right space-y-3 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-[#6a8270]/20 pb-6 md:pb-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#b8860b] font-serif-display font-black block">The Groom</span>
            <h3 className="font-serif-display text-2xl font-bold tracking-widest uppercase text-[#1e2f24]">{COUPLE.groom.fullName}</h3>
            <p className="text-xs text-[#b8860b] font-serif italic">Beloved Son of {COUPLE.groom.parents}</p>
            <p className="text-stone-700 text-xs sm:text-sm font-sans leading-relaxed text-center md:text-right max-w-sm md:ml-auto">
              {COUPLE.groom.bio}
            </p>
          </div>

          {/* Bride details banner */}
          <div className="text-center md:text-left space-y-3 pl-0 md:pl-6 pt-2 md:pt-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#b8860b] font-serif-display font-black block">The Bride</span>
            <h3 className="font-serif-display text-2xl font-bold tracking-widest uppercase text-[#1e2f24]">{COUPLE.bride.fullName}</h3>
            <p className="text-xs text-[#b8860b] font-serif italic">Beloved Daughter of {COUPLE.bride.parents}</p>
            <p className="text-stone-700 text-xs sm:text-sm font-sans leading-relaxed text-center md:text-left max-w-sm md:mr-auto">
              {COUPLE.bride.bio}
            </p>
          </div>

        </div>
      </motion.section>

      {/* PINTEREST STYLE GALLERY SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
        id="pinterest-gallery-section"
      >
        <EngagementGallery />
      </motion.section>

      {/* TEMPLATE DETAIL SCHEDULING (HALDI, WEDDING, RECEPTION TIMES & ADDRESS) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-4 py-12 z-10 relative"
        id="wedding-timeline-schedule"
      >
        <VenueTimeline />
      </motion.section>

      {/* TRADITIONAL FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-full text-center py-10 mt-16 border-t border-[#6a8270]/20 z-10 relative"
        id="invitation-footer"
      >
        <div className="font-serif text-[#6a8270] text-base italic mb-2">
          "Sabbe Sattā Sukhi Hontu" — May all beings be happy, peaceful, and free.
        </div>
        <p className="text-stone-700 font-sans text-[11px] uppercase tracking-widest max-w-[280px] sm:max-w-none mx-auto leading-relaxed font-semibold">
          We await your loving presence and blessings on {COUPLE.groom.firstName} &amp; {COUPLE.bride.firstName}'s auspicious wedding union at {COUPLE.locationText}
        </p>

      </motion.footer>

    </div>
  );
}

// Subtle auxiliary SVG arrow scroll down loader
function ChevronDownLoader() {
  return (
    <svg 
      className="w-4 h-4 text-[#b8860b] animate-[bounce_1.5s_infinite]" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}
