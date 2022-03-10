import React, { useState } from "react";
import { motion } from "framer-motion";

const getRandomized2DArrayWithoutRepeat = (n = 5) => {
  const numbers = [];
  for (let i = 1; i <= n * n; i++) {
    numbers.push(i);
  }
  return numbers.sort(() => Math.random() - 0.5);
};

const Shuffler2D = () => {
  const [numbers, setNumbers] = useState(getRandomized2DArrayWithoutRepeat);

  const getNumberEl = (value, key = value) => (
    <motion.div
      key={key}
      className="h-10 m-2 w-6 flex items-center justify-center p-6 rounded-lg font-bold uppercase bg-lime-200"
      layout
    >
      {value}
    </motion.div>
  );

  const randomizeNumbers = () => {
    setNumbers(getRandomized2DArrayWithoutRepeat());
  };

  return (
    <div className="text-center">
      <div className="inline-grid grid-cols-5 grid-rows-5">
        {numbers.map((f) => getNumberEl(f))}
      </div>

      <div className="text-center">
        <button onClick={randomizeNumbers} className="px-4 py-2 bg-pink-400 rounded-md mt-2">
          Randomize
        </button>
      </div>
    </div>
  );
};

export default Shuffler2D;
