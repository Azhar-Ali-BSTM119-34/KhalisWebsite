import { React, useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
[];
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { pic1, pic2, pic3, pic4, pic5, pic6, pic7 } from "../assets";
const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const Experience = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          lets Witness the Importance{" "}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Why Khalis</h2>
      </div>
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt={`Experience Image ${currentImage + 1}`}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="absolute inset-0 flex justify-between items-center">
        <motion.button
          onClick={prevImage}
          className="text-white bg-yellow-500 text-lg p-4 rounded-full mt-36"
          whileHover={{ scale: 1.1 }}
        >
          {"<"}
        </motion.button>
        <motion.button
          onClick={nextImage}
          className="text-white bg-yellow-500 p-4 rounded-full mt-36"
          whileHover={{ scale: 1.1 }}
        >
          {">"}
        </motion.button>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "whykhalis");

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       // date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className="w-[60%] h-[60%] object-contain"
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//         <p
//           className="text-white text-[16px] font-semibold"
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-white-100 text-[14px] pl-1 tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <div>
//         <p className={`${styles.sectionSubText} text-center`}>
//           lets Witness the Importance{" "}
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>Why Khalis</h2>
//       </div>

//       <div className="mt-20 flex flex-col">
//         {/* <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline> */}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "whykhalis");
