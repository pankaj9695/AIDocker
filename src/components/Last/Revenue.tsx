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
    <span className="justify-center items-center self-stretch border mt-16 backdrop-blur-[6px] flex flex-col px-12 py-12 bg-white bg-opacity-10 rounded-3xl border-solid border-white border-opacity-20 max-md:px-5">
      {/* <div className="text-xl font-medium leading-4 tracking-widest uppercase  whitespace-nowrap mt-3.5">
        <span className="heading-gradient">Revenue Stream</span>
      </div> */}
      <div className="self-stretch heading-gradient text-white mb-16 text-center text-4xl font-bold leading-[56px] tracking-tighter mt-1.5 max-md:max-w-full">
        Monetize Your AI Innovations and Contributions
      </div>
      {/* <div className="self-stretch text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter mt-1 max-md:max-w-full">
        AiDocker isn't just a development platform; it's also an opportunity for
        creators to monetize their work. Whether it's by sharing unique AI
        models, contributing to our vast dataset pool, or providing GPU power in
        our DePIN network, users can earn revenue, making AiDocker a mutually
        beneficial ecosystem.
      </div> */}
      <motion.div
        // variants={sectionVariants}
        // initial="initial"
        // animate="animate"
        // whileInView={"animate"}
        className="w-full mx-auto flex justify-center"
      >
        <img src="/Group 1597877665ai-docker.png" alt="" />
        {/* <OctopusSvg /> */}
      </motion.div>
    </span>
  );
};

export default Revenue;
