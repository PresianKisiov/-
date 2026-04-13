import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Users, Instagram, Mail, Linkedin, Shield, Heart, Calendar, Lightbulb, ArrowRight, Compass, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const skills = [
  {
    Icon: Compass,
    title: 'Личностно развитие',
    desc: 'Постоянно надграждане на знанията, изграждане на полезни навици и стремеж към по-добра версия на себе си всеки ден.',
    subSkills: ['Дисциплина', 'Управление на времето', 'Критично мислене'],
    example: 'Всекидневно четене на книги за самоусъвършенстване и водене на дневник за проследяване на напредъка.'
  },
  {
    Icon: Lightbulb,
    title: 'От Идея до Проект',
    desc: 'Изграждам умения, които ми помагат да превърна всяка добра идея в работещ проект чрез планиране и действие.',
    subSkills: ['Стратегическо планиране', 'Управление на ресурси', 'Решаване на проблеми'],
    example: 'Превръщане на концепция за училищна инициатива в реално събитие с ясен план и екип.'
  },
  {
    Icon: Mic,
    title: 'Публично говорене',
    desc: 'Умението да предавам идеи ясно, да вдъхновявам и да комуникирам ефективно пред публика.',
    subSkills: ['Убедителност', 'Умение за разказване', 'Език на тялото'],
    example: 'Изнасяне на презентации пред съученици и участие в дискусионни клубове.'
  },
  {
    Icon: Users,
    title: 'Личностни умения',
    desc: 'Емпатия, сътрудничество и изграждане на пълноценни взаимоотношения с хората около мен.',
    subSkills: ['Емоционална интелигентност', 'Активно слушане', 'Разрешаване на конфликти'],
    example: 'Успешно координиране на училищни проекти и оказване на подкрепа на съученици в трудни моменти.'
  }
];

const christianValues = [
  { title: 'Отговорност и Дисциплина', example: 'Държа на думата си и завършвам започнатото, защото вярвам, че надеждността е в основата на всеки характер.' },
  { title: 'Почтеност', example: 'Честността за мен не е опция, а стандарт – дори когато никой не гледа и няма лична изгода.' },
  { title: 'Смирение и Учене', example: 'Приемам критиката като възможност за растеж, знаейки, че винаги има какво още да науча от всеки.' },
  { title: 'Трудолюбие', example: 'Влагам сърце във всичко, което правя, стремейки се към съвършенство, а не просто към отбиване на номера.' },
  { title: 'Милосърдие и Подкрепа', example: 'Старая се да бъда полезен на другите, защото вярвам, че истинският успех е в това колко хора си вдигнал със себе си.' },
  { title: 'Благодарност', example: 'Всеки ден благодаря за възможностите и трудностите, защото те ме оформят като личност и ме смиряват.' },
  { title: 'Вяра в действие', example: 'Вярата ми е основата, от която се ръководя във всичките си действия и решения, и начинът, по който се отнасям към хората и задачите си всеки един ден.' },
  { title: 'Прошка и Мир', example: 'Не задържам гняв и прощавам бързо, защото вярвам, че чистият ум и сърце са по-важни от егото.' },
  { title: 'Справедливост', example: 'Заставам зад истината, дори когато е неудобно, и се старая да бъда обективен във всяка ситуация.' },
  { title: 'Търпение', example: 'Разбирам, че големите неща изискват време и усилия, и не губя надежда, когато резултатите не идват веднага.' },
  { title: 'Любов към ближния', example: 'Старая се да виждам най-доброто в хората и да се отнасям към тях с топлота и разбиране.' },
  { title: 'Чистота на мисълта', example: 'Стремя се да пазя ума си от негативизъм и да се фокусирам върху нещата, които изграждат, а не рушат.' }
];

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
  const [activeSkill, setActiveSkill] = useState(0);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

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
      <section id="home" className="min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center pt-20 pb-12 sm:pt-20 sm:pb-32 relative px-4 sm:px-0">
        
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
              На 14 години
              <span className="w-1 h-1 rounded-full bg-brand" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="max-w-4xl pt-2 sm:pt-4 mx-auto lg:mx-0"
          >
            <p className="font-sans text-xl sm:text-3xl lg:text-4xl leading-tight font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-brand/90 px-2 sm:px-0">
              "В дигиталната ера мнозина търсят как да продават услуги и да трупат активи, но често пренебрегват най-ценната инвестиция — <span className="text-brand">изграждането на характера и това да бъдеш добър човек.</span>"
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            className="pt-4 sm:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <motion.button 
              onClick={() => scrollToSection('skills')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, rotate: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all bg-brand text-black hover:bg-brand-dark h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto shadow-[0_0_20px_rgba(0,229,153,0.2)] hover:shadow-[0_0_30px_rgba(0,229,153,0.4)]"
            >
              Върху какво съм фокусиран
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('mission')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, rotate: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all bg-surface border border-border text-white hover:bg-surface-hover h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
            >
              Моята Мисия
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Values Section */}
      <motion.section 
        id="mission" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 pt-12 sm:pt-32 px-4 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-4 sm:space-y-6 text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tighter text-white">
            Мисия & Християнски ценности
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
          className="p-5 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#0a1612]/40 border border-brand/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-brand/5 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-8 sm:space-y-12">
            <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-base sm:text-xl space-y-4 sm:space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Визуализирам себе си като човек, който има 100% покрити базови нужди. За мен истинското развитие започва тогава, когато базовите нужди са покрити. Едва тогава човек получава свободата да разгърне своя пълен потенциал и да преследва мечтите си.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Крайната ми цел е да помагам на хората, които нямат тези покрити базови нужди и да им дам възможност и те да преследват мечтите си, както ние можем.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
              {/* Person 1 */}
              <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#0a1612]/60 border border-brand/20">
                <h3 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  Осигурен човек (Аз)
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-[10px] sm:text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1.5 group relative cursor-help">
                        <button 
                          onClick={() => setActiveTooltip(activeTooltip === 'base-needs-1' ? null : 'base-needs-1')}
                          className="flex items-center gap-1.5 border-b border-dashed border-zinc-500/50 hover:text-brand transition-colors"
                        >
                          <span>Базови нужди</span>
                          <Info size={14} className={cn("transition-colors", activeTooltip === 'base-needs-1' ? "text-brand" : "text-zinc-500")} />
                        </button>
                        <AnimatePresence>
                          {(activeTooltip === 'base-needs-1' || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className={cn(
                                "absolute bottom-full left-0 mb-2 w-64 sm:w-72 p-4 rounded-2xl bg-[#0a1612] border border-brand/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 text-zinc-200 text-xs normal-case tracking-normal font-normal leading-relaxed backdrop-blur-xl",
                                typeof window !== 'undefined' && window.innerWidth >= 1024 ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible" : "block"
                              )}
                            >
                              <div className="text-brand font-bold mb-1 flex items-center gap-2">
                                <Shield size={14} /> Разяснение
                              </div>
                              Базовите нужди са нещата, без които не можем да живеем – здраве, семейство, храна, дом. Те са основата, върху която градим всичко останало.
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <span className="text-white">100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] sm:text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1.5 group relative cursor-help">
                        <button 
                          onClick={() => setActiveTooltip(activeTooltip === 'motives-1' ? null : 'motives-1')}
                          className="flex items-center gap-1.5 border-b border-dashed border-zinc-500/50 hover:text-brand transition-colors"
                        >
                          <span>Мотиви за развитие</span>
                          <Info size={14} className={cn("transition-colors", activeTooltip === 'motives-1' ? "text-brand" : "text-zinc-500")} />
                        </button>
                        <AnimatePresence>
                          {(activeTooltip === 'motives-1' || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className={cn(
                                "absolute bottom-full left-0 sm:-left-4 mb-2 w-72 sm:w-80 p-4 rounded-2xl bg-[#0a1612] border border-brand/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 text-zinc-200 text-xs normal-case tracking-normal font-normal leading-relaxed backdrop-blur-xl",
                                typeof window !== 'undefined' && window.innerWidth >= 1024 ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible" : "block"
                              )}
                            >
                              <div className="text-brand font-bold mb-1 flex items-center gap-2">
                                <Lightbulb size={14} /> Разяснение
                              </div>
                              Мотивите за развитие са нашите мечти и стремежи. Човек с покрити базови нужди има свободата да ги преследва, докато другият трябва първо да мисли за оцеляване. Ние помагаме, като споделяме ресурси, за да дадем шанс на другия да мечтае.
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <span className="text-white">100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-dark w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Person 2 */}
              <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#0a1612]/60 border border-brand/20">
                <h3 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Човек в нужда
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-[10px] sm:text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1.5 group relative cursor-help">
                        <button 
                          onClick={() => setActiveTooltip(activeTooltip === 'base-needs-2' ? null : 'base-needs-2')}
                          className="flex items-center gap-1.5 border-b border-dashed border-zinc-500/50 hover:text-red-500 transition-colors"
                        >
                          <span>Базови нужди</span>
                          <Info size={14} className={cn("transition-colors", activeTooltip === 'base-needs-2' ? "text-red-500" : "text-zinc-500")} />
                        </button>
                        <AnimatePresence>
                          {(activeTooltip === 'base-needs-2' || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className={cn(
                                "absolute bottom-full left-0 mb-2 w-64 sm:w-72 p-4 rounded-2xl bg-[#0a1612] border border-red-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 text-zinc-200 text-xs normal-case tracking-normal font-normal leading-relaxed backdrop-blur-xl",
                                typeof window !== 'undefined' && window.innerWidth >= 1024 ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible" : "block"
                              )}
                            >
                              <div className="text-red-500 font-bold mb-1 flex items-center gap-2">
                                <Shield size={14} /> Разяснение
                              </div>
                              Когато тези нужди не са покрити, целият фокус на човека е насочен към оцеляване, което прави преследването на мечти почти невъзможно без външна подкрепа.
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <span className="text-white">30%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[30%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] sm:text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">
                      <div className="flex items-center gap-1.5 group relative cursor-help">
                        <button 
                          onClick={() => setActiveTooltip(activeTooltip === 'motives-2' ? null : 'motives-2')}
                          className="flex items-center gap-1.5 border-b border-dashed border-zinc-500/50 hover:text-red-500 transition-colors"
                        >
                          <span>Мотиви за развитие</span>
                          <Info size={14} className={cn("transition-colors", activeTooltip === 'motives-2' ? "text-red-500" : "text-zinc-500")} />
                        </button>
                        <AnimatePresence>
                          {(activeTooltip === 'motives-2' || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className={cn(
                                "absolute bottom-full left-0 sm:-left-4 mb-2 w-72 sm:w-80 p-4 rounded-2xl bg-[#0a1612] border border-red-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 text-zinc-200 text-xs normal-case tracking-normal font-normal leading-relaxed backdrop-blur-xl",
                                typeof window !== 'undefined' && window.innerWidth >= 1024 ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible" : "block"
                              )}
                            >
                              <div className="text-red-500 font-bold mb-1 flex items-center gap-2">
                                <Lightbulb size={14} /> Разяснение
                              </div>
                              Без стабилна основа, мечтите остават на заден план. Нашата мисия е да "прелеем" от нашите мотиви към техните базови нужди, докато те също стъпят здраво на краката си.
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <span className="text-white">15%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-zinc-500 w-[15%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter text-white mb-3 flex items-center gap-3">
                  <Heart className="text-brand w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  Християнски ценности
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Това не са просто думи, които стоят тук за украса. Това са принципите, от които се ръководя чрез вярата си и които се старая да прилагам в ежедневието си – в училище, в отношенията и в моментите, когато никой не ме гледа. Те са моят морален компас.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-10">
                {christianValues.map((val, idx) => {
                  const isExpanded = expandedValue === idx;
                  return (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="flex flex-col bg-[#0a1612]/40 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-brand/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between gap-2 sm:gap-3">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand shrink-0 mt-2" />
                          <span className="text-zinc-300 text-[13px] sm:text-base font-medium leading-tight">{val.title}</span>
                        </div>
                        <button 
                          onClick={() => setExpandedValue(isExpanded ? null : idx)}
                          className="p-1 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-brand transition-colors shrink-0"
                        >
                          <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-2 sm:pt-3 text-[11px] sm:text-xs text-zinc-400 leading-relaxed italic border-t border-white/5 mt-2 sm:mt-3">
                              <span className="text-brand not-italic font-medium mr-1">Пример:</span>
                              {val.example}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        id="timeline" 
        className="scroll-mt-32 space-y-12 sm:space-y-16 pt-12 sm:pt-32 px-4 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tighter text-white">
            Пътят ми
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-base">
            Хронология на моето развитие и ключови моменти, които ме оформиха.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-brand/20 -translate-x-1/2 hidden sm:block" />
          
          <div className="space-y-8 sm:space-y-16">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={cn(
                  "relative flex flex-col sm:flex-row items-center gap-8 sm:gap-0",
                  idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                )}
              >
                {/* Content */}
                <div className="w-full sm:w-1/2 px-4 sm:px-12">
                  <div className={cn(
                    "p-6 rounded-3xl bg-[#0a1612]/40 border border-brand/10 hover:border-brand/30 transition-all group",
                    idx % 2 === 0 ? "sm:text-right" : "sm:text-left"
                  )}>
                    <span className="text-brand font-black text-2xl sm:text-4xl mb-2 block opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">{item.desc}</p>
                    
                    {/* Lesson Box */}
                    <div className={cn(
                      "p-4 rounded-2xl bg-brand/5 border border-brand/20 text-left",
                      idx % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    )}>
                      <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-1">Урок:</p>
                      <p className="text-zinc-300 text-xs sm:text-sm italic leading-snug">
                        "{item.lesson}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 top-8 sm:top-1/2 w-4 h-4 rounded-full bg-brand border-4 border-[#020806] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,229,153,0.5)]" />
                
                {/* Spacer for the other side */}
                <div className="hidden sm:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Focus Section (Skills) */}
      <motion.section 
        id="skills" 
        className="scroll-mt-32 space-y-12 sm:space-y-16 pt-12 sm:pt-32 px-4 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tighter text-white">
            Върху какво съм фокусиран
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-base">
            Развивам умения, които ми помагат да превърна всяка идея в реалност и да бъда по-полезен за обществото.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseMove={handleMouseMove}
              className="group relative p-8 rounded-[2.5rem] bg-[#0a1612]/40 border border-brand/10 hover:border-brand/40 transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,229,153,0.06),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 group-hover:bg-brand group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,229,153,0.3)] transition-all duration-500">
                  <skill.Icon size={28} strokeWidth={1.5} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-brand transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                    {skill.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.subSkills.map((sub, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-[10px] uppercase tracking-wider font-semibold border border-white/10 group-hover:border-brand/30 group-hover:text-zinc-200 transition-colors">
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm italic text-zinc-500 leading-relaxed">
                    <span className="text-brand not-italic font-medium mr-1">Пример:</span>
                    {skill.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Visual Element */}
        <div 
          onMouseMove={handleMouseMove}
          className="relative h-[350px] sm:h-[600px] rounded-[1.5rem] sm:rounded-[3rem] bg-[#0a1612]/20 border border-brand/5 overflow-hidden flex items-center justify-center group/visual before:absolute before:inset-0 before:bg-[radial-gradient(1000px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,229,153,0.04),transparent_50%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,153,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,229,153,0.15) 1px, transparent 0)', backgroundSize: '60px 60px' }} />
          
          <motion.div 
            className="relative w-full h-full flex items-center justify-center perspective-[1200px]"
            initial={{ rotateX: 20, opacity: 0, scale: 0.8 }}
            whileInView={{ rotateX: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Central Hub */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotateY: [0, 10, -10, 0],
                boxShadow: ["0 0 20px rgba(0,229,153,0.1)", "0 0 50px rgba(0,229,153,0.3)", "0 0 20px rgba(0,229,153,0.1)"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center backdrop-blur-2xl z-20 relative group/hub"
            >
              <div className="absolute inset-0 rounded-full bg-brand/20 blur-2xl opacity-0 group-hover/hub:opacity-100 transition-opacity duration-500" />
              <div className="text-center relative z-10">
                <span className="block text-[7px] sm:text-[10px] uppercase tracking-[0.3em] text-brand font-bold mb-1">Progress</span>
                <span className="block text-lg sm:text-3xl font-bold text-white tracking-tighter">2026</span>
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {skills.map((skill, idx) => {
                const angle = (idx * (360 / skills.length)) * (Math.PI / 180);
                // Responsive radius
                const radius = windowWidth < 640 ? 100 : 180;
                
                return (
                  <div
                    key={idx}
                    className="absolute flex items-center justify-center"
                    style={{
                      transform: `rotate(${idx * (360 / skills.length)}deg) translateX(${radius}px) rotate(-${idx * (360 / skills.length)}deg)`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.15, z: 50 }}
                      whileTap={{ scale: 1.1, z: 50 }}
                      className="group/orbit relative pointer-events-auto"
                    >
                      <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl bg-[#0a1612]/95 border border-brand/20 flex items-center justify-center text-brand shadow-xl backdrop-blur-xl group-hover/orbit:border-brand group-hover/orbit:shadow-[0_0_40px_rgba(0,229,153,0.4)] transition-all duration-500 cursor-pointer overflow-hidden">
                        <div className="relative z-10 group-hover/orbit:opacity-0 transition-opacity duration-300">
                          <skill.Icon size={windowWidth < 640 ? 24 : 36} strokeWidth={1.5} />
                        </div>
                        
                        {/* Hover Overlay with Title */}
                        <div className="absolute inset-0 bg-brand flex items-center justify-center p-2 sm:p-3 opacity-0 group-hover/orbit:opacity-100 transition-all duration-300 z-20 scale-50 group-hover/orbit:scale-100">
                          <span className="text-black text-[8px] sm:text-sm font-black uppercase tracking-tighter text-center leading-[1.1] drop-shadow-sm">
                            {skill.title}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Background Rings */}
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-brand/10 -z-10" />
            <div className="absolute w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] rounded-full border border-brand/5 -z-10 animate-[pulse_10s_infinite]" />
            <div className="absolute w-[550px] h-[550px] sm:w-[680px] sm:h-[680px] rounded-full border border-brand/5 -z-10 animate-[pulse_15s_infinite] opacity-50" />
          </motion.div>
        </div>
      </motion.section>

      {/* Speech Section */}
      <motion.section 
        id="speech" 
        className="scroll-mt-32 space-y-8 sm:space-y-12 max-w-5xl mx-auto pt-12 sm:pt-32 px-4 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tighter text-white flex items-center justify-center gap-3">
            Моята първа реч
          </h2>
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
                className="absolute inset-0 w-full h-full object-cover object-[54%_25%] group-hover:scale-105 transition-transform duration-700"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1475721025505-c0a0b978438c?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex justify-between items-end">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 sm:mb-2">Презентация</p>
                  <p className="text-white font-medium text-lg sm:text-2xl tracking-tight">Споделяне на лични ценности</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-medium border border-border backdrop-blur-md"
                >
                  <Calendar size={16} />
                  26 Февруари 2026
                </motion.div>
              </div>
            </motion.div>

            <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex sm:hidden items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-xs font-medium border border-border w-fit mx-auto"
              >
                <Calendar size={14} />
                26 Февруари 2026
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl sm:text-4xl font-bold tracking-tighter text-white leading-tight text-center"
              >
                Да говоря за това, което ме изгражда
              </motion.h3>
              
              <div className="space-y-4 sm:space-y-6 text-zinc-400 leading-relaxed text-base sm:text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Застанах пред съучениците си, за да споделя своя най-силен морален компас в един шумен свят – <strong className="text-brand font-medium">моята вяра в Бог</strong>.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Въпреки първоначалното притеснение от чуждото мнение, едни конкретни думи ми дадоха увереност:
                </motion.p>
                <motion.blockquote 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="border-l-2 border-brand pl-4 sm:pl-6 py-2 text-white italic bg-brand/5 rounded-r-xl sm:rounded-r-2xl font-medium text-lg sm:text-xl"
                >
                  "Не се срамувайте от Човешкия Син, защото и Той ще се срамува от вас"
                </motion.blockquote>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Това преобърна нагласата ми. Осъзнах, че страхът е илюзия. Когато говориш искрено за ценностите си, преодоляваш собствените си бариери и печелиш уважението на хората, които наистина имат значение.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/60 border border-brand/20"
              >
                <h4 className="text-brand font-medium mb-2 sm:mb-3 flex items-center gap-2 text-lg sm:text-xl">
                  <Lightbulb size={20} className="text-brand" />
                  Основен урок
                </h4>
                <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                  Действай си по своя път и не вземай мнението на хора, които не са там, където ти искаш да бъдеш. И най-вече – <strong className="text-white font-medium">не се срамувай да говориш за неща, които те интересуват и изграждат.</strong>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          <motion.a 
            href="https://www.linkedin.com/in/presian-kisyov/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-lg">LinkedIn</h3>
              <p className="text-zinc-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1">Presiyan</p>
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
            className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-lg">Instagram</h3>
              <p className="text-zinc-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1">@p.kisyovv</p>
            </div>
          </motion.a>

          <motion.a 
            href="mailto:preskokisiov@gmail.com" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a1612]/40 border border-brand/20 hover:bg-[#0a1612]/60 transition-all group col-span-2 lg:col-span-1"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm sm:text-lg">Имейл</h3>
              <p className="text-zinc-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1 truncate max-w-[120px] sm:max-w-[150px]">preskokisiov@gmail.com</p>
            </div>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
