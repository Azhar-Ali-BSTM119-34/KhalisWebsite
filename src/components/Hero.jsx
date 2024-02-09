import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import VideoComponent from "./Vedio";

import { styles } from "../styles";

const Hero = () => {
  const [words, setWords] = useState([
    "Innovation",
    "Good Health",
    "Dairy Revolution",
    "Purity",
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, [words]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 1, delay: 0.5 }}
      className={``}
    >
      <VideoComponent />
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-1 sm:h-80 h-40 grey-gradient" />
        </div>
        <div className="">
          <div>
            <p className={`${styles.heroSubText} mt-20  text-white-100`}>
              Discover Pure Goodness - Your Journey to
              <br className="sm:block hidden" />
            </p>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {/* digital */}
              <span className="text-[#FFD700]">
                <Typewriter
                  options={{
                    strings: [words[currentWordIndex]],
                    autoStart: true,
                    loop: false,
                    delay: 20,
                    deleteSpeed: 5,
                  }}
                />
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Begins Here <br className="sm:block hidden" />
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
