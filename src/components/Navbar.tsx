import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Начало', path: '#home' },
  { name: 'Защо?', path: '#why' },
  { name: 'Пътят ми', path: '#timeline' },
  { name: 'Мисия', path: '#mission' },
  { name: 'Фокус', path: '#skills' },
  { name: 'Проекти', path: '#projects' },
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          const sections = navLinks.map(link => link.path.substring(1));
          const scrollPosition = window.scrollY + 120; // Increased offset for better accuracy

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(`#${section}`);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
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
            className="p-3 rounded-full text-brand bg-surface/80 backdrop-blur-xl border border-border hover:bg-surface-hover transition-colors z-[100] relative"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        <div className="hidden sm:flex items-center">
          {/* Phone removed */}
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] sm:hidden"
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-[#020806]/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-[100dvh] flex flex-col justify-center px-8"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className={cn(
                      "text-4xl font-black tracking-tighter uppercase transition-all duration-300 flex items-center justify-between group",
                      activeSection === link.path 
                        ? "text-brand" 
                        : "text-white/40 hover:text-white"
                    )}
                  >
                    <span>{link.name}</span>
                    <ArrowRight 
                      size={28} 
                      className={cn(
                        "transition-all duration-300",
                        activeSection === link.path ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      )} 
                    />
                  </motion.a>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-black">Координати</p>
                  <p className="text-white font-medium">preskokisiov@gmail.com</p>
                </div>
                <div className="flex gap-4">
                  {[
                    { Icon: Instagram, href: "https://www.instagram.com/p.kisyovv/?hl=en" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/presian-kisyov/" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 text-zinc-400 hover:text-brand border border-white/5"
                    >
                      <social.Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
