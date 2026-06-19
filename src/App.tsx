import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  useEffect(() => {
    // Detect FormSubmit redirected callback query param
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      setShowSuccessBanner(true);
      // Clean query params quietly without reloading the page
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-canvas font-sans text-textPrimary overflow-x-hidden selection:bg-accentBlue/30 selection:text-textPrimary transition-colors duration-300">
      {/* Animated Success Banner for FormSubmit Redirects */}
      <AnimatePresence>
        {showSuccessBanner && (
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-24 left-4 right-4 md:left-auto md:right-8 md:w-[380px] z-50 bg-surface border border-emerald-500/30 rounded-xl p-5 shadow-2xl flex items-start gap-4"
            style={{
              boxShadow: '0 10px 40px rgba(16, 185, 129, 0.15)'
            }}
          >
            <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-semibold text-textPrimary">Transmission Received</h4>
              <p className="text-xs text-textSecondary mt-1 leading-normal">
                Your portfolio project proposal has successfully reached the main desk. Expect replies in less than 24 hours!
              </p>
            </div>
            <button
              onClick={() => setShowSuccessBanner(false)}
              className="p-1 hover:bg-surface rounded text-textSecondary hover:text-textPrimary transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Core Elements */}
      <Header theme={theme} onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />
      
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      {/* Standard Aesthetic Footer */}
      <footer className="w-full bg-canvas border-t border-borderGrid py-12 px-4 md:px-8 relative z-10 text-center transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accentBlue flex items-center justify-center text-white font-mono font-bold text-xs">
              S
            </div>
            <span className="text-xs font-mono tracking-widest text-textSecondary uppercase">
              Samuel Fitsum Creative Studio © 2026
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">
              Available for retainers worldwide
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
