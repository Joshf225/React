import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(3);
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(5);

  const newYears = "1 Jan 2024";

  function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.abs(currentDate - newYearsDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const mins = Math.abs(Math.floor(totalSeconds / 60) % 60);

    const seconds = Math.floor(totalSeconds) % 60;

    setDays(days);
    setHours(formatTime(hours));
    setMinutes(formatTime(mins));
    setSeconds(formatTime(seconds));
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  useEffect(() => {
    setTimeout(() => {
      countdown();
    }, 1000);
  });

  return (
    <>
      <div className="container">
        <h1>Until new beginnings</h1>
        <div className="counts">
          <p>
            {days} <span>days</span>
          </p>
          <p>
            {hours} <span>hours</span>
          </p>
          <p>
            {minutes} <span>minutes</span>
          </p>
          <p>
            {seconds} <span>seconds</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
