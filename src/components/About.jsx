import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  milkSplash,
  buffaloMilk,
  camelMilk,
  ChatterCheese,
  cowMilk,
  Butter,
  goatMilk,
  milk,
  MozrellaCheese,
  desiGhee,
  aboutPic,
} from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[350px] xs:h-[450px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="relative w-full bg-opacity-60  bg-blue-700 backdrop-filter backdrop-blur-3xl border-x-sky-600 rounded-lg shadow-lg border-opacity-30 border-black p-6 hover:transform hover:scale-105 hover:bg-opacity-80 transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${milkSplash})`, // Replace with the actual path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-50 h-50 object-contain"
        />

        <h3 className="text-black text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us .</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0, 0)}
        className="flex flex-col sm:flex-row justify-center items-center mt-4 max-w-full"
      >
        <motion.p className="text-blue-900 text-[17px] text-justify max-w-full sm:max-w-[66%] leading-[30px] mb-4 sm:mb-0 sm:mr-8">
          "Khalis stands as a pioneering initiative, generously funded by the
          Ministry of IT, on a dedicated mission to redefine purity within the
          dairy industry. In response to the prevalent challenges surrounding
          milk quality, Khalis is steadfast in its commitment to providing
          unadulterated, high-quality dairy products. Our range includes pure
          milk, butter, Desi Ghee, and other dairy offerings sourced directly
          from meticulously categorized milking animals such as cows, buffaloes,
          camels, and goats. We are driven by a vision to revolutionize the
          dairy landscape by ensuring authenticity, transparency, and
          uncompromised quality in every product we deliver."
        </motion.p>

        <motion.img
          src={aboutPic}
          alt="Description Image"
          className="w-full h-auto sm:w-1/3"
        />
      </motion.div>
      {/* <div>
        <h2 className={styles.sectionHeadText}>Products</h2>
      </div> */}
      {/* <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
