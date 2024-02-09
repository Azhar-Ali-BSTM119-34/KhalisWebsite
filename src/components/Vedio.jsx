import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ksabanner, ksabanner2 } from "../assets";
import "./Vedio.css";

const VideoComponent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={ksabanner}
          className="absolute inset-0 w-full h-full object-cover"
          src={ksabanner}
          alt="KSA Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          key={ksabanner2}
          className="absolute inset-0 w-full h-full object-cover fadeIn" // Add fade-in class
          src={ksabanner2}
          alt="KSA Banner"
        />
      </AnimatePresence>
    </div>
  );
};

export default VideoComponent;
