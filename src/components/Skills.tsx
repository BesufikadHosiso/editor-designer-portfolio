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
    id: 'sound-design',
    title: 'Sound Design & Auditory Foley',
    description: 'Elevating videos with rich background atmospheres, custom swooshes, impacts, and crisp audio elements so the eyes follow what the ears hear with absolute precision.',
    icon: Sliders,
    software: ['Premiere Pro', 'DaVinci Resolve', 'Audition'],
    capabilities: [
      'Layering realistic foley sound FX for deep immersion',
      'Dynamic audio leveling and vocal noise removal',
      'Rhythmic soundtrack editing synced perfectly to drops'
    ],
    metric: 'Cinematic Soundscapes'
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
    title: 'Cinematic Color Grading & LUTs',
    description: 'Making your videos look outstanding with beautiful color styles. I match colors from different cameras and create a high-quality cinematic look.',
    icon: Sliders,
    software: ['DaVinci Resolve', 'Premiere Pro'],
    capabilities: [
      'Matching colors across different cameras smoothly',
      'Adding soft film-style glow and texture',
      'Creating a unique color style just for your brand'
    ],
    metric: 'Professional Film Look'
  },
  {
    id: 'motion-vfx',
    title: 'Motion Graphics & Special Effects',
    description: 'Adding professional moving elements like animated name cards, screen overlays, and custom logo intros directly into your video.',
    icon: Layers,
    software: ['After Effects', 'Alight Motion', 'CapCut'],
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
    <section id="skills" className="w-full bg-canvas px-4 md:px-8 py-24 relative overflow-hidden border-t border-borderGrid transition-colors duration-300">
      {/* Absolute Ambient Background Details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentBlue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header with entry animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-borderGrid rounded-lg mb-4 transition-colors duration-300">
            <Award className="w-3.5 h-3.5 text-accentBlue" />
            <span className="text-xs font-mono uppercase tracking-wider text-textSecondary font-semibold">My Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-textPrimary tracking-tight">
            Professional Editing & Sound Craft
          </h2>
          <p className="text-sm text-textSecondary mt-3 font-sans font-light max-w-lg mx-auto">
            Knowing the tools is just the start. I use smart pacing, cinematic grading, and rich auditory dynamics to keep your viewers watching from start to finish.
          </p>
        </motion.div>

        {/* Skills Layout - Beautifully crafted Grid containing modern story-driven cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsList.map((skill, index) => {
            const IconComponent = skill.icon;
            
            // Highlight sound design or video-editing to create a rhythmic layout
            const isHighlight = skill.id === 'video-editing' || skill.id === 'sound-design';
            
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
                    ? 'bg-surface border-borderGrid shadow-xl' 
                    : 'bg-surface/40 border-borderGrid hover:bg-surface hover:border-textSecondary/30'
                } ${isAloneInPair ? 'md:col-span-2' : ''}`}
              >
                {isHighlight && (
                  <div className="absolute inset-0 bg-accentBlue/5 rounded-xl pointer-events-none" />
                )}

                <div>
                  {/* Skill Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border shadow-md ${
                      isHighlight 
                        ? 'bg-accentBlue border-accentBlue/80 text-white' 
                        : 'bg-canvas border-borderGrid text-accentBlue group-hover:opacity-80 transition-colors'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    {/* Performance Metric Tag badge */}
                    <div className="px-2 py-1 bg-canvas border border-borderGrid rounded text-[9px] font-mono uppercase tracking-wider text-textSecondary transition-colors">
                      {skill.metric}
                    </div>
                  </div>

                  {/* Title & Narrative description */}
                  <h3 className="text-lg font-display font-medium text-textPrimary mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-textSecondary leading-relaxed font-sans font-light mb-6">
                    {skill.description}
                  </p>

                  {/* Software/Tools Badge elements */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {skill.software.map((sw) => (
                      <span 
                        key={sw} 
                        className="text-[9px] font-mono tracking-wide text-textSecondary bg-canvas border border-borderGrid px-2 py-0.5 rounded-md transition-colors"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  {/* Bulleted High-Fidelity Specs/Capabilities */}
                  <ul className="space-y-2.5 pt-5 border-t border-borderGrid transition-colors">
                    {skill.capabilities.map((capability, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-textSecondary font-sans font-light leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accentBlue" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-card action detail */}
                <div className="mt-8 pt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accentBlue">
                    See related showcase
                  </span>
                  <Zap className="w-3 h-3 text-accentBlue" />
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
          className="mt-16 bg-surface border border-borderGrid rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-canvas border border-borderGrid flex items-center justify-center text-accentBlue shrink-0 transition-colors">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-semibold text-textPrimary">Need Video & Shorts every month?</p>
              <p className="text-xs text-textSecondary font-sans font-light mt-0.5">I can make a simple plan to turn your long YouTube videos into great small shorts and reels every month.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-surface border border-borderGrid hover:bg-canvas text-textSecondary hover:text-textPrimary rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Work with Me
          </button>
        </motion.div>

      </div>
    </section>
  );
}
