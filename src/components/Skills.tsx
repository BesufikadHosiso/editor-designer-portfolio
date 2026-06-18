import { motion } from 'motion/react';
import { Video, Palette, Smartphone, Sliders, Layers, CheckCircle2, Award, Zap } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: any;
  software: string[];
  capabilities: string[];
  metric: string;
}

const skillsList: Skill[] = [
  {
    id: 'video-editing',
    title: 'High-Retention Video Editing',
    description: 'Keeping viewers interested in the first 3 seconds with great timing, clean sound effects, and nice pacing. I match the speed of the video to what your audience likes.',
    icon: Video,
    software: ['Premiere Pro', 'CapCut'],
    capabilities: [
      'Cutting videos perfectly to the sound and music',
      'Adding rich background sounds and audio effects',
      'Using smart editing tricks to keep viewers watching'
    ],
    metric: '90%+ Viewer Retention'
  },
  {
    id: 'thumbnail-design',
    title: 'Thumbnails that Get Clicks',
    description: 'Making eye-catching designs using bright colors, lovely lighting, clear 3D text, and professional image editing so people want to click.',
    icon: Palette,
    software: ['Photoshop', 'PixelLab', 'PicsArt', 'Lightroom', 'Remini'],
    capabilities: [
      '3D text and colorful glowing words',
      'Blending pictures and faces into the background smoothly',
      'Bright colors that look great on small mobile phone screens'
    ],
    metric: 'Up to 14% Click Rate (CTR)'
  },
  {
    id: 'shorts-reels',
    title: 'Short Videos (Shorts & Reels)',
    description: 'Turning long horizontal videos into exciting, fast vertical videos for YouTube Shorts, Instagram Reels, and TikTok.',
    icon: Smartphone,
    software: ['CapCut', 'Alight Motion', 'VN Editor'],
    capabilities: [
      'Cropping long videos to vertical with smart face tracking',
      'Adding fun moving text and captions',
      'Adding quick sound effects for every movement'
    ],
    metric: '3x More Likes & Shares'
  },
  {
    id: 'color-audio',
    title: 'Beautiful Colors (Color Grading)',
    description: 'Making your videos look outstanding with beautiful color styles. I match colors from different cameras and create a high-quality movie look.',
    icon: Sliders,
    software: ['Lightroom', 'Premiere Pro', 'CapCut'],
    capabilities: [
      'Matching colors across different cameras smoothly',
      'Adding soft film-style glow and texture',
      'Creating a unique color style just for your brand'
    ],
    metric: 'Professional Brand Look'
  },
  {
    id: 'motion-vfx',
    title: 'Motion Graphics & Special Effects',
    description: 'Adding professional moving elements like animated name cards, screen overlays, and custom logo intros directly into your video.',
    icon: Layers,
    software: ['Alight Motion', 'CapCut', 'Photoshop'],
    capabilities: [
      'Animating buttons, websites, and screens',
      'Adding glowing lines that move with the video',
      'Smooth and exciting transitions between scenes'
    ],
    metric: 'High-Quality Studio Look'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-zinc-950 px-4 md:px-8 py-24 relative overflow-hidden border-t border-zinc-900/60">
      {/* Absolute Ambient Background Details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header with entry animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg mb-4">
            <Award className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold font-mono">My Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Professional Editing & Design Skills
          </h2>
          <p className="text-sm text-zinc-500 mt-3 font-sans font-light max-w-lg mx-auto">
            Knowing the tools is just the start. I use smart editing tricks, clean designs, and great sound effects to keep your viewers watching from start to finish.
          </p>
        </motion.div>

        {/* Skills Layout - Beautifully crafted Grid containing modern story-driven cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsList.map((skill, index) => {
            const IconComponent = skill.icon;
            
            // Highlight thumbnail design or video-editing to create a rhythmic layout
            const isHighlight = skill.id === 'video-editing' || skill.id === 'thumbnail-design';
            
            const isLast = index === skillsList.length - 1;
            const isAloneInPair = isLast && (skillsList.length % 2 !== 0);
            
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', damping: 20 }}
                className={`group relative rounded-xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isHighlight 
                    ? 'bg-zinc-900 border-zinc-800/80 shadow-xl' 
                    : 'bg-zinc-900/30 border-zinc-950 hover:bg-zinc-900/50 hover:border-zinc-900/60'
                } ${isAloneInPair ? 'md:col-span-2' : ''}`}
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)'
                }}
              >
                {isHighlight && (
                  <div className="absolute inset-0 bg-blue-600/5 rounded-xl pointer-events-none" />
                )}

                <div>
                  {/* Skill Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border shadow-md ${
                      isHighlight 
                        ? 'bg-blue-600 border-blue-500 text-white' 
                        : 'bg-zinc-950 border-zinc-850 text-blue-400 group-hover:text-blue-300 transition-colors'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    {/* Performance Metric Tag badge */}
                    <div className="px-2 py-1 bg-zinc-950 border border-zinc-850 rounded text-[9px] font-mono uppercase tracking-wider text-zinc-400">
                      {skill.metric}
                    </div>
                  </div>

                  {/* Title & Narrative description */}
                  <h3 className="text-lg font-display font-medium text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light mb-6">
                    {skill.description}
                  </p>

                  {/* Software/Tools Badge elements */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {skill.software.map((sw) => (
                      <span 
                        key={sw} 
                        className="text-[9px] font-mono tracking-wide text-zinc-400 bg-zinc-950/70 border border-zinc-900 px-2 py-0.5 rounded-md"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  {/* Bulleted High-Fidelity Specs/Capabilities */}
                  <ul className="space-y-2.5 pt-5 border-t border-zinc-900/80">
                    {skill.capabilities.map((capability, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans font-light leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-500" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-card action detail */}
                <div className="mt-8 pt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                    See related showcase
                  </span>
                  <Zap className="w-3 h-3 text-blue-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Unified Callout Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-zinc-900/30 border border-zinc-900/60 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-850 flex items-center justify-center text-blue-400 shrink-0">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Need Video & Shorts every month?</p>
              <p className="text-xs text-zinc-500 font-sans font-light mt-0.5">I can make a simple plan to turn your long YouTube videos into great small shorts and reels every month.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 hover:text-white rounded-lg text-xs font-mono uppercase tracking-wider text-zinc-300 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Work with Me
          </button>
        </motion.div>

      </div>
    </section>
  );
}
