"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import OctopusSvg from "@/components/octopusSvg";

const sectionVariants = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
};

const Revenue = () => {
  return (
    // <div className="flex max-w-[941px] mx-auto justify-center flex-col items-stretch">

    // </div>
    <span className="items-start flex flex-col">
      {/* <div className="text-xl font-medium leading-4 tracking-widest uppercase  whitespace-nowrap mt-3.5">
        <span className="heading-gradient">Revenue Stream</span>
      </div> */}
      <div className="self-stretch heading-gradient text-white mb-1 text-center text-4xl font-bold leading-[56px] tracking-tighter mt-1.5 max-md:max-w-full">
        AiDocker's Ecosystem: A Symphony of Features
      </div>
      <div className="self-stretch text-white mb-6 text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter mt-1 max-md:max-w-full">
        Our platform is rich with features that enhance your AI development
      </div>
      <motion.div
        // variants={sectionVariants}
        // initial="initial"
        // animate="animate"
        // whileInView={"animate"}
        className="w-full mx-auto flex justify-center"
      >
        {/* <img src="/Group 1597877665ai-docker.png" alt="" /> */}
        {/* <OctopusSvg /> */}
        <div
          className="sm:h-[70vh] h-auto"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          <video
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            autoPlay
            muted
            loop
          >
            <source src="/ecosystem.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </span>
  );
};

export default Revenue;
