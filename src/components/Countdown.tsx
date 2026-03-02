import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-4 justify-center items-center text-stone-600 font-serif italic text-lg">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">{timeLeft.days}</span>
        <span className="text-xs uppercase tracking-widest opacity-60">Gün</span>
      </div>
      <span className="pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">{timeLeft.hours}</span>
        <span className="text-xs uppercase tracking-widest opacity-60">Saat</span>
      </div>
      <span className="pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">{timeLeft.minutes}</span>
        <span className="text-xs uppercase tracking-widest opacity-60">Dakika</span>
      </div>
      <span className="pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">{timeLeft.seconds}</span>
        <span className="text-xs uppercase tracking-widest opacity-60">Saniye</span>
      </div>
    </div>
  );
};
