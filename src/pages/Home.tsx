import { motion } from 'motion/react';
import { Instagram, Mail, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="pb-20 min-h-screen selection:bg-brand/30 selection:text-brand relative">
      
      {/* Background Ambient Glows - Optimized for mobile 60/120fps scrolling */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-brand/[0.04] blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-brand/[0.04] blur-[80px]" />
        <div className="absolute top-[40%] right-[5%] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] rounded-full bg-brand/[0.03] blur-[70px]" />
      </div>

      {/* Hero Section - Clean, uncluttered and centered */}
      <section 
        id="home" 
        className="min-h-[calc(100dvh-5rem)] flex flex-col items-center justify-center text-center relative px-4 sm:px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl z-10 mx-auto flex flex-col items-center justify-center py-2"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] flex flex-wrap justify-center gap-x-3 sm:gap-x-5 select-none">
            <span className="inline-block transition-colors duration-200 hover:text-brand">Пресиян</span>
            <span className="inline-block transition-colors duration-200 hover:text-brand">Кисьов</span>
          </h1>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.section 
        id="about" 
        className="scroll-mt-24 space-y-6 sm:space-y-10 max-w-5xl mx-auto pt-10 sm:pt-16 px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-3 sm:space-y-4 text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">За <span className="text-brand">мен</span></h2>
        </div>

        <div className="relative p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0a1612]/60 border border-brand/20 hover:border-brand/35 transition-colors overflow-hidden shadow-[0_0_50px_rgba(0,229,153,0.06)]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 relative z-10 items-center">
            
            {/* Content Side */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Казвам се Пресиян и живея в Габрово. Обичам да правя неща. Сайтове, проекти, каквото ми дойде на ума. Не съм от хората, които могат да седят и да чакат времето да минава безцелно, постоянно си намирам занимания и се старая да се развивам.
                </p>
                <p>
                  Опитвам се да не си губя времето и да не давам обещания, които не мога да изпълня. Понякога успявам, понякога не, но поне се старая. Постоянно ми хрумват идеи, за които нямам достатъчно време.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Upcoming Projects Section */}
      <motion.section 
        id="projects" 
        className="scroll-mt-24 space-y-6 sm:space-y-8 max-w-5xl mx-auto pt-10 sm:pt-16 px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0a1612]/60 border border-brand/20 hover:border-brand/35 transition-colors overflow-hidden text-center shadow-[0_0_40px_rgba(0,229,153,0.04)]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="space-y-2 sm:space-y-3 relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-mono tracking-widest text-brand uppercase font-medium">Очаквайте</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Нови проекти предстоят</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              В процес на разработка са нови идеи и проекти. Скоро ще бъдат представени тук.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="scroll-mt-24 space-y-6 sm:space-y-10 pt-10 sm:pt-16 px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-3 sm:space-y-4 text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">Свържете се с мен</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <motion.a 
            href="https://www.linkedin.com/in/presian-kisyov/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 active:scale-[0.98] transition-all group touch-manipulation"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-105 transition-transform">
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-base">LinkedIn</h3>
              <p className="text-zinc-500 text-xs font-medium mt-0.5">Presiyan</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/p.kisyovv/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 active:scale-[0.98] transition-all group touch-manipulation"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-105 transition-transform">
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-base">Instagram</h3>
              <p className="text-zinc-500 text-xs font-medium mt-0.5">@p.kisyovv</p>
            </div>
          </motion.a>

          <motion.a 
            href="mailto:preskokisiov@gmail.com" 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 active:scale-[0.98] transition-all group col-span-1 sm:col-span-2 lg:col-span-1 touch-manipulation"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-base">Имейл</h3>
              <p className="text-zinc-500 text-xs font-medium mt-0.5 truncate max-w-full">preskokisiov@gmail.com</p>
            </div>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
