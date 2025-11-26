import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <TimeUnit value={formatNumber(timeLeft.hours)} label="Horas" />
      <span className="text-2xl sm:text-4xl font-bold text-primary animate-pulse">:</span>
      <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutos" />
      <span className="text-2xl sm:text-4xl font-bold text-primary animate-pulse">:</span>
      <TimeUnit value={formatNumber(timeLeft.seconds)} label="Segundos" />
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card border-2 border-primary rounded-xl sm:rounded-2xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px] shadow-festive">
      <span className="text-3xl sm:text-5xl font-display font-bold text-primary">{value}</span>
    </div>
    <span className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2">{label}</span>
  </div>
);
