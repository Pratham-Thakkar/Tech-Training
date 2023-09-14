import { useEffect, useState } from "react";
import "./LiveClock.css";

export const LiveClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);
  return (
    <>
      <div className="clock">{date.toLocaleString()}</div>
    </>
  );
};
