import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    if (isStarted) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    if (!isStarted) {
      clearInterval(intervalRef.current);
    }
  }, [isStarted]);

  useEffect(() => {
    if (count > 59) {
      setCount(0);
      setMinute((prev) => prev + 1);
    }
  }, [count]);
  return (
    <>
      <div className="">
        <div className="tw-flex tw-text-6xl">
          <p className="tw-text-9xl">00</p>
          <p className="tw-text-9xl">:</p>
          <p className="tw-text-9xl">{minute < 10 ? `0${minute}` : minute}</p>
          <p className="tw-text-9xl">:</p>
          <p className="tw-text-9xl">{count < 10 ? `0${count}` : count}</p>
        </div>
        <div className="tw-flex tw-justify-around tw-p-4">
          <a className="tw-bg-green-200 tw-rounded-full tw-p-4 tw-cursor-pointer">
            Lap
          </a>
          {!isStarted ? (
            <a
              onClick={() => setIsStarted(!isStarted)}
              className="tw-bg-green-200 tw-rounded-full tw-p-4 tw-cursor-pointer"
            >
              Start
            </a>
          ) : (
            <a
              onClick={() => setIsStarted(!isStarted)}
              className="tw-bg-green-200 tw-rounded-full tw-p-4 tw-cursor-pointer"
            >
              Stop
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default StopWatch;
