import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const getLSB = (num) => num.toString().padStart(2, 0)[0];
const getMSB = (num) => num.toString().padStart(2, 0)[1];

const initial = { y: 50, opacity: 0 };
const exit = { y: -50, opacity: 0 };
const animate = { y: 0, opacity: 1 };

const getDigitEl = ([key, value], pos) => (
  <motion.div
    className={`absolute left-${pos * 8} flex justify-center items-center w-8 h-12`}
    initial={initial}
    exit={exit}
    animate={animate}
    key={key + value}
  >
    {value}
  </motion.div>
);

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const timeObj = useRef({});

  useEffect(() => {
    timeObj.current = {
      h1: getLSB(time.getHours()),
      h2: getMSB(time.getHours()),
      m1: getLSB(time.getMinutes()),
      m2: getMSB(time.getMinutes()),
      s1: getLSB(time.getSeconds()),
      s2: getMSB(time.getSeconds()),
    };
    setTimeout(setTime, 1000, new Date());
  }, [time]);

  return (
    <h1 className="flex text-5xl relative w-72 m-auto mt-20">
      <AnimatePresence>
        {getDigitEl(["h1", timeObj.current.h1], 0)}
        {getDigitEl(["h2", timeObj.current.h2], 1)}

        {getDigitEl(["x", ":"], 2)}

        {getDigitEl(["m1", timeObj.current.m1], 3)}
        {getDigitEl(["m2", timeObj.current.m2], 4)}

        {getDigitEl(["y", ":"], 5)}

        {getDigitEl(["s1", timeObj.current.s1], 6)}
        {getDigitEl(["s2", timeObj.current.s2], 7)}
      </AnimatePresence>
    </h1>
  );
};

export default Timer;
