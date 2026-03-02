import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Heart, ChevronRight } from 'lucide-react';
import { FloatingHearts } from './components/FloatingHearts';
import { Countdown } from './components/Countdown';
import { REASONS, Reason } from './constants';

export default function App() {
  const [openedDays, setOpenedDays] = useState<number[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);
  const [revealedMessage, setRevealedMessage] = useState(false);

  // Target date for the final surprise
  const finalDate = new Date('2026-03-09T19:30:00');

  useEffect(() => {
    const saved = localStorage.getItem('opened_reasons');
    if (saved) {
      setOpenedDays(JSON.parse(saved));
    }

    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleOpen = (id: number, isLocked: boolean) => {
    if (isLocked) return;
    if (!openedDays.includes(id)) {
      const newOpened = [...openedDays, id];
      setOpenedDays(newOpened);
      localStorage.setItem('opened_reasons', JSON.stringify(newOpened));
    }
  };

  const isDayLocked = (date: Date) => {
    return currentTime < date;
  };

  return (
    <div className="relative min-h-screen py-20 px-6 sm:px-8">
      <div className="atmosphere" />
      <FloatingHearts />
      
      <div className="relative z-10 max-w-xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="h-px w-12 bg-rose-200 self-center" />
            <Heart className="mx-4 text-rose-300" size={20} strokeWidth={1.5} />
            <div className="h-px w-12 bg-rose-200 self-center" />
          </div>
          
          <h1 className="romantic-heading text-5xl sm:text-7xl text-stone-900 mb-6 leading-tight">
            Seni Sevmem İçin <br />
            <span className="text-rose-400">6 Sebep</span>
          </h1>
          
          <p className="small-caps mb-10">
            9 Mart’a kadar her gün bir sebep
          </p>
          
          <div className="glass-card py-6 px-8 rounded-3xl inline-block">
            <Countdown targetDate={new Date('2026-03-09T00:00:00')} />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="space-y-12 mb-24">
          {REASONS.map((reason, index) => {
            const isLocked = isDayLocked(reason.date);
            const isOpened = openedDays.includes(reason.id);
            
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className={`
                  relative group transition-all duration-700
                  ${isLocked ? 'opacity-50 grayscale-[0.5]' : 'opacity-100'}
                `}
              >
                {/* Decorative Number Background */}
                <div className="absolute -left-8 -top-8 text-9xl font-serif font-black text-rose-100/40 select-none pointer-events-none">
                  0{reason.id}
                </div>

                <div 
                  className={`
                    relative z-10 overflow-hidden rounded-[2rem] transition-all duration-500 glass-card
                    ${isOpened ? 'p-10 sm:p-12' : 'p-8 cursor-pointer hover:translate-y-[-4px] hover:shadow-xl hover:shadow-rose-200/20'}
                  `}
                  onClick={() => handleOpen(reason.id, isLocked)}
                >
                  {isLocked ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-300">
                          <Lock size={16} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="small-caps mb-1">Kilitli</p>
                          <h3 className="romantic-heading text-2xl text-stone-400">
                            {reason.date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <AnimatePresence mode="wait">
                      {isOpened ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between">
                            <span className="small-caps text-rose-400">Sebep #{reason.id}</span>
                            <Heart size={14} className="text-rose-200" fill="currentColor" />
                          </div>
                          
                          <h3 className="romantic-heading text-3xl sm:text-4xl text-stone-900 leading-snug">
                            {reason.title}
                          </h3>
                          
                          <div className="h-px w-16 bg-rose-100" />
                          
                          <p className="text-stone-600 text-lg leading-relaxed font-light whitespace-pre-line">
                            {reason.content}
                          </p>
                          
                          {reason.id === 6 && (
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 }}
                              className="pt-12 mt-12 border-t border-rose-50 text-center"
                            >
                              <p className="romantic-heading text-3xl text-stone-800 mb-8 italic">
                                Gerçek hediyen ekranda değil.
                              </p>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowFinalSurprise(true);
                                }}
                                className="group relative px-10 py-4 bg-stone-900 text-white rounded-full font-medium overflow-hidden transition-all hover:pr-14"
                              >
                                <span className="relative z-10">Hazırım 🤍</span>
                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={18} />
                              </button>
                            </motion.div>
                          )}
                        </motion.div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-400">
                              <Heart size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="small-caps text-rose-400 mb-1">Açılmaya Hazır</p>
                              <h3 className="romantic-heading text-2xl text-stone-800">
                                {reason.id}. Sebep
                              </h3>
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-rose-100 flex items-center justify-center text-rose-300 group-hover:bg-rose-50 transition-colors">
                            <ChevronRight size={18} />
                          </div>
                        </div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Surprise Overlay */}
        <AnimatePresence>
          {showFinalSurprise && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="max-w-md w-full bg-white rounded-[2.5rem] p-12 shadow-2xl text-center space-y-10 relative overflow-hidden"
              >
                {/* Decorative background for modal */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />
                
                {!revealedMessage ? (
                  <>
                    <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-400">
                      <Heart size={44} fill="currentColor" strokeWidth={1} />
                    </div>
                    <div className="space-y-4">
                      <h2 className="romantic-heading text-4xl text-stone-900">Son Bir Şey...</h2>
                      <p className="text-stone-500 font-light leading-relaxed">
                        Bu 6 gün sadece bir başlangıçtı. <br />
                        Asıl sürpriz için hazır mısın?
                      </p>
                    </div>
                    <button
                      onClick={() => setRevealedMessage(true)}
                      className="w-full py-5 bg-rose-400 text-white rounded-2xl font-semibold shadow-xl shadow-rose-200 hover:bg-rose-500 transition-all active:scale-[0.98]"
                    >
                      Görmek İstiyorum
                    </button>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-10"
                  >
                    <div className="space-y-6">
                      <p className="romantic-heading text-4xl text-stone-900 leading-tight">
                        "Bu akşam iftarda, <br />
                        gözlerinin içine bakarken <br />
                        asıl sürprizi göreceksin."
                      </p>
                      <div className="h-px bg-rose-100 w-16 mx-auto" />
                      <p className="small-caps text-rose-500 !opacity-100">
                        Saat 19:30’da seni almaya geliyorum.
                      </p>
                    </div>
                    
                    <button
                      onClick={() => {
                        setShowFinalSurprise(false);
                        setRevealedMessage(false);
                      }}
                      className="text-stone-400 text-xs uppercase tracking-widest hover:text-stone-600 transition-colors"
                    >
                      Kapat
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="text-center space-y-8 pb-20">
          <div className="h-px w-8 bg-stone-200 mx-auto" />
          <div className="space-y-2">
            <p className="small-caps">
              Sonsuza Dek 🤍
            </p>
            <button 
              onClick={() => {
                localStorage.removeItem('opened_reasons');
                window.location.reload();
              }}
              className="text-[10px] text-stone-300 hover:text-stone-400 transition-colors uppercase tracking-widest"
            >
              İlerlemeyi Sıfırla
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
