import { useEffect, useRef, useState } from "react";

import { formatTime } from "./formatTime";
import "./styles.css";

const Timer = ({ seconds, onDone }: TimerProps) => {
  const [countDown, setCountDown] = useState<number>(0);
  const timer = useRef<number>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCountDown((t) => {
        t += 1;
        if (t == seconds) {
          clearInterval(timer.current);
          onDone();
        }
        return t;
      });
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, [onDone, seconds]);

  return (
    <div className="timer">
      <div className="timeline">
        <div className="timeline-time">{formatTime(seconds - countDown)}</div>
        <div
          className="timeline-bar"
          style={{ width: `${((seconds - countDown) / seconds) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;

interface TimerProps {
  seconds: number;
  onDone: () => void;
}
