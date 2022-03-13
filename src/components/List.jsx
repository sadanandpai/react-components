import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  "apple",
  "banana",
  "orange",
  "pear",
  "strawberry",
  "watermelon",
  "pineapple",
  "grape",
];

const initial = { height: 0, opacity: 0 };
const animate = { height: "auto", opacity: 1 };
const exit = { height: 0, fontSize: 0, border: 0, marginBottom: -12, opacity: 1 };

const List = () => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredItems(items.filter((item) => item.includes(searchText)));
  }, [searchText]);

  return (
    <div className="text-center">
      <input
        type="search"
        className="border-2 border-grey mb-4 p-2"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex flex-col gap-y-2">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{ type: "Tween" }}
              key={item}
              className="border-2 w-40 m-auto border-blue-400"
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default List;
