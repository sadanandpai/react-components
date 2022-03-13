import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Scroll = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    async function getImage() {
      const img = await await fetch("https://source.unsplash.com/random/64x64?count=10", {
        headers: {
          Accept: "application/json",
        },
      });
      setImg(img);
    }

    getImage();
  }, []);

  return (
    <>
      <div className="grid grid-rows-4 grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={i}
            className="bg-red-300 w-auto h-32 m-4 rounded-md border-2"
          >
            {img.url && <img src={img.url} alt="img" className="w-full h-full" />}
          </motion.div>
        ))}
      </div>
      <h1 className="text-6xl text-center">Scroll listener</h1>
    </>
  );
};

export default Scroll;
