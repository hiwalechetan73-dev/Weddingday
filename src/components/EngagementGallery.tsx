import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X } from 'lucide-react';
import images from 'src/assets/images';
interface GalleryItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: string;
  aspect: string; // descriptive aspect ratio detail
}

export default function EngagementGallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const photos: GalleryItem[] = [
    {
      id: 'photo-1',
      images : '09222913-f78d-4e95-b56a-7d757a8090fd.jpeg',
      title: 'Moments of Serene Connection',
      caption: 'A gentle look, a shared breath, beginning an auspicious lease of life in perfect harmony.',
      category: 'Soulmates',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 'photo-2',
      images: 'a127b1a8-4873-401d-800d-54572a71491a.jpeg',
      title: 'Joy Beneath the Marigold Canopy',
      caption: 'Laughter echoing like soft bells under the warmth of the golden morning sun.',
      category: 'Candids',
      aspect: 'aspect-[3/4]'
    }
  ];

  // Restrict and support only jpeg/jpg images
  const supportedPhotos = photos.filter(photo => {
    const filename = photo.src.split('?')[0].toLowerCase();
    return filename.endsWith('.jpeg') || filename.endsWith('.jpg');
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16" id="engagement-photos-section">
      
      {/* Editorial Header */}
      <div className="text-center mb-10">
        <span className="font-script text-[#b8860b] text-4xl sm:text-5xl block mb-2">Pre-Wedding Frames</span>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1e2f24] font-bold tracking-widest uppercase">
          Love in Focus
        </h2>
        <p className="text-stone-500 font-sans text-xs tracking-[0.25em] uppercase mt-3 max-w-md mx-auto leading-relaxed">
          Glimpses of Mohit &amp; Komal's journey towards their sacred union &bull; Designed by hand
        </p>
        <div className="flex items-center justify-center gap-2 mt-5">
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#b8860b]" />
          <span className="text-[#b8860b] text-base animate-pulse">🪷</span>
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#b8860b]" />
        </div>
      </div>

      {/* Symmetric Dual-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
        {supportedPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="bg-[#fdfcfb] border border-[#dfc59a]/35 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            id={`gallery-item-${photo.id}`}
          >
            {/* Fine line decorative margin insert for a custom scrapbook feel */}
            <div className="p-3">
              {/* Image Container with Custom Aspect */}
              <div className={`relative w-full overflow-hidden rounded-xl ${photo.aspect} bg-[#fdfcfb] border border-[#dfc59a]/20`}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />

                {/* Aesthetic Glassmorphic Overlay on Hover */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 z-10">
                  <div className="p-3.5 rounded-full bg-white/95 text-[#1e2f24] shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="w-5 h-5 text-[#b8860b]" />
                  </div>
                  <span className="text-[#dfc59a] font-serif-display text-xs uppercase tracking-[0.2em] font-bold mt-4 drop-shadow-md">
                    View Portrait
                  </span>
                </div>

                {/* Category Tag on Top-Left */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#1e2f24] font-serif-display text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-xs border border-stone-200/50">
                  {photo.category}
                </span>

                {/* Fine dual gold corners */}
                <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#dfc59a]" />
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#dfc59a]" />
              </div>
            </div>

            {/* Informational Footer Block - Clean & Artistic */}
            <div className="px-5 pb-6 select-none text-center">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent mx-auto mb-4" />
              <h4 className="font-serif-display text-sm font-bold tracking-wider uppercase text-[#1e2f24] group-hover:text-amber-700 transition-colors leading-tight mb-2">
                {photo.title}
              </h4>
              <p className="text-stone-500 font-sans text-xs italic line-clamp-2 max-w-xs mx-auto leading-relaxed">
                "{photo.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Lightbox/Zoom-in Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 bg-[#0e1411]/97 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4">
            
            {/* Modal Closer bar (top-right) */}
            <div className="absolute top-6 right-6 z-55">
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="w-11 h-11 rounded-full bg-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-300 border border-white/10 focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Visual Box Content */}
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative max-w-2xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame with Antique Gold Border Detail */}
              <div className="bg-white/[0.02] border border-white/10 p-3 rounded-2xl overflow-hidden aspect-auto max-h-[70vh] shadow-2xl relative">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="rounded-xl max-h-[66vh] object-contain w-full"
                />
                
                {/* Visual Accent Corner Highlights */}
                <div className="absolute top-5 left-5 w-3 h-3 border-t-2 border-l-2 border-[#dfc59a]/60" />
                <div className="absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-[#dfc59a]/60" />
                <div className="absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-[#dfc59a]/60" />
                <div className="absolute bottom-5 right-5 w-3 h-3 border-b-2 border-r-2 border-[#dfc59a]/60" />
              </div>

              {/* Bottom Caption Overlay bar */}
              <div className="w-full text-center mt-6 text-white max-w-lg">
                <span className="text-[9px] text-[#dfc59a] font-bold uppercase tracking-[0.25em] block mb-1.5">
                  {activePhoto.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold select-none text-[#fcfbf9] tracking-wide mb-2">
                  {activePhoto.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-[13px] font-sans leading-relaxed italic">
                  "{activePhoto.caption}"
                </p>
                <div className="w-12 h-[1px] bg-[#dfc59a]/30 mx-auto mt-4" />
              </div>
            </motion.div>

            {/* Background tap to exit */}
            <div 
              className="absolute inset-0 -z-10 cursor-zoom-out" 
              onClick={() => setActivePhoto(null)} 
            />
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
