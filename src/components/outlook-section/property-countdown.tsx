import { useState, useEffect, memo } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
    };

    let animationFrame: number;
    const tick = () => {
      calculateTimeLeft();
      animationFrame = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(animationFrame);
  }, [targetDate]);

  return <ComponentBody days={days} minutes={minutes} hours={hours} />;
}

const ComponentBody = memo(function ComponentBodx({
  days,
  hours,
  minutes,
}: {
  days: number;
  hours: number;
  minutes: number;
}) {
  return (
    <div className="bg-[#FFA657] w-[33.5rem] h-[9.56rem] rounded-[20px] flex items-center pt-[1.25rem] flex-col mobile:w-full mobile:rounded-[0px]">
      <div className="text-22 text-white font-bold">ACCESS FOR FREE</div>
      <div className="flex gap-[2.312rem] mobile:gap-[1.56rem] items-center">
        <Count num={days} label="days" />
        <div className="w-[1px] h-[4.375rem] bg-[#F8C293E5] translate-y-3"></div>
        <Count num={hours} label="hours" />
        <div className="w-[1px] h-[4.375rem] bg-[#F8C293E5] translate-y-3"></div>
        <Count num={minutes} label="minutes" />
      </div>
    </div>
  );
});

const Count = memo(function Count({
  num,
  label,
}: {
  num: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-white relative">
      <div className="font-extrabold text-[2.93rem] mobile:text-47 w-[3rem] text-center">
        {num}
      </div>
      <div className="text-19 font-medium absolute -bottom-4">{label}</div>
    </div>
  );
});
