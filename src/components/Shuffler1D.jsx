import React, { useState } from "react";
import { motion } from "framer-motion";

const Shuffler1D = () => {
  const [fruits, setFruits] = useState([
    "apple",
    "banana",
    "orange",
    "pear",
    "strawberry",
    "watermelon",
    "pineapple",
    "grape"
  ]);

  const randomizeFruits = () => {
    setFruits((f) => [...f].sort(() => Math.random() - 0.5));
  };

  const getFruitEl = (fruitName) => (
    <motion.div
      key={fruitName}
      className="h-10 m-2 flex items-center p-6 rounded-lg font-bold uppercase bg-lime-200"
      layout
    >
      {fruitName}
    </motion.div>
  );

  return (
    <>
      {fruits.map((f) => getFruitEl(f))}

      <div className="text-center">
        <button onClick={randomizeFruits} className="px-4 py-2 bg-pink-400 rounded-md mt-2">
          Randomize
        </button>
      </div>
    </>
  );
};

export default Shuffler1D;
