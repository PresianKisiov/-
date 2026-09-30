import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 mt-auto border-t border-[#10b981]/20 flex flex-col items-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500 relative z-10">
      <div className="text-center space-y-1">
        <p>© {new Date().getFullYear()} Преско. Всички права запазени.</p>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6">
        <a 
          href="https://www.instagram.com/p.kisyovv/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-500 hover:text-[#34d399] transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg touch-manipulation active:scale-95"
        >
          <Instagram size={20} />
          <span className="sr-only">Instagram</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/presian-kisyov/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-500 hover:text-[#34d399] transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg touch-manipulation active:scale-95"
        >
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a 
          href="mailto:preskokisiov@gmail.com" 
          className="text-zinc-500 hover:text-[#34d399] transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg touch-manipulation active:scale-95"
        >
          <Mail size={20} />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </footer>
  );
}
