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
  const [display, setDisplay] = useState("");
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
      setDisplay(
        `${years}Y ${months}M, ${days}D ${hours}H ${minutes}M ${seconds}S`,
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [props.date]);

  return <div className="text-3xl font-bold">{display}</div>;
};

export default TimeDisplay;
