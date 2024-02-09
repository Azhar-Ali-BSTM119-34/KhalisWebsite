import React from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github, firstVideo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-justify text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>Our</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Our Application.</h2>

        <motion.h2
          className="text-white w-full text-center bg-sky-700 font-black md:text-[50px] sm:text-[50px] xs:text-[20px] text-[10px]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Khalis App ?
        </motion.h2>

        <AnimatePresence>
          <motion.video
            key={firstVideo}
            className="w-full h-full object-cover"
            src={firstVideo}
            autoPlay
            muted
            loop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-justify text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Witness the successful convergence of cutting-edge technology and
          meticulous craftsmanship. Our portfolio reflects a journey marked by
          precision in software development, innovative AI solutions, and
          strategic consultancy. Each project is a testament to our dedication
          to delivering high-quality, tailored solutions.
        </motion.p> */}
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "App");
