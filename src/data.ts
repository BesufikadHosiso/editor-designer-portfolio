import { PortfolioItem, Service, Testimonial, Stat } from './types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'vid-1',
    title: 'Cinematic Travel Reel - Pacific Coastline',
    category: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    tags: ['Color Grading', 'Sound Design', 'Speed Ramping'],
    client: 'Vagabond Travel Co.',
    stats: { label: 'Retention Rate', value: '72%' },
    description: 'A fast-paced, high-energy travel montage engineered to maximize retention in the first 5 seconds. Features dynamic motion blur transitions, custom audio soundscapes, and cinematic teal-and-orange grading.',
    duration: '1:45',
    softwareUsed: ['Premiere Pro', 'CapCut']
  },
  {
    id: 'thumb-1',
    title: 'Tech Review Redesign - Is this the future?',
    category: 'thumbnail',
    imageUrl: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=800&auto=format&fit=crop',
    tags: ['3D Text', 'Glow Effects', 'Color Correction'],
    client: 'ByteTech (1.4M Subs)',
    stats: { label: 'Click-Through Rate (CTR)', value: '11.8%' },
    description: 'A high-contrast tech product thumbnail featuring extreme highlights, custom 3D typography, and realistic atmospheric glow to draw the viewer\'s eyes directly to the central focal point.',
    softwareUsed: ['Photoshop', 'Lightroom']
  },
  {
    id: 'vid-2',
    title: 'Tech Unboxing: Next-Gen Smartphone Review',
    category: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    tags: ['Motion Graphics', 'B-Roll Editing', 'Cinematic LUTs'],
    client: 'MK-Tech Reviews',
    stats: { label: 'Views Generated', value: '1.2M+' },
    description: 'Slick and ultra-precise tech unboxing with micro-glowing text overlays, dynamic speed ramps, and multi-camera synchronous editing for clean interactive transitions.',
    duration: '12:14',
    softwareUsed: ['Premiere Pro', 'CapCut']
  },
  {
    id: 'thumb-2',
    title: 'Cyberpunk Game Release - Ultimate Guide',
    category: 'thumbnail',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    tags: ['Vibrant Neon', 'Character Outlines', 'Focal Highlights'],
    client: 'CyberGamer Pro',
    stats: { label: 'CTR Improvement', value: '+4.5%' },
    description: 'Designed targeting gaming audiences. Incorporated neon magenta/cyan rim lighting on the game character, paired with bold italicized typography and high value brush strokes.',
    softwareUsed: ['PixelLab', 'PicsArt', 'Remini']
  },
  {
    id: 'vid-3',
    title: 'Gaming Championship Hype Video 2026',
    category: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    tags: ['Beat Syncing', 'Screen Shakes', 'Visual FX'],
    client: 'Esports League EU',
    stats: { label: 'Audience Retention', value: '84%' },
    description: 'Hype montage synchronized to a custom industrial soundtrack. Every strike, camera slide, and drop triggers visual screen shakes, chromatic aberration transitions, and sound effect accents.',
    duration: '0:52',
    softwareUsed: ['Alight Motion', 'VN Editor', 'CapCut']
  },
  {
    id: 'thumb-3',
    title: 'Stock Market Crash - Protect Your Wealth',
    category: 'thumbnail',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    tags: ['Drama Contrast', 'Matte Painting', 'Typography'],
    client: 'Capital Insight (800K Subs)',
    stats: { label: 'Initial Click Rate', value: '14.2%' },
    description: 'A finance thumbnail featuring a high-risk dramatic background, 3D golden arrows of trend-reversal, and crisp typography utilizing the rule-of-thirds for visual impact.',
    softwareUsed: ['Photoshop']
  },
  {
    id: 'vid-4',
    title: 'Sound Design & Beats Showcase Studio Session',
    category: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    tags: ['Audio Mixing', 'Voley FX', 'Rhythmic Triggers'],
    client: 'SubBass Records',
    stats: { label: 'Audio Engagement', value: '95%' },
    description: 'A close-up studio session demonstrating Foley sound synthesis, dynamic audio mastering and rhythmic video speed edits matching high-pitch subwoofers.',
    duration: '9:37',
    softwareUsed: ['VN Editor', 'CapCut', 'Alight Motion']
  },
  {
    id: 'thumb-4',
    title: 'We Built a Rocket in our Backyard!',
    category: 'thumbnail',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    tags: ['Expression Grabs', 'Sky Replacement', 'Saturation Boost'],
    client: 'The Backyard Labs',
    stats: { label: 'CTR Scale', value: '10.9%' },
    description: 'Vibrant, high-saturation adventure thumbnail. Combines high-resolution face expression cutouts, custom colorful smoke plumes overlay, and custom atmospheric mist.',
    softwareUsed: ['PixelLab', 'PicsArt', 'Lightroom', 'Remini']
  }
];

export const services: Service[] = [
  {
    id: 'srv-1',
    title: 'High-Retention Video Editing',
    description: 'Masterfully edited clips with pacing engineered for maximum modern audience retention. Dynamic hooks, seamless audio landscapes, and custom B-roll sequencing.',
    iconName: 'Play',
    features: [
      'Sub-second cuts matching audio triggers',
      'Custom visual effect overlays (VFX)',
      'Cinematic color grading & LUT matching',
      'Dynamic typography & animated subtitle hooks'
    ]
  },
  {
    id: 'srv-2',
    title: 'High-Clickrate Thumbnail Design',
    description: 'Vibrant thumbnails constructed using composite image styling, professional lighting effects, and clean typography that stand out on overloaded feeds.',
    iconName: 'Sparkles',
    features: [
      'Dramatic lighting & portrait rim-lights',
      '3D custom typography with neon emissives',
      'Clickthrough-tested composition structures',
      'Extremely high color contrast and readability'
    ]
  },
  {
    id: 'srv-3',
    title: 'Social Media Asset Scaling',
    description: 'Format adaptation that converts standard video reels into high-performing short-form media tailored for YouTube Shorts, Instagram Reels, and TikTok.',
    iconName: 'Smartphone',
    features: [
      'Smart 9:16 vertical crop with visual trackers',
      'Retention-optimized caption style structures',
      'Multi-platform export optimization',
      'A/B tested visual cover variants'
    ]
  }
];

export const stats: Stat[] = [
  { id: 'stat-1', value: '250', label: 'Videos Edited', suffix: '+' },
  { id: 'stat-2', value: '500', label: 'Thumbnails Styled', suffix: '+' },
  { id: 'stat-3', value: '150', label: 'Total Views Generated', suffix: 'M+' },
  { id: 'stat-4', value: '12.4', label: 'Average CTR Achieved', suffix: '%' }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus K.',
    role: 'Founder, ByteTech Media (1.5M Subs)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    content: 'Our CTR went from a stagnant 5% to over 11.5% in the first month. The combination of intense thumbnail lighting with custom Premiere editing hooks completely changed our channel trajectory!',
    statsHighlight: '11.5% Peak CTR'
  },
  {
    id: 'test-2',
    name: 'Diana Reyes',
    role: 'Creative Director, Wanderlust Channel',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    content: 'The pacing in these travel reels is incredible. Highly professional color grading and customized ambient soundscapes that keep the viewer completely immersed. Engagement is through the roof!',
    statsHighlight: '+43% Engagement'
  },
  {
    id: 'test-3',
    name: 'Julian V.',
    role: 'Co-Host, The Crypto Podcast',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    content: 'Absolutely incredible attention to detail. Fast turnarounds, crystal clear 3D overlays, and our short-form content is earning double the average standard watch time.',
    statsHighlight: '2x Retention Rate'
  }
];
