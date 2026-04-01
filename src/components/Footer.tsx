import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 mt-auto border-t border-[#10b981]/20 flex flex-col items-center gap-6 text-sm text-zinc-500 relative z-10">
      <div className="text-center space-y-2">
        <p>© {new Date().getFullYear()} Преско. Всички права запазени.</p>
        <p className="text-zinc-600 max-w-md italic">
          Този сайт е създаден, за да следя собствения си прогрес и да споделям пътя си към усъвършенстване.
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="https://www.instagram.com/p.kisyovv/?hl=en" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#34d399] transition-colors hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
          <Instagram size={20} />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/presian-kisyov/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#34d399] transition-colors hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:preskokisiov@gmail.com" className="text-zinc-500 hover:text-[#34d399] transition-colors hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
          <Mail size={20} />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </footer>
  );
}
