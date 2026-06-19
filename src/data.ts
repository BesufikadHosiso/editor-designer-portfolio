import { PortfolioItem, Service, Testimonial, Stat } from './types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'vid-1',
    title: 'Cinematic Travel Reel - Pacific Coastline',
    category: 'longform',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    tags: ['Color Grading', 'Sound Design', 'Speed Ramping'],
    client: 'Vagabond Travel Co.',
    stats: { label: 'Retention Rate', value: '72%' },
    description: 'A fast-paced, high-energy travel montage engineered to maximize retention in the first 5 seconds. Features dynamic motion blur transitions, custom audio soundscapes, and cinematic teal-and-orange grading.',
    duration: '1:45',
    softwareUsed: ['Premiere Pro', 'DaVinci Resolve']
  },
  {
    id: 'vid-2',
    title: 'Tech Unboxing: Next-Gen Smartphone Review',
    category: 'longform',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    tags: ['Motion Graphics', 'B-Roll Editing', 'Cinematic LUTs'],
    client: 'MK-Tech Reviews',
    stats: { label: 'Views Generated', value: '1.2M+' },
    description: 'Slick and ultra-precise tech review with micro-glowing text overlays, dynamic speed ramps, and multi-camera synchronous editing for clean interactive transitions.',
    duration: '12:14',
    softwareUsed: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'vid-3',
    title: 'Gaming Championship Hype Video 2026',
    category: 'longform',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    tags: ['Beat Syncing', 'Screen Shakes', 'Visual FX'],
    client: 'Esports League EU',
    stats: { label: 'Audience Retention', value: '84%' },
    description: 'Hype montage synchronized to a custom industrial soundtrack. Every strike, camera slide, and drop triggers visual screen shakes, chromatic aberration transitions, and sound effect accents.',
    duration: '0:52',
    softwareUsed: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'vid-4',
    title: 'Sound Design & Beats Showcase Studio Session',
    category: 'longform',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    tags: ['Audio Mixing', 'Foley FX', 'Rhythmic Triggers'],
    client: 'SubBass Records',
    stats: { label: 'Audio Engagement', value: '95%' },
    description: 'A close-up studio session demonstrating Foley sound synthesis, dynamic audio mastering and rhythmic video speed edits matching high-pitch subwoofers.',
    duration: '9:37',
    softwareUsed: ['Premiere Pro', 'Audition']
  },
  {
    id: 'short-1',
    title: 'Minimalist Design Trends - Aesthetic TikTok',
    category: 'shorts',
    imageUrl: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    tags: ['Dynamic Captions', 'Sound Design', '9:16 Editing'],
    client: 'ByteTech Media',
    stats: { label: 'TikTok Views', value: '3.4M' },
    description: 'A vertical reel focused on minimalist architecture. Formatted with automated pop-in transcripts, visual zoom trackers, and curated background loops.',
    duration: '0:45',
    softwareUsed: ['CapCut', 'After Effects']
  },
  {
    id: 'short-2',
    title: 'The AI Shift - High-Hook YouTube Short',
    category: 'shorts',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    tags: ['Vibrant Text', 'Fast Pacing', 'Sound Hooks'],
    client: 'Future Mind Group',
    stats: { label: 'Retention Rate', value: '112%' },
    description: 'Highly engaging explainer short featuring custom progress bars, interactive zooms, and hand-selected sound effect triggers every 1.5 seconds.',
    duration: '0:58',
    softwareUsed: ['CapCut', 'Premiere Pro']
  },
  {
    id: 'short-3',
    title: 'Stock Market Crash - TikTok Finance Reel',
    category: 'shorts',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    tags: ['Emoji Pops', 'Zoom Effects', 'Highlight Clips'],
    client: 'Capital Insight',
    stats: { label: 'Shorts CTR', value: '15.4%' },
    description: 'Slick vertical breakdown of major finance trends. Built to capture infinite scroll attention with high contrast overlays and visual pointers.',
    duration: '0:55',
    softwareUsed: ['Premiere Pro', 'CapCut']
  },
  {
    id: 'short-4',
    title: 'VFX Behind The Scenes - Reels Transition',
    category: 'shorts',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    tags: ['VFX Editing', 'Splitscreen', 'Soundscapes'],
    client: 'Backyard Studios',
    stats: { label: 'Engagement Rate', value: '24%' },
    description: 'A seamless before-and-after mask transition showing the raw green-screen clip versus the fully-color-graded final CGI background render, customized for Instagram Reels.',
    duration: '0:30',
    softwareUsed: ['After Effects', 'Premiere Pro']
  }
];

export const services: Service[] = [
  {
    id: 'srv-1',
    title: 'High-Retention Video Editing',
    description: 'Masterfully edited longform content with pacing engineered for maximum audience retention. Dynamic visual hooks, seamless audio landscapes, and custom B-roll sequencing.',
    iconName: 'Play',
    features: [
      'Sub-second cuts matching audio triggers',
      'Advanced storytelling flow with structural retention hooks',
      'Cinematic color grading & LUT matching',
      'Custom subtitle animations and text-tracked popups'
    ]
  },
  {
    id: 'srv-2',
    title: 'Creative Motion Graphics & VFX',
    description: 'Injecting premium visual enhancements like custom animated lower-thirds, graphical screen transitions, overlay guides, and subtle VFX composites.',
    iconName: 'Sparkles',
    features: [
      'Sleek kinetic typography & dynamic maps integration',
      '3D camera-tracking text and modern floating mockups',
      'Sound-reactive graphical elements and beat syncs',
      'Seamless multi-platform transition packs'
    ]
  },
  {
    id: 'srv-3',
    title: 'Viral Vertical Shorts & Reels',
    description: 'Optimized 9:16 format conversion and native creation designed to capture immediately the fast-paced scroll behavior on TikTok, YouTube Shorts, and Reels.',
    iconName: 'Smartphone',
    features: [
      'Sub-second text-sync captions with energetic styling',
      'Smart face tracking for action vertical zooms',
      'Sound effect design and dynamic visual loops',
      'High Clickrate video outline covers and titles'
    ]
  }
];

export const stats: Stat[] = [
  { id: 'stat-1', value: '450', label: 'Longform Videos Edited', suffix: '+' },
  { id: 'stat-2', value: '800', label: 'Viral Vertical Shorts Created', suffix: '+' },
  { id: 'stat-3', value: '250', label: 'Total Views Generated', suffix: 'M+' },
  { id: 'stat-4', value: '85.2', label: 'Average Client Retention', suffix: '%' }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus K.',
    role: 'Founder, ByteTech Media (1.5M Subs)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    content: 'Our engagement and viewer retention went from a stagnant 45% to over 72% in the first month. The combination of sub-second pacing and customized sound design completely changed our channel velocity!',
    statsHighlight: '72% Retention Achieved'
  },
  {
    id: 'test-2',
    name: 'Diana Reyes',
    role: 'Creative Director, Wanderlust Channel',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    content: 'The storytelling pace of the longform travel assets has been incredible. Highly professional color grading and customized ambient soundscapes that keep the viewers glued to the screen.',
    statsHighlight: '+43% Subscriptions'
  },
  {
    id: 'test-3',
    name: 'Julian V.',
    role: 'Presenter, The Tech Horizon',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    content: 'The short-form shorts and reels are absolute masterclasses. Fast captions, perfect sound effects, and standard watch time has literally doubled on TikTok and YouTube Shorts.',
    statsHighlight: '2x Watch Time Scale'
  },
  {
    id: 'test-4',
    name: 'Sarah Peterson',
    role: 'Producer, Apex Gaming Network',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    content: 'Working on a monthly retainer plan with Samuel has been a game-changer. The turnarounds are ultra-fast, kinetic titles look gorgeous, and our video editors count him as a central asset.',
    statsHighlight: 'Ultra-Fast 24h Turnaround'
  }
];
