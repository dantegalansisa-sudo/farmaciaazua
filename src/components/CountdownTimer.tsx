import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="countdown__block">
        <span className="countdown__number">{pad(timeLeft.days)}</span>
        <span className="countdown__label">Días</span>
      </div>
      <span className="countdown__sep">:</span>
      <div className="countdown__block">
        <span className="countdown__number">{pad(timeLeft.hours)}</span>
        <span className="countdown__label">Horas</span>
      </div>
      <span className="countdown__sep">:</span>
      <div className="countdown__block">
        <span className="countdown__number">{pad(timeLeft.mins)}</span>
        <span className="countdown__label">Min</span>
      </div>
      <span className="countdown__sep">:</span>
      <div className="countdown__block">
        <span className="countdown__number">{pad(timeLeft.secs)}</span>
        <span className="countdown__label">Seg</span>
      </div>
    </div>
  );
}
