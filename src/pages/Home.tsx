import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Users, Instagram, Mail, Linkedin, Shield, Heart, Calendar, Lightbulb, ArrowRight, Compass, Info, Sparkles, MapPin, Rocket, HelpCircle, BatteryFull, BatteryMedium, Droplets, Utensils, HomeIcon, GraduationCap, Pill, Coins, Repeat, Target, Wallet } from 'lucide-react';
import { cn } from '../lib/utils';

const timeline = [
  {
    period: '11-12г.',
    title: 'Откриване на нови светове',
    desc: 'Тогава за първи път прочетох книги, които разшириха мирогледа ми и ми показаха нови възможности в света.',
    lesson: 'Тогава разбрах колко е важно четенето и как то разширява хоризонтите ми.'
  },
  {
    period: '12-14г.',
    title: 'Опити и израстване',
    desc: 'Време на интензивни опити, нови идеи и постоянно развитие в различни посоки.',
    lesson: 'Не всичко е толкова лесно, колкото изглежда, и социалните мрежи често изкривяват представата за успеха.'
  },
  {
    period: '14г. —',
    title: 'Реализация и проекти',
    desc: 'Изграждам умения, взаимоотношения, правилно говорене пред публика и реализирам идеи в конкретни проекти.',
    lesson: 'Тепърва предстои...'
  }
];

export default function Home() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [showSpeeches, setShowSpeeches] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll to section with offset handled by scroll-mt classes in CSS
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="pb-20 min-h-screen selection:bg-brand/30 selection:text-brand relative">
      
      {/* Background Glows to fill empty sides */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
            x: [0, -40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03],
            x: [0, 30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-brand/5 blur-[100px]" 
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="flex flex-col justify-center pt-32 sm:pt-40 pb-12 sm:pb-16 relative px-4 sm:px-0">
        
        {/* Hero Section Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 sm:space-y-10 relative w-full max-w-5xl z-10 mx-auto text-center lg:text-left lg:pl-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center"
          >
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[9px] sm:text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              Личен сайт
            </span>
          </motion.div>
          
          <div className="flex items-baseline gap-2 sm:gap-4 justify-center lg:justify-start py-1">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none flex flex-wrap justify-center lg:justify-start">
              {"Пресиян Кисьов".split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="flex mr-[0.2em] last:mr-0">
                  {word.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 40, opacity: 0, rotateX: -90, filter: "blur(10px)", scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", scale: 1 }}
                      whileHover={{ 
                        y: -15,
                        scale: 1.2,
                        color: "#00e599",
                        textShadow: "0 0 40px rgba(0,229,153,0.9)",
                        transition: { duration: 0.2, type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ 
                        y: -40,
                        scale: 1.3,
                        color: "#00FF00",
                        textShadow: "0 0 60px rgba(0,255,0,1)",
                        transition: { type: "spring", stiffness: 500, damping: 15 }
                      }}
                      transition={{ 
                        y: {
                          duration: 1.2, 
                          delay: 0.2 + (wordIdx * 5 + i) * 0.08, 
                          ease: [0.22, 1, 0.36, 1] 
                        },
                        opacity: { duration: 0.8, delay: 0.2 + (wordIdx * 5 + i) * 0.08 },
                        rotateX: { duration: 1.2, delay: 0.2 + (wordIdx * 5 + i) * 0.08 },
                        filter: { duration: 1, delay: 0.2 + (wordIdx * 5 + i) * 0.08 },
                        scale: { duration: 1, delay: 0.2 + (wordIdx * 5 + i) * 0.08 }
                      }}
                      className="cursor-default inline-block origin-bottom"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-2 text-brand/80 font-medium tracking-widest uppercase text-[10px] sm:text-xs flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-brand" />
              На 15 години
              <span className="w-1 h-1 rounded-full bg-brand" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Values Section */}
      <motion.section 
        id="mission" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 pt-8 sm:pt-16 px-4 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-4 sm:space-y-10 text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tighter text-white">
            Моята Мисия & СПАСЕН
          </h2>
          <motion.p 
            className="text-lg sm:text-4xl lg:text-5xl text-brand font-sans font-light italic tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.04 } },
              hidden: {}
            }}
          >
            {'"Искам да имам всичко, само за да го раздам."'.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-4 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#0a1612]/40 border border-brand/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-brand/5 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6 sm:space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-2">
              {/* Person 1 */}
              <div className="space-y-4 sm:space-y-6 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a1612]/60 border border-brand/20">
                <h3 className="text-sm sm:text-lg font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  Осигурен човек (Аз)
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <div className="flex justify-between text-[8px] sm:text-xs text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1 sm:gap-1.5 group relative cursor-help">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveTooltip(activeTooltip === 'base-needs-1' ? null : 'base-needs-1');
                          }}
                          className="flex items-center gap-1 sm:gap-1.5 border-b border-dashed border-zinc-500/50 hover:text-brand transition-colors text-left"
                        >
                          <span>Базови нужди</span>
                          <Info size={12} className={cn("sm:size-[14px] transition-colors shrink-0", activeTooltip === 'base-needs-1' ? "text-brand" : "text-zinc-500")} />
                        </button>
                      </div>
                      <span className="text-white">100%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand w-full" />
                    </div>
                    <AnimatePresence>
                      {activeTooltip === 'base-needs-1' && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-[10px] sm:text-sm text-brand-dark/90 mt-2 leading-relaxed font-medium bg-brand/5 p-2 rounded-lg border border-brand/10"
                        >
                          Храна, подслон и сигурност - когато тези неща са на 100%, човек може да мисли за по-високи цели.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <div className="flex justify-between text-[8px] sm:text-xs text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1 sm:gap-1.5 group relative cursor-help">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveTooltip(activeTooltip === 'motives-1' ? null : 'motives-1');
                          }}
                          className="flex items-center gap-1 sm:gap-1.5 border-b border-dashed border-zinc-500/50 hover:text-brand transition-colors text-left"
                        >
                          <span>Мотиви</span>
                          <Info size={12} className={cn("sm:size-[14px] transition-colors shrink-0", activeTooltip === 'motives-1' ? "text-brand" : "text-zinc-500")} />
                        </button>
                      </div>
                      <span className="text-white">100%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-dark w-full" />
                    </div>
                    <AnimatePresence>
                      {activeTooltip === 'motives-1' && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-[10px] sm:text-sm text-brand-dark/90 mt-2 leading-relaxed font-medium bg-brand/5 p-2 rounded-lg border border-brand/10"
                        >
                          Вътрешният двигател, който ме кара да се развивам и да помагам на другите.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Person 2 */}
              <div className="space-y-4 sm:space-y-6 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a1612]/60 border border-brand/20">
                <h3 className="text-sm sm:text-lg font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Човек в нужда
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <div className="flex justify-between text-[8px] sm:text-xs text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1 sm:gap-1.5 group relative cursor-help">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveTooltip(activeTooltip === 'base-needs-2' ? null : 'base-needs-2');
                          }}
                          className="flex items-center gap-1 sm:gap-1.5 border-b border-dashed border-zinc-500/50 hover:text-red-500 transition-colors text-left"
                        >
                          <span>Базови нужди</span>
                          <Info size={12} className={cn("sm:size-[14px] transition-colors shrink-0", activeTooltip === 'base-needs-2' ? "text-red-500" : "text-zinc-500")} />
                        </button>
                      </div>
                      <span className="text-white">30%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[30%]" />
                    </div>
                    <AnimatePresence>
                      {activeTooltip === 'base-needs-2' && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-[10px] sm:text-sm text-red-400 mt-2 leading-relaxed font-medium bg-red-500/5 p-2 rounded-lg border border-red-500/10"
                        >
                          Липсата на подсигурени базови нужди често пречи на хората да видят собствения си потенциал.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <div className="flex justify-between text-[8px] sm:text-xs text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1 sm:gap-1.5 group relative cursor-help">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveTooltip(activeTooltip === 'motives-2' ? null : 'motives-2');
                          }}
                          className={cn(
                            "flex items-center gap-1 sm:gap-1.5 border-b border-dashed transition-colors text-left",
                            activeTooltip === 'motives-2' ? "text-red-500 border-red-500/50" : "text-zinc-500 border-zinc-500/50 hover:text-red-500"
                          )}
                        >
                          <span>Мотиви</span>
                          <Info size={12} className={cn("sm:size-[14px] transition-colors shrink-0", activeTooltip === 'motives-2' ? "text-red-500" : "text-zinc-500")} />
                        </button>
                      </div>
                      <span className="text-white">15%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-zinc-500 w-[15%]" />
                    </div>
                    <AnimatePresence>
                      {activeTooltip === 'motives-2' && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-[10px] sm:text-sm text-red-400/90 mt-2 leading-relaxed font-medium bg-red-500/5 p-2 rounded-lg border border-red-500/10"
                        >
                          Дори при най-трудни обстоятелства, силните мотиви са това, което ни движи напред.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-6 sm:pt-10 border-t border-brand/10"
            >
              <div className="text-zinc-400 space-y-10 sm:space-y-16 leading-relaxed">
                
                {/* Intro & The Two Columns */}
                <div className="space-y-6 sm:space-y-10">
                  <div className="text-center space-y-4">
                    <h3 className="text-white font-black text-2xl sm:text-4xl tracking-tight">Представи си две колони</h3>
                    <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto">Какво означава да имаш покрити нужди и какво означава да се бориш за тях.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                    {/* Column 1 - 100% */}
                    <div className="bg-brand/5 border border-brand/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[50px] -mr-10 -mt-10 rounded-full"></div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand shadow-[0_0_15px_rgba(0,229,153,0.2)]">
                          <BatteryFull size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg sm:text-xl">Първа колона</h4>
                          <p className="text-brand font-black text-[10px] sm:text-xs uppercase tracking-wider">100% покрити нужди</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-4 text-sm sm:text-base">
                        <li className="flex gap-3 text-zinc-300">
                          <Droplets className="text-brand shrink-0" size={20} />
                          <span>Имат чиста вода от чешмата.</span>
                        </li>
                        <li className="flex gap-3 text-zinc-300">
                          <Utensils className="text-brand shrink-0" size={20} />
                          <span>Хладилник с храна и за утре.</span>
                        </li>
                        <li className="flex gap-3 text-zinc-300">
                          <HomeIcon className="text-brand shrink-0" size={20} />
                          <span>Легло, покрив, обувки без дупки.</span>
                        </li>
                        <li className="flex gap-3 text-zinc-300">
                          <GraduationCap className="text-brand shrink-0" size={20} />
                          <span>Телефон, училище, и лекар, ако ги заболи.</span>
                        </li>
                      </ul>
                      <div className="pt-4 border-t border-brand/10">
                        <p className="text-white font-bold text-base sm:text-lg italic">Всичко е покрито. Всичко.</p>
                      </div>
                    </div>

                    {/* Column 2 - 30% */}
                    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 relative overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-zinc-400">
                          <BatteryMedium size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg sm:text-xl">Втора колона</h4>
                          <p className="text-zinc-500 font-black text-[10px] sm:text-xs uppercase tracking-wider">30% покрити нужди</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-4 text-sm sm:text-base">
                        <li className="flex gap-3 text-zinc-400">
                          <Utensils className="text-zinc-600 shrink-0" size={20} />
                          <span>Имат нещо за ядене днес, а за утре не знаят.</span>
                        </li>
                        <li className="flex gap-3 text-zinc-400">
                          <Droplets className="text-zinc-600 shrink-0" size={20} />
                          <span>Водата, която пият, не е сигурна.</span>
                        </li>
                        <li className="flex gap-3 text-zinc-400">
                          <HomeIcon className="text-zinc-600 shrink-0" size={20} />
                          <span>Обувките са едни. Ученическите пособия ги няма.</span>
                        </li>
                        <li className="flex gap-3 text-zinc-400">
                          <Pill className="text-zinc-600 shrink-0" size={20} />
                          <span>Лекарството струва повече от седмичния доход.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 sm:p-8 rounded-2xl bg-brand/5 border border-brand/20 shadow-[0_0_30px_rgba(0,229,153,0.1)]">
                  <h4 className="text-brand font-black text-xl sm:text-2xl mb-4">Честният въпрос</h4>
                  <p className="text-white text-base sm:text-xl">Ако четеш това на телефон, на топло, с вода на две крачки, ти си от <span className="text-brand font-bold underline decoration-brand/30 underline-offset-4">първата колона</span>. Няма как да не си.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start pt-4">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                        <Target size={24} />
                      </div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl">100% нужди = 100% мотиви</h4>
                    </div>
                    <p className="text-sm sm:text-base">Когато нуждите ти са покрити 100%, ти имаш 100% от мотивите си свободни. Можеш да мислиш за бъдещето. Да учиш. Да мечтаеш. Умът ти е свободен да гради, защото не е зает да оцелява.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 border border-white/10">
                        <HelpCircle size={24} />
                      </div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl">30% нужди = 30% мотиви</h4>
                    </div>
                    <p className="text-sm sm:text-base">Не защото си по-малко способен. Цялата ти енергия отива в едно: как да се справиш с проблема. Няма място за мечти и развитие, а за оцеляване. Липсва им пространство.</p>
                  </div>
                </div>

                <div className="bg-[#0a1612]/80 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/5 space-y-6 sm:space-y-8 relative my-8">
                  <div className="flex items-center gap-4 mb-2">
                    <Wallet className="text-brand" size={32} />
                    <h4 className="text-white font-bold text-xl sm:text-3xl">Погледни собствения си джоб</h4>
                  </div>
                  
                  <div className="space-y-4 text-sm sm:text-base">
                    <p>Не говорим за нечии чужди пари. Говорим за твоите.</p>
                    <p>Ученик получава пари за деня. Част от тях отиват за истински нужди — вода, храна. А останалите? Сокчета. Вафли. Дъвки. Чипс. Неща, които изяждаш за три минути и забравяш до края на часа.</p>
                    <p className="text-white italic">Направи си сметката сам: колко от парите ти отидоха за нещо, което ти трябваше, и колко за нещо, което просто ти се прииска?</p>
                    <p>Ако си честен, вторият процент е по-голям. <span className="text-brand font-medium">За човек от втората колона същите тези пари са храна за деня / важно лекарство / възможност за мечти.</span></p>
                    <div className="p-4 sm:p-6 bg-brand/10 border-l-4 border-brand rounded-r-xl mt-6">
                      <p className="text-white font-bold text-base sm:text-lg">Разликата между теб и него не е, че ти имаш много. Разликата е, че ти имаш достатъчно, за да ти остане.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4">
                    <Coins className="text-brand" size={32} />
                    <h4 className="text-white font-bold text-2xl sm:text-3xl">Дори рестото стига</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base">
                    <div className="space-y-4">
                      <p>Не ти казвам да се откажеш от вафлата. Казвам ти: <span className="text-white font-bold">дай рестото.</span></p>
                      <p>Тези 10, 20, 50 стотинки, които се въргалят в джоба ти. Парите, които не броиш, защото са твърде малко.</p>
                    </div>
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0a1612] border border-brand/20">
                      <p className="text-brand font-black text-xl mb-2">100 лв. / ден</p>
                      <p>Едно училище с 500 ученици. Всеки дава по 20ст. Това са над 2000 лв. на месец. От пари, които не значат нищо за нас, а за другите са всичко (лекарство, храна).</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4">
                    <Repeat className="text-brand" size={32} />
                    <h4 className="text-white font-bold text-2xl sm:text-3xl">Защо постоянството, а не размерът</h4>
                  </div>
                  <p className="text-sm sm:text-base">Един човек дарява 2 евро веднъж и се чувства добре. Друг дарява по 10 стотинки всеки ден. За месец вторият е дал по-малко пари, но е направил нещо, което първият не е: превърнал е даването в част от това, което е.</p>
                  <p className="text-sm sm:text-base italic text-zinc-500 border-l-2 border-zinc-700 pl-4">В „Атомни навици" пише: направиш ли едно действие достатъчно лесно и приятно, започваш да го повтаряш без да се насилваш.</p>
                </div>

                <div className="space-y-6 sm:space-y-8 pt-8 sm:pt-16 border-t border-brand/20 text-center flex flex-col items-center">
                  <h4 className="text-brand font-black text-3xl sm:text-5xl uppercase tracking-wider mb-2 sm:mb-4 leading-tight drop-shadow-[0_0_15px_rgba(0,229,153,0.3)]">Затова построих СПАСЕН</h4>
                  <p className="text-white text-base sm:text-xl font-medium max-w-3xl">СПАСЕН е кутия за дарения в училище, която не награждава размера на дарението, а постоянството.</p>
                  <p className="text-sm sm:text-base max-w-2xl text-zinc-400">В класацията на сайта точките идват от това колко дни даряваш, не колко пари. Ученик с 10 стотинки всеки ден изпреварва този, който е дал 2 евро веднъж.</p>
                  
                  <div className="py-6 sm:py-10 w-full flex justify-center">
                    <a href="https://spasen.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand text-[#0a1612] font-black px-6 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-widest text-xs sm:text-base shadow-[0_0_20px_rgba(0,229,153,0.4)] hover:shadow-[0_0_35px_rgba(0,229,153,0.6)] hover:bg-white transition-all text-center w-full sm:w-auto">
                      ТЕСТВАЙ ДЕМО ВЕРСИЯТА СЕГА
                      <ArrowRight size={20} />
                    </a>
                  </div>

                  <div className="max-w-3xl space-y-4 text-sm sm:text-base text-zinc-400">
                    <p>Това не е случайно решение. Това е цялата идея.</p>
                    <p>Ако едно училище се научи на това с монети, то го е научило за всичко останало. За тренировките. За живота. Даряването е начинът, по който правим добро с даряване и тренираме учениците на постоянство.</p>
                  </div>
                  
                  <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-brand/5 border border-brand/20 rounded-2xl sm:rounded-3xl max-w-4xl w-full text-center">
                    <p className="text-white font-medium text-lg sm:text-2xl italic leading-relaxed">
                      "А парите отиват там, където трябва — при болни деца, при семейства, за които едно лекарство е непосилно. При хора с проблеми, които им пречат да са свободни и да правят това, което искат, както ние можем."
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* СПАСЕН */}
        <div className="mt-12 sm:mt-24 p-6 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] bg-[#0a1612]/40 border border-brand/20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,153,0.08),transparent_70%)]" />
          
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-6 sm:space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-brand/20 text-brand text-xs sm:text-sm font-black uppercase tracking-[0.2em] rounded-full border border-brand/40 shadow-[0_0_20px_rgba(0,229,153,0.3)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand shadow-[0_0_8px_rgba(0,229,153,0.8)]"></span>
              </span>
              Проект в процес
            </motion.div>
            
            <h3 className="text-5xl sm:text-8xl font-black tracking-tighter text-brand drop-shadow-[0_0_30px_rgba(0,229,153,0.3)]">
              СПАСЕН
            </h3>
            
            <p className="text-xl sm:text-4xl text-white font-medium italic leading-tight max-w-3xl">
              „Тези 30 цента няма да променят <span className="text-brand">твоя</span> живот. Но ще променят <span className="text-brand">нечий друг</span>.“
            </p>
            
            <p className="text-zinc-400 text-sm sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Социална инициатива, която поставя кутии за дарения и променя начина, по който младото поколение мисли за парите.
            </p>
            
            <div className="pt-6 sm:pt-8 flex flex-col items-center gap-4 w-full">
              <div 
                className="inline-flex items-center justify-center gap-3 bg-white/5 text-zinc-400 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 text-sm sm:text-lg cursor-not-allowed w-full sm:w-auto"
              >
                В процес на разработка
              </div>
            </div>
          </div>
        </div>
      </motion.section>








      {/* Speech Section */}
      <motion.section 
        id="speech" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 max-w-5xl mx-auto pt-12 sm:pt-32 px-4 sm:px-0 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tighter text-white">Речи</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-lg">Моите изяви и споделяне пред публика.</p>
        </div>

        {!showSpeeches ? (
          <motion.button
            onClick={() => setShowSpeeches(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center justify-center rounded-full text-sm font-medium transition-all bg-brand text-[#0a1612] hover:bg-white h-12 px-8 shadow-[0_0_15px_rgba(0,229,153,0.3)] uppercase tracking-wider font-black w-full sm:w-auto"
          >
            Покажи повече
          </motion.button>
        ) : (
          <div className="w-full space-y-12">
            <div className="space-y-3 sm:space-y-4 text-center">
              <h3 className="text-xl sm:text-3xl font-bold tracking-tighter text-white mt-12">Първа реч</h3>
              <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-lg">Стъпката извън зоната на комфорт и силата да заявиш себе си пред другите.</p>
            </div>
            
            <div className="relative p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#0a1612]/40 border border-brand/20 overflow-hidden">
              <div className="flex flex-col gap-6 sm:gap-10 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-[250px] sm:h-[500px] rounded-xl sm:rounded-3xl overflow-hidden border border-brand/20 group"
                >
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <motion.img 
                    src="https://drive.google.com/thumbnail?id=11L0VHplxg4OQwY1kC2oEswBmlGiL5-Ud&sz=w1000" 
                    alt="Моята първа реч" 
                    className="absolute inset-0 w-full h-full object-cover object-[54%_25%] transition-transform duration-700"
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1475721025505-c0a0b978438c?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 sm:mb-2 text-left">Презентация</p>
                      <p className="text-white font-medium text-lg sm:text-2xl tracking-tight text-left">Споделяне на лични ценности</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-medium border border-border backdrop-blur-md">
                      <Calendar size={16} />
                      26 Февруари
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter text-white leading-tight text-center">
                    Да говоря за това, което ме изгражда
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-6 text-zinc-400 leading-relaxed text-base sm:text-lg">
                    <p>Застанах пред съучениците си, за да споделя своя най-силен морален компас в един шумен свят – <span className="text-brand font-medium">моята вяра в Бог</span>.</p>
                    <p>Въпреки първоначалното притеснение от чуждото мнение, едни конкретни думи ми дадоха увереност:</p>
                    <blockquote className="border-l-2 border-brand pl-4 sm:pl-6 py-2 text-white italic bg-brand/5 rounded-r-xl sm:rounded-r-2xl font-medium text-lg sm:text-xl">
                      "Не се срамувайте от Човешкия Син, защото и Той ще се срамува от вас"
                    </blockquote>
                    <p>Това преобърна нагласата ми. Осъзнах, че страхът е илюзия. Когато говориш искрено за ценностите си, преодоляваш собствените си бариери и печелиш уважението на хората, които наистина имат значение.</p>
                  </div>

                  <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/60 border border-brand/20">
                    <h4 className="text-brand font-medium mb-2 sm:mb-3 flex items-center gap-2 text-lg sm:text-xl">
                      <Lightbulb size={20} className="text-brand" />
                      Основен урок
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                      Действай си по своя път и не вземай мнението на хора, които не са там, където ти искаш да бъдеш. И най-вече – <span className="text-white font-medium">не се срамувай да говориш за неща, които те интересуват и изграждат.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8 w-full">
              <motion.button
                onClick={() => {
                  setShowSpeeches(false);
                  document.getElementById('speech')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white h-12 px-10 border border-white/10 uppercase tracking-widest font-black backdrop-blur-sm w-full sm:w-auto"
              >
                Скрий речи
              </motion.button>
            </div>
          </div>
        )}
      </motion.section>



      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 pt-12 sm:pt-32 px-4 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-4 sm:space-y-6 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tighter text-white">Свържете се с мен</h2>
          <p className="text-zinc-400 text-sm sm:text-lg leading-relaxed">
            Вярвам, че най-добрите идеи се раждат в общуването с хора, които споделят сходни ценности. Ако припознаваш себе си в написаното тук, търсиш партньорство или просто искаш да обменим мисли — ще се радвам да се свържем.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <motion.a 
            href="https://www.linkedin.com/in/presian-kisyov/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-base sm:text-lg">LinkedIn</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1">Presiyan</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/p.kisyovv/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-base sm:text-lg">Instagram</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1">@p.kisyovv</p>
            </div>
          </motion.a>

          <motion.a 
            href="mailto:preskokisiov@gmail.com" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-base sm:text-lg">Имейл</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1 truncate max-w-[200px] sm:max-w-[150px]">preskokisiov@gmail.com</p>
            </div>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
