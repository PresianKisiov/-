import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Начало', path: '#home' },
  { name: 'Пътят ми', path: '#timeline' },
  { name: 'Мисия', path: '#mission' },
  { name: 'Фокус', path: '#skills' },
  { name: 'Речи', path: '#speech' },
  { name: 'Контакти', path: '#contact' },
];

interface NavbarProps {
  onNavClick?: () => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.path.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section with offset handled by scroll-mt classes in CSS
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (onNavClick) {
      onNavClick();
    }

    const element = document.getElementById(path.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8",
      isScrolled 
        ? "py-3 bg-[#020806]/80 backdrop-blur-lg border-b border-white/5 shadow-2xl" 
        : "py-4 sm:py-6 bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">Преско</span>
          <motion.svg 
            viewBox="0 0 200 200" 
            className="h-14 w-auto stroke-brand/90 fill-none -ml-3" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          >
            <path d="M 40 140 C 60 100, 80 60, 100 20 C 130 10, 150 30, 130 60 C 110 90, 80 90, 70 70" />
            <path d="M 85 80 C 100 70, 110 65, 120 60 L 95 95 C 105 105, 115 115, 125 125" />
            <path d="M 125 125 C 130 140, 100 170, 80 180 C 60 190, 50 170, 60 160 C 80 140, 120 120, 160 100" />
          </motion.svg>
        </motion.a>
        
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden sm:flex items-center gap-2 bg-surface/40 backdrop-blur-xl px-2 py-2 rounded-full border border-border shadow-sm"
        >
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative px-4 py-1.5 rounded-full",
                activeSection === link.path 
                  ? "text-black" 
                  : "text-zinc-400 hover:text-brand hover:bg-brand/10"
              )}
            >
              {activeSection === link.path && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </motion.a>
          ))}
        </motion.nav>

        <div className="flex items-center gap-4 sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-brand bg-surface/80 backdrop-blur-xl border border-border hover:bg-surface-hover transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>

        <div className="hidden sm:flex items-center">
          {/* Phone removed */}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed inset-0 bg-[#010a08] z-50 sm:hidden flex flex-col p-6 pt-24 overflow-hidden"
              >
                {/* Background Accents */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 20, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand/10 blur-[100px] rounded-full pointer-events-none" 
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05],
                    x: [0, -30, 0],
                    y: [0, 30, 0]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" 
                />

                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-full text-brand bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex flex-col gap-1 mt-4">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-6 ml-2">Навигация</p>
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.path}
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 + 0.1 }}
                      className={cn(
                        "text-3xl font-bold transition-all duration-300 py-3.5 px-4 rounded-2xl flex items-center justify-between group relative overflow-hidden",
                        activeSection === link.path 
                          ? "text-black" 
                          : "text-zinc-400 hover:text-white"
                      )}
                    >
                      {activeSection === link.path && (
                        <motion.div
                          layoutId="mobile-nav-active"
                          className="absolute inset-0 bg-brand -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                      <ArrowRight 
                        size={24} 
                        className={cn(
                          "transition-all duration-300 relative z-10",
                          activeSection === link.path ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                        )} 
                      />
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/10 relative z-10">
                  <p className="text-zinc-500 text-[10px] mb-4 ml-2 uppercase tracking-[0.2em] font-bold">Свържете се с мен</p>
                  <div className="flex gap-3">
                    <a href="https://www.instagram.com/p.kisyovv/?hl=en" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-4 rounded-2xl bg-white/5 text-zinc-400 hover:text-brand hover:bg-white/10 transition-all border border-white/5">
                      <Instagram size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/presian-kisyov/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-4 rounded-2xl bg-white/5 text-zinc-400 hover:text-brand hover:bg-white/10 transition-all border border-white/5">
                      <Linkedin size={22} />
                    </a>
                    <a href="mailto:preskokisiov@gmail.com" className="flex-1 flex items-center justify-center py-4 rounded-2xl bg-white/5 text-zinc-400 hover:text-brand hover:bg-white/10 transition-all border border-white/5">
                      <Mail size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
