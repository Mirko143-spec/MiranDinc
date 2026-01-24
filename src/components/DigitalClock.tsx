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
    let hours = time.getHours();
    const minutes = time.getMinutes();

    return `${padZero(hours)}:${padZero(minutes)}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }
  return <div style={{ marginRight: "1rem" }}>{formatTime()}</div>;
}

export default DigitalClock;
