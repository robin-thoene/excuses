"use client";

import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addYears,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInYears,
} from "date-fns";
import { useEffect, useState } from "react";

interface ITimeDisplayProps {
  date: Date;
}
const TimeDisplay = (props: ITimeDisplayProps) => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const years = differenceInYears(now, props.date);
      const months = differenceInMonths(now, addYears(props.date, years));
      const days = differenceInDays(
        now,
        addYears(addMonths(props.date, months), years),
      );
      const hours =
        differenceInHours(
          now,
          addYears(addMonths(addDays(props.date, days), months), years),
        ) % 24;
      const minutes =
        differenceInMinutes(
          now,
          addYears(
            addMonths(addDays(addHours(props.date, hours), days), months),
            years,
          ),
        ) % 60;
      const seconds =
        differenceInSeconds(
          now,
          addYears(
            addMonths(
              addDays(addHours(addMinutes(props.date, minutes), hours), days),
              months,
            ),
            years,
          ),
        ) % 60;
      setYears(years);
      setMonths(months);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, [props.date]);

  return (
    <div className="flex flex-col text-xl font-bold items-center font-mono">
      <div>{years > 0 && `${years} Jahre`}</div>
      <div>{months > 0 && `${months} Monate`}</div>
      <div>{days > 0 && `${days} Tage`}</div>
      <div>{hours > 0 && `${hours} Stunden`}</div>
      <div>{minutes > 0 && `${minutes} Minuten`}</div>
      <div>{`${seconds} Sekunden`}</div>
    </div>
  );
};

export default TimeDisplay;
