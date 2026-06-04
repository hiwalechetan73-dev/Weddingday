import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Flame, Info } from 'lucide-react';
import { AUDIO_TRACK_URL } from '../assets/images/Whispering Dreams (1).mp3';

export default function AudioPlayerControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Lazy initialize the audio element in useEffect
  useEffect(() => {
    const audio = new Audio(AUDIO_TRACK_URL);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    // Listen to time updates for the visual music ring
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener('timeupdate', updateProgress);

    // Prompt user on first user gesture if possible
    const handleFirstGesture = () => {
      if (!userInteracted && audioRef.current) {
        setUserInteracted(true);
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowTooltip(false);
          })
          .catch(() => {
            // Autoplay blocked by browser policy, keep state paused, perfect fallback
            console.log("Audio autoplay blocked by browser policy. Interaction still required.");
          });
      }
    };

    window.addEventListener('click', handleFirstGesture);
    window.addEventListener('touchend', handleFirstGesture);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchend', handleFirstGesture);
      audio.pause();
    };
  }, [userInteracted]);

  // Handle Play/Pause explicitly
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering gesture event
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.error("Audio failed to play: ", err);
        });
    }
  };

  // Toggle Mute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const nextMuted = !muted;
    audioRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3" id="wedding-audio-player">
      {/* Play/celebrate suggestion tooltip */}
      {showTooltip && (
        <div className="bg-[#4a0e0e] border border-[#b8860b]/40 text-[#fdf9f3] text-[11px] px-3 py-1.5 rounded-full shadow-lg font-serif max-w-44 leading-tight animate-bounce hidden sm:flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#b8860b] shrink-0" />
          <span>Tap anywhere to hear pure Shahnai melody!</span>
        </div>
      )}

      {/* Main Music Widget */}
      <div 
        className={`relative flex items-center p-2 rounded-full border shadow-xl transition-all duration-500 backdrop-blur-md 
        ${isPlaying 
          ? 'bg-[#fdfbf6]/95 border-[#b8860b]/60 text-[#4a0e0e]' 
          : 'bg-white/90 border-stone-300 text-stone-500'
        }`}
      >
        {/* Progress SVG Ring around the core play button */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <svg className="w-full h-full -rotate-90 scale-[1.03]" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="transparent"
              stroke={isPlaying ? '#b8860b' : '#dfc59a'} // gold vs neutral warm-stone
              strokeWidth="1.5"
              strokeDasharray="301.6"
              strokeDashoffset={301.6 - (301.6 * progress) / 100}
              className="transition-all duration-300"
            />
          </svg>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 relative overflow-hidden focus:outline-none hover:scale-105 cursor-pointer
          ${isPlaying 
            ? 'bg-[#4a0e0e] text-white shadow-md shadow-[#4a0e0e]/20' 
            : 'bg-neutral-100 text-[#b8860b]'
          }`}
          title={isPlaying ? 'Pause Melody' : 'Play Celebration Sitar'}
          aria-label={isPlaying ? 'Pause Melody' : 'Play Celebration Sitar'}
          id="audio-pulse-control-btn"
        >
          {isPlaying ? (
            <div className="flex gap-[2px] items-end justify-center h-4 w-4">
              <span className="w-[3px] bg-white rounded-full animate-[soundWave_0.8s_ease-in-out_infinite_alternate]" style={{ height: '50%' }} />
              <span className="w-[3px] bg-white rounded-full animate-[soundWave_1.1s_ease-in-out_infinite_alternate]" style={{ height: '90%' }} />
              <span className="w-[3px] bg-white rounded-full animate-[soundWave_0.9s_ease-in-out_infinite_alternate]" style={{ height: '70%' }} />
              <span className="w-[3px] bg-white rounded-full animate-[soundWave_1.2s_ease-in-out_infinite_alternate]" style={{ height: '40%' }} />
            </div>
          ) : (
            <Music className="w-5 h-5 animate-pulse" />
          )}
        </button>

        {/* Small Volume Muted indicators with visual width expansion */}
        {isPlaying && (
          <div className="flex items-center gap-1.5 pl-2 pr-1 transition-all duration-500 max-w-[70px] overflow-hidden">
            <button
              onClick={toggleMute}
              className="p-1 rounded-full text-[#b8860b] hover:text-[#8c6203] transition-colors focus:outline-none cursor-pointer"
              title={muted ? 'Unmute' : 'Mute'}
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? <VolumeX className="w-4 h-4 text-red-700" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <span className="text-[9px] uppercase tracking-widest font-serif text-[#b8860b] font-bold shrink-0 animate-pulse flex items-center pr-1">
              <Flame className="w-3 h-3 text-[#b8860b] shrink-0 inline mr-0.5 animate-spin" />
              Raga
            </span>
          </div>
        )}
      </div>

      {/* Styled inline keyframe for musical equalizer specifically inside the CSS */}
      <style>{`
        @keyframes soundWave {
          0% { height: 15%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
