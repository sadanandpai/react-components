import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const getLSB = (num) => num.toString().padStart(2, 0)[0];
const getMSB = (num) => num.toString().padStart(2, 0)[1];

const initial = { y: 50, opacity: 0 };
const exit = { y: -50, opacity: 0 };
const animate = { y: 0, opacity: 1 };

const setNewTime = () => {
  const date = new Date();
  return {
    h1: getLSB(date.getHours()),
    h2: getMSB(date.getHours()),
    m1: getLSB(date.getMinutes()),
    m2: getMSB(date.getMinutes()),
    s1: getLSB(date.getSeconds()),
    s2: getMSB(date.getSeconds()),
  };
};

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
  const [time, setTime] = useState(setNewTime);

  useEffect(() => {
    setTimeout(setTime, 1000, setNewTime());
  }, [time]);

  return (
    <h1 className="flex text-5xl relative w-64 m-auto mt-20">
      <AnimatePresence>
        {getDigitEl(["h1", time.h1], 0)}
        {getDigitEl(["h2", time.h2], 1)}

        {getDigitEl(["x", ":"], 2)}

        {getDigitEl(["m1", time.m1], 3)}
        {getDigitEl(["m2", time.m2], 4)}

        {getDigitEl(["y", ":"], 5)}

        {getDigitEl(["s1", time.s1], 6)}
        {getDigitEl(["s2", time.s2], 7)}
      </AnimatePresence>
    </h1>
  );
};

export default Timer;
