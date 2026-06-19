import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Menu, X, Sun, Moon } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 22
    }
  }
};

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-canvas/90 border-b border-borderGrid backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand/Logo (Solid, clean blue icon) */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-accentBlue flex items-center justify-center text-white font-mono font-bold text-xs sm:text-sm shadow group-hover:rotate-6 transition-transform">
              SE
            </div>
            <span className="font-display font-semibold text-sm tracking-widest text-textPrimary uppercase flex items-center gap-1">
              SAMI <span className="text-accentBlue font-bold">EDITS</span>
            </span>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto z-10">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 mr-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs font-mono uppercase tracking-wider text-textSecondary hover:text-textPrimary transition-colors cursor-pointer relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accentBlue group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Light/Dark Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 sm:p-2.5 rounded-lg border border-borderGrid bg-surface hover:bg-canvas text-textSecondary hover:text-textPrimary transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle visual theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-textPrimary" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
              )}
            </button>

            {/* Quick Connect Button - next to nav links in large screens */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4.5 py-1.5 sm:py-2.5 bg-accentBlue hover:opacity-90 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white rounded-lg shadow font-semibold transition-all cursor-pointer"
            >
              <span>Quick Connect</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-textSecondary hover:text-textPrimary transition-colors cursor-pointer flex items-center justify-center z-50 relative"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-textPrimary" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fade & Slide Up Overlay (Bottom to Top) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-canvas/95 backdrop-blur-md z-40 md:hidden flex flex-col justify-center items-center p-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="w-full max-w-sm flex flex-col gap-10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header info bar */}
                <div className="flex items-center justify-between border-b border-borderGrid pb-3">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary">
                    Menu Panel
                  </p>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full border border-borderGrid bg-surface flex items-center justify-center text-textSecondary hover:text-textPrimary transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Staggered Navigation Items list */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-1"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.id} variants={itemVariants}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="w-full text-center text-2xl font-display font-medium text-textSecondary hover:text-accentBlue py-4 cursor-pointer transition-colors relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accentBlue group-hover:w-12 transition-all duration-300" />
                      </button>
                    </motion.div>
                  ))}
                  
                  {/* Quick Connect / Work with me button */}
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full text-center text-2xl font-display font-semibold text-accentBlue hover:opacity-90 py-4 cursor-pointer transition-colors relative group flex items-center justify-center gap-2"
                    >
                      <span>Work with Me</span>
                      <Send className="w-5 h-5 text-accentBlue group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </button>
                  </motion.div>
                </motion.div>

                {/* Footer details */}
                <div className="flex flex-col items-center gap-3 pt-6 border-t border-borderGrid">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-accentBlue flex items-center justify-center text-white font-mono font-bold text-[10px]">
                      SE
                    </div>
                    <span className="font-display font-semibold text-xs tracking-wider text-textPrimary">
                      SAMI <span className="text-accentBlue">EDITS</span>
                    </span>
                  </div>
                  <p className="text-[9px] font-mono text-textSecondary uppercase tracking-widest mt-1">
                    Samuel Fitsum © 2026
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
