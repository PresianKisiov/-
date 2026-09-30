import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 sm:py-14 mt-auto border-t border-brand/15 flex flex-col items-center gap-5 sm:gap-6 text-xs sm:text-sm text-zinc-500 relative z-10">
      {/* Bible Verse Quote */}
      <div className="max-w-xl mx-auto px-4 text-center space-y-2">
        <p className="text-zinc-300 font-normal italic text-sm sm:text-base leading-relaxed tracking-wide">
          „Не се безпокойте за нищо. Вместо това се молете за всичко, и Божият мир ще пази сърцата ви.“
        </p>
        <p className="text-[11px] font-mono tracking-widest text-brand uppercase font-medium">
          Филипяни 4:6-7
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <a 
          href="https://www.instagram.com/p.kisyovv/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:text-brand transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand/30 touch-manipulation active:scale-95"
        >
          <Instagram size={18} />
          <span className="sr-only">Instagram</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/presian-kisyov/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:text-brand transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand/30 touch-manipulation active:scale-95"
        >
          <Linkedin size={18} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a 
          href="mailto:preskokisiov@gmail.com" 
          className="text-zinc-400 hover:text-brand transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand/30 touch-manipulation active:scale-95"
        >
          <Mail size={18} />
          <span className="sr-only">Email</span>
        </a>
      </div>

      <div className="text-center text-zinc-600 text-xs">
        <p>© {new Date().getFullYear()} Преско. Всички права запазени.</p>
      </div>
    </footer>
  );
}
