import { useState, useEffect, useRef, SyntheticEvent, ChangeEvent } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  Loader2, 
  Sliders,
  ChevronDown,
  Tv
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../types';

interface CustomVideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
  title: string;
  client: string;
  allVideos: PortfolioItem[];
  onSelectVideo: (item: PortfolioItem) => void;
  hidePlaylist?: boolean;
}

export default function CustomVideoPlayer({
  videoUrl,
  posterUrl,
  title,
  client,
  allVideos,
  onSelectVideo,
  hidePlaylist = false
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [lastAction, setLastAction] = useState<'play' | 'pause' | null>(null);
  const [actionTrigger, setActionTrigger] = useState(0); // For triggering icon ripple resets

  const controlsTimeoutRef = useRef<number | null>(null);

  // Auto-hide controls after 2.5 seconds of inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
        setShowSpeedMenu(false);
      }
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  // Reset states when video URL changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setIsLoading(true);
    setPlaybackSpeed(1);
    
    if (videoRef.current) {
      videoRef.current.load();
      // Try playing automatically if already active
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    }
  }, [videoUrl]);

  // Playback handlers
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setLastAction('pause');
    } else {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Playback failed", err);
        });
      setLastAction('play');
    }
    setActionTrigger(prev => prev + 1);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCurrentTime(value);
    if (videoRef.current) {
      videoRef.current.currentTime = value;
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    setIsMuted(value === 0);
    if (videoRef.current) {
      videoRef.current.volume = value;
      videoRef.current.muted = value === 0;
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRef.current.muted = nextMuted;
    if (!nextMuted && volume === 0) {
      setVolume(0.5);
      videoRef.current.volume = 0.5;
    }
  };

  const handleSpeedSelect = (speed: number) => {
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Safe listener for native window fullscreen state changes
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // Helper formats seconds to MM:SS
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    const formattedMins = mins < 10 ? `0${mins}` : mins;
    const formattedSecs = secs < 10 ? `0${secs}` : secs;
    return `${formattedMins}:${formattedSecs}`;
  };

  // Filter other videos (excluding currently playing one, showing up to 4 video reels)
  const watchNextitems = allVideos.filter(item => item.videoUrl && item.videoUrl !== videoUrl);

  return (
    <div className="w-full flex flex-col bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800">
      
      {/* Video screen box */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          if (isPlaying) {
            setShowControls(false);
            setShowSpeedMenu(false);
          }
        }}
        className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden group select-none"
      >
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
          onEnded={handleVideoEnded}
          onClick={togglePlay}
          className="w-full h-full object-contain cursor-pointer"
          playsInline
        />

        {/* Center Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/20 backdrop-blur-[2px] z-20">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          </div>
        )}

        {/* Big Trigger Ripple Icons on Play/Pause Click */}
        <AnimatePresence>
          {lastAction && (
            <motion.div
              key={`${lastAction}-${actionTrigger}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.3 }}
              exit={{ opacity: 0, scale: 1.6 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute pointer-events-none p-4 rounded-full bg-blue-600/20 border border-blue-500/30 text-white z-20"
            >
              {lastAction === 'play' ? (
                <Play className="w-8 h-8 fill-white" />
              ) : (
                <Pause className="w-8 h-8 fill-white" />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Floating Badge Bar */}
        <div className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none transition-all duration-300 z-30 ${
          showControls ? 'opacity-100 translateY-0' : 'opacity-0 -translate-y-2'
        }`}>
          <div className="flex flex-col">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Client: {client}</p>
            <h4 className="text-sm font-semibold text-white tracking-tight">{title}</h4>
          </div>
          <span className="bg-blue-600 border border-blue-500 shadow-sm px-2.5 py-1 rounded text-[9px] font-mono uppercase text-white tracking-wider flex items-center gap-1 font-bold">
            <Tv className="w-3 h-3" />
            4K Media Player
          </span>
        </div>

        {/* Custom Video Controls overlay bottom */}
        <div className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/85 to-transparent px-4 pb-4 pt-12 flex flex-col gap-3 transition-opacity duration-300 z-30 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          
          {/* Timeline and scrubber */}
          <div className="flex items-center gap-3 group/track relative">
            <span className="text-[10px] font-mono text-zinc-400 tabular-nums">
              {formatTime(currentTime)}
            </span>
            
            <div className="relative flex-grow flex items-center">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeekChange}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:h-1.5 transition-all outline-none"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #27272a ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #27272a 100%)`
                }}
              />
              {/* Custom neon glowing playhead progress */}
              <div 
                className="absolute h-1 bg-blue-500 rounded-lg pointer-events-none shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>

            <span className="text-[10px] font-mono text-zinc-400 tabular-nums">
              {formatTime(duration)}
            </span>
          </div>

          {/* Buttons panel */}
          <div className="flex items-center justify-between">
            {/* Left buttons (Play, RePlay, Mute) */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    setCurrentTime(0);
                    if (!isPlaying) {
                      videoRef.current.play()
                        .then(() => setIsPlaying(true))
                        .catch(() => {});
                    }
                  }
                }}
                className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Replay Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Volume Controller block */}
              <div className="flex items-center gap-1.5 sm:gap-2 group/volume">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-0 md:group-hover/volume:w-16 w-12 sm:w-16 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white transition-all overflow-hidden"
                />
              </div>
            </div>

            {/* Right controls (Speed, Fullscreen) */}
            <div className="flex items-center gap-2 relative">
              
              {/* Playback rate speed drop-up */}
              <div className="relative">
                <button
                  onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                  className="px-2 py-1 flex items-center gap-1 text-[11px] font-mono uppercase bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-colors cursor-pointer hover:border-zinc-700"
                >
                  <span>{playbackSpeed}x</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                <AnimatePresence>
                  {showSpeedMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full right-0 mb-2 w-24 bg-zinc-900 border border-zinc-800 rounded-lg p-1 z-50 flex flex-col gap-0.5 shadow-2xl"
                    >
                      {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                        <button
                          key={speed}
                          onClick={() => handleSpeedSelect(speed)}
                          className={`w-full text-center py-1.5 text-xs font-mono rounded-md cursor-pointer transition-colors ${
                            playbackSpeed === speed 
                              ? 'bg-blue-600 text-white font-medium' 
                              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Real-time Watch next / project switcher placeholder panel */}
      {!hidePlaylist && watchNextitems.length > 0 && (
        <div className="bg-zinc-900/90 border-t border-zinc-800 p-4 w-full">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 font-semibold flex items-center justify-between">
            <span>Watch Next Clip (Placeholder Preview)</span>
            <span className="text-[8px] text-blue-400 bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-800/20">Click to switch instantly</span>
          </p>
          
          <div className="grid grid-cols-2 xs:grid-cols-4 gap-3">
            {watchNextitems.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectVideo(item);
                  if (controlsTimeoutRef.current) {
                    window.clearTimeout(controlsTimeoutRef.current);
                  }
                  setShowControls(true);
                }}
                className="group relative rounded-lg overflow-hidden aspect-video border border-zinc-800 hover:border-zinc-700 bg-zinc-950 cursor-pointer shadow transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-102 transition-all duration-350"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <div className="absolute p-1 bg-blue-600 rounded-full text-white shadow opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </div>
                
                {/* Micro Duration Tag */}
                {item.duration && (
                  <span className="absolute bottom-1 right-1 px-1 py-0.2 text-[8px] font-mono bg-black/90 text-zinc-300 rounded border border-zinc-800 scale-90">
                    {item.duration}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
