import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { PortfolioItem, CategoryType } from '../types';
import { Play, Eye, X, BarChart2, Video, Sparkles, Film, Smartphone } from 'lucide-react';
import CustomVideoPlayer from './CustomVideoPlayer';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | CategoryType>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [playingVideo, setPlayingVideo] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  // Grouped items
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="work" className="w-full bg-canvas px-4 md:px-8 py-24 border-t border-borderGrid relative transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header with entry animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accentBlue animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-accentBlue font-semibold p-1">Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-textPrimary tracking-tight">
              Selected Creative Solutions
            </h2>
            <p className="text-sm text-textSecondary mt-2 max-w-md font-sans font-light">
              A premium catalog of video projects optimized for high audience retention, fast pacing, and viral clickability.
            </p>
          </div>

          {/* Solid Theme Filters */}
          <div className="flex flex-wrap items-center bg-surface p-1 rounded-lg border border-borderGrid w-full sm:w-fit transition-colors duration-300">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                filter === 'all' 
                  ? 'bg-accentBlue text-white font-semibold' 
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              All Edits
            </button>
            <button
              onClick={() => setFilter('longform')}
              className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                filter === 'longform' 
                  ? 'bg-accentBlue text-white font-semibold' 
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              <Film className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline sm:inline">Long-form Video</span>
              <span className="inline xs:hidden">Long-form</span>
            </button>
            <button
              onClick={() => setFilter('shorts')}
              className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                filter === 'shorts' 
                  ? 'bg-accentBlue text-white font-semibold' 
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline sm:inline">Shorts & Reels</span>
              <span className="inline xs:hidden">Shorts</span>
            </button>
          </div>
        </motion.div>

        {/* Filtered Grid with native Framer Motion Screen Entry Observer */}
        <motion.div 
          key={filter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-surface border border-borderGrid hover:border-textSecondary/30 rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Media Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-canvas">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                  />
                  
                  {/* Dark gradient slide-up on hover (solid, clear tones) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                  
                  {/* Hover controls play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 backdrop-blur-[1px]">
                    <div className="p-4 bg-accentBlue rounded-full text-white shadow-lg scale-90 group-hover:scale-100 duration-200">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Category Label Pin (Solid colors) */}
                  <span className="absolute top-3 left-3 px-2 py-1 text-[9px] font-mono tracking-wider uppercase rounded text-white font-semibold shadow-sm bg-black/80 border border-borderGrid">
                    {item.category === 'longform' ? 'Long-form Edit' : 'Vertical Short'}
                  </span>

                  {/* Duration badge or stats preview */}
                  {item.duration && (
                    <span className="absolute bottom-3 right-3 px-1.5 py-0.5 text-[9px] font-mono bg-black/80 rounded border border-borderGrid text-white">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Body Info */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-textSecondary tracking-wider">
                      {item.client}
                    </span>
                    <h3 className="text-sm font-semibold text-textPrimary mt-1 line-clamp-1 group-hover:text-accentBlue transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>

                  {/* Stats & Tools Footnote */}
                  <div className="mt-4 pt-4 border-t border-borderGrid flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] font-mono tracking-wide text-textSecondary bg-canvas border border-borderGrid px-1.5 py-0.5 rounded">
                        {item.softwareUsed[0]}
                      </span>
                    </div>
                    
                    {item.stats && (
                      <span className="text-[11px] font-mono font-bold text-accentBlue">
                        {item.stats.value}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Lightbox / Details Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setSelectedItem(null);
                  setPlayingVideo(false);
                }}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-surface border border-borderGrid rounded-xl w-full max-w-4xl max-h-[calc(100vh-2.5rem)] md:max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col transition-colors duration-300"
              >
                {/* Close Button Pin */}
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setPlayingVideo(false);
                  }}
                  className="absolute top-4 right-4 z-40 p-2 bg-black/40 hover:bg-black/80 rounded-full text-white transition-colors duration-250 cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {selectedItem.category === 'longform' || selectedItem.category === 'shorts' ? (
                  /* --- CINEMATIC VIDEO LAYOUT (SCROLLABLE MODAL FLOW) --- */
                  <div className="flex flex-col w-full">
                    {/* Video at Top */}
                    <div className="w-full flex-shrink-0 bg-black relative">
                      <CustomVideoPlayer
                        videoUrl={selectedItem.videoUrl || ''}
                        posterUrl={selectedItem.imageUrl}
                        title={selectedItem.title}
                        client={selectedItem.client}
                        allVideos={portfolioItems}
                        onSelectVideo={(item) => {
                          setSelectedItem(item);
                          setPlayingVideo(true);
                        }}
                        hidePlaylist={true}
                      />
                    </div>
                    
                    {/* Details and other videos inside natural scroll flow */}
                    <div className="p-6 md:p-8 bg-surface border-t border-borderGrid flex flex-col justify-between gap-8 transition-colors duration-300">
                      <div>
                        {/* Pill Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded text-white font-semibold bg-accentBlue">
                            {selectedItem.category === 'longform' ? 'Long-form Edit' : 'Vertical Short'}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-textSecondary">
                            Client: {selectedItem.client}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-display font-medium text-textPrimary leading-snug">
                          {selectedItem.title}
                        </h3>
                        
                        {/* Performance Metric box */}
                        {selectedItem.stats && (
                          <div className="mt-5 p-4 bg-canvas border border-borderGrid rounded-xl flex items-center gap-3 max-w-md">
                            <div className="p-2.5 rounded-lg bg-accentBlue/10 text-accentBlue">
                              <BarChart2 className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary">{selectedItem.stats.label}</p>
                              <p className="text-base font-mono font-bold text-textPrimary">{selectedItem.stats.value}</p>
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-textSecondary mt-5 leading-relaxed font-sans font-light max-w-3xl">
                          {selectedItem.description}
                        </p>
                      </div>

                      {/* Watch Next playlist inside scroll viewport */}
                      {portfolioItems.filter(item => item.videoUrl && item.videoUrl !== selectedItem.videoUrl).length > 0 && (
                        <div className="border-t border-borderGrid pt-6">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary mb-4 font-semibold flex items-center justify-between">
                            <span>Watch Other Clips</span>
                            <span className="text-[8px] text-accentBlue bg-accentBlue/10 px-1.5 py-0.5 rounded border border-accentBlue/20">Click to Switch</span>
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {portfolioItems
                              .filter(item => item.videoUrl && item.videoUrl !== selectedItem.videoUrl)
                              .slice(0, 4)
                              .map((item) => (
                                <div
                                  key={item.id}
                                  onClick={() => {
                                    setSelectedItem(item);
                                    setPlayingVideo(true);
                                  }}
                                  className="group relative rounded-lg overflow-hidden aspect-video border border-borderGrid hover:border-accentBlue bg-canvas cursor-pointer shadow transition-all duration-300 flex items-center justify-center"
                                >
                                  <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-102 transition-all duration-350"
                                  />
                                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                                  <div className="absolute p-1 bg-accentBlue rounded-full text-white shadow opacity-0 group-hover:opacity-105 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                                  </div>
                                  
                                  {item.duration && (
                                    <span className="absolute bottom-1 right-1 px-1 py-0.2 text-[8px] font-mono bg-black/95 text-white rounded border border-borderGrid">
                                      {item.duration}
                                    </span>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 pt-6 border-t border-borderGrid flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        {/* Tech list */}
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary mb-2">Software used:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedItem.softwareUsed.map((tech) => (
                              <span key={tech} className="text-xs font-mono text-textSecondary bg-canvas border border-borderGrid px-2.5 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Request CTA */}
                        <div className="w-full sm:w-auto">
                          <button
                            onClick={() => {
                              setSelectedItem(null);
                              setPlayingVideo(false);
                              const contactEl = document.getElementById('contact');
                              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full sm:px-6 py-3 bg-accentBlue hover:opacity-90 text-white rounded text-xs font-mono uppercase font-semibold tracking-wider transition-colors cursor-pointer"
                          >
                            Request Custom Sample
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                ) : (
                  /* --- STANDARD IMAGE/COVER GRID LAYOUT --- */
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Media display side */}
                    <div className="lg:col-span-7 bg-black flex items-center justify-center relative min-h-[220px] sm:min-h-[350px] lg:min-h-0">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={selectedItem.imageUrl}
                          alt={selectedItem.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Details Sidebar Column */}
                    <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-borderGrid">
                      <div>
                        {/* Pill Badge */}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded text-white font-semibold mb-4 bg-accentBlue">
                          Thumbnail Cover
                        </span>
                        
                        <h3 className="text-xl font-display font-semibold text-textPrimary leading-snug">
                          {selectedItem.title}
                        </h3>
                        <p className="text-xs font-mono text-textSecondary mt-1">Client: {selectedItem.client}</p>

                        {/* Performance Metric box */}
                        {selectedItem.stats && (
                          <div className="mt-5 p-4 bg-canvas border border-borderGrid rounded-xl flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-accentBlue/10 text-accentBlue">
                              <BarChart2 className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary">{selectedItem.stats.label}</p>
                              <p className="text-base font-mono font-bold text-textPrimary">{selectedItem.stats.value}</p>
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-textSecondary mt-5 leading-relaxed font-sans font-light">
                          {selectedItem.description}
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-borderGrid">
                        {/* Tech List */}
                        <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary mb-2.5">Software & Stack:</p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {selectedItem.softwareUsed.map((tech) => (
                            <span key={tech} className="text-xs font-mono text-textSecondary bg-canvas border border-borderGrid px-2.5 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Modal Footer CTA */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setSelectedItem(null);
                              setPlayingVideo(false);
                              const contactEl = document.getElementById('contact');
                              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full py-3 px-4 bg-accentBlue hover:opacity-90 text-white rounded text-xs font-mono uppercase font-semibold text-center tracking-wider transition-colors cursor-pointer"
                          >
                            Request Custom Sample
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
