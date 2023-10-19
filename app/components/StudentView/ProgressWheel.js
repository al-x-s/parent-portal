"use client";
import React from "react";
import styles from "./progressWheel.module.css";

const ProgressWheel = ({ percentage }) => {
  const [count, setCount] = React.useState(0);
  const [dash, setDash] = React.useState(472);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count == percentage) {
        clearInterval(interval);
      } else {
        setCount(count + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [count]);

  React.useEffect(() => {
    const dashValue = 510 - 510 * (percentage / 100);
    setDash(dashValue);
  });

  return (
    <div className="flex justify-center items-center p-2">
      <div className={styles.wheel}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.number}>{count}%</div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
          className={styles.svg}
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            className={styles.circle}
            cx="80"
            cy="80"
            r="70"
            // styles={{ strokeDashoffset: dash }}
            strokeDashoffset={dash}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressWheel;
