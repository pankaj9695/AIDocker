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
      <div className="self-stretch  text-white mb-1 text-center text-3xl sm:text-4xl font-bold sm:leading-[56px] leading-10 tracking-tighter mt-1.5 max-md:max-w-full">
        <div className="text-xs  font-medium leading-4 tracking-widest uppercase max-md:max-w-full">
          <span className="heading-gradient ">Architecture</span>
        </div>
        AiDocker's Ecosystem: A Symphony of Features
      </div>

      <div className="self-stretch text-white text-opacity-70 text-center text-[1rem] font-[200] sm:text-[1.15rem] sm:font-[450]  leading-6 sm:leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        Our platform is rich with features that enhance your AI development
      </div>
      <motion.div
        // variants={sectionVariants}
        // initial="initial"
        // animate="animate"
        // whileInView={"animate"}
        className="w-full mx-auto mt-5 flex justify-center"
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
            <source src="/archi.mp4" type="video/mp4" />
            <source src="/archi.mov" type="video/mov" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </span>
  );
};

export default Revenue;
