import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { PortfolioItem, CategoryType } from '../types';
import { Play, Eye, X, BarChart2, Video, Sparkles } from 'lucide-react';
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

  // Animation variants for screen-entry
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  return (
    <section id="work" className="w-full bg-zinc-950 px-4 md:px-8 py-24 border-t border-zinc-900 relative">
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
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-semibold">Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Selected Creative Solutions
            </h2>
            <p className="text-sm text-zinc-500 mt-2 max-w-md font-sans font-light">
              A premium catalog of video projects optimized for high audience retention and high click-rate thumbnail deliverables.
            </p>
          </div>

          {/* Solid Theme Filters */}
          <div className="flex flex-wrap items-center bg-zinc-900 p-1 rounded-lg border border-zinc-800/80 w-full sm:w-fit">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                filter === 'video' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Video className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline sm:inline">Video Editing</span>
              <span className="inline xs:hidden">Videos</span>
            </button>
            <button
              onClick={() => setFilter('thumbnail')}
              className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                filter === 'thumbnail' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline sm:inline">Thumbnail Design</span>
              <span className="inline xs:hidden">Thumbnails</span>
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
                className="group relative bg-zinc-900 border border-zinc-900 hover:border-zinc-800 rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)'
                }}
              >
                {/* Media Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-102"
                  />
                  
                  {/* Dark gradient slide-up on hover (solid zinc tones) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-80" />
                  
                  {/* Hover controls play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-950/30 backdrop-blur-[1px]">
                    <div className="p-4 bg-blue-600 rounded-full text-white shadow-lg shadow-blue-900/40 scale-90 group-hover:scale-100 duration-200">
                      {item.category === 'video' ? (
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Category Label Pin (Solid colors) */}
                  <span className="absolute top-3 left-3 px-2 py-1 text-[9px] font-mono tracking-wider uppercase rounded text-white font-semibold shadow-sm bg-zinc-900/90 border border-zinc-800">
                    {item.category === 'video' ? 'Editing Reel' : 'Thumbnail Cover'}
                  </span>

                  {/* Duration badge or stats preview */}
                  {item.duration && (
                    <span className="absolute bottom-3 right-3 px-1.5 py-0.5 text-[9px] font-mono bg-black/80 rounded border border-zinc-800 text-zinc-300">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Body Info */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                      {item.client}
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-100 mt-1 line-clamp-1 group-hover:text-blue-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>

                  {/* Stats & Tools Footnote */}
                  <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] font-mono tracking-wide text-zinc-500 bg-zinc-950 border border-zinc-900 px-1.5 py-0.5 rounded">
                        {item.softwareUsed[0]}
                      </span>
                    </div>
                    
                    {item.stats && (
                      <span className="text-[11px] font-mono font-bold text-blue-400">
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
                className="relative bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-4xl max-h-[calc(100vh-2.5rem)] md:max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col"
              >
                {/* Close Button Pin */}
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setPlayingVideo(false);
                  }}
                  className="absolute top-4 right-4 z-40 p-2 bg-black/40 hover:bg-black/80 rounded-full text-zinc-400 hover:text-white transition-colors duration-250 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {selectedItem.category === 'video' ? (
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
                    <div className="p-6 md:p-8 bg-zinc-900 border-t border-zinc-800 flex flex-col justify-between gap-8">
                      <div>
                        {/* Pill Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded text-white font-semibold bg-zinc-800 border border-zinc-700">
                            Cinematic Edit
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                            Client: {selectedItem.client}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-display font-medium text-white leading-snug">
                          {selectedItem.title}
                        </h3>
                        
                        {/* Performance Metric box */}
                        {selectedItem.stats && (
                          <div className="mt-5 p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center gap-3 max-w-md">
                            <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400">
                              <BarChart2 className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{selectedItem.stats.label}</p>
                              <p className="text-base font-mono font-bold text-white">{selectedItem.stats.value}</p>
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-zinc-300 mt-5 leading-relaxed font-sans font-light max-w-3xl">
                          {selectedItem.description}
                        </p>
                      </div>

                      {/* Watch Next playlist inside scroll viewport */}
                      {portfolioItems.filter(item => item.videoUrl && item.videoUrl !== selectedItem.videoUrl).length > 0 && (
                        <div className="border-t border-zinc-800/60 pt-6">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4 font-semibold flex items-center justify-between">
                            <span>Watch Other Clips</span>
                            <span className="text-[8px] text-blue-400 bg-blue-900/10 px-1.5 py-0.5 rounded border border-blue-900/20">Click to Switch</span>
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
                                  className="group relative rounded-lg overflow-hidden aspect-video border border-zinc-800 hover:border-blue-500/50 bg-zinc-950 cursor-pointer shadow transition-all duration-300 flex items-center justify-center"
                                >
                                  <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-102 transition-all duration-350"
                                  />
                                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                                  <div className="absolute p-1 bg-blue-600 rounded-full text-white shadow opacity-0 group-hover:opacity-105 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                                  </div>
                                  
                                  {item.duration && (
                                    <span className="absolute bottom-1 right-1 px-1 py-0.2 text-[8px] font-mono bg-black/95 text-zinc-300 rounded border border-zinc-800">
                                      {item.duration}
                                    </span>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 pt-6 border-t border-zinc-800/65 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        {/* Tech list */}
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Software used:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedItem.softwareUsed.map((tech) => (
                              <span key={tech} className="text-xs font-mono text-zinc-300 bg-zinc-850 border border-zinc-800 px-2.5 py-1 rounded">
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
                            className="w-full sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-mono uppercase font-semibold tracking-wider transition-colors cursor-pointer"
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
                    <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800">
                      <div>
                        {/* Pill Badge */}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded text-white font-semibold mb-4 bg-zinc-800 border border-zinc-700">
                          Thumbnail Cover
                        </span>
                        
                        <h3 className="text-xl font-display font-semibold text-white leading-snug">
                          {selectedItem.title}
                        </h3>
                        <p className="text-xs font-mono text-zinc-500 mt-1">Client: {selectedItem.client}</p>

                        {/* Performance Metric box */}
                        {selectedItem.stats && (
                          <div className="mt-5 p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400">
                              <BarChart2 className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{selectedItem.stats.label}</p>
                              <p className="text-base font-mono font-bold text-white">{selectedItem.stats.value}</p>
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-zinc-400 mt-5 leading-relaxed font-sans font-light">
                          {selectedItem.description}
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-zinc-800">
                        {/* Tech List */}
                        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2.5">Software & Stack:</p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {selectedItem.softwareUsed.map((tech) => (
                            <span key={tech} className="text-xs font-mono text-zinc-300 bg-zinc-850 border border-zinc-800 px-2.5 py-1 rounded">
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
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-mono uppercase font-semibold text-center tracking-wider transition-colors cursor-pointer"
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
