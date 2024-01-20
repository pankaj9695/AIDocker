"use client";
import React from "react";
import { motion } from "framer-motion";
const sectionVariants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
};

const Opportunity = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      // animate="animate"
      whileInView={"animate"}
      className="items-stretch self-stretch shadow-sm bg-white bg-opacity-10 flex flex-col px-16 sm:py-12 py-6 rounded-3xl max-md:px-5"
    >
      <div className="text-xs font-medium text-center sm:text-start leading-4 tracking-widest uppercase bg-clip-text mt-3.5 max-md:max-w-full">
        <span className="heading-gradient ">Opportunity</span>
      </div>
      <div className="my-3.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <h1 className="text-white text-4xl text-center sm:text-start font-medium leading-[52px] tracking-tighter max-md:max-w-full max-md:mt-5 mt-10">
              Computational power is the backbone GPUs and data plays lead role
              in A.i
            </h1>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <p className="text-white text-opacity-70 text-xl font-[450] leading-8 tracking-tighter my-auto max-md:max-w-full max-md:mt-10">
              In this beginning era of a.i which is future of technology,
              computational for models training and our vision is to make a
              marketplace where users and developers can earn revenue for their
              data or putting their idle GPUs at work.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Opportunity;
