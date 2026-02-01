import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    return `${padZero(hours)}:${padZero(minutes)}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }
  return <div className="mr-4">{formatTime()}</div>;
}

export default DigitalClock;
