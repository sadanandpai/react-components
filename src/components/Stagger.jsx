import React, { useState } from "react";
import { motion } from "framer-motion";

const Stagger = () => {
  const fruits = [
    "apple",
    "banana",
    "orange",
    "pear",
    "strawberry",
    "watermelon",
    "pineapple",
    "grape",
  ];

  const [state, setState] = useState("hidden");

  const getItem = (itemName, variant) => (
    <motion.li
      key={itemName}
      className="h-10 m-2 flex items-center p-6 rounded-lg font-bold uppercase bg-lime-200"
      variants={variant}
    >
      {itemName}
    </motion.li>
  );

  const reverseVariant = (e) => {
    setState((state) => (state === "hidden" ? "visible" : "hidden"));
  };

  const listVariant = {
    hidden: {
      height: "0px",
      visibility: "hidden",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    visible: {
      height: "100%",
      visibility: "visible",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -250 },
  };

  return (
    <>
      <div className="text-center">
        <button onClick={reverseVariant} className="px-4 py-2 bg-pink-400 rounded-md my-2">
          Animate
        </button>
      </div>
      <motion.ul initial="hidden" animate={state} variants={listVariant}>
        {fruits.map((el) => getItem(el, itemVariant))}
      </motion.ul>
    </>
  );
};

export default Stagger;
