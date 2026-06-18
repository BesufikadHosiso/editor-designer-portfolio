import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, Film, ArrowRight, Video, Layers, MousePointerClick } from 'lucide-react';

const skills = [
  'High-Retention Video Editor',
  'Thumbnail Composition Designer',
  'Cinematic Master Colorist',
  'Short-Form Engagement Strategist'
];

function TypingEffect() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = skills[currentIdx];

    const type = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIdx((prev) => (prev + 1) % skills.length);
          setSpeed(80);
          return;
        }
      }
      setSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIdx, speed]);

  return (
    <span className="inline-block relative">
      <span className="text-blue-500">{currentText}</span>
      <span className="absolute -right-1.5 top-0 bottom-0 w-[2px] bg-blue-500 animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-4 md:px-8 py-24">
      {/* Absolute Ambient Solid Spotlights (no gradients in elements) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Headline, Subtitle, Bullet indicators, Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg w-fit mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-xs font-mono tracking-wider text-zinc-400 font-medium uppercase">
              Creative Studio Workstation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white leading-[1.15] mb-6 h-auto"
          >
            I serve as your professional <br />
            <span className="font-bold min-h-[36px] sm:min-h-[44px] block h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500 mt-2">
              <TypingEffect />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mb-10 font-sans font-light"
          >
            Engineering top-tier retainers for media channels. I transform video rushes into high-retention stories, backed by heavy click-inducing A/B tested thumbnail designs.
          </motion.p>

          {/* Solid Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => scrollToSection('work')}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore My Portfolios</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium transition-all duration-200 rounded-lg text-center cursor-pointer"
            >
              Hire Me Immediately
            </button>
          </motion.div>
          
          {/* Trust indicators/stats in solid border bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8 border-t border-zinc-900 pt-8"
          >
            <div>
              <p className="text-xl sm:text-2xl font-mono font-medium text-white">150M+</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Impressions</p>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-zinc-900" />
            <div>
              <p className="text-xl sm:text-2xl font-mono font-medium text-white">12.4%</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Average CTR</p>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-zinc-900" />
            <div>
              <p className="text-xl sm:text-2xl font-mono font-medium text-white">40+</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Clients</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Modern Portrait of the Editor */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl bg-zinc-900 border border-zinc-800 p-3 shadow-2xl"
          >
            {/* The Image Wrapper Frame */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                alt="Creative Video Editor & Graphic Designer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
              />
              
              {/* Solid subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
              
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={() => scrollToSection('work')}
        >
          <ArrowDown className="w-4 h-4 text-zinc-500 hover:text-blue-500 duration-200" />
        </motion.div>
      </div>
    </section>
  );
}
