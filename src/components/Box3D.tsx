import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Coins, Award, Users, Flame, Sparkles, Heart } from 'lucide-react';

export default function Box3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [coinDropped, setCoinDropped] = useState(false);
  const [activeFace, setActiveFace] = useState<'front' | 'right' | 'back' | 'left'>('front');

  // Motion values for drag and auto-rotate
  const rotateXVal = useMotionValue(15);
  const rotateYVal = useMotionValue(45);

  const springConfig = { damping: 20, stiffness: 80, mass: 1 };
  const rotateX = useSpring(rotateXVal, springConfig);
  const rotateY = useSpring(rotateYVal, springConfig);

  // Auto-rotation effect when not hovered or active
  useEffect(() => {
    if (isHovered) return;
    
    let animationFrameId: number;
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      
      // Rotate slowly (15 degrees per second)
      const currentY = rotateYVal.get();
      rotateYVal.set((currentY + delta * 15) % 360);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Handle manual drag/swipe rotation
  const handleDrag = (_event: any, info: any) => {
    const currentX = rotateXVal.get();
    const currentY = rotateYVal.get();
    
    // Invert deltaY for natural rotation
    rotateXVal.set(Math.min(Math.max(currentX - info.delta.y * 0.5, -45), 45));
    rotateYVal.set(currentY + info.delta.x * 0.5);
    
    // Determine which face is closest to the front based on Y rotation
    const normalizedY = ((rotateYVal.get() % 360) + 360) % 360;
    if (normalizedY >= 315 || normalizedY < 45) {
      setActiveFace('front');
    } else if (normalizedY >= 45 && normalizedY < 135) {
      setActiveFace('right');
    } else if (normalizedY >= 135 && normalizedY < 225) {
      setActiveFace('back');
    } else {
      setActiveFace('left');
    }
  };

  const dropCoin = () => {
    if (coinDropped) return;
    setCoinDropped(true);
    setTimeout(() => {
      setCoinDropped(false);
    }, 1500);
  };

  // Face switching helper buttons
  const rotateToFace = (face: 'front' | 'right' | 'back' | 'left') => {
    rotateXVal.set(15);
    if (face === 'front') rotateYVal.set(0);
    if (face === 'right') rotateYVal.set(-90);
    if (face === 'back') rotateYVal.set(-180);
    if (face === 'left') rotateYVal.set(-270);
    setActiveFace(face);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center py-6 sm:py-10 max-w-5xl mx-auto w-full">
      
      {/* Interactive 3D Box Column */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 w-full max-w-[340px] sm:max-w-[400px]">
        {/* 3D Scene viewport container */}
        <div 
          className="relative w-full h-[360px] sm:h-[450px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        {/* Helper Instructions overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-[9px] sm:text-[10px] text-zinc-500 pointer-events-none uppercase tracking-widest select-none flex items-center gap-1.5 opacity-70">
          <Sparkles size={10} className="text-brand/80 animate-pulse" />
          <span>Завърти с влачене</span>
        </div>

        {/* Dropping Coin Animation */}
        {coinDropped && (
          <motion.div
            initial={{ y: -160, x: 0, scale: 0.8, opacity: 0 }}
            animate={{ 
              y: [-160, -40, -10], 
              x: [0, 5, -2, 0],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1.2, 1, 0.6],
              rotateZ: [0, 180, 360]
            }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            className="absolute z-30 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 flex items-center justify-center border-2 border-yellow-200 shadow-[0_0_20px_rgba(234,179,8,0.8)]">
              <span className="text-amber-900 font-extrabold text-xs">10</span>
            </div>
          </motion.div>
        )}

        {/* The 3D Cube wrapper */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
          onDrag={handleDrag}
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: 'preserve-3d',
            cursor: 'grab'
          }}
          whileDrag={{ cursor: 'grabbing' }}
          className="relative w-[240px] h-[320px]"
        >
          {/* CUBE FACES */}
          
          {/* 1. FRONT FACE (СПАСЕН Brand Face) */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#0a1612] to-[#020806] border-2 border-brand/60 rounded-3xl p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,229,153,0.15)] overflow-hidden"
            style={{ 
              transform: 'translateZ(120px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            {/* Glowing neon background circles inside the face */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand/10 blur-[40px] rounded-full pointer-events-none" />
            
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Училищна кутия</span>
              <div className="w-5 h-5 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-brand animate-ping" />
              </div>
            </div>

            <div className="text-center space-y-2 relative z-10">
              <h4 className="text-4xl font-black tracking-widest text-brand drop-shadow-[0_0_15px_rgba(0,229,153,0.5)]">
                СПАСЕН
              </h4>
              <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest">
                Дарителство & Навик
              </p>
            </div>

            <div className="space-y-3 relative z-10 bg-black/40 border border-white/5 p-3 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Coins size={16} className="text-brand animate-bounce" />
                <span className="text-xs font-bold text-white">Рестото ти прави разлика</span>
              </div>
              <p className="text-[10px] text-zinc-400 leading-normal">
                Постави монети от 10, 20 или 50 стотинки и виж как се променя училищната класация.
              </p>
            </div>
          </div>

          {/* 2. BACK FACE (Кауза & Смисъл) */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#0a1612] to-[#020806] border-2 border-brand/40 rounded-3xl p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,229,153,0.1)]"
            style={{ 
              transform: 'rotateY(180deg) translateZ(120px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 blur-[30px] rounded-full pointer-events-none" />
            
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand">Кауза</span>
              <Coins size={14} className="text-brand" />
            </div>

            <div className="space-y-3">
              <p className="text-white font-extrabold text-sm sm:text-base leading-snug">
                Къде отиват дарените монети?
              </p>
              <div className="space-y-2 text-[10px] sm:text-xs text-zinc-400">
                <p>❤️ Директна подкрепа за семейства и деца в реална нужда.</p>
                <p>💊 Лекарства, храна и базови нужди за уязвими групи.</p>
                <p>🤝 Изграждане на общност, която се грижи един за друг.</p>
              </div>
            </div>

            <div className="bg-brand/5 border border-brand/20 p-2.5 rounded-xl text-center">
              <p className="text-[10px] text-brand font-medium italic">
                „Тези 30 цента няма да променят твоя живот. Но ще променят нечий друг.“
              </p>
            </div>
          </div>

          {/* 3. RIGHT FACE (Динамична Класация / Геймификация) */}
          <div 
            className="absolute inset-y-0 left-1/2 w-[240px] -ml-[120px] bg-gradient-to-b from-[#0a1612] to-[#020806] border-2 border-brand/40 rounded-3xl p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,229,153,0.1)]"
            style={{ 
              transform: 'rotateY(90deg) translateZ(120px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Училищна класация</span>
              <Award size={14} className="text-brand" />
            </div>

            <div className="space-y-3">
              <h5 className="text-white text-xs font-black uppercase tracking-wider text-center text-brand">
                🏆 Лидери по постоянство
              </h5>
              
              <div className="space-y-2">
                {/* User 1 */}
                <div className="flex items-center justify-between bg-black/30 border border-brand/20 p-1.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">🥇</span>
                    <span className="text-[10px] font-bold text-white">Георги П. (11в)</span>
                  </div>
                  <div className="flex items-center gap-1 text-brand">
                    <Flame size={10} />
                    <span className="text-[10px] font-black">35 дни</span>
                  </div>
                </div>
                {/* User 2 */}
                <div className="flex items-center justify-between bg-black/20 border border-white/5 p-1.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">🥈</span>
                    <span className="text-[10px] font-bold text-zinc-300">Никол С. (10а)</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-300">
                    <Flame size={10} />
                    <span className="text-[10px] font-black">29 дни</span>
                  </div>
                </div>
                {/* User 3 */}
                <div className="flex items-center justify-between bg-black/20 border border-white/5 p-1.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">🥉</span>
                    <span className="text-[10px] font-bold text-zinc-400">Мартин И. (12б)</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Flame size={10} />
                    <span className="text-[10px] font-black">28 дни</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-zinc-500 text-center leading-normal">
              Постоянството изпреварва сумата. Ученик с 10 цента всеки ден е на върха!
            </div>
          </div>

          {/* 4. LEFT FACE (Малки Жестове) */}
          <div 
            className="absolute inset-y-0 left-1/2 w-[240px] -ml-[120px] bg-gradient-to-b from-[#0a1612] to-[#020806] border-2 border-brand/40 rounded-3xl p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,229,153,0.1)]"
            style={{ 
              transform: 'rotateY(-90deg) translateZ(120px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Силата на малкия жест</span>
              <Users size={14} className="text-brand" />
            </div>

            <div className="space-y-3">
              <p className="text-white font-extrabold text-sm leading-snug">
                Малки жестове, голяма промяна
              </p>
              <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed">
                Да отделяш по няколко стотинки всеки ден ни учи на съпричастност и грижа за другите в нашето ежедневие.
              </p>
              <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed">
                Когато цяло училище се обедини в тези малки, ежедневни жестове, резултатът е истинска подкрепа за тези, които имат най-голяма нужда.
              </p>
            </div>

            <div className="bg-white/5 p-2 rounded-xl text-[9px] text-zinc-500 italic text-center">
              "Малките жестове, правени от много хора, променят света."
            </div>
          </div>

          {/* 5. TOP FACE (With interactive coin slot) */}
          <div 
            className="absolute bg-[#0a1612] border-2 border-brand/50 flex flex-col items-center justify-center rounded-3xl"
            style={{ 
              width: '240px',
              height: '240px',
              top: '50%',
              left: '50%',
              marginTop: '-120px',
              marginLeft: '-120px',
              transform: 'rotateX(90deg) translateZ(160px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-4 select-none">
              Въведи монета тук
            </div>
            
            {/* The Physical Coin Slot */}
            <motion.button 
              onClick={dropCoin}
              whileHover={{ scale: 1.05, borderColor: '#00e599' }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-4 bg-black rounded-full border-2 border-brand/40 relative flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(0,229,153,0.1)] hover:shadow-[0_0_20px_rgba(0,229,153,0.3)] transition-all"
            >
              <div className="w-20 h-1 bg-zinc-900 rounded-full" />
              {/* Inner glow */}
              <div className="absolute inset-0 bg-brand/5 rounded-full pointer-events-none animate-pulse" />
            </motion.button>
            
            <span className="text-[8px] text-brand/70 font-semibold uppercase tracking-widest mt-3 select-none animate-pulse">
              Кликни за симулация
            </span>
          </div>

          {/* 6. BOTTOM FACE (Cube Base) */}
          <div 
            className="absolute bg-gradient-to-b from-[#050e0c] to-[#010302] border-2 border-brand/40 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,229,153,0.2)] rounded-3xl"
            style={{ 
              width: '240px',
              height: '240px',
              top: '50%',
              left: '50%',
              marginTop: '-120px',
              marginLeft: '-120px',
              transform: 'rotateX(-90deg) translateZ(160px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            {/* Tech grid markings to make it look like a physical base plate */}
            <div className="absolute inset-2 border border-white/5 flex flex-col justify-between p-3 select-none">
              <div className="flex justify-between items-center text-[6px] tracking-wider font-mono text-zinc-500 uppercase">
                <span>Model S-1</span>
                <span>Base Plate</span>
              </div>
              
              {/* Central base plate circle/connector */}
              <div className="w-16 h-16 rounded-full border border-brand/20 bg-black/40 flex items-center justify-center self-center">
                <div className="w-10 h-10 rounded-full border border-brand/15 bg-brand/5 animate-pulse flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-brand/10" />
                </div>
              </div>

              <div className="flex justify-between items-center text-[6px] tracking-wider font-mono text-zinc-500 uppercase">
                <span>Made in Bulgaria</span>
                <span>SPASEN Tech</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shadow effect on the floor underneath the 3D box */}
        <div 
          className="absolute bottom-2 w-48 h-6 bg-brand/10 blur-[20px] rounded-full pointer-events-none transform scale-y-50"
          style={{ transform: 'rotateX(80deg)' }}
        />
      </div>

      {/* Interactive coin slot trigger button placed directly underneath the 3D viewport */}
      <button
        onClick={dropCoin}
        className="w-auto max-w-[260px] h-11 px-6 mt-4 sm:mt-6 flex items-center justify-center gap-2 bg-brand text-[#0a1612] font-black rounded-full uppercase tracking-widest text-[10px] sm:text-xs shadow-[0_0_15px_rgba(0,229,153,0.3)] hover:shadow-[0_0_25px_rgba(0,229,153,0.5)] hover:bg-white transition-all active:scale-95"
      >
        <Coins size={15} className="animate-bounce" />
        Пусни виртуална монета
      </button>
    </div>

    {/* Side Content Panel explaining the 3D Box functionality */}
    <div className="flex-1 space-y-6 sm:space-y-8 text-left max-w-xl">
      <div className="space-y-3">
        <h4 className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs">Как работи проектът</h4>
        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
          Интерактивна <span className="text-brand">училищна</span> дарителска кутия
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          СПАСЕН не е просто кутия за пари. Тя е мост между традиционното благотворително дело и съвременните технологии. Инсталирана в училището, тя мотивира децата да бъдат съпричастни по иновативен и ангажиращ начин.
        </p>
      </div>

      {/* Dynamic tabs / highlights that link to rotation angles of the 3D box */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <button
          onClick={() => rotateToFace('front')}
          className={`p-4 rounded-2xl text-left border transition-all ${
            activeFace === 'front'
              ? 'bg-brand/10 border-brand text-white shadow-[0_0_15px_rgba(0,229,153,0.1)]'
              : 'bg-white/5 border-white/5 hover:bg-white/10 text-zinc-400'
          }`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className={activeFace === 'front' ? 'text-brand' : 'text-zinc-500'} size={16} />
            <span className="text-xs sm:text-sm font-bold">Училищна кутия</span>
          </div>
          <p className="text-[10px] leading-relaxed text-zinc-400">
            Две физически кутии в стола и лавката на ПМГ „Акад. Иван Гюзелев“.
          </p>
        </button>

        <button
          onClick={() => rotateToFace('right')}
          className={`p-4 rounded-2xl text-left border transition-all ${
            activeFace === 'right'
              ? 'bg-brand/10 border-brand text-white shadow-[0_0_15px_rgba(0,229,153,0.1)]'
              : 'bg-white/5 border-white/5 hover:bg-white/10 text-zinc-400'
          }`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Award className={activeFace === 'right' ? 'text-brand' : 'text-zinc-500'} size={16} />
            <span className="text-xs sm:text-sm font-bold">Класации</span>
          </div>
          <p className="text-[10px] leading-relaxed text-zinc-400">
            Геймифицирана система, награждаваща редовните дарения.
          </p>
        </button>

        <button
          onClick={() => rotateToFace('back')}
          className={`p-4 rounded-2xl text-left border transition-all ${
            activeFace === 'back'
              ? 'bg-brand/10 border-brand text-white shadow-[0_0_15px_rgba(0,229,153,0.1)]'
              : 'bg-white/5 border-white/5 hover:bg-white/10 text-zinc-400'
          }`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Coins className={activeFace === 'back' ? 'text-brand' : 'text-zinc-500'} size={16} />
            <span className="text-xs sm:text-sm font-bold">Прозрачност</span>
          </div>
          <p className="text-[10px] leading-relaxed text-zinc-400">
            Всяка монета отива директно за покриване на медицински разходи.
          </p>
        </button>

        <button
          onClick={() => rotateToFace('left')}
          className={`p-4 rounded-2xl text-left border transition-all ${
            activeFace === 'left'
              ? 'bg-brand/10 border-brand text-white shadow-[0_0_15px_rgba(0,229,153,0.1)]'
              : 'bg-white/5 border-white/5 hover:bg-white/10 text-zinc-400'
          }`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Heart className={activeFace === 'left' ? 'text-brand' : 'text-zinc-500'} size={16} />
            <span className="text-xs sm:text-sm font-bold">Малки жестове</span>
          </div>
          <p className="text-[10px] leading-relaxed text-zinc-400">
            Вдъхновяване на ежедневна емпатия и грижа у младото поколение.
          </p>
        </button>
      </div>
    </div>
    </div>
  );
}
