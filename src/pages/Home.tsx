import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Users, Instagram, Mail, Linkedin, Shield, Heart, Calendar, Lightbulb, ArrowRight, Compass, Info, Sparkles, MapPin, Rocket, HelpCircle, BatteryFull, BatteryMedium, Droplets, Utensils, HomeIcon, GraduationCap, Pill, Coins, Repeat, Target, Wallet, QrCode, Scan, Cpu, ClipboardCheck, Trophy, Eye, Database, XCircle, CheckCircle2, User } from 'lucide-react';
import { cn } from '../lib/utils';
import Box3D from '../components/Box3D';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [showSpasenDetails, setShowSpasenDetails] = useState(false);

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
      <section id="home" className="flex flex-col justify-center pt-32 sm:pt-40 pb-12 sm:pb-16 relative">
        
        {/* Hero Section Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 sm:space-y-10 relative w-full max-w-5xl z-10 mx-auto text-center lg:text-left px-4 sm:px-6 lg:pl-4"
        >
          <div className="flex items-baseline gap-2 sm:gap-4 justify-center lg:justify-start py-1">
            <h1 className="text-[2.75rem] sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none flex flex-wrap justify-center lg:justify-start">
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
          </div>
        </motion.div>
      </section>

      {/* Mission & Values Section */}
      <motion.section 
        id="mission" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 pt-8 sm:pt-16 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="p-6 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] bg-[#0a1612]/40 border border-brand/20 relative overflow-hidden flex flex-col items-center text-center">
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
            
            <h2 className="text-5xl sm:text-8xl font-black tracking-tighter text-brand drop-shadow-[0_0_30px_rgba(0,229,153,0.3)] uppercase">
              СПАСЕН
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6 px-4">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug sm:leading-relaxed tracking-tight">
                Инициатива за поставяне на <span className="text-brand">интерактивни кутии</span> с класации и награди за <span className="text-brand">целенасочена благотворителност</span> в училищата.
              </p>
            </div>

            <div className="w-16 h-px bg-brand/30 my-4" />

            <p className="text-lg sm:text-3xl text-zinc-300 font-medium italic leading-tight max-w-3xl">
              „Тези 30 цента няма да променят <span className="text-brand font-semibold">твоя</span> живот. Но ще променят <span className="text-brand font-semibold">нечий друг</span>.“
            </p>
            
            <p className="text-zinc-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Проектът цели да изгради трайни навици за съпричастност сред учениците, превръщайки даряването на дребно ресто в спонтанен и ценен жест за подкрепа на деца и семейства в нужда.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <motion.a 
                href="https://spasen.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-brand text-[#0a1612] font-black px-8 py-4 rounded-full shadow-[0_0_20px_rgba(0,229,153,0.3)] hover:shadow-[0_0_35px_rgba(0,229,153,0.5)] hover:bg-white transition-all text-xs sm:text-sm tracking-wider uppercase w-full sm:w-auto"
              >
                Разгледай демо версията
                <ArrowRight size={16} />
              </motion.a>

              <motion.button
                onClick={() => {
                  if (showSpasenDetails) {
                    setShowSpasenDetails(false);
                    const el = document.getElementById('mission');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setShowSpasenDetails(true);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-brand text-[#0a1612] font-black px-8 py-4 rounded-full uppercase tracking-wider text-xs sm:text-sm shadow-[0_0_20px_rgba(0,229,153,0.3)] hover:shadow-[0_0_35px_rgba(0,229,153,0.5)] hover:bg-white transition-all text-center w-full sm:w-auto"
              >
                {showSpasenDetails ? 'Скрий подробностите' : 'Научи как работи СПАСЕН'}
                <ArrowRight size={16} className={cn("transition-transform duration-300", showSpasenDetails && "rotate-90")} />
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showSpasenDetails && (
            <motion.div 
              initial={{ opacity: 0, height: 0, scale: 0.98 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="p-4 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#0a1612]/40 border border-brand/20 relative mt-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-brand/5 blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 space-y-6 sm:space-y-12">
                  <div className="text-zinc-400 space-y-10 sm:space-y-16 leading-relaxed">
                    
                    {/* Пътят на едно дарение */}
                    <div className="space-y-8 pt-4">
                      <div className="text-center space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-brand/20">
                          <Sparkles size={12} />
                          Интерактивен процес
                        </div>
                        <h3 className="text-white font-black text-2xl sm:text-4xl tracking-tight uppercase">Пътят на едно дарение</h3>
                        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
                          Виж как физическата кутия и софтуерната система си взаимодействат:
                        </p>
                      </div>

                      {/* 3D Box interactive model */}
                      <div className="py-4 sm:py-8">
                        <Box3D />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Step 1 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">01</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <Wallet size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Изваждаш рестото</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Изваждаш рестото от джоба си след покупка в училище.
                          </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">02</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <QrCode size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Показваш твоя QR код</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Показваш твоя уникален QR код от телефона си на вградения скенер.
                          </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">03</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <Scan size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Скенерът те разпознава</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Скенерът те разпознава и механичната преграда за монети се отваря.
                          </p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">04</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <Cpu size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Пускаш монетата</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Пускаш я. Кутията я разпознава автоматично и я записва на твое име.
                          </p>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">05</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <Database size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Начисляване на точки</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Точките ти се начисляват за деня и класацията в сайта се обновява.
                          </p>
                        </div>

                        {/* Step 6 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">06</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <ClipboardCheck size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Месечно преброяване</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            В края на месеца монетите се броят и събраната сума се сверява със сайта.
                          </p>
                        </div>

                        {/* Step 7 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">07</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <Heart size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Към избраната кауза</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Парите отиват през училището директно към избраната кауза.
                          </p>
                        </div>

                        {/* Step 8 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">08</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <Eye size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Публичен отчет</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Разгласяваме публично подробен отчет колко е събрано и къде е отишло.
                          </p>
                        </div>

                        {/* Step 9 */}
                        <div className="bg-[#020806] border border-white/5 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand/30 transition-all shadow-md">
                          <div className="absolute top-3 right-4 text-brand/10 text-4xl sm:text-5xl font-black select-none pointer-events-none group-hover:text-brand/20 transition-colors">09</div>
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                            <Trophy size={20} />
                          </div>
                          <h4 className="text-white font-bold text-base sm:text-lg mb-2">Топ дарители</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            Обявяваме месечните топ дарители, за да мотивираме споделеното утре.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Comparison: Spasen vs Ordinary Boxes */}
                    <div className="space-y-8 pt-10 sm:pt-16 border-t border-brand/10">
                      <div className="text-center space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-brand/20">
                          <Compass size={12} />
                          Революция в дарителството
                        </div>
                        <h3 className="text-white font-black text-2xl sm:text-4xl tracking-tight uppercase">СПАСЕН срещу Обикновена кутия</h3>
                        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
                          Защо СПАСЕН се различава от една обикновена кутия
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Ordinary Box Column */}
                        <div className="bg-[#080c0a]/40 border border-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 relative opacity-75 hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-500">
                              <HelpCircle size={24} />
                            </div>
                            <div>
                              <h4 className="text-zinc-400 font-bold text-lg sm:text-xl">Обикновена кутия</h4>
                            </div>
                          </div>

                          <ul className="space-y-5 text-sm sm:text-base">
                            <li className="flex gap-3 text-zinc-400">
                              <XCircle className="text-red-500/60 shrink-0 mt-0.5" size={20} />
                              <div>
                                <strong className="text-zinc-300 block font-semibold">Пасивна и незабележима</strong>
                                Стои статично в ъгъла, лесно се слива с околната среда и бързо се превръща в част от декора.
                              </div>
                            </li>
                            <li className="flex gap-3 text-zinc-400">
                              <XCircle className="text-red-500/60 shrink-0 mt-0.5" size={20} />
                              <div>
                                <strong className="text-zinc-300 block font-semibold">Анонимна без обратна връзка</strong>
                                Пускаш монета, но никога не разбираш какъв е твоят принос, няма класация и липсва усещането за общност.
                              </div>
                            </li>
                            <li className="flex gap-3 text-zinc-400">
                              <XCircle className="text-red-500/60 shrink-0 mt-0.5" size={20} />
                              <div>
                                <strong className="text-zinc-300 block font-semibold">Съмнения в прозрачността</strong>
                                Нямаш идея колко пари има вътре, кога се събират, къде отиват и дали реално стигат до каузата.
                              </div>
                            </li>
                          </ul>
                        </div>

                        {/* Spasen Column */}
                        <div className="bg-brand/5 border border-brand/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 relative overflow-hidden shadow-[0_0_40px_rgba(0,229,153,0.05)]">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[50px] -mr-10 -mt-10 rounded-full pointer-events-none"></div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand shadow-[0_0_15px_rgba(0,229,153,0.2)]">
                              <Sparkles size={24} />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg sm:text-xl">Системата СПАСЕН</h4>
                            </div>
                          </div>

                          <ul className="space-y-5 text-sm sm:text-base">
                            <li className="flex gap-3 text-zinc-300">
                              <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={20} />
                              <div>
                                <strong className="text-white block font-semibold">Интерактивна хардуерна кутия</strong>
                                Скенерът за QR кодове и автоматичното механично отваряне на клапата привличат вниманието и будят любопитство.
                              </div>
                            </li>
                            <li className="flex gap-3 text-zinc-300">
                              <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={20} />
                              <div>
                                <strong className="text-white block font-semibold">Личен профил и интерактивност</strong>
                                Всеки ученик има свой QR код. Всяка стотинка се записва на негово име, носи му точки, дигитални значки за активност и възможност за приятелско съревнование между класовете за дигитално интегриране.
                              </div>
                            </li>
                            <li className="flex gap-3 text-zinc-300">
                              <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={20} />
                              <div>
                                <strong className="text-white block font-semibold">100% дигитална прозрачност</strong>
                                Всички данни се отразяват на момента в сайта. Има подробен дигитален одит, публични отчети и пълна проследимост на каузите.
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>


                    {/* Intro & The Two Columns */}
                    <div className="space-y-6 sm:space-y-10 pt-8 sm:pt-12 border-t border-brand/10">
                      <div className="text-center space-y-4">
                        <h3 className="text-white font-black text-2xl sm:text-4xl tracking-tight">Представи си две колони</h3>
                        <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto">Какво означава да имаш покрити нужди и какво означава да се бориш за тях.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                        {/* Column 1 - 100% */}
                        <div className="bg-brand/5 border border-brand/20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 relative overflow-hidden group">
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
                        <div className="bg-white/5 border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 relative overflow-hidden">
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

                    <div className="text-center p-5 sm:p-8 rounded-2xl bg-brand/5 border border-brand/20 shadow-[0_0_30px_rgba(0,229,153,0.1)]">
                      <h4 className="text-brand font-black text-xl sm:text-2xl mb-4">Честният въпрос</h4>
                      <p className="text-white text-base sm:text-xl">Ако четеш това на телефон, на топло, с вода на две крачки, ти си от <span className="text-brand font-bold underline decoration-brand/30 underline-offset-4">първата колона</span>. Няма как да не си.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 sm:p-10 rounded-2xl sm:rounded-3xl space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                          <Target size={24} />
                        </div>
                        <h4 className="text-white font-bold text-xl sm:text-2xl">100% нужди = 100% мотиви</h4>
                      </div>
                      
                      <div className="space-y-6 text-sm sm:text-base leading-relaxed">
                        <p className="text-zinc-300">
                          Когато нуждите ти са покрити 100%, ти имаш 100% от мотивите си свободни. Можеш да мислиш за бъдещето. Да учиш. Да мечтаеш. Умът ти е свободен да гради, защото не е зает да оцелява.
                        </p>
                        
                        <div className="pl-6 border-l-2 border-brand/30 space-y-4">
                          <h5 className="text-white font-medium text-lg">А когато са покрити само 30%?</h5>
                          <p className="text-zinc-400">
                            Тогава мотивите ти са същите 30%. Не защото си по-малко способен. Цялата ти енергия отива в едно: как да се справиш с проблема. Няма място за мечти и развитие, а за оцеляване. Липсва им пространство.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0a1612]/80 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/5 space-y-6 sm:space-y-8 relative my-8">
                      <div className="flex items-center gap-4 mb-2">
                        <Wallet className="text-brand" size={32} />
                        <h4 className="text-white font-bold text-xl sm:text-3xl">Истинската стойност на парите</h4>
                      </div>
                      
                      <div className="space-y-4 text-sm sm:text-base">
                        <p>Ученик получава пари за деня. Част от тях отиват за истински нужди, каквито са вода и храна. А останалите? Сокчета. Вафли. Дъвки. Чипс. Неща, които изяждаш за три минути и забравяш до края на часа.</p>
                        <p>При направено запитване 26 от 26 ученици споделят, че могат и без тях и най-често тези покупки са импулсивни и необмислени.</p>
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
                          <p>Тези 10, 20, 50 цента, които се въргалят в джоба ти.</p>
                        </div>
                        <div className="p-5 sm:p-6 rounded-2xl bg-[#0a1612] border border-brand/20">
                          <p className="text-brand font-black text-xl mb-2">50 евро / ден</p>
                          <p>Едно училище с 500 ученици. Всеки дава по 10 цента. Това са над 1000 евро на месец. От пари, които не значат нищо за нас, а за другите са всичко (лекарство, храна).</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand/5 border border-brand/20 p-5 sm:p-10 rounded-2xl sm:rounded-3xl space-y-8 relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand/10 blur-[50px] rounded-full pointer-events-none" />
                      <div className="flex items-center gap-4 relative z-10">
                        <Repeat className="text-brand" size={32} />
                        <h4 className="text-white font-bold text-2xl sm:text-3xl">Защо постоянството, а не размерът?</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div className="bg-[#020806] border border-white/5 p-6 rounded-2xl space-y-3">
                          <div className="text-zinc-500 font-bold uppercase tracking-wider text-xs mb-2">Подход 1: Еднократно</div>
                          <p className="text-white font-medium text-lg">Даряваш 2 евро веднъж.</p>
                          <p className="text-zinc-400 text-sm leading-relaxed">Действието остава изолирано събитие, което бързо избледнява без да създава устойчив навик.</p>
                        </div>
                        
                        <div className="bg-brand/10 border border-brand/30 p-6 rounded-2xl space-y-3 relative shadow-[0_0_30px_rgba(0,229,153,0.1)] group">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand rounded-l-2xl" />
                          <div className="text-brand font-bold uppercase tracking-wider text-xs mb-2">Подход 2: Постоянно</div>
                          <p className="text-white font-medium text-lg">Даряваш по 10 цента всеки ден.</p>
                          <p className="text-zinc-300 text-sm leading-relaxed">В края на месеца си дал по-малко пари общо, но точките ти в класацията са много повече от тези на човека, который е дал 2 евро веднъж, защото възнаграждаваме ежедневното постоянство.</p>
                        </div>
                      </div>
                      
                    </div>

                    <div className="space-y-6 sm:space-y-8 pt-8 sm:pt-16 border-t border-brand/20 text-center flex flex-col items-center">
                      <h4 className="text-brand font-black text-3xl sm:text-5xl uppercase tracking-wider mb-2 sm:mb-4 leading-tight drop-shadow-[0_0_15px_rgba(0,229,153,0.3)]">Мисията в действие</h4>
                      
                      <div className="py-6 sm:py-10 w-full flex justify-center">
                        <a href="https://spasen.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand text-[#0a1612] font-black px-6 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-widest text-xs sm:text-base shadow-[0_0_20px_rgba(0,229,153,0.4)] hover:shadow-[0_0_35px_rgba(0,229,153,0.6)] hover:bg-white transition-all text-center w-full sm:w-auto">
                          ТЕСТВАЙ ДЕМО ВЕРСИЯТА СЕГА
                          <ArrowRight size={20} />
                        </a>
                      </div>
                      
                      <div className="mt-4 p-5 sm:p-8 bg-brand/5 border border-brand/20 rounded-2xl sm:rounded-3xl max-w-4xl w-full text-center">
                        <p className="text-white font-medium text-lg sm:text-2xl italic leading-relaxed">
                          "А парите отиват там, където трябва: при болни деца, при семейства, за които едно лекарство е непосилно. При хора с проблеми, които им пречат да са свободни и да правят това, което искат, както ние можем."
                        </p>
                      </div>
                    </div>

                    {/* Collapse Button */}
                    <div className="flex justify-center pt-8 w-full">
                      <motion.button
                        onClick={() => {
                          setShowSpasenDetails(false);
                          const el = document.getElementById('mission');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white h-12 px-8 border border-white/10 uppercase tracking-widest w-full sm:w-auto"
                      >
                        Скрий подробностите
                      </motion.button>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>








      {/* About Me Section */}
      <motion.section 
        id="about" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 max-w-5xl mx-auto pt-12 sm:pt-32 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-4 sm:space-y-6 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white">За мен</h2>
        </div>

        <div className="relative p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-[#0a1612]/60 border border-brand/20 overflow-hidden shadow-[0_0_50px_rgba(0,229,153,0.05)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10 items-center">
            
            {/* Content Side */}
            <div className="flex-1 space-y-6 sm:space-y-8">
              
              <div className="space-y-4 text-zinc-400 text-sm sm:text-lg leading-relaxed">
                <p>
                  Казвам се Пресиян, на 15 години съм и живея в Габрово. Обичам да правя неща. Сайтове, проекти, каквото ми дойде на ума. Не съм от хората, които могат да седят и да чакат времето да минава безцелно, постоянно си намирам занимания и се старая да се развивам.
                </p>
                <p>
                  Опитвам се да не си губя времето и да не давам обещания, които не мога да изпълня. Понякога успявам, понякога не, но поне се старая. Постоянно ми хрумват идеи, за които нямам достатъчно време.
                </p>
                <p>
                  Най-големият и важен проект за мен е <span className="text-brand font-bold">СПАСЕН</span>, за който може да разгледате по-подробно тук в сайта.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>



      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 pt-12 sm:pt-32 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-4 sm:space-y-6 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tighter text-white">Свържете се с мен</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <motion.a 
            href="https://www.linkedin.com/in/presian-kisyov/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-base">LinkedIn</h3>
              <p className="text-zinc-500 text-xs font-bold mt-0.5">Presiyan</p>
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
            className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Instagram className="w-5 h-5 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-base">Instagram</h3>
              <p className="text-zinc-500 text-xs mt-0.5">@p.kisyovv</p>
            </div>
          </motion.a>

          <motion.a 
            href="mailto:preskokisiov@gmail.com" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-base">Имейл</h3>
              <p className="text-zinc-500 text-xs mt-0.5 truncate max-w-[200px] sm:max-w-[150px]">preskokisiov@gmail.com</p>
            </div>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
